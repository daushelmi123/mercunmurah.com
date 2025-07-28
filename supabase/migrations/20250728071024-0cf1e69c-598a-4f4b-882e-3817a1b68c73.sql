-- Fix database function security warnings by adding search_path parameter

-- Update generate_order_number function
CREATE OR REPLACE FUNCTION public.generate_order_number()
 RETURNS text
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
DECLARE
  new_number TEXT;
  date_prefix TEXT;
BEGIN
  date_prefix := 'ORD' || TO_CHAR(NOW(), 'YYYYMMDD');
  
  SELECT date_prefix || LPAD((
    COALESCE(
      MAX(SUBSTRING(order_number FROM LENGTH(date_prefix) + 1)::INTEGER), 0
    ) + 1
  )::TEXT, 4, '0')
  INTO new_number
  FROM public.orders 
  WHERE order_number LIKE date_prefix || '%';
  
  RETURN new_number;
END;
$function$;

-- Update update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Update set_order_number function
CREATE OR REPLACE FUNCTION public.set_order_number()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
  IF NEW.order_number IS NULL OR NEW.order_number = '' THEN
    NEW.order_number := generate_order_number();
  END IF;
  RETURN NEW;
END;
$function$;

-- Update update_customer_order_history function
CREATE OR REPLACE FUNCTION public.update_customer_order_history()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
  -- Update customer's order history with new order ID
  UPDATE public.customers 
  SET order_history = array_append(COALESCE(order_history, '{}'), NEW.order_number)
  WHERE email = NEW.customer_email;
  
  RETURN NEW;
END;
$function$;
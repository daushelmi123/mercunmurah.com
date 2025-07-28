-- Add items column to orders table (JSON format for easy viewing)
ALTER TABLE public.orders ADD COLUMN items JSONB;

-- Add order_history column to customers table (array of order IDs)
ALTER TABLE public.customers ADD COLUMN order_history TEXT[] DEFAULT '{}';

-- Create function to update customer order history
CREATE OR REPLACE FUNCTION update_customer_order_history()
RETURNS TRIGGER AS $$
BEGIN
  -- Update customer's order history with new order ID
  UPDATE public.customers 
  SET order_history = array_append(COALESCE(order_history, '{}'), NEW.order_number)
  WHERE email = NEW.customer_email;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update customer order history
CREATE TRIGGER update_customer_order_history_trigger
  AFTER INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION update_customer_order_history();
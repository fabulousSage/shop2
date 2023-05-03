import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { CheckoutForm } from "../components/CheckoutForm";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  /*
  const handleCheckoutSubmit = async (formData: any) => {
    // Here, you can add your own code to handle the form submission.
    // This is where you would typically integrate with a payment gateway,
    // create an order, and update your database.
    // Once the checkout is complete, set checkoutComplete to true to
    // display the confirmation page.
    setCheckoutComplete(true);
    clearCart();
  };

  if (checkoutComplete) {
    return <Redirect to="/confirmation" />;
  }
  */
  
  
  /*const handleCheckoutSubmit = async (formData: OrderData) => {
  try {
    // Make a POST request to the /api/orders endpoint to create a new order
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    // Clear the cart
    clearCart();

    // Set checkoutComplete to true to display the confirmation page
    setCheckoutComplete(true);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Your cart contains:</p>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity} x {item.price})
              </li>
            ))}
          </ul>
          <CheckoutForm onSubmit={handleCheckoutSubmit} />
        </>
      )}
    </div>
  );
};

export default Checkout;
*/







import { useEffect } from "react";
import OrderSummaryBox from "../../components/OrderSummary/OrderSummary";
import Paystack from "./paystack";

const Checkout = () => {
  useEffect(() => {
    // Set the title of the page
    document.title = "Checkout | My Site Name";
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/2 md:mr-8">
          {/* Your checkout form component */}
        </div>
        <div className="md:w-1/2">
          <OrderSummaryBox />
        </div>
      </div>
      <Paystack />
    </div>
  );
};

export default Checkout;



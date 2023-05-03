/*import { useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "../hooks/useCart";

interface CheckoutProps {
  onSubmit: (values: CheckoutFormData) => void;
}

interface CheckoutFormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

const Checkout = ({ onSubmit }: CheckoutProps) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  const { cartItems, total } = useCart();

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    router.push("/confirmation");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
            <span>{item.price}</span>
          </div>
        ))}
        <div>
          <strong>Total:</strong>
          <span>{total}</span>
        </div>
      </div>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default Checkout;
*/

/*
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
  const router = useRouter();
  const { cartItems, totalPrice } = useCart();

 /* const handleCheckout = () => {
    // Perform any necessary actions to process the order, such as sending data to a server or API
    // If the order is successfully processed, redirect the user to the confirmation page
    router.push('/confirmation');
  };
  */
 
/*
type CheckoutFormData = {
  name: string;
  email: string;
  address: string;
};

const handleCheckout = async (
  formData: CheckoutFormData,
  cartItems: CartItem[],
  total: number
) => {
  try {
    // create the order object
    const order: Order = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      cartItems: cartItems,
      total: total,
      createdAt: new Date(),
      status: 'pending',
    };

    // send the order to the server for processing
    const response = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error placing order.');
    }

    // clear the cart
    useCart.clearCart();

    // redirect to the confirmation page
    const router = useRouter();
    router.push('/confirmation');
  } catch (error) {
    console.error(error);
  }
};


  return (
    <Layout>
      <Head>
        <title>Checkout | CoshStores</title>
      </Head>
      <div className="container">
        <h1 className="text-center my-5">Checkout</h1>
        {cartItems.length > 0 ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-end mb-3">
              <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
*/


import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

type CheckoutFormData = {
  email: string;
  amount: number;
};

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const [isLoading, setIsLoading] = useState(false);
  
  
const onSubmit = async (formData: CheckoutFormData) => {
  setIsLoading(true);

  try {
    // Send checkout request to API
    const response = await axios.post('/api/checkout', {
      email: formData.email,
      amount: calculateTotal(cartItems),
    });

    // Redirect to payment authorization URL
    window.location.href = response.data.url;
  } catch (error) {
    console.error(error);

    // Display error message to user
    setError('Failed to process payment');
    setIsLoading(false);
  }
};



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
        />
        {errors.email && <p>Email is required</p>}
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          {...register('amount', { required: true, min: 100 })}
        />
        {errors.amount?.type === 'required' && <p>Amount is required</p>}
        {errors.amount?.type === 'min' && (
          <p>Amount must be at least ₦100</p>
        )}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Pay with Paystack'}
      </button>
    </form>
  );
};

export default CheckoutForm;

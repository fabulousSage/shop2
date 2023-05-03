import { useCart } from "../hooks/useCart";

const Confirmation = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h1>Confirmation</h1>
      <p>Your order has been received.</p>
      <p>Your order contains:</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity} x {item.price})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Confirmation;

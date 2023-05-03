import { useState } from 'react';

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
}

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="address">Address</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} />

      <label htmlFor="city">City</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />

      <label htmlFor="country">Country</label>
      <input type="text" name="country" value={formData.country} onChange={handleChange} />

      <label htmlFor="postalCode">Postal Code</label>
      <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;

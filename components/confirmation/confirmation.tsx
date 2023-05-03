import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { useCart } from '../hooks/useCart';

const Confirmation = () => {
  const router = useRouter();
  const { clearCart } = useCart();

  const handleReturnHome = () => {
    router.push('/');
  };

  return (
    <Layout>
      <Head>
        <title>Confirmation | CoshStores</title>
      </Head>
      <div className="container">
        <h1 className="text-center my-5">Thank you for your order!</h1>
        <p className="text-center mb-5">
          Your order has been successfully processed and will be shipped soon.
        </p>
        <div className="d-flex justify-content-center mb-5">
          <button className="btn btn-primary" onClick={handleReturnHome}>
            Return to Home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import apiClient from '../lib/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const test = await stripe?.createPaymentMethod({
      type: 'card',
      card: elements?.getElement(CardElement),
    } as any);

    if (!test?.error) {
      console.log('Stripe 23 | token generated!', test?.paymentMethod);
      try {
        const x = test?.paymentMethod as any;
        const response = await apiClient.post('/stripe/charge', {
          amount: 1,
          id: x?.id as any,
        });

        console.log('Stripe 35 | data', response.data.success);
        toast.success('Ödeme işlemi başarılı!');
        router.push('/');
        // }
      } catch (error) {
        toast.error('Ödeme işlemi gerçekleştirilemedi. Lütfen tekrar deneyiniz!');
        console.log('CheckoutForm.js 28 | ', error);
      }
    } else {
      // console.log(error.message);
      toast.error('Ödeme işlemi gerçekleştirilemedi. Lütfen tekrar deneyiniz!');
    }
  };

  return (
    <form className="h-full w-full container mx-auto max-w-[480px] p-10" onSubmit={handleSubmit}>
      <CardElement />
      <button>Submit</button>
    </form>
  );
};

export default Payment;

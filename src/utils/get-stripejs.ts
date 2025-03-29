import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null> | null = null;

const getStripe = () => {
  if (!stripePromise) {
    // Only load Stripe when needed and ensure we have the key
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (key) {
      stripePromise = loadStripe(key);
    } else {
      console.error('Stripe publishable key is missing');
      return Promise.resolve(null);
    }
  }
  return stripePromise;
};

export default getStripe;

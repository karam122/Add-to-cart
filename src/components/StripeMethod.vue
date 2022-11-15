<template>
    <div>
      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      />
      <button @click="submit">Pay now!</button>
    </div>
  </template>
  
  <script>
  import { StripeCheckout } from '@vue-stripe/vue-stripe';
  export default {
    name:'StripeMethod',
    components: {
      StripeCheckout,
    },
    data () {
      this.publishableKey = "pk_test_51LxRLqKBMiYOqGAB3zvbc3HPFknPtCIOBvVRvboxBe42AiPno0WLezUVOatb8fJHuVygSFt58PNHTKs7uTIPsYFP00oYoTVt8Q";
      return {
        loading: false,
        lineItems: [
          {
            price: 'price_1LxRXMKBMiYOqGABK4kUkPtG', // The id of the one-time price you created in your Stripe dashboard
            quantity: 1,
          },
        ],
        successURL: 'http://localhost:8080/success',
        cancelURL: 'http://localhost:8080/error',
      };
    },
    methods: {
      submit () {
        // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();
      },
    },
  };
  </script>
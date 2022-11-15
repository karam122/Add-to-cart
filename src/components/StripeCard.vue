<template>
 <div style="margin:auto;width: 20%;">
    <h1>Stripe</h1>
  <label>Card</label>
  <div id="card-number-element"></div>
  <br />
  <label>Card-Expiry</label>
  <div class="mt-2"  id="card-expiry-element"></div>
  <label class="mt-3">Card-CVC</label>
  <div class="mt-2" id="card-cvc-element"></div>

  <label class="mt-3">Card-Postal</label>
  <div class="mt-2" id="card-zipCode-element"></div>


  <div class="">
    <button class="btn btn-success mt-5 me-3" @click="placeOrderButtonPressed">
      PlaceOrder
    </button>
  </div>
 </div>
 

  
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  name: "StripeCard",
  data() {
    return {
        amount:0,
      stripe: null,
      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null,
      cardPostalCodeElement: null,
    };
  },
  mounted() {
    this.stripe = Stripe("pk_test_51LxRLqKBMiYOqGAB3zvbc3HPFknPtCIOBvVRvboxBe42AiPno0WLezUVOatb8fJHuVygSFt58PNHTKs7uTIPsYFP00oYoTVt8Q");
    this.createAndMountFormElement();
        this.amount = localStorage.getItem('TotalPrice')

  },
  methods: {
    createAndMountFormElement() {
      var elements = this.stripe.elements();

      this.cardNumberElement = elements.create("cardNumber");
this.cardNumberElement.mount("#card-number-element");

this.cardExpiryElement=elements.create("cardExpiry");
this.cardExpiryElement.mount("#card-expiry-element");

this.cardCvcElement=elements.create("cardCvc");
this.cardCvcElement.mount("#card-cvc-element");

this.cardPostalCodeElement=elements.create("postalCode");
this.cardPostalCodeElement.mount("#card-zipCode-element");


    },
    placeOrderButtonPressed(){
        this.stripe.createToken(this.cardNumberElement,this.cardCvcElemen).then(result => {
    if (result.error) {
       this.stripeValidationError = result.error.message;
    } else {
          var stripeObject = {
               amount: this.amount,
               source: result.token
           }
           console.log("Result is : ", stripeObject)
        //   this.saveDataToFireStore(stripeObject)
    }
});
    }
    
  },
};
</script>

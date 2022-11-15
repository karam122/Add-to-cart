<template>
    <div class="container">
        <div class="row">
            <div class="col col-md-8">
                <div class="card m-5 " v-for="product in cartData" :key="product.id" style="max-width: 100%">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product.images" class="img-fluid mt-4"  :alt="product.title">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">{{product.description.slice(0,80)}}...</p>
        <p class="card-text">Price: ${{product.price}}</p>
        <div class="d-flex align-items-center justify-content-start">
            <h6>Quantity:</h6>
            <button type="button" @click="reduceQty(product.id)" class="btn btn-success p-1 ms-5 me-4">Dec</button>
        <h4>{{ product.qty }}</h4>
        <button type="button" @click="addQty(product.id)" class="btn btn-success p-1 ms-4">Inc</button>
        </div>
        <h4 class="card-text mt-3 mb-2">Total: ${{(product.price*product.qty)}}</h4>
      </div>
      
    </div>
   
  </div>
</div>
<div class="d-flex align-items-center justify-content-evenly">
  
            <button type="button" @click="this.$router.push('/')" class="btn btn-lg btn-block btn-success p-2 me-5">Back To Home</button>


            <div>
      <!-- <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      /> -->
      <!-- <button @click="submit">Pay now!</button> -->
      <button @click="this.$router.push('/card')" class="checkout-btn btn btn-lg btn-block btn-success mb-3"  
    >Pay now
      
    </button>
    </div>

           

</div>
            </div>
            <div class="col col-md-4">
              <div class="card m-5 " style="max-width: 100%">
                <div class="card-body mt-2">
                  <h5 class="text"><span>Total:------------- ${{ totalPrice.toLocaleString() }}</span></h5>
                  <hr class="hr"  />
                  <h5 class="text"><span>Discount:---------- ${{ "10%" }}</span></h5>
                  <hr class="hr"  />
                  <h5 class="text"><span>Tax:----------------- ${{ "7%" }}</span></h5>
                  <hr class="hr"  />
                  <h5 class="text"><span>Shipping:------------- ${{ "4%" }}</span></h5>
                  <hr class="hr"  />
                  <h5 class="text bg-success rounded text-white p-2 mb-2 mt-4"><span>Sub-Total: ${{ subtotalPrice.toLocaleString()  }}</span></h5>
                </div>
                
                </div>

            </div>
          

        </div>
        
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
// import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
    name:'CheckOut',
    // components: {
    //   StripeCheckout,
    // },
    data() {
      // this.publishableKey = "pk_test_51LxRLqKBMiYOqGAB3zvbc3HPFknPtCIOBvVRvboxBe42AiPno0WLezUVOatb8fJHuVygSFt58PNHTKs7uTIPsYFP00oYoTVt8Q";
    return {
      isProcessing: false,
      orderPlaced: false,
      loading: false,
      // amount: subtotalPrice.toLocaleString(),
        // lineItems: [
        //   {
        //     price: 'price_1LxRXMKBMiYOqGABK4kUkPtG', // The id of the one-time price you created in your Stripe dashboard
        //     quantity: 1,
        //   },
        // ],
        // successURL: 'http://localhost:8080/success',
        // cancelURL: 'http://localhost:8080/error',
    };
  },
  computed: {
    ...mapGetters(["cartData"]),
    totalPrice() {
      return this.cartData.reduce((a, b) => a + b.qty * b.price, 0);
    },

    subtotalPrice(){
      return this.cartData.reduce((a,b)=> a + (b.qty * b.price + 200 + 50)-200, 0) 
    },  
  },
  methods: {
    ...mapActions(["removeItemFromCart", "addQty", "reduceQty", "emptyCart"]),
    placeOrder() {
      // this.isProcessing = true;
      this.$route.push('/card')
      // this.$refs.checkoutRef.redirectToCheckout();
      setTimeout(() => {
        // this.isProcessing = false;
        // this.orderPlaced = true;
        this.emptyCart();
      }, 1000);
    },

  
}
}
</script>

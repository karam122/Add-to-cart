<template>
    <div class="container ">
        <div class="row mt-5 justify-content-center">
            
                <div class="card w-25 m-2 d-inline-block " v-for="product in getProducts" :key="product.id" style="width: 18rem;">
  <img :src="product.images" class="card-img-top p-3" :alt="product.title" />
  <div class="card-body">
    <h5 class="card-title">{{product.title}}</h5>
    <p class="card-text">{{product.description.slice(0,60)}}...</p>
    <p class="card-text">Price: ${{product.price}}</p>
    <div class="d-flex justify-content-center">
        <button to="#" class="btn btn-primary">Buy Now</button>
        <button @click="addItemToCart(product)" class="btn btn-primary ms-3">Add To Cart</button>
        
    </div>
  </div>
</div>
            
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions } from 'vuex'
export default {
    name:'HomePage',
    // data(){
    //     return {
    //         getProduct:[]
    //     }
    // },
    computed:{
...mapGetters(['getProducts'])
    },
    methods: {
   ...mapActions(['addItemToCart'])
  },

}

</script>

<style scoped>
h1{
    margin-top: 40px;
}
img{
    width: 300px;
    height: 250px;
}

</style>
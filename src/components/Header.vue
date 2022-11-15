<template>
    <div class="countainer">
        <div class="row mt-3">
            <div class="col">
                <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li> 
      </ul>
      <form class="d-flex align-items-center justify-contant-center">
        <router-link to="/check-out" style="cursor:pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart3 me-5" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span class="cart-badge badge rounded-pill bg-success">
  {{totalQty}}
  </span></router-link>
        <button class="btn btn-success" type="button">Log Out</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    
</template>

<script>
import {mapGetters } from 'vuex'
export default {
    name:'NavHeader',
    computed: {
    ...mapGetters(["cartData"]),
    totalQty() {
      return this.cartData.reduce((a, b) => a + b.qty, 0); 
    },
    
  },
}

</script>

<style scoped>
.cart-badge{
    position: relative;
    right: 61px;
    bottom: 18px;
}

</style>
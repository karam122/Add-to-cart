import data from '../assets/data'

const Products = {
    state:{
        data:data,
        cart:[],
    },
    getters:{
        getProducts:(state)=>{
            return state.data
        },
        cartData:(state)=>{
          let TotalPrice = state.cart.reduce((a,b)=> a + (b.qty * b.price + 200 + 50)-200, 0)
          localStorage.setItem('TotalPrice',TotalPrice)
            return state.cart  
            
        }
    },
    mutations:{
        addToCart(state,item){
        const productInCart = state.cart.find((product) => product.id === item.id);
        if (!productInCart) {
          state.cart.push({ ...item, qty: 1 });
        } else {
          productInCart.qty++;
        }

    },

    removeFromCart(state, id) {
        state.cart = state.cart.filter((item) => item.id !== id);
      },
      addQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        productInCart.qty++;

        let TotalPrice = state.cart.reduce((a,b)=> a + (b.qty * b.price + 200 + 50)-200, 0)
        localStorage.setItem('TotalPrice',TotalPrice)
      },
      reduceQty(state, id) {
        const productInCart = state.cart.find((product) => product.id === id);
        if (productInCart.qty > 1) {
          productInCart.qty--;
          let TotalPrice = state.cart.reduce((a,b)=> a + (b.qty * b.price + 200 + 50)-200, 0)
        localStorage.setItem('TotalPrice',TotalPrice)
        } else {
          state.cart.splice(state.cart.indexOf(productInCart, 1));
        }
      },
      emptyCart(state) {
        state.cart = []
      },
        
    },
    actions:{
       
        addItemToCart(context, item) {
            context.commit("addToCart", item);
          },
          removeItemFromCart({ commit }, id) {
            context.commit("removeFromCart", id);
          },
          addQty(context, id) {
            context.commit("addQty", id);
          },
          reduceQty(context, id) {
            context.commit("reduceQty", id);
          },
          emptyCart(context) {
            context.commit("emptyCart");
          }
    }
}

export default Products;
class CartController {
   constructor(Carts = []) {
      Carts = JSON.parse(localStorage.getItem('Carts')) || [];
      this.Carts = Carts;
   }

   get getCarts() {
      return this.Carts;
   }

   add(cart) {
      let indexTemp = -1;
      const temp = this.Carts.find((item, index) => {
         if (Number(item.product._id) === Number(cart.product._id)) indexTemp = index;
         return Number(item.product._id) === Number(cart.product._id);
      });

      if (indexTemp != -1) {
         this.Carts[indexTemp].qty = Number(this.Carts[indexTemp].qty) + Number(cart.qty);
         if (this.Carts[indexTemp].qty > 10) {
            this.Carts[indexTemp].qty = 10;
         }
         this.Carts[indexTemp].detail = cart.detail;
      } else {
         this.Carts.push(cart);
      }
      localStorage.setItem('Carts', JSON.stringify(this.Carts));
   }

   plusQty(cartID) {
      // let indexTemp = -1;

      // const temp = this.Carts.filter((item, index) => {
      //    indexTemp = index;
      //    console.log(Number(item.product._id));
      //    return Number(item.product._id) === Number(cartID);
      // });
      // if (temp.length === 1 && indexTemp != -1) {
      this.Carts[cartID].qty++;
      if (this.Carts[cartID].qty > 10) {
         this.Carts[cartID].qty--;
      }
      localStorage.setItem('Carts', JSON.stringify(this.Carts));
      // } else {
      //    console.log('No find Carts');
      // }
   }

   minusQty(cartID) {
      // let indexTemp = -1;

      // const temp = this.Carts.filter((item, index) => {
      //    indexTemp = index;
      //    return Number(item.product._id) === Number(cartID);
      // });
      // if (temp.length === 1 && indexTemp != -1) {
      this.Carts[cartID].qty--;
      if (this.Carts[cartID].qty <= 0) {
         this.delete(cartID);
      }
      localStorage.setItem('Carts', JSON.stringify(this.Carts));
      // } else {
      //    console.log('No find Carts');
      // }
   }

   update() {}

   delete(cartID) {
      if (this.Carts.length === 1) this.Carts.splice(0, 1);
      else this.Carts.splice(cartID, cartID);
      localStorage.setItem('Carts', JSON.stringify(this.Carts));
   }

   find(cartID) {
      return this.Carts.filter((item) => Number(item.product._id) !== Number(cartID));
   }
}

export default new CartController();

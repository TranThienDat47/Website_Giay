class CartController {
   constructor(Carts = []) {
      Carts = JSON.parse(localStorage.getItem('Carts')) || [];
      this.Carts = Carts;
   }

   get getCarts() {
      return this.Carts;
   }

   add(cart) {
      let indexTemp = -1,
         tempQty = 0;
      this.Carts.find((item, index) => {
         if (
            Number(item.product._id) === Number(cart.product._id) &&
            item.detail.option1.trim() === cart.detail.option1.trim() &&
            item.detail.option2.trim() === cart.detail.option2.trim()
         ) {
            indexTemp = index;
            tempQty = cart.product.qty;
         }
         return (
            Number(item.product._id) === Number(cart.product._id) &&
            item.detail.option1.trim() === cart.detail.option1.trim() &&
            item.detail.option2.trim() === cart.detail.option2.trim()
         );
      });
      let tempIndexColor = -1;

      if (indexTemp != -1) {
         this.Carts[indexTemp].product.colors.detail.find((element, index) => {
            tempIndexColor = index;
            return element.color.trim() === cart.detail.option1.trim();
         });

         this.Carts[indexTemp].product.colors.detail[tempIndexColor].detail.find((element) => {
            tempQty = element.qty;
            return element.size.trim() === cart.detail.option2.trim();
         });

         this.Carts[indexTemp].qty = Number(this.Carts[indexTemp].qty) + Number(cart.qty);
         if (this.Carts[indexTemp].qty > tempQty) {
            this.Carts[indexTemp].qty = tempQty;
         }
         this.Carts[indexTemp].detail = cart.detail;
      } else {
         cart.product.colors.detail.find((element, index) => {
            tempIndexColor = index;
            return element.color.trim() === cart.detail.option1.trim();
         });

         cart.product.colors.detail[tempIndexColor].detail.find((element) => {
            tempQty = element.qty;
            return element.size.trim() === cart.detail.option2.trim();
         });
         if (cart.qty > tempQty) {
            cart.qty = tempQty;
         }
         this.Carts.push(cart);
      }

      localStorage.setItem('Carts', JSON.stringify(this.Carts));
   }

   plusQty(cartID) {
      let tempQty = 0;
      let tempIndexColor = -1;

      this.Carts[cartID].product.colors.detail.find((element, index) => {
         tempIndexColor = index;
         return element.color.trim() === this.Carts[cartID].detail.option1.trim();
      });

      this.Carts[cartID].product.colors.detail[tempIndexColor].detail.find((element) => {
         tempQty = element.qty;
         return element.size.trim() === this.Carts[cartID].detail.option2.trim();
      });

      if (this.Carts[cartID].qty >= tempQty) {
         this.Carts[cartID].qty = tempQty;
      } else this.Carts[cartID].qty++;
      localStorage.setItem('Carts', JSON.stringify(this.Carts));
   }

   minusQty(cartID) {
      this.Carts[cartID].qty--;
      if (this.Carts[cartID].qty <= 0) {
         this.delete(cartID);
      }
      localStorage.setItem('Carts', JSON.stringify(this.Carts));
   }

   update() {}

   delete(cartID) {
      if (cartID === 0) this.Carts.splice(0, 1);
      else this.Carts.splice(cartID, cartID);
      localStorage.setItem('Carts', JSON.stringify(this.Carts));
   }

   find(cartID) {
      return this.Carts.filter((item) => Number(item.product._id) !== Number(cartID));
   }
}

export default new CartController();

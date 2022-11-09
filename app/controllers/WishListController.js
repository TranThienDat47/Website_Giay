class WishListController {
   constructor(WishLists = []) {
      WishLists = JSON.parse(localStorage.getItem('WishLists')) || [];
      this.WishLists = WishLists;
   }

   get getWishLists() {
      return this.WishLists;
   }

   add(wishlist) {
      let flag = false;
      this.WishLists.find((element) => {
         if (Number(element._id) === Number(wishlist._id)) flag = true;
         return Number(element._id) === Number(wishlist._id);
      });

      if (!flag) {
         this.WishLists.push(wishlist);
         localStorage.setItem('WishLists', JSON.stringify(this.WishLists));
         return true;
      }
      return false;
   }

   update() {}

   deleteIndex(wishlist) {
      if (wishlist === 0) this.WishLists.splice(0, 1);
      else this.WishLists.splice(wishlist, wishlist);
      localStorage.setItem('WishLists', JSON.stringify(this.WishLists));
   }

   deleteID(wishlist) {
      this.WishLists = this.WishLists = this.WishLists.filter(
         (item) => Number(item._id) !== Number(wishlist),
      );
      localStorage.setItem('WishLists', JSON.stringify(this.WishLists));
   }

   find(wishlistID) {
      return this.WishLists.filter((item) => Number(item._id) === Number(wishlistID));
   }
}

export default new WishListController();

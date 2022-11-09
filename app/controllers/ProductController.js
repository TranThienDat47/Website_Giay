class ProductController {
   constructor(Products = []) {
      Products = JSON.parse(localStorage.getItem('Products')) || [];
      this.Products = Products;
   }

   get getProducts() {
      return this.Products;
   }

   add(product) {
      this.Products.push(product);
      localStorage.setItem('Products', JSON.stringify(this.Products));
   }

   update() {}

   delete(productID) {
      this.Products = this.Products.filter((item) => Number(item._id) !== Number(productID));
      localStorage.setItem('Products', JSON.stringify(this.Products));
   }

   find(productID) {
      return this.Products.filter((item) => Number(item._id) === Number(productID));
   }

   findAll(value) {
      return this.Products.filter(
         (item) =>
            item._id.toString().toLowerCase().search(value.toString().toLowerCase()) >= 0 ||
            item.name.toString().toLowerCase().search(value.toString().toLowerCase()) >= 0,
      );
   }
}

export default new ProductController();

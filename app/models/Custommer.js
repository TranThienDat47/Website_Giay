class Custommer {
   constructor(
      _id = Number,
      name = String,
      email = String,
      password = String,
      adress = String,
      birth = String,
      phone = String,
      cart = Array,
      list_adress = [
         {
            name: String,
            company: String,
            adress: String,
            phone: String,
         },
      ],
   ) {
      this._id = _id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.adress = adress;
      this.birth = birth;
      this.phone = phone;
      this.cart = cart;
      this.list_adress = list_adress;
   }

   get getProduct() {
      return {
         _id: this._id,
         name: this.name,
         email: this.email,
         password: this.password,
         adress: this.adress,
         birth: this.birth,
         phone: this.phone,
         cart: this.cart,
         list_adress: this.list_adress,
      };
   }

   setProduct(
      _id = Number,
      name = String,
      email = String,
      password = String,
      adress = String,
      birth = String,
      phone = String,
      cart = Array,
      list_adress = [
         {
            name: String,
            company: String,
            adress: String,
            phone: String,
         },
      ],
   ) {
      this._id = _id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.adress = adress;
      this.birth = birth;
      this.phone = phone;
      this.cart = cart;
      this.list_adress = list_adress;
   }
}

export default Custommer;

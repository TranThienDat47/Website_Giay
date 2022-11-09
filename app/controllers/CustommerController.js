class CustommerController {
   constructor(Custommers = []) {
      Custommers = JSON.parse(localStorage.getItem('Custommers')) || [];
      this.Custommers = Custommers;
   }

   get getCustommers() {
      return this.Custommers;
   }

   add(custommer) {
      this.Custommers.push(custommer);
      localStorage.setItem('Custommers', JSON.stringify(this.Custommers));
   }

   update() {}

   delete(custommerID) {
      this.Custommers = this.Custommers.filter((item) => Number(item._id) !== Number(custommerID));
      localStorage.setItem('Custommers', JSON.stringify(this.Custommers));
   }

   find(custommerID) {
      return this.Custommers.filter((item) => Number(item._id) === Number(custommerID));
   }
}

export default new CustommerController();

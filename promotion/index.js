//list slide product

function reverse(s) {
   var temp = '';
   for (var i = s.length - 1; i >= 0; i--) temp += s[i];
   return temp;
}
function numberMoney(s) {
   const tempCharacters = reverse(s);

   let newCharecters = '',
      tempCount = 0;
   for (let i = 2; i < tempCharacters.length; i += 3) {
      newCharecters += tempCharacters.substring(i - 2, i + 1) + ',';
      tempCount++;
   }
   if (newCharecters.length - tempCount < tempCharacters.length) {
      newCharecters += tempCharacters.substring(
         newCharecters.length - tempCount,
         tempCharacters.length + 1,
      );
      tempCount = 0;
   }
   return reverse(newCharecters);
}

//list drag slide
import ListDragProc from '../components/ListDragProc/index.js';
import Product from '../components/Product/index.js';
import ListProduct from '../app/controllers/ProductController.js';

const wapperListRecom = document.querySelector('.tab_content');
if (wapperListRecom) {
   let dataRecommendProc = ListProduct.getProducts.map((element) => {
      let tempNewPrice = Number(element.price.replaceAll(',', ''));

      tempNewPrice = tempNewPrice * (100 - Number(element.promotions));
      return Product({
         _id: element._id,
         name: element.name,
         price: element.price,
         color: element.colors,
         sizes: element.size,
         promotional_price: numberMoney(tempNewPrice.toString()),
         promotion_percentage: element.promotions,
         news: element.newProc,
      });
   });

   wapperListRecom.innerHTML = ListDragProc(1, dataRecommendProc);
}

// Show Hide
function showElement() {
   document.getElementById('ticket').style.display = 'block';
}

function hideElement() {
   document.getElementById('ticket').style.display = 'none';
}

document.querySelector('.close_btn').onclick = function () {
   hideElement();
};

import SlideInfinit from '../components/InfiniteSlide/index.js';

if (document.querySelector('.slide_containment')) {
   document.querySelector('.slide_containment').innerHTML = SlideInfinit(10);
}

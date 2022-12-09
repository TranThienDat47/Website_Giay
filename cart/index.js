const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function ProcView({
   _id = '-1',
   namePro = '',
   img = '',
   color = '',
   size = '',
   price = '0',
   total = '0',
   qty = '0',
}) {
   return `
        <div class="product_buy">
            <div class="media_left">
                <div class="item-img">
                    <a href="/product?id=${_id}">
                    <img
                        src="${img}"
                        alt="${namePro} (${color})"
                        onerror="this.onerror=null;this.src='https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png';"
                    />
                    </a>
                </div>
                <div class="item-remove">
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="media_right">
                <div class="item-info">
                    <h3 class="item--title">
                        ${namePro} (${color})
                    </h3>
                </div>
                <div class="item-price">
                    <p>
                    <span>${price} ₫</span>
                    </p>
                </div>
                <div class="item-size">
                    Kích thước:
                    <span>${size}</span>
                </div>
                <div class="item-sl">
                    <button id="giam_sl">-</button>
                    <h2 id="count_sl">${qty}</h2>
                    <button id="tang_sl">+</button>
                </div>
                <div class="item-total-price">
                    <div class="price">
                    <span class="line-item-total">${total} ₫</span>
                    </div>
                </div>
            </div>
        </div>
        `;
}

import ListCart from '../app/controllers/CartController.js';

const innerProc = $('.table_product_cart');

const countProc = $('.count-cart');

countProc.innerHTML =
   ListCart.getCarts.reduce((total, curValue) => {
      return Number(total + Number(curValue.qty));
   }, 0) + ' sản phẩm';

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

innerProc.innerHTML = ListCart.getCarts
   .map((element, index) => {
      const totalTemp = Number(element.qty) * Number(element.product.price.replaceAll(',', ''));

      let imgTemp;
      element.product.colors.detail.find((element1) => {
         if (element1.color === element.detail.option1) {
            imgTemp = element1.imgs.firstImg;
            return true;
         }
      });

      return ProcView({
         _id: element.product._id,
         namePro: element.product.name,
         img: imgTemp,
         color: element.detail.option1,
         size: element.detail.option2,
         price: element.product.price,
         total: numberMoney(totalTemp.toString()),
         qty: element.qty,
      });
   })
   .join('');

function totalCarts(totelCartView) {
   const totalCarts = ListCart.getCarts.reduce((total, curValue) => {
      return Number(total + Number(curValue.product.price.replaceAll(',', '') * curValue.qty));
   }, 0);

   const total = numberMoney(totalCarts.toString());

   totelCartView.innerHTML = `${total[0] === ',' ? total.replace(',', '') : total} ₫`;
}

totalCarts($('.summary-total > p > span'));

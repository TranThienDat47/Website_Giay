const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const actionCart = $('.header__action-cart .header__action-item-text');
const actionUser = $('.header__action-account .header__action-item-text');

const checkNode = (parent, children) => {
   let node = children.parentNode;
   while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
   }
   return false;
};

const headerActionCart = $('.header__action-cart');
const headerActionUser = $('.header__action-account');

window.onclick = function (e) {
   if (actionCart.classList.contains('show-triangle')) {
      if (!checkNode(headerActionCart, e.target)) {
         actionCart.classList.remove('show-triangle');
         document.body.removeEventListener('wheel', preventScroll, { passive: false });
      }
   }

   if (actionUser.classList.contains('show-triangle')) {
      if (!checkNode(headerActionUser, e.target)) {
         actionUser.classList.remove('show-triangle');
         document.body.removeEventListener('wheel', preventScroll, { passive: false });
      }
   }
};

const preventScroll = (e) => {
   e.preventDefault();
   e.stopPropagation();
};

const scroll = (e) => {
   e.stopPropagation();

   return true;
};

actionCart.onclick = () => {
   actionCart.classList.toggle('show-triangle');

   if (actionCart.classList.contains('show-triangle')) {
      document.body.addEventListener('wheel', preventScroll, { passive: false });
      $('.cart-view-scroll').addEventListener('wheel', scroll);
   } else {
      document.body.removeEventListener('wheel', preventScroll, { passive: false });
      $('.cart-view-scroll').removeEventListener('wheel', scroll, { passive: true });
   }

   if (actionUser.classList.contains('show-triangle')) {
      actionUser.classList.remove('show-triangle');
   }
};

actionUser.onclick = () => {
   actionUser.classList.toggle('show-triangle');

   if (actionUser.classList.contains('show-triangle')) {
      document.body.addEventListener('wheel', preventScroll, { passive: false });
   } else {
      document.body.removeEventListener('wheel', preventScroll, { passive: false });
   }

   if (actionCart.classList.contains('show-triangle')) {
      actionCart.classList.remove('show-triangle');
   }
};

//User
const inputUser = $$('.form__field.form__field--text');
for (let i = 0; i < inputUser.length; i++) {
   inputUser[i].onblur = () => {
      if (inputUser[i].value.length > 0) {
         inputUser[i].parentNode.children[1].style.transform = 'translateY(-5px) scale(0.8)';
      } else {
         inputUser[i].parentNode.children[1].style.transform = 'scale(1)';
      }
   };

   inputUser[i].onfocus = () => {
      if (inputUser[i].value.length <= 0) {
         inputUser[i].parentNode.children[1].style.transform = 'translateY(-5px) scale(0.8)';
      }
   };
}

//Header top bar
const topbar = $('.header__topbar');
const header = $('.header');
const headerMain = $('.header__main');

const heightTopbar = topbar.getBoundingClientRect().height;
const heightHeader = header.getBoundingClientRect().height;

let tempScroll = 0;
window.onscroll = function () {
   let curScroll = window.scrollY;
   if (curScroll <= heightHeader) {
      header.classList.remove('scroll-show');
      header.classList.remove('scroll-show-translate');
      header.style.visibility = `visible`;
      header.style.transform = `translateY(${-curScroll}px)`;

      headerMain.style.boxShadow = 'none';
      headerMain.style.transform = `translateY(0)`;
      headerMain.style.boxShadow = 'none';

      topbar.style.transform = 'translateY(0)';
   } else if (curScroll < tempScroll) {
      header.style.transform = `translateY(${-heightTopbar}px)`;
      header.classList.add('scroll-show-translate');
      header.style.visibility = `visible`;

      headerMain.style.transform = `translateY(-1px)`;
      headerMain.style.boxShadow = '0 0 10px rgb(0 0 0 / 20%)';
   } else if (curScroll > heightHeader) {
      header.classList.add('scroll-show');
      header.style.visibility = `hidden`;

      headerMain.style.transform = `translateY(calc(-100% - ${heightTopbar}px))`;
      headerMain.style.boxShadow = 'none';

      topbar.style.transform = 'translateY(calc(-100% - 1px))';
   }
   tempScroll = curScroll;
};

window.onload = () => {
   //Product
   const productSwatch = $$('.product-swatch-loop .swatch-loop-item');
   const firstImg = $$('.prod-img.first-image picture img');
   const secondeImg = $$('.prod-img.second-image picture img');

   for (let i = 0; i < productSwatch.length; i++) {
      const lengthChildren = productSwatch[i].children.length;
      for (let j = 0; j < lengthChildren; j++) {
         productSwatch[i].children[j].onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            productSwatch[i].children[j].classList.toggle('active');
            for (let k = 0; k < lengthChildren; k++) {
               if (j != k) productSwatch[i].children[k].classList.remove('active');
            }
            firstImg[i].src = 'http:' + productSwatch[i].children[j].getAttribute('data-img-first');
            secondeImg[i].src =
               'http:' + productSwatch[i].children[j].getAttribute('data-img-second');
         };
      }
   }
};

//cart

// test product

import ListProduct from './app/controllers/ProductController.js';
import Product from './app/models/Product.js';

// ListProduct.add(
//    new Product(
//       6,
//       'Giày nam',
//       'Không có gì',
//       '999,999',
//       10,
//       true,
//       { gender: 'name', type: 'Thể thao' },
//       ['39', '40'],
//       {
//          list: ['Red', 'Blue'],
//          detail: [
//             {
//                color: 'Red',
//                imgs: {
//                   firstImg:
//                      'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                   secondeImg:
//                      'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                   orthers: [
//                      'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                      'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                   ],
//                },
//                qty: 4,
//                detail: [
//                   {
//                      size: 39,
//                      qty: 4,
//                   },
//                   {
//                      size: 40,
//                      qty: 2,
//                   },
//                   {
//                      size: 44,
//                      qty: 1,
//                   },
//                   {
//                      size: 43,
//                      qty: 8,
//                   },
//                ],
//             },
//             {
//                color: 'Blue',
//                imgs: {
//                   firstImg:
//                      'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                   secondeImg:
//                      'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                   orthers: [
//                      'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                      'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                      'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                   ],
//                },
//                qty: 2,
//                detail: [
//                   {
//                      size: 35,
//                      qty: 2,
//                   },
//                ],
//             },
//          ],
//       },
//       5,
//    ),
// );

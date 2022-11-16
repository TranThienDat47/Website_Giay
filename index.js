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

//check login
let isLogin = false;

const wrapperActionUser = $(
   '.header__action-account .header__action-dropdown .header__action-dropdown_content',
);

let arr_account_local = [],
   nameUserLogin;
arr_account_local = JSON.parse(localStorage.getItem('arr_account'));
function check_login() {
   const user = JSON.parse(localStorage.getItem('current_account'));
   if (user) {
      var val_tk = user.tk;
      var val_mk = user.mk;
      for (var i = 0; i < arr_account_local.length; i++) {
         if (val_tk == arr_account_local[i].tk && val_mk == arr_account_local[i].mk) {
            isLogin = true;
            nameUserLogin = arr_account_local[i].ho + arr_account_local[i].ten;
         }
      }
   }
}

check_login();

if (isLogin) {
   $('.header__action-account .header__action-dropdown').style.width = '200px';
   wrapperActionUser.innerHTML = `
   <div class="site_account sitenav-account  sitenav-account_info " id="siteNav-account">
      <div class="site_account_panel_list">
         <div class="site_account_info">
               <div class="site_account_header">
               <h2 class="site_account_title size-small heading">Thông tin tài khoản</h2>
            </div>
            <div class="site_account_inner">
               <ul>
                  <li class="user-name"><span>${nameUserLogin}</span></li>
                  <li><a href="/account">Tài khoản của tôi</a></li>
                  <li><a href="/account/index.html?q=logout">Đăng xuất</a></li>
               </ul>
            </div>
         </div>
         
      </div>
   </div>                              
   `;
}

//login

const btnLoginForm = $('#form_submit-login');
if (btnLoginForm) {
   btnLoginForm.onclick = () => {
      const formAddCart = $('#customer_login');
      const data = new FormData(formAddCart);
      var detail = {};
      for (const [name, value] of data) {
         detail[`${name}`] = `${value}`;
      }
      dangnhap(detail.customer_email, detail.customer_password);
   };
}

function dangnhap(val_tk, val_mk) {
   if (val_mk == '' || val_tk == '' || checkEmail(val_tk) == false) {
      $('#account_incorrect').style.display = 'block';
   } else {
      for (var i = 0; i < arr_account_local.length; i++) {
         if (val_tk == arr_account_local[i].tk && val_mk == arr_account_local[i].mk) {
            localStorage.removeItem('current_account');
            localStorage.setItem('current_account', JSON.stringify(arr_account_local[i]));
            window.location.href = '/';
            return;
         }
      }
      $('#account_incorrect').style.display = 'block';
   }
}

function checkEmail(val_tk) {
   var filter = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   if (!filter.test(val_tk)) {
      return false;
   }
}

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
   if (document.body.style.overflow !== 'hidden') {
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
   }
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
            firstImg[i].src = productSwatch[i].children[j].getAttribute('data-img-first');
            secondeImg[i].src = productSwatch[i].children[j].getAttribute('data-img-second');
         };
      }
   }
};

//handle wish list

// test product

import ListProduct from './app/controllers/ProductController.js';
// import Product from './app/models/Product.js';

// ListProduct.add(
//    new Product(
//       7,
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

//cách gọi thử sản phẩm
import Product from '../components/Product/index.js';

// const tempkkk = {
//    _id: '2',
//    name: 'Khong co gi',
//    price: '999,999,999',
//    color: {
//       list: ['Red', 'Blue'],
//       detail: [
//          {
//             color: 'Red',
//             imgs: {
//                firstImg:
//                   'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                secondeImg:
//                   'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                orthers: [
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                ],
//             },
//             qty: 4,
//             detail: [
//                {
//                   size: 39,
//                   qty: 4,
//                },
//                {
//                   size: 40,
//                   qty: 2,
//                },
//                {
//                   size: 44,
//                   qty: 1,
//                },
//                {
//                   size: 43,
//                   qty: 8,
//                },
//             ],
//          },
//          {
//             color: 'Blue',
//             imgs: {
//                firstImg:
//                   'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                secondeImg:
//                   'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                orthers: [
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                ],
//             },
//             qty: 2,
//             detail: [
//                {
//                   size: 35,
//                   qty: 2,
//                },
//             ],
//          },
//          {
//             color: 'Blue',
//             imgs: {
//                firstImg:
//                   'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                secondeImg:
//                   'http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg',
//                orthers: [
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                   'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
//                ],
//             },
//             qty: 2,
//             detail: [
//                {
//                   size: 35,
//                   qty: 2,
//                },
//             ],
//          },
//       ],
//    },
//    sizes: ['39', '40'],
//    promotional_price: '',
//    promotion_percentage: '',
// };

if ($('.slideshow-container')) {
   let slideIndex = 1;
   showSlides(slideIndex);

   function currentSlide(n) {
      showSlides((slideIndex = n));
   }

   function plusSlides(n) {
      showSlides((slideIndex += n));
   }

   function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
      if (n > slides.length) {
         slideIndex = 1;
      }
      if (n < 1) {
         slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(' active-slide', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active-slide';
   }

   const dots = document.getElementsByClassName('dot');
   for (let i of dots) {
      i.onclick = function () {
         currentSlide(Number(i.getAttribute('slide_rank')));
      };
   }
   setInterval(() => {
      plusSlides(1);
   }, 5000);
}

//banner
import ImgAnimation from './components/ImgAnimation/index.js';

const listBanner = [
   'https://file.hstatic.net/200000522597/file/2_510x275_b4821a2d66c04eb09a0403079c2fd5bb.jpg',
   'https://file.hstatic.net/200000522597/file/3_510x275_b304bdd7130d489c9330c9dc2cdaadc2.jpg',
   'https://file.hstatic.net/200000522597/file/4_510x275_63bbf2e07bbf4510bc673944c9ddf028.jpg',
];

const listMainBanner = [
   {
      img: 'https://file.hstatic.net/1000230642/file/385x665_l_30bc4508f8bf4a5d92493189f5fd6988.jpg',
      class_Name: 'new-img img1',
   },
   {
      img: 'https://file.hstatic.net/1000230642/file/795x665_46ed484a6c70459aa3bb54d88f0a2abb.jpg',
      class_Name: 'new-img img2',
   },
   {
      img: 'https://file.hstatic.net/1000230642/file/385x665_r_eb1943175a3b408cb2a17f98f4733cd8.jpg',
      class_Name: 'new-img img3',
   },
];

if ($('.ads-banner-block')) {
   $('.ads-banner-block').innerHTML = listBanner.map((element) => ImgAnimation(element)).join('');
}

if ($('.new-img-block')) {
   $('.new-img-block').innerHTML = listMainBanner
      .map(
         (element) => `
                     <a class="${element.class_Name}">
                        ${ImgAnimation(element.img)}
                     </a>
                     `,
      )
      .join('');
}

import SlideInfinit from './components/InfiniteSlide/index.js';

if ($('.text-slide')) {
   $('.text-slide').innerHTML = SlideInfinit(10);
}

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
import ListDragProc from './components/ListDragProc/index.js';
const wapperListRecom = $('.slider-product');
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

//collection nam
const collectionMan = $('#prdZone__man');
if (collectionMan) {
   collectionMan.innerHTML = ListProduct.getProducts
      .slice(0, 20)
      .map((element) => {
         let tempNewPrice = Number(element.price.replaceAll(',', ''));

         tempNewPrice = tempNewPrice * (100 - Number(element.promotions));
         return `
         <div class="prd-zone__item">
            ${Product({
               _id: element._id,
               name: element.name,
               price: element.price,
               color: element.colors,
               sizes: element.size,
               promotional_price: numberMoney(tempNewPrice.toString()),
               promotion_percentage: element.promotions,
               news: element.newProc,
            })}
         </div>
      `;
      })
      .join('');
}

//collection nu
const collectionWoman = $('#prdZone__woman');
if (collectionWoman) {
   collectionWoman.innerHTML = ListProduct.getProducts
      .slice(0, 20)
      .map((element) => {
         let tempNewPrice = Number(element.price.replaceAll(',', ''));

         tempNewPrice = tempNewPrice * (100 - Number(element.promotions));
         return `
         <div class="prd-zone__item">
            ${Product({
               _id: element._id,
               name: element.name,
               price: element.price,
               color: element.colors,
               sizes: element.size,
               promotional_price: numberMoney(tempNewPrice.toString()),
               promotion_percentage: element.promotions,
               news: element.newProc,
            })}
         </div>
      `;
      })
      .join('');
}

if ($('.footer-banner')) {
   $('.footer-banner').innerHTML = ImgAnimation(
      'https://file.hstatic.net/200000522597/file/2_1920x750_8d8ae5ef81364f288889339c63147dbb.jpg',
   );
}

//scroll to top
const btnToTop = $('#bttop.has-item');
if (btnToTop) {
   let toTop = false,
      tempScrollToTop = -1;
   const t = 6;

   const handWindow = () => {
      tempScrollToTop = window.scrollY;
      toTop = true;
      let q = window.scrollY,
         v = q / t;
      window.scrollTo(0, q - v);
   };

   btnToTop.onclick = handWindow;

   const vlue_Show_Scroll = (document.body.scrollHeight * 1) / 8;

   const handleScroll = () => {
      let flag = false;
      window.scrollY >= vlue_Show_Scroll ? (flag = true) : (flag = false);
      flag ? btnToTop.classList.add('open') : btnToTop.classList.remove('open');
      if (toTop) {
         let q = window.scrollY,
            v = q / t;
         if (q > tempScrollToTop) toTop = false;
         window.scrollTo(0, q - v);
         tempScrollToTop = window.scrollY;
         if (tempScrollToTop <= 0) toTop = false;
      }
   };

   window.addEventListener('scroll', handleScroll);
}

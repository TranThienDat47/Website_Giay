const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
import ListProduct from '../app/controllers/ProductController.js';

function ProductGalleryThumb({ img, name }) {
   return `
      <li class="productDetail-gallery__thumb-item 1"
      data-image="${img}">
         <div data-fancybox="gallery"
            class="productDetail-gallery__thumb-item-inner"
            href="${img}">
            <img src="${img}"
               alt="${name}">
         </div>
      </li>
   `;
}

//routing

const urlParams = new URLSearchParams(window.location.search);

const checkVetify = ListProduct.find(urlParams.get('id'));

if (checkVetify.length <= 0) {
   window.location.href = '/';
}

//name and orthers
const headingName = $('.productDetail__heading>h1');
const priceProc = $('.productDetail-price>span');
const soldold = $('.productDetail-soldold strong > strong');

headingName.innerHTML = checkVetify[0].name;
priceProc.innerHTML = checkVetify[0].price;
soldold.innerHTML = checkVetify[0].qty;

//share
const productSharing = $('.product-sharing');
productSharing.onclick = function () {
   productSharing.classList.toggle('sharing-active');
};

//action value qty
const qtyMinus = $('.productDetail__quantity-area .minus');
const qtyPlus = $('.productDetail__quantity-area .plus');
const valueQty = $('.productDetail__quantity-area .quantity-input');

qtyMinus.onclick = function () {
   valueQty.value--;
   if (valueQty.value < 1) valueQty.value++;
};

qtyPlus.onclick = function () {
   valueQty.value++;
   if (valueQty.value > 10) valueQty.value--;
};
//wishlist

import WishList from '../app/controllers/WishListController.js';

const removeWishList = $('#onAppWishList_btn_remove');
const addWishList = $('#onAppWishList_btn_add');

const tempCheckWishList = WishList.find(checkVetify[0]._id);

if (tempCheckWishList.length > 0) {
   addWishList.style.display = 'none';
   removeWishList.style.display = 'block';
} else {
   addWishList.style.display = 'block';
   removeWishList.style.display = 'none';
}

const checkNodePlus = (parent, children) => {
   let node = children.parentNode;
   while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
   }
   return false;
};

// more
const description = $$('.productDetail__tabs li');
for (let i = 0; i < description.length; i++) {
   description[i].onclick = function (e) {
      if (!checkNodePlus(description[i].children[1], e.target)) {
         if (description[i].classList.contains('active')) {
            description[i].classList.toggle('active');
         } else {
            for (let i = 0; i < description.length; i++) {
               description[i].classList.remove('active');
            }
            description[i].classList.add('active');
         }
      }
   };
}

//size

function SizeOption(data, checked) {
   let tempSizeOption;

   if (checked) {
      tempSizeOption = `
      <div data-value="${data.size}" class="productDetail__swatch-element">
         <input class="productDetail__variant-1"
            id="swatch-1-${data.size}" type="radio" name="option2"
            value="${data.size}" checked>
         <label for="swatch-1-${data.size}"
            class="productDetail__sd">
            <span>${data.size}</span>
         </label>
      </div>            
      `;
   } else {
      tempSizeOption = `
      <div data-value="${data.size}" class="productDetail__swatch-element">
         <input class="productDetail__variant-1"
            id="swatch-1-${data.size}" type="radio" name="option2"
            value="${data.size}">
         <label for="swatch-1-${data.size}">
            <span>${data.size}</span>
         </label>
      </div>            
      `;
   }

   return tempSizeOption;
}

function ColorOption(data, checked) {
   let tempColorOption;

   if (checked) {
      tempColorOption = `
      <div class="productDetail__swatch-element color den">
         <input
            class="productDetail__variant-0"
            type="radio" name="option1"
            value="${data.color}" data-vhandle="den" checked>
         <label class="productDetail__den productDetail__sd" class="productDetail__sd"
            for="swatch-0-den">
            <img src="${data.img}"
                  alt="Giày Thể Thao Nam Hunter Street Bloomin' Central DSMH08500DEN (${data.color})"
                  title="${data.color}">
            <span>${data.color}</span>
         </label>
      </div>            
      `;
   } else {
      tempColorOption = `
      <div class="productDetail__swatch-element color den">
         <input
            class="productDetail__variant-0"
            type="radio" name="option1"
            value="${data.color}" data-vhandle="den">
         <label class="productDetail__den " for="swatch-0-den">
            <img src="${data.img}"
                  alt="Giày Thể Thao Nam Hunter Street Bloomin' Central DSMH08500DEN (${data.color})"
                  title="${data.color}">
            <span>${data.color}</span>
         </label>
      </div>            
      `;
   }

   return tempColorOption;
}

//color
const listColor = $('#variant-swatch-0 .productDetail__select-swap');

listColor.innerHTML = checkVetify[0].colors.list
   .map((element, index) => {
      if (checkVetify[0].colors.detail[index].qty > 0) {
         if (index === 0)
            return ColorOption(
               {
                  color: checkVetify[0].colors.detail[index].color,
                  img: checkVetify[0].colors.detail[index].imgs.firstImg,
               },
               true,
            );
         else
            return ColorOption(
               {
                  color: checkVetify[0].colors.detail[index].color,
                  img: checkVetify[0].colors.detail[index].imgs.firstImg,
               },
               false,
            );
      }
   })
   .join(',,,,')
   .toString()
   .replaceAll(',,,,', '');

// Recommend Product
import Product from '../components/Product/index.js';

const listRecommedPro = $('#owlProduct-related');

// listRecommedPro.innerHTML = dataRecommendProc
//    .slice(0, 6)
//    .map((element) => Product(element))
//    .join(',,,,')
//    .toString()
//    .replaceAll(',,,,', '');

import ListDragProc from '../components/ListDragProc/index.js';
const wapperListRecom = $('#listViewed');

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

listRecommedPro.innerHTML = dataRecommendProc
   .slice(0, 6)
   .map((element) => element)
   .join(',,,,')
   .toString()
   .replaceAll(',,,,', '');

wapperListRecom.innerHTML = ListDragProc(1, dataRecommendProc);

// modal view product
const viewProductMain = $('.modalViewed-product__content');

let tempDragViewProc, tempTranslateXViewProc;

viewProductMain.parentNode.onclick = function (e) {
   e.stopPropagation();
   viewProductMain.parentNode.style.display = 'none';
   document.body.style.overflow = 'auto';
};

viewProductMain.onclick = function (e) {
   e.stopPropagation();
   if (!mouseMoveViewProc) {
      viewProductMain.style.transition = 'none';
      viewProductMain.style.marginTop = `0px`;
      document.querySelector('.modalViewed-product').scrollTo(0, 0);
      setTimeout(() => {
         if (viewProductMain.classList.contains('zoom-2')) {
            viewProductMain.classList.remove('zoom-2');
            viewProductMain.classList.add('zoom-4');

            const topViewProc = viewProductMain.getBoundingClientRect().top;

            if (topViewProc < 0) {
               viewProductMain.style.marginTop = `${-topViewProc * 2}px`;
               document
                  .querySelector('.modalViewed-product')
                  .scrollTo(0, document.body.clientHeight / 4);
            }
         } else if (viewProductMain.classList.contains('zoom-4'))
            viewProductMain.classList.remove('zoom-4');
         else {
            viewProductMain.classList.add('zoom-2');
            const topViewProc = viewProductMain.getBoundingClientRect().top;

            if (topViewProc < 0) {
               viewProductMain.style.marginTop = `${-topViewProc * 2}px`;
               document
                  .querySelector('.modalViewed-product')
                  .scrollTo(0, document.body.clientHeight / 10);
            }
         }
      }, 10);
      viewProductMain.style.transform = ``;
   } else mouseMoveViewProc = false;
};

let flagDragViewModal = false,
   mouseMoveViewProc = false;

function handleDragViewModal(e) {
   const x = e.clientX - tempDragViewProc;
   const leftViewProc = viewProductMain.getBoundingClientRect().left;
   const rightViewProc = viewProductMain.getBoundingClientRect().right;
   const widthViewProc = viewProductMain.getBoundingClientRect().width;
   const widthTranslateX = Math.abs((widthViewProc - document.body.clientWidth) / 2);
   const curTranslateX = tempTranslateXViewProc + x;

   if (Math.round(leftViewProc) >= 0) {
      viewProductMain.style.transform = `translateX(${
         widthTranslateX + (curTranslateX - widthTranslateX) / 2
      }px)`;
   } else if (rightViewProc <= document.body.clientWidth) {
      viewProductMain.style.transform = `translateX(${
         -widthTranslateX + (curTranslateX + widthTranslateX) / 2
      }px)`;
   } else viewProductMain.style.transform = `translateX(${tempTranslateXViewProc + x}px)`;
}

viewProductMain.onmousedown = function (e) {
   const widthViewProc = viewProductMain.getBoundingClientRect().width;
   if (widthViewProc > document.body.clientWidth) {
      viewProductMain.style.transition = 'none';
      flagDragViewModal = true;

      tempDragViewProc = e.clientX;
      tempTranslateXViewProc = +viewProductMain.style.transform
         .replace('translateX', '')
         .replaceAll('(', '')
         .replaceAll(')', '')
         .replace('px', '');
   }
};

viewProductMain.onmousemove = function (e) {
   const widthViewProc = viewProductMain.getBoundingClientRect().width;
   if (widthViewProc > document.body.clientWidth)
      if (flagDragViewModal) {
         mouseMoveViewProc = true;
         handleDragViewModal(e);
      }
};

viewProductMain.onmouseup = function (e) {
   const widthViewProc = viewProductMain.getBoundingClientRect().width;
   if (widthViewProc > document.body.clientWidth)
      if (flagDragViewModal) {
         const leftViewProc = viewProductMain.getBoundingClientRect().left;
         const widthViewProc = viewProductMain.getBoundingClientRect().width;
         const rightViewProc = viewProductMain.getBoundingClientRect().right;
         const widthTranslateX = (widthViewProc - document.body.clientWidth) / 2;

         viewProductMain.style.transition = 'all 0.4s ease 0s';

         if (leftViewProc >= 0) {
            viewProductMain.style.transform = `translateX(${widthTranslateX}px)`;
         } else if (rightViewProc <= document.body.clientWidth) {
            viewProductMain.style.transform = `translateX(${-widthTranslateX}px)`;
         }

         flagDragViewModal = false;
      }
};

viewProductMain.onmouseleave = function (e) {
   const widthViewProc = viewProductMain.getBoundingClientRect().width;
   if (widthViewProc > document.body.clientWidth)
      if (flagDragViewModal) {
         const leftViewProc = viewProductMain.getBoundingClientRect().left;
         const widthViewProc = viewProductMain.getBoundingClientRect().width;
         const rightViewProc = viewProductMain.getBoundingClientRect().right;
         const widthTranslateX = (widthViewProc - document.body.clientWidth) / 2;

         viewProductMain.style.transition = 'all 0.4s ease 0s';

         if (leftViewProc >= 0) {
            viewProductMain.style.transform = `translateX(${widthTranslateX}px)`;
         } else if (rightViewProc <= document.body.clientWidth) {
            viewProductMain.style.transform = `translateX(${-widthTranslateX}px)`;
         }

         flagDragViewModal = false;
         mouseMoveViewProc = false;
      }
};

// product gallery
const mainGallery = $('#productCarousel-slider .productDetail-gallery__item');
const mainWrapperListGalleryThumb = $('#productCarousel-thumb');
let mainGalleryThumb;
const imgViewProc = $('.modalViewed-product__content img');
const btnLeftGrallery = $('.fancybox-button--arrow_left');
const btnRightGrallery = $('.fancybox-button--arrow_right');

//add mainGallery and add list gallery
const mainImgGallery = $(
   '#productCarousel-slider .productDetail-gallery__item .productDetail-gallery__item-inner img',
);

let listImgGallery;
let indexGallrery = 0;

function renderGallery() {
   const formAddCart = $('#add-item-form');

   const data = new FormData(formAddCart);
   var detail = {};
   for (const [name, value] of data) {
      detail[`${name}`] = `${value}`;
   }
   let tempIndex = -1;
   checkVetify[0].colors.detail.find((element, index) => {
      if (element.color.toLowerCase() === detail.option1.trim().toLowerCase()) tempIndex = index;

      return element.color.toLowerCase() === detail.option1.trim().toLowerCase();
   });

   if (tempIndex != -1) {
      const listSize = $('#variant-swatch-1 .productDetail__sub-swap');

      listSize.innerHTML = checkVetify[0].colors.detail[tempIndex].detail
         .sort((a, b) =>
            Number(a.size) > Number(b.size) ? 1 : Number(a.size) < Number(b.size) ? -1 : 0,
         )
         .map((element, index) => {
            if (element.qty > 0) {
               if (index === 0) return SizeOption(element, true);
               else return SizeOption(element, false);
            }
         })
         .join(',,,,')
         .toString()
         .replaceAll(',,,,', '');

      listImgGallery = [
         checkVetify[0].colors.detail[tempIndex].imgs.firstImg,
         checkVetify[0].colors.detail[tempIndex].imgs.secondeImg,
      ].concat(checkVetify[0].colors.detail[tempIndex].imgs.orthers);

      mainImgGallery.src = checkVetify[0].colors.detail[tempIndex].imgs.firstImg;

      mainWrapperListGalleryThumb.innerHTML = [
         checkVetify[0].colors.detail[tempIndex].imgs.secondeImg,
      ]
         .concat(checkVetify[0].colors.detail[tempIndex].imgs.orthers)
         .map((element) => ProductGalleryThumb({ img: element, name: checkVetify[0].name }))
         .join(',,,,')
         .toString()
         .replaceAll(',,,,', '');
   } else {
      mainImgGallery.src = checkVetify[0].colors.detail[0].imgs.firstImg;

      mainWrapperListGalleryThumb.innerHTML = [checkVetify[0].colors.detail[0].imgs.secondeImg]
         .concat(checkVetify[0].colors.detail[0].imgs.orthers)
         .map((element, index) => ProductGalleryThumb({ img: element, name: checkVetify[0].name }))
         .join(',,,,')
         .toString()
         .replaceAll(',,,,', '');
   }
}

renderGallery();

mainGallery.onclick = function () {
   viewProductMain.parentNode.style.display = 'flex';
   viewProductMain.classList.remove('zoom-2');
   viewProductMain.classList.remove('zoom-4');
   viewProductMain.style.marginTop = `0px`;
   viewProductMain.style.transform = ``;
   document.body.style.overflow = 'hidden';

   const tempSrc = mainImgGallery.src;

   listImgGallery.find((element, index) => {
      indexGallrery = index;
      return element === tempSrc;
   });

   imgViewProc.src = listImgGallery[indexGallrery];
};

function handleListGallery() {
   setTimeout(() => {
      //product size
      const itemSize = $$(
         '#variant-swatch-1 .productDetail__sub-swap .productDetail__swatch-element',
      );
      for (let i = 0; i < itemSize.length; i++) {
         itemSize[i].onclick = function () {
            itemSize[i].children[0].click();
            for (let i = 0; i < itemSize.length; i++) {
               itemSize[i].children[1].className = '';
            }
            itemSize[i].children[1].className = 'productDetail__sd';
         };
      }

      mainGalleryThumb = $$('#productCarousel-thumb .productDetail-gallery__thumb-item');

      //onload
      for (let i = 0; i < mainGalleryThumb.length; i++) {
         mainGalleryThumb[i].addEventListener('click', () => {
            viewProductMain.parentNode.style.display = 'flex';
            viewProductMain.classList.remove('zoom-2');
            viewProductMain.classList.remove('zoom-4');
            viewProductMain.style.marginTop = `0px`;
            viewProductMain.style.transform = ``;
            document.body.style.overflow = 'hidden';

            const tempSrc = mainGalleryThumb[i].children[0].children[0].src;
            listImgGallery.filter((element, index) => {
               if (element === tempSrc) indexGallrery = index;
               return element === tempSrc;
            });
            imgViewProc.src = listImgGallery[indexGallrery];
         });
      }
   });
}
handleListGallery();

btnRightGrallery.onclick = function (e) {
   e.stopPropagation();
   viewProductMain.classList.remove('zoom-2');
   viewProductMain.classList.remove('zoom-4');
   viewProductMain.style.marginTop = `0px`;
   viewProductMain.style.transform = ``;

   indexGallrery++;

   if (indexGallrery > listImgGallery.length - 1) indexGallrery = 0;

   imgViewProc.src = listImgGallery[indexGallrery];
};

btnLeftGrallery.onclick = function (e) {
   e.stopPropagation();
   viewProductMain.classList.remove('zoom-2');
   viewProductMain.classList.remove('zoom-4');
   viewProductMain.style.marginTop = `0px`;
   viewProductMain.style.transform = ``;

   indexGallrery--;

   if (indexGallrery < 0) indexGallrery = listImgGallery.length - 1;

   imgViewProc.src = listImgGallery[indexGallrery];
};

// add to cart
import ListCart from '../app/controllers/CartController.js';
import ViewCart from '../components/CartView/cartview.js';
const btnAddToCart = $('#add-to-cart');
const formAddCart = $('#add-item-form');
const btnSubmitForm = $('#btnSubmitForm');

formAddCart.addEventListener('submit', function (e) {
   e.preventDefault();
   const tempqty = valueQty.value;
   const data = new FormData(formAddCart);
   var detail = {};

   for (const [name, value] of data) {
      detail[`${name}`] = `${value}`;
   }

   ListCart.add({
      product: checkVetify[0],
      qty: tempqty,
      detail,
   });

   ViewCart();

   $('.notiSuccess-product').style.display = 'flex';
   setTimeout(() => {
      $('.notiSuccess-product').style.display = 'none';
   }, 1500);
});

btnAddToCart.onclick = function () {
   btnSubmitForm.click();
};

//detail Product Gallery
const detailProductGallery = $('#detailProductGallery');

detailProductGallery.innerHTML = `<span>${checkVetify[0].description}</span>`;

//product color
const itemColor = $$(
   '#variant-swatch-0 .productDetail__select-swap .productDetail__swatch-element',
);

for (let i = 0; i < itemColor.length; i++) {
   itemColor[i].onclick = function () {
      itemColor[i].children[0].click();
      for (let i = 0; i < itemColor.length; i++) {
         itemColor[i].children[1].classList.remove('productDetail__sd');
      }
      itemColor[i].children[1].classList.add('productDetail__sd');

      renderGallery();
      handleListGallery();
   };
}

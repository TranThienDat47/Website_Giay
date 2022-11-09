<<<<<<< HEAD
function WishListItem({ img, nameProduct, sku, price, linkTo }) {
   return `
            <tr class="wish-item product product-item" data-id="1042364523">
                <td class="wishlist-cell0 customer-wishlist-item-image">
                    <a class="product-image"
                        href="${linkTo}"
                        title="${nameProduct}">
                        <img class="product_featured_image"
                            src="${img}"
                            alt="${nameProduct}">
=======
function WishListItem({ id, img, name, price }) {
   return `
            <tr class="wish-item product product-item" data-id="${id}">
                <td class="wishlist-cell0 customer-wishlist-item-image">
                    <a class="product-image"
                        href="{linkTo}"
                        title="${name}">
                        <img class="product_featured_image"
                            src="${img}"
                            alt="${name}">
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
                    </a>
                </td>
                <td class="wishlist-cell1 customer-wishlist-item-info">
                    <h3 class="product-name">
<<<<<<< HEAD
                        <a href="${linkTo}"
                            title="${nameProduct}">
                            ${nameProduct}
                        </a>
                    </h3>
                    <div class="wishlist-sku"><span>${sku}</span></div>
=======
                        <a href="{linkTo}"
                            title="${name}">
                            ${name}
                        </a>
                    </h3>
                    <div class="wishlist-sku"><span>{sku}</span></div>
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
                </td>
                <td class="wishlist-cell3 customer-wishlist-item-price">
                    <div class="price-box">
                        <span class="regular-price">${price} ₫</span>
                    </div>
                </td>
                <td class="wishlist-cell5 customer-wishlist-item-remove last">
                    <a class="onAppWishList_remove"
<<<<<<< HEAD
                        title="Bỏ yêu thích" data-id="1042364523"><i
=======
                        title="Bỏ yêu thích" data-id="${id}"><i
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
                            class="fa-regular fa-trash-can"></i></a>
                </td>
            </tr>
        `;
}
<<<<<<< HEAD
=======
import WishList from '../../app/controllers/WishListController.js';
import ListProduct from '../../app/controllers/ProductController.js';
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

<<<<<<< HEAD
let data = [
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,0000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
   {
      img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
      nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
      sku: 'SKU DEB009500XMN24',
      price: '285,000',
      linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
   },
];
=======
let data;
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd

const wishList = $('.wish-list');
const actionWishList = $('.header__action-wishlist');
const actionWishListWrapper = $('.header-sidebar.wishlist');
const closrWishListWrapper = $('.header-sidebar.wishlist .close');
const modalWishList = $('.header-sidebar__modal');
const btnShowMoreWishList = $('#onAppWishList_nextPageWishList');
<<<<<<< HEAD
let removeItemWishList;
let tempShowWishList = 0;
=======
const countWishList = $('#onAppWishList_numberLike');

let removeItemWishList;
let tempShowWishList = 8;
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd

actionWishList.onclick = function () {
   actionWishListWrapper.classList.toggle('show-sidebar');
   modalWishList.classList.toggle('show-modal');
   document.body.style.overflow = 'hidden';
};

closrWishListWrapper.onclick = function () {
   actionWishListWrapper.classList.toggle('show-sidebar');
   modalWishList.classList.toggle('show-modal');
   document.body.style.overflow = 'auto';
};

modalWishList.onclick = function () {
   modalWishList.classList.toggle('show-modal');
   actionWishListWrapper.classList.toggle('show-sidebar');
   document.body.style.overflow = 'auto';
};

<<<<<<< HEAD
const tempData = {
   img: '//product.hstatic.net/1000230642/product/deb009500xmn__2__07e1b4a5328b4cefbb78bf4403e74b09_medium.jpg',
   nameProduct: 'Sandal Eva Phun Bé Trai DEB009500XMN (Xanh Mi Nơ)',
   sku: 'SKU DEB009500XMN24',
   price: '285,0000',
   linkTo: '/products/sandal-eva-phun-be-trai-deb009500xmn-xanh-mi-no',
};

function shallowObjectEqual(object1, object2) {
   const keys1 = Object.keys(object1);
   const keys2 = Object.keys(object2);

   if (keys1.length !== keys2.length) {
      return false;
   }

   for (let key of keys1) {
      if (object1[key] !== object2[key]) {
         return false;
      }
   }

   return true;
}

setTimeout(() => {
   removeItemWishList = $$('.onAppWishList_remove');

   for (let i = 0; i < removeItemWishList.length; i++) {
      removeItemWishList[i].onclick = function () {
         data = data.filter(function (element) {
            return !shallowObjectEqual(element, tempData);
         });

         wishList.innerHTML = data
            .map((element) => WishListItem(element))
            .slice(0, tempShowWishList)
            .join(',,,,')
            .toString()
            .replaceAll(',,,,', '');
      };
   }
}, 1);

btnShowMoreWishList.onclick = function () {
   showItemWishList();
};

function showItemWishList() {
   if (data.length > 8 && data.length - tempShowWishList >= 8) {
      tempShowWishList += 8;
      btnShowMoreWishList.style.display = 'block';
   } else btnShowMoreWishList.style.display = 'none';
   wishList.innerHTML = data
      .map((element) => WishListItem(element))
=======
btnShowMoreWishList.onclick = function () {
   tempShowWishList += 8;
   showItemWishList();
};

const btnMoreSearch = $('#tempPageSearch');

if (btnMoreSearch) {
   btnMoreSearch.onclick = function () {
      showItemWishList();
   };
}

function showItemWishList() {
   data = WishList.getWishLists;

   if (data.length > 8) {
      if (data.length - tempShowWishList > 0) {
         btnShowMoreWishList.style.display = 'block';
      } else {
         btnShowMoreWishList.style.display = 'none';
         tempShowWishList = data.length;
      }
   } else if (btnShowMoreWishList.style.display === 'block')
      btnShowMoreWishList.style.display = 'none';

   wishList.innerHTML = data
      .map((element) => {
         return WishListItem({
            id: element._id,
            img: element.img,
            name: `${element.name} (${element.color})`,
            price: element.price,
         });
      })
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
      .slice(0, tempShowWishList)
      .join(',,,,')
      .toString()
      .replaceAll(',,,,', '');
<<<<<<< HEAD
=======

   countWishList.innerHTML = WishList.getWishLists.length;

   setTimeout(() => {
      removeItemWishList = $$('.onAppWishList_remove');

      for (let i = 0; i < removeItemWishList.length; i++) {
         removeItemWishList[i].onclick = function () {
            WishList.deleteID(removeItemWishList[i].getAttribute('data-id'));

            showItemWishList();
         };
      }
   }, 1);

   //product
   const btnProcWishList = $$('.onwishlist_btn_add');
   for (let element of btnProcWishList) {
      const tempCheckWishList = WishList.find(element.getAttribute('data-id'));

      if (tempCheckWishList[0]) {
         element.style.display = 'none';
      } else {
         element.style.display = 'block';
      }

      setTimeout(() => {
         element.onclick = function () {
            const flag = WishList.add({
               _id: element.getAttribute('data-id'),
               name: element.getAttribute('data-title'),
               color: 'Red',
               price: element.getAttribute('data-price'),
               img: element.getAttribute('data-img'),
            });

            if (flag) element.style.display = 'none';
            showItemWishList();
         };
      });
   }

   //gallery
   const removeWishList = $('#onAppWishList_btn_remove');
   const addWishList = $('#onAppWishList_btn_add');

   if (removeItemWishList !== null && addWishList !== null) {
      const formAddCart = $('#add-item-form');

      const urlParams = new URLSearchParams(window.location.search);
      const checkVetify = ListProduct.find(urlParams.get('id'));

      if (checkVetify.length <= 0) {
         window.location.href = '/';
      }

      const tempCheckWishList = WishList.find(checkVetify[0]._id);

      if (tempCheckWishList.length > 0) {
         addWishList.style.display = 'none';
         removeWishList.style.display = 'block';
      } else {
         addWishList.style.display = 'block';
         removeWishList.style.display = 'none';
      }

      addWishList.onclick = function () {
         addWishList.style.display = 'none';
         removeWishList.style.display = 'block';

         const data = new FormData(formAddCart);
         var detail = {};
         for (const [name, value] of data) {
            detail[`${name}`] = `${value}`;
         }
         let tempColorIndex = -1;

         checkVetify[0].colors.detail.find((element, index) => {
            tempColorIndex = index;
            return element.color.toLowerCase() === detail.option1.trim().toLowerCase();
         });

         WishList.add({
            _id: checkVetify[0]._id,
            name: checkVetify[0].name,
            color: detail.option1,
            price: checkVetify[0].price,
            img: checkVetify[0].colors.detail[tempColorIndex].imgs.firstImg,
         });
         showItemWishList();
      };

      removeWishList.onclick = function () {
         removeWishList.style.display = 'none';
         addWishList.style.display = 'block';

         WishList.deleteID(checkVetify[0]._id);
         showItemWishList();
      };
   }
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
}

showItemWishList();

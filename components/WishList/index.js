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
                    </a>
                </td>
                <td class="wishlist-cell1 customer-wishlist-item-info">
                    <h3 class="product-name">
                        <a href="${linkTo}"
                            title="${nameProduct}">
                            ${nameProduct}
                        </a>
                    </h3>
                    <div class="wishlist-sku"><span>${sku}</span></div>
                </td>
                <td class="wishlist-cell3 customer-wishlist-item-price">
                    <div class="price-box">
                        <span class="regular-price">${price} ₫</span>
                    </div>
                </td>
                <td class="wishlist-cell5 customer-wishlist-item-remove last">
                    <a class="onAppWishList_remove"
                        title="Bỏ yêu thích" data-id="1042364523"><i
                            class="fa-regular fa-trash-can"></i></a>
                </td>
            </tr>
        `;
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

const wishList = $('.wish-list');
const actionWishList = $('.header__action-wishlist');
const actionWishListWrapper = $('.header-sidebar.wishlist');
const closrWishListWrapper = $('.header-sidebar.wishlist .close');
const modalWishList = $('.header-sidebar__modal');
const btnShowMoreWishList = $('#onAppWishList_nextPageWishList');
let removeItemWishList;
let tempShowWishList = 0;

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
      .slice(0, tempShowWishList)
      .join(',,,,')
      .toString()
      .replaceAll(',,,,', '');
}

showItemWishList();

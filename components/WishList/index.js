function WishListItem({ id, img, name, price }) {
   return `
            <tr class="wish-item product product-item" data-id="${id}">
                <td class="wishlist-cell0 customer-wishlist-item-image">
                    <a class="product-image"
                        href="/product/index.html?id=${id}"
                        title="${name}">
                        <img class="product_featured_image"
                            src="${img}"
                            alt="${name}"
                            onerror="this.onerror=null;this.src='../../access/img/error-image-generic.png';"
                            >
                    </a>
                </td>
                <td class="wishlist-cell1 customer-wishlist-item-info">
                    <h3 class="product-name">
                        <a href="/product/index.html?id=${id}"
                            title="${name}">
                            ${name}
                        </a>
                    </h3>
                    <div class="wishlist-sku"><span>{sku}</span></div>
                </td>
                <td class="wishlist-cell3 customer-wishlist-item-price">
                    <div class="price-box">
                        <span class="regular-price">${price} ₫</span>
                    </div>
                </td>
                <td class="wishlist-cell5 customer-wishlist-item-remove last">
                    <a class="onAppWishList_remove"
                        title="Bỏ yêu thích" data-id="${id}"><i
                            class="fa-regular fa-trash-can"></i></a>
                </td>
            </tr>
        `;
}
import WishList from '../../app/controllers/WishListController.js';
import ListProduct from '../../app/controllers/ProductController.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let data;

const wishList = $('.wish-list');
const actionWishList = $('.header__action-wishlist');
const actionWishListWrapper = $('.header-sidebar.wishlist');
const closrWishListWrapper = $('.header-sidebar.wishlist .close');
const modalWishList = $('.header-sidebar__modal');
const btnShowMoreWishList = $('#onAppWishList_nextPageWishList');
const countWishList = $('#onAppWishList_numberLike');

let removeItemWishList;
let tempShowWishList = 8;

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
      .slice(0, tempShowWishList)
      .join(',,,,')
      .toString()
      .replaceAll(',,,,', '');

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
}

showItemWishList();

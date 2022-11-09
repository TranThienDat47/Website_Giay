import InfiniteSlide from '../../components/InfiniteSlide/index.js';
import Product from '../../components/Product/index.js';

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

      headerMain.style.transform = `translateY(0)`;
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

//Product
window.onload = () => {
   const productSwatch = $$('.product-swatch-loop .swatch-loop-item');
   const firstImg = $$('.prod-img.first-image picture img');
   const secondeImg = $$('.prod-img.second-image picture img');

   for (let i = 0; i < productSwatch.length; i++) {
      const lengthChildren = productSwatch[i].children.length;
      for (let j = 0; j < lengthChildren; j++) {
         productSwatch[i].children[j].onclick = (e) => {
            e.stopPropagation();
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

//Text Slide
var textSlide = document.querySelector('.text-slide');
textSlide.innerHTML = InfiniteSlide(1);

//Filter Desktop
var filterItems = document.querySelectorAll('.filter-desktop-item');
const filterItemLength = filterItems.length;
function hidefilterItem(filterItem) {
   filterItem.classList.remove('active');
}

function showfilterItem(filterItem) {
   filterItem.classList.add('active');
}

for (let filterItem of filterItems) {
   filterItem.onclick = (e) => {
      var result = checkNode(filterItem, e.target);

      if (filterItem.classList.contains('active')) {
         hidefilterItem(filterItem);
      } else {
         var filterItemActive1 = document.querySelector('.filter-desktop-item.active');
         if (filterItemActive1) {
            hidefilterItem(filterItemActive1);
         }
         showfilterItem(filterItem);
      }
      if (result) {
         showfilterItem(filterItem);
      }
   };
}

window.addEventListener('click', function (e) {
   for (let i = 0; i < filterItemLength - 1; i++) {
      var checknode = checkNode(filterItems[i], e.target);
      if (!checknode && e.target !== filterItems[i]) {
         hidefilterItem(filterItems[i]);
      }
   }
   for (let uisliderHandle of uisliderHandles) {
      uisliderHandle.classList.remove('ui-state-hover');
   }
});

//Filter Desktop li
var filterLis = document.querySelectorAll('.checkbox-list li label');
var filterDesc = document.querySelector('.active-filter');
var filterLisLength = filterLis.length;
var valueOfLi = [];
var btnClosefilterDescs;
for (let i = 0; i < filterLis.length; i++) {
   let filterLi = filterLis[i];
   filterLi.addEventListener('click', function (e) {
      if (filterLi.parentElement.classList.contains('active')) {
         filterLi.parentElement.classList.remove('active');
         let valueLength = valueOfLi.length;
         for (let i = 0; i < valueLength; i++) {
            if (valueOfLi[i] == filterLi.innerText) {
               valueOfLi.splice(i, 1);
            }
         }
         filterDesc.innerHTML = getHTMLtoFilterDesc(valueOfLi).join('');
      } else {
         filterLi.parentElement.classList.add('active');

         valueOfLi.push(filterLi.innerText);

         filterDesc.innerHTML = getHTMLtoFilterDesc(valueOfLi).join('');
      }
   });
   filterLi.addEventListener('mouseup', function (e) {
      for(let filterItem of filterItems) {
         if(filterItem.classList.contains('active')) {
            filterItem.classList.remove('active');
         }
      }
   })
}

function getHTMLtoFilterDesc(valueOfLi) {
   var filterdesc = valueOfLi.map(function (value) {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
         return `
            <div class="price">
               ${format2(value.minPriceSearch)} - ${format2(value.maxPriceSearch)} đ
               <i class="fa fa-times-circle"></i>
            </div>
         `;
      } else
         return `
            <span data-value="${value}" onclick="">${value}
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
            </span>  
         `;
   });
   return filterdesc;
}

filterDesc.onclick = (e) => {
   console.log(e.target);
   if(e.target != filterDesc) {
      var valueParent = e.target.parentElement.innerText;
      console.log(valueParent);
      let valueLength1 = valueOfLi.length;
      let minPrice = Number(amount.getAttribute('minpricesearch'));
      let maxPrice = Number(amount.getAttribute('maxpricesearch'));

      for (let i = 0; i < valueLength1; i++) {
         if (valueOfLi[i] === valueParent || 
            typeof valueOfLi[i] === 'object' &&
            !Array.isArray(valueOfLi[i]) &&
            valueOfLi[i] !== null) {
            valueOfLi.splice(i, 1);
         }
      }
      
      filterDesc.innerHTML = getHTMLtoFilterDesc(valueOfLi).join('');
      var filterLiActives = document.querySelectorAll('.checkbox-list li.active');
      for (let filterLiActive of filterLiActives) {
         if (filterLiActive.children[1].innerText === valueParent) {
            filterLiActive.classList.remove('active');
         }
      }
      
      uisliderRange.style.width = '100%';
      uisliderRange.style.left = '0%';
      uisliderHandles[0].style.left = '0%';
      uisliderHandles[1].style.left = '100%';
      const maxprice = 2000000;
      const minprice = 0;
      amount.setAttribute('minpricesearch', minprice);
      amount.setAttribute('maxpricesearch', maxprice);
      amountText.innerHTML = `${format2(minprice)} đ - ${format2(maxprice)} đ`;
   }
};

//Filter-SortBy Icon
var sortItems = document.querySelectorAll(
   '.wrapper-mainCollection .collection-sortbyfilter-container .collection-sortby-option ul.sort-by li',
);
for (let sortItem of sortItems) {
   sortItem.onclick = () => {
      let sortItemActive = document.querySelector(
         '.collection-sortbyfilter-container .collection-sortby-option ul.sort-by li.active',
      );
      if (sortItemActive) {
         sortItemActive.classList.remove('active');
      }
      sortItem.classList.add('active');
   };
}
//
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
//Product List
var localKey = 'Products';
var productList = JSON.parse(localStorage.getItem(localKey));
// console.log(productList);

var dataProduct = productList.map(function (element) {
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

var productContainerList = [];
for (let i = 0; i < dataProduct.length; i++) {
   let productContainer = document.createElement('div');
   productContainer.innerHTML = dataProduct[i];
   productContainerList.push(productContainer);
}

var flat = 0;
var wrapList = document.querySelector('.collection-list');
for (let i = 0; i < 4; i++) {
   wrapList.appendChild(productContainerList[i]);
   flat += 1;
}

var btnLoadMore = document.querySelector('.collection-loadmore .btn-loadmore');
btnLoadMore.onclick = () => {
   var productMoreAmout = productContainerList.length - flat;
   for (let i = 0; i < productMoreAmout; i++) {
      console.log(productContainerList[flat]);
      wrapList.appendChild(productContainerList[flat]);
      flat += 1;
   }
};

//Drag and drop
const sliderRange = document.querySelector('#slider-range');
const uisliderRange = sliderRange.querySelector('.ui-widget-header');
const uisliderHandles = sliderRange.querySelectorAll('.ui-slider-handle');
var amount = document.querySelector('#amount');
var amountText = document.querySelector('#amount-text');

var isReadytoDrag = false;
var drop = 0;

sliderRange.addEventListener('mousedown', (e) => {
   isReadytoDrag = true;
});

for (let uisliderHandle of uisliderHandles) {
   uisliderHandle.addEventListener('mouseenter', (e) => {
      uisliderHandle.classList.add('ui-state-hover');
   });
}

// Handle LEFT
uisliderHandles[0].addEventListener('mousedown', (e) => {
   drop = 1;
   uisliderHandles[0].classList.add('ui-state-active');
   document.addEventListener('mousemove', (e) => {
      const clientX = e.clientX;
      //console.log(clientX);
      const left = Math.ceil(sliderRange.getBoundingClientRect().left);
      //console.log(left);
      const uiLeft = Math.ceil(uisliderRange.getBoundingClientRect().left);
      // console.log(uiLeft);
      // const uisliderHandle = Math.ceil(uisliderHandles[0].getBoundingClientRect().left);
      // console.log(uisliderHandle);
      const uiRight = Math.ceil(uisliderRange.getBoundingClientRect().right);


      const width = Math.ceil(uisliderRange.getBoundingClientRect().width);
      //console.log(width);

      const min = left;
      const max = uiRight + 1;
      // console.log(max);

      //console.log(move);

      if (isReadytoDrag && drop == 1 && clientX >= min && clientX <= max) {
         console.log('left');
         const move = clientX - uiLeft;
         console.log(move);
         var uiStyleLeft = Number(uisliderRange.style.left.split('%')[0]);
         var uiStyleWidth = Number(uisliderRange.style.width.split('%')[0]);
         const percent = 2.5;
         let minPrice = Number(amount.getAttribute('minpricesearch'));
         let maxPrice = Number(amount.getAttribute('maxpricesearch'));
         if (move >= 12) {
            // const percent = ((clientX - uiLeft) / width) * 100;
            uiStyleLeft += percent;
            uisliderRange.style.left = uiStyleLeft + '%';
            uiStyleWidth -= percent;
            uisliderRange.style.width = uiStyleWidth + '%';
            uisliderHandles[0].style.left = uiStyleLeft + '%';
            minPrice += 50000;
            amount.setAttribute('minpricesearch', minPrice);
            console.log(minPrice);
            amountText.innerHTML = `${format2(minPrice)} đ - ${format2(maxPrice)} đ`;
         } else if (move <= -12) {
            uiStyleLeft -= percent;
            uisliderRange.style.left = uiStyleLeft + '%';
            uiStyleWidth += percent;
            uisliderRange.style.width = uiStyleWidth + '%';
            uisliderHandles[0].style.left = uiStyleLeft + '%';

            minPrice -= 50000;
            amount.setAttribute('minpricesearch', minPrice);
            console.log(maxPrice);
            amountText.innerHTML = `${format2(minPrice)} đ - ${format2(maxPrice)} đ`;
         }
      }
   });
});

//Handle RIGHT
uisliderHandles[1].addEventListener('mousedown', (e) => {
   drop = 2;
   uisliderHandles[1].classList.add('ui-state-active');
   document.addEventListener('mousemove', (e) => {
      const clientX = e.clientX;
      // console.log(clientX);
      const right = Math.ceil(sliderRange.getBoundingClientRect().right);
      const left = Math.ceil(sliderRange.getBoundingClientRect().left);
      // console.log(left);
      const uiRight = Math.ceil(uisliderRange.getBoundingClientRect().right);
      const uiLeft = Math.ceil(uisliderRange.getBoundingClientRect().left);
      // console.log(uiLeft);
      // console.log(uiRight);
      // const uisliderHandle = Math.ceil(uisliderHandles[0].getBoundingClientRect().left);
      // console.log(uisliderHandle);

      const width = Math.ceil(uisliderRange.getBoundingClientRect().width);
      //console.log(width);

      const max = right;
      // console.log(max);
      const min = uiLeft;

      // console.log(uiRight - clientX);

      if (isReadytoDrag && drop == 2 && clientX <= max && clientX >= min) {
         console.log('right');
         const move = uiRight - clientX;
         console.log(move);
         var uiHandleRight = Number(uisliderHandles[1].style.left.split('%')[0]);
         var uiStyleWidth = Number(uisliderRange.style.width.split('%')[0]);
         const percent = 2.5;
         let minPrice = Number(amount.getAttribute('minpricesearch'));
         let maxPrice = Number(amount.getAttribute('maxpricesearch'));
         if (move >= 12) {
            // const percent = ((clientX - uiLeft) / width) * 100;
            uiHandleRight -= percent;
            // uisliderRange.style.left = uiStyleRight + '%';
            uiStyleWidth -= percent;
            uisliderRange.style.width = uiStyleWidth + '%';
            uisliderHandles[1].style.left = uiHandleRight + '%';
            maxPrice -= 50000;
            amount.setAttribute('maxpricesearch', maxPrice);
            console.log(maxPrice);
            amountText.innerHTML = `${format2(minPrice)} đ - ${format2(maxPrice)} đ`;
         } else if (move <= -12) {
            uiHandleRight += percent;
            // uisliderRange.style.left = uiStyleRight + '%';
            uiStyleWidth += percent;
            uisliderRange.style.width = uiStyleWidth + '%';
            uisliderHandles[1].style.left = uiHandleRight + '%';
            maxPrice += 50000;
            amount.setAttribute('maxpricesearch', maxPrice);
            console.log(maxPrice);
            amountText.innerHTML = `${format2(minPrice)} đ - ${format2(maxPrice)} đ`;
         }
      }
   });
});

var priceArray = [{}];
document.addEventListener('mouseup', (e) => {
   // isReadytoDrag = false;
   uisliderHandles[0].classList.remove('ui-state-active');
   uisliderHandles[1].classList.remove('ui-state-active');

   if (isReadytoDrag) {
      let minprice = amount.getAttribute('minpricesearch');
      let maxprice = amount.getAttribute('maxpricesearch');
      var valuePriceSearch = {
         minPriceSearch: Number(minprice),
         maxPriceSearch: Number(maxprice),
      };
      priceArray[0] = valuePriceSearch;
      var flag = 0;
      for (let i = 0; i < valueOfLi.length; i++) {
         if (
            typeof valueOfLi[i] === 'object' &&
            !Array.isArray(valueOfLi[i]) &&
            valueOfLi[i] !== null
         ) {
            flag = i;
         }
      }
      valueOfLi[flag] = valuePriceSearch;
      filterDesc.innerHTML = getHTMLtoFilterDesc(valueOfLi).join('');
   }
   // filterDesc.innerHTML = getHTMLtoFilterDesc(valueOfLi).join('');
   // console.log(priceArray);
   
   isReadytoDrag = false;
});

document.addEventListener('mouseover', (e) => {
   for (let uisliderHandle of uisliderHandles) {
      uisliderHandle.classList.remove('ui-state-hover');
   }
});

function format2(n) {
   return n
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      .split('.')[0];
}
// User action

// Wishlist

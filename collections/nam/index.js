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
var filterColors = document.querySelectorAll('.filter-color li label');
var filterSizes = document.querySelectorAll('.filter-size li label');

var filterLis = document.querySelectorAll('.checkbox-list li label');
var filterDesc = document.querySelector('.active-filter');
var filterLisLength = filterLis.length;
var valueOfLi = [];
var valueColors = [];
var valueSizes = [];
var htmlLi = [];

function searchProductColor(productList, arrayColor) {
   var productFilterList = [];
   for(let i = 0; i < productList.length; i++) {
      for(let j = 0; j < arrayColor.length; j++) {
         for(let m = 0; m < productList[i].colors.list.length; m++) {
            if(productList[i].colors.list[m] == arrayColor[j]) {
               productFilterList.push(productList[i]); 
            }
         }
      }
   }
   return productFilterList;
}

function searchProductSize(productList, arraySize) {
   var productFilterList = [];
   for(let i = 0; i < productList.length; i++) {
      for(let j = 0; j < arraySize.length; j++) {
         for(let m = 0; m < productList[i].size.length; m++) {
            if(productList[i].size[m] == arraySize[j]) {
               productFilterList.push(productList[i]);
            }
         }
      }
   }
   return productFilterList;
}

function searchProductPrice(productList, price) {
   var productFilterList = [];
   for(let i = 0; i < productList.length; i++) {
      const productPrice = Number(productList[i].price.split(',').join(''));
      if(productPrice >= price.minPriceSearch && productPrice <= price.maxPriceSearch) {
         productFilterList.push(productList[i]);
      }
   }
   return productFilterList;
}

function searchProductSizePrice(productList, arraySize, price) {
   var productFilterList = [];
   for(let i = 0; i < productList.length; i++) {
      const productPrice = Number(productList[i].price.split(',').join(''));
      if(productPrice >= price.minPriceSearch && productPrice <= price.maxPriceSearch) {
         for(let j = 0; j < arraySize.length; j++) {
            for(let m = 0; m < productList[i].size.length; m++) {
               if(productList[i].size[m] == arraySize[j]) {
                  productFilterList.push(productList[i]);
               }
            }
         }
      }
   }
   return productFilterList;
}

function searchProductColorPrice(productList, arrayColor, price) {
   var productFilterList = [];
   for(let i = 0; i < productList.length; i++) {
      const productPrice = Number(productList[i].price.split(',').join(''));
      if(productPrice >= price.minPriceSearch && productPrice <= price.maxPriceSearch) {
         for(let j = 0; j < arrayColor.length; j++) {
            for(let m = 0; m < productList[i].colors.list.length; m++) {
               if(productList[i].colors.list[m] == arrayColor[j]) {
                  productFilterList.push(productList[i]);
               }
            }
         }
      }
   }
   return productFilterList;
}

function searchProductColorSize(productList, arrayColor, arraySize) {
   var productFilterList = [];
   productFilterList = searchProductColor(productList, arrayColor);
   productFilterList = searchProductSize(productFilterList,arraySize);
   return productFilterList;
}

for (let i = 0; i < filterColors.length; i++) {
   let filterColor = filterColors[i];
   filterColor.addEventListener('click', function (e) {
      if(filterColor.parentElement.classList.contains('active')) {
         filterColor.parentElement.classList.remove('active');
         let valueColorLength = valueColors.length;
         for (let i = 0; i < valueColorLength; i++) {
            if (valueColors[i] == filterColor.innerText) {
               valueColors.splice(i, 1);
            }
         }
      } else {
         filterColor.parentElement.classList.add('active');
         valueColors.push(filterColor.innerText);
      }
      // valueOfLi.splice(0,1,valueColors);
      valueOfLi[0] = valueColors;
      let valueOfColor = getHTMLtoFilterDesc(valueOfLi[0]);
      htmlLi[0] = valueOfColor.join("");
      filterDesc.innerHTML = htmlLi.join("");
      console.log(productFilterList);
      if(valueColors.length > 0 && valueOfLi[1] == undefined && valueOfLi[2] == undefined) {
         productFilterList = searchProductColor(productList, valueOfLi[0]);
      }else if(valueOfLi[1] != undefined || valueOfLi[2] != undefined) {
         productFilterList = searchProductColor(productFilterList, valueOfLi[0]);
      } else {
         productFilterList = productList;
      }
      if(valueColors.length == 0) {
         if(valueSizes.length == 0 && valueOfLi[2] == undefined) {
            productFilterList = productList;
         } else if(valueSizes.length > 0 && valueOfLi[2] == undefined) {
            productFilterList = searchProductSize(productList, valueOfLi[1]);
         } else if(valueSizes.length == 0 || valueOfLi[1] == undefined && valueOfLi[2] != undefined) {
            productFilterList = searchProductPrice(productList, valueOfLi[2]);
         } else {
            productFilterList = searchProductSizePrice(productList, valueOfLi[1], valueOfLi[2]);
         }
      }
      console.log(productFilterList);
      var dataProduct = htmlProduct(productFilterList);
      if(productFilterList.length > 0) {
         for (let i = 0; i < dataProduct.length; i++) {
            wrapList.innerHTML = dataProduct.join("");
         }
      }
      else {
         wrapList.innerHTML = dataProduct;
      }
   })
}

for (let i = 0; i < filterSizes.length; i++) {
   let filterSize = filterSizes[i];
   filterSize.addEventListener('click', function (e) {
      if(filterSize.parentElement.classList.contains('active')) {
         filterSize.parentElement.classList.remove('active');
         let valueSizeLength = valueSizes.length;
         for (let i = 0; i < valueSizeLength; i++) {
            if (valueSizes[i] == filterSize.innerText) {
               valueSizes.splice(i, 1);
            }
         }
      } else {
         filterSize.parentElement.classList.add('active');
         valueSizes.push(filterSize.innerText);
      }
      valueOfLi[1] = valueSizes;
      let valueOfSize = getHTMLtoFilterDesc(valueOfLi[1]);
      htmlLi[1] = valueOfSize.join("");
      filterDesc.innerHTML = htmlLi.join("");
      if(valueOfLi[1].length > 0 && valueOfLi[0] == undefined && valueOfLi[2] == undefined) {
         productFilterList = searchProductSize(productList, valueOfLi[1]);
      }else if(valueOfLi[0] != undefined || valueOfLi[2] != undefined) {
         productFilterList = searchProductSize(productFilterList, valueOfLi[1]);
      } else {
         productFilterList = productList;
      }
      if(valueSizes.length == 0) {
         if(valueColors.length == 0 && valueOfLi[2] == undefined) {
            productFilterList = productList;
         } else if(valueColors.length > 0 && valueOfLi[2] == undefined) {
            productFilterList = searchProductColor(productList, valueOfLi[0]);
         } else if(valueColors.length == 0 || valueOfLi[0] == undefined && valueOfLi[2] != undefined) {
            productFilterList = searchProductPrice(productList, valueOfLi[2]);
         } else {
            productFilterList = searchProductColorPrice(productList, valueOfLi[0], valueOfLi[2]);
         }
      }
      console.log(productFilterList);
      var dataProduct = htmlProduct(productFilterList);
      if(productFilterList.length > 0) {
         for (let i = 0; i < dataProduct.length; i++) {
            wrapList.innerHTML = dataProduct.join("");
         }
      }
      else {
         wrapList.innerHTML = dataProduct;
      }
   })
}


// for (let i = 0; i < filterLis.length; i++) {
//    let filterLi = filterLis[i];
//    filterLi.addEventListener('click', function (e) {
//       if (filterLi.parentElement.classList.contains('active')) {
//          filterLi.parentElement.classList.remove('active');
//          let valueLength = valueOfLi.length;
//          let itemFilterListLength = itemFilterList.length;

//          for (let i = 0; i < valueLength; i++) {
//             if (valueOfLi[i] == filterLi.innerText) {
//                valueOfLi.splice(i, 1);
//             }
//          }
//          for (let i = 0; i < itemFilterListLength; i++) {
//             if (itemFilterList[i] == filterLi.innerText) {
//                itemFilterList.splice(i, 1);
//             }
//          }
//          console.log(itemFilterList);

//          filterDesc.innerHTML = getHTMLtoFilterDesc(valueOfLi).join('');
//       } else {
//          filterLi.parentElement.classList.add('active');
//          // itemFilterList.push(filterLi.innerText);
//          // for(let i = 0; i < productList.length; i++) {
//          //    for(let j = 0; j < itemFilterList.length;j++) {
//          //       for(let m = 0; m < productList[i].colors.list.length; m++) {
//          //          if(productList[i].colors.list[m] == itemFilterList[j] && checkId(productList[i],productFilterList)) {
//          //             productFilterList.push(productList[i])
//          //          }
//          //       }
//          //       for(let n = 0; n < productList[i].size.length; n++) {
//          //          if(productList[i].size[n] == itemFilterList[j] && checkId(productList[i],productFilterList)) {
//          //             productFilterList.push(productList[i])
//          //          }
//          //       }
//          //    }
//          // }
//          // productFilter(htmlProduct(productFilterList));
//          // console.log(itemFilterList);
//          valueOfLi.push(filterLi.innerText);

//          filterDesc.innerHTML = getHTMLtoFilterDesc(valueOfLi).join('');
//       }
//    });
// }

function getHTMLtoFilterDesc(valueOfLi) {
   var filterdesc = valueOfLi.map(function (value) {
      return `
         <span class="filter-item" data-value="${value}">${value}
         <i class="fa-sharp fa-solid fa-circle-xmark"></i>
         </span>  
      `;
   });
   return filterdesc;
}

function getHTMLtoFilterPrice(value) {
   return `
      <div class="price" minprice="${value.minPriceSearch}" maxprice="${
      value.maxPriceSearch
   }">
         ${format2(value.minPriceSearch)} - ${format2(value.maxPriceSearch)} đ
         <i class="fa fa-times-circle"></i>
      </div>
   `;
}

filterDesc.onclick = (e) => {
   console.log(e.target);

   if (e.target != filterDesc) {
      var valueParent = e.target.parentElement.innerText;
      console.log(valueParent);
      let valueLength1 = valueOfLi.length;
      let minPrice = Number(amount.getAttribute('minpricesearch'));
      let maxPrice = Number(amount.getAttribute('maxpricesearch'));

      if (e.target.parentElement.classList.contains('price')) {
         // for (let i = 0; i < valueOfLi.length; i++) {
         //    if (
         //       typeof valueOfLi[i] === 'object' &&
         //       !Array.isArray(valueOfLi[i]) &&
         //       valueOfLi[i] !== null
         //    ) {
         //       valueOfLi.splice(i, 1);
         //    }
         // }
         valueOfLi.pop();
         htmlLi.pop();
         if(valueOfLi[0] == undefined && valueOfLi[1] == undefined) {
            productFilterList = productList;
         } else if(valueColors.length > 0 && valueOfLi[1] == undefined) {
            productFilterList = searchProductColor(productList,valueOfLi[0]);
         } else if(valueSizes.length > 0 && valueOfLi[0] == undefined) {
            console.log(valueSizes.length);
            console.log(valueSizes);
            productFilterList = searchProductSize(productList, valueOfLi[1]);
         } else {
            productFilterList = searchProductColorSize(productList,valueOfLi[0],valueOfLi[1]);
         }
      }

      if (e.target.parentElement.classList.contains('filter-item')) {
         if(valueOfLi[0]) {
            for (let i = 0; i < valueOfLi[0].length; i++) {
               if (valueOfLi[0][i] === valueParent) {
                  valueOfLi[0].splice(i, 1);
                  let valueOfColor = getHTMLtoFilterDesc(valueOfLi[0]);
                  htmlLi[0] = valueOfColor.join("");
                  if(valueOfLi[0].length > 0) {
                     productFilterList = searchProductColor(productList, valueOfLi[0]);
                  } else if(valueOfLi[0].length == 0) {
                     if(valueSizes.length == 0 && valueOfLi[2] == undefined) {
                        productFilterList = productList;
                     } else if(valueSizes.length > 0 && valueOfLi[2] == undefined) {
                        productFilterList = searchProductSize(productList, valueOfLi[1]);
                     } else if(valueSizes.length == 0 || valueOfLi[1] == undefined && valueOfLi[2] != undefined) {
                        productFilterList = searchProductPrice(productList, valueOfLi[2]);
                     } else {
                        productFilterList = searchProductSizePrice(productList, valueOfLi[1], valueOfLi[2]);
                     }
                  }
               }
            }
         }
         if(valueOfLi[1]) {
            for (let i = 0; i < valueOfLi[1].length; i++) {
               if (valueOfLi[1][i] === valueParent) {
                  valueOfLi[1].splice(i, 1);
                  let valueOfSize = getHTMLtoFilterDesc(valueOfLi[1]);
                  htmlLi[1] = valueOfSize.join("");
                  if(valueOfLi[1].length > 0) {
                  productFilterList = searchProductSize(productList, valueOfLi[1]);
                  } else if(valueOfLi[1].length == 0) {
                     if(valueColors.length == 0 && valueOfLi[2] == undefined) {
                        productFilterList = productList;
                     } else if(valueColors.length > 0 && valueOfLi[2] == undefined) {
                        productFilterList = searchProductColor(productList, valueOfLi[0]);
                     } else if(valueColors.length == 0 || valueOfLi[0] == undefined && valueOfLi[2] != undefined) {
                        productFilterList = searchProductPrice(productList, valueOfLi[2]);
                     } else {
                        productFilterList = searchProductColorPrice(productList, valueOfLi[0], valueOfLi[2]);
                     }
                  }
               }
            }
         }
      }
      console.log(valueOfLi);
      filterDesc.innerHTML = htmlLi.join("");
      var dataProduct = htmlProduct(productFilterList);
      if(productFilterList.length > 0) {
         for (let i = 0; i < dataProduct.length; i++) {
            wrapList.innerHTML = dataProduct.join("");
         }
      }
      else {
         wrapList.innerHTML = dataProduct;
      }
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

//Product List Lọc
//Haha
var localKey = 'Products';
var productList = JSON.parse(localStorage.getItem(localKey));
var wrapList = document.querySelector('.collection-list');
var itemFilterList = [];
var productFilterList = [];

console.log(productList);

function htmlProduct(arrayProduct) {
   if(arrayProduct.length == 0) {
      return `
         <div class="row listProduct-row listProduct-resize listProduct-filter">
            <div class="col-md-12 product-noloop">
               <div class="collection-alert-no">
                  <p>Không tìm thấy kết quả. Vui lòng thử lại!</p>
               </div>
            </div>
         </div>
      `
   }
   else {
      var newArrayProduct = arrayProduct.map(function (element) {
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
      })
      return newArrayProduct;
   }
}

function checkId(product, productlist) {
   let check = true;
   const length = productlist.length;
   for(let i = 0; i < length; i++) {
      if(product._id == productlist[i]._id) { 
         check = false;
         break;
      }
   }
   return check;
}

var dataProduct = htmlProduct(productList);

// var productContainerList = [];
// for (let i = 0; i < dataProduct.length; i++) {
//    let productContainer = document.createElement('div');
//    productContainer.innerHTML = dataProduct[i];
//    productContainerList.push(productContainer);
// }

// var productContainerList = [];

wrapList.innerHTML = dataProduct.join("");


// var flat = 0;
// var wrapList = document.querySelector('.collection-list');
// for (let i = 0; i < productContainerList.length; i++) {
//    if (i == 40) {
//       break;
//    }
//    wrapList.appendChild(productContainerList[i]);
//    flat += 1;
// }

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
      // let valueOfLilength = valueOfLi.length;
      // let flag = 0;
      // for (let i = 0; i < valueOfLilength; i++) {
      //    if (
      //       typeof valueOfLi[i] === 'object' &&
      //       !Array.isArray(valueOfLi[i]) &&
      //       valueOfLi[i] !== null
      //    ) {
      //       valueOfLi[i] = valuePriceSearch;
      //       flag = 1;
      //    }
      // }
      // if (flag == 0) {
      //    valueOfLi[valueOfLilength] = valuePriceSearch;
      // }
      valueOfLi[2] = valuePriceSearch;
      let valueOfPrice = getHTMLtoFilterPrice(valueOfLi[2]);
      htmlLi[2] = valueOfPrice;
      filterDesc.innerHTML = htmlLi.join("");
      if(valueOfLi[0] == undefined && valueOfLi[1] == undefined) {
         console.log('haha');
         productFilterList = searchProductPrice(productList,valueOfLi[2]);
      }else if(valueOfLi[0] != undefined || valueOfLi[1] != undefined) {
         productFilterList = searchProductPrice(productFilterList, valueOfLi[2]);
      }
      var dataProduct = htmlProduct(productFilterList);
      if(productFilterList.length > 0) {
         for (let i = 0; i < dataProduct.length; i++) {
            wrapList.innerHTML = dataProduct.join("");
         }
      }
      else {
         wrapList.innerHTML = dataProduct;
      }
      console.log(productFilterList);
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

//đổi thành số tiền vnđ
function format2(n) {
   return n
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      .split('.')[0];
}

//Filter Item

// User action

// Wishlist

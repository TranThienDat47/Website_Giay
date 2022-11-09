import SearchResults from './index.js';
import ListProduct from '../../app/controllers/ProductController.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// search

const searhresult = $('.results-content');
const inputSearch = $('.input-search');

const checkNode = (parent, children) => {
   let node = children;
   while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
   }
   return false;
};

let dataSearchResult = [];
let searchValue = '';

inputSearch.onkeydown = () => {
   setTimeout(() => {
      searchValue = inputSearch.value;
      if (searchValue.trim().length > 0) {
         dataSearchResult = ListProduct.findAll(searchValue.trim());
         searhresult.innerHTML = SearchResults(dataSearchResult);
         searhresult.style.display = 'block';
      } else {
         searhresult.style.display = 'none';
      }
   }, 0);
};

document.onclick = (e) => {
   if (!checkNode(inputSearch, e.target)) {
      searhresult.style.display = 'none';
   }
};

document.onscroll = (e) => {
   inputSearch.blur();
   searhresult.style.display = 'none';
};

const actionCart = $('.header__action-cart .header__action-item-text');
const actionUser = $('.header__action-account .header__action-item-text');
inputSearch.onfocus = (e) => {
   if (dataSearchResult.length > 0 && searchValue.length > 0) {
      searhresult.style.display = 'block';
   }
   if (actionCart.classList.contains('show-triangle')) {
      actionCart.classList.remove('show-triangle');
   }
   if (actionUser.classList.contains('show-triangle')) {
      actionUser.classList.remove('show-triangle');
   }
};

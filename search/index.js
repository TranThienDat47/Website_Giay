const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

import Product from '../components/Product/index.js';

const listSearchResults = $('.searchPage__listProduct-row');

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

listSearchResults.innerHTML = data
   .map((element) => Product(element))
   .join(',,,,')
   .toString()
   .replaceAll(',,,,', '');

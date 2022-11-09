function SearchItem({ href = '', img = '', title = '', price = '' }) {
   return `
        <a href="${href}" class="search-results__item-ult">
            <div class="search-results__thumbs">
                    <img alt="${title}"
                        src="${img}">
            </div>
            <div class="search-results_title">
                <p title="${title}" >${title}</p>
                <p class="f-initial">${price} ₫</p>
            </div>
        </a>
        `;
}

<<<<<<< HEAD
const preventScroll = (e) => {
   e.preventDefault();
   e.stopPropagation();
};

=======
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
function SearchResults(data = []) {
   let bottomSearch = '';

   if (data.length > 4) {
      bottomSearch = `
                    <div class="search-results__more">
<<<<<<< HEAD
                        <a href="/search?q=filter=(title:product contains d)">Xem thêm
=======
                        <a href="/search">Xem thêm
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
                            ${data.length - 4} sản phẩm</a>
                    </div>
                  `;
   } else if (data.length <= 0) {
      bottomSearch = `
                    <p class="search-results-dataEmpty">Không có sản phẩm nào...</p>
                  `;
   }

   const searchItems = data
      .slice(0, 4)
<<<<<<< HEAD
      .map((element) =>
         SearchItem({
            href: '/',
            img: element.imgs.firstImg,
            title: element.name,
            price: element.price,
         }),
      )
=======
      .map((element) => {
         if (element.colors.detail[0])
            return SearchItem({
               href: `/product/index.html?id=${element._id}`,
               img: element.colors.detail[0].imgs.firstImg,
               title: element.name,
               price: element.price,
            });
         else
            return SearchItem({
               href: `/product/index.html?q=${element._id}`,
               img: '',
               title: element.name,
               price: element.price,
            });
      })
>>>>>>> 1a67ddf1adbed66c6b0ca7191be57e996fa08ecd
      .join(',,,,')
      .toString()
      .replaceAll(',,,,', '');

   return `
    ${searchItems}
    ${bottomSearch}
    `;
}

export default SearchResults;

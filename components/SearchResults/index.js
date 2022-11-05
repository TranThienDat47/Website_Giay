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

const preventScroll = (e) => {
   e.preventDefault();
   e.stopPropagation();
};

function SearchResults(data = []) {
   let bottomSearch = '';

   if (data.length > 4) {
      bottomSearch = `
                    <div class="search-results__more">
                        <a href="/search?q=filter=(title:product contains d)">Xem thêm
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
      .map((element) =>
         SearchItem({
            href: '/',
            img: element.imgs.firstImg,
            title: element.name,
            price: element.price,
         }),
      )
      .join(',,,,')
      .toString()
      .replaceAll(',,,,', '');

   return `
    ${searchItems}
    ${bottomSearch}
    `;
}

export default SearchResults;

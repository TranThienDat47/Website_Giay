const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function ItemCategory({ title, detail }) {
   return `
         <li class="item-category">
            <h2 class="item-category__title">${title}</h2>
            <hr />
            <div class="item-category__second">
               ${detail
                  .map(
                     (element) => `
                        <div>
                           <div>
                              ${element.second}
                              <button class="btn__del">
                                 <i class="fa-regular fa-trash-can"></i>
                              </button>
                           </div>
                           <div class="item-category__third">
                              ${element.third
                                 .map(
                                    (element1) => `
                                             <div>
                                                ${element1}
                                                <button class="btn__del">
                                                   <i class="fa-regular fa-trash-can"></i>
                                                </button>
                                             </div>
                              `,
                                 )
                                 .join('')}
                              <button class="btn button btn__add">
                                 Thêm
                                 <i class="fa-solid fa-circle-plus"></i>
                              </button>
                           </div>
                        </div>
               `,
                  )
                  .join('')}
               <button class="btn button btn__add">
                  Thêm
                  <i class="fa-solid fa-circle-plus"></i>
               </button>
            </div>
            <button class="btn__del-li">
               <i class="fa-solid fa-xmark"></i>
            </button>
         </li>
         `;
}

let listCategory = [
   {
      title: 'Nam',
      detail: [
         { second: 'Thể thao', third: ['Đá bóng', 'Bóng bàn', 'Bóng rổ'] },
         { second: 'Hunter', third: [] },
         { second: 'Sandal', third: [] },
      ],
   },
   {
      title: 'Nữ',
      detail: [
         { second: 'Thể thao', third: ['Đá bóng', 'Bóng bàn', 'Bóng rổ'] },
         { second: 'Hunter', third: [] },
         { second: 'Sandal', third: [] },
      ],
   },
];

function renderList() {
   $('.list-category').innerHTML =
      listCategory.map((element) => ItemCategory(element)).join('') +
      `<li class="item-category item-category__add"><h3>Thêm danh mục</h3>
         <i class="fa-solid fa-circle-plus"></i></li>`;
}

renderList();

function handleAdd() {
   setTimeout(() => {
      const btnAddList = $('.item-category__add');
      const listDel = $$('.btn__del');

      btnAddList.onclick = function () {
         const value = prompt('Vui lòng nhập tên danh mục cần thêm:');
         if (value != null && value.trim() !== '') {
            listCategory.push({
               title: value,
               detail: [],
            });

            renderList();
            handleAdd();
         }
      };

      const listAdd = $$('.btn__add');

      for (let btn of listAdd) {
         btn.onclick = function () {
            const value = prompt('Vui lòng nhập tên danh mục cần thêm:');
            if (value != null && value.trim() !== '') {
               if (btn.parentNode.className === 'item-category__third') {
                  const title =
                     btn.parentNode.parentNode.parentNode.parentNode.children[0].textContent.trim();
                  const second = btn.parentNode.parentNode.children[0].textContent.trim();
                  let i = 0,
                     j = 0;
                  listCategory.filter((element) => {
                     if (element.title === title) {
                        element.detail.filter((element1) => {
                           if (element1.second === second) {
                              listCategory[i].detail[j].third.push(value);
                           }
                           j++;
                        });
                     }
                     i++;
                  });
               } else if (btn.parentNode.className === 'item-category__second') {
                  let i = 0;
                  const title = btn.parentNode.parentNode.children[0].textContent.trim();
                  listCategory.filter((element) => {
                     if (element.title === title) {
                        listCategory[i].detail.push({ second: value, third: [] });
                     }
                     i++;
                  });
               }
            }
            renderList();
            handleAdd();
         };

         const listDelLi = $$('.btn__del-li');

         for (let btn of listDelLi) {
            btn.onclick = function () {
               const value = prompt('Nhập "Ok" để đồng ý xoá:');
               if (value === 'Ok' && value.trim() !== '') {
                  const title = btn.parentNode.children[0].textContent.trim();
                  listCategory = listCategory.filter((element) => {
                     return element.title !== title;
                  });
                  renderList();
                  handleAdd();
               }
            };
         }

         for (let btn of listDel) {
            btn.onclick = function () {
               const value = prompt('Nhập "Ok" để đồng ý xoá:');
               if (value === 'Ok' && value.trim() !== '') {
                  if (btn.parentNode.parentNode.className === 'item-category__third') {
                     const name = btn.parentNode.textContent.trim();

                     const title =
                        btn.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].textContent.trim();
                     const second =
                        btn.parentNode.parentNode.parentNode.children[0].textContent.trim();
                     let i = 0,
                        j = 0;
                     listCategory.filter((element) => {
                        if (element.title === title) {
                           element.detail.filter((element1) => {
                              if (element1.second === second) {
                                 listCategory[i].detail[j].third = listCategory[i].detail[
                                    j
                                 ].third.filter((tempValue) => tempValue !== name);
                              }
                              j++;
                           });
                        }
                        i++;
                     });
                  } else if (
                     btn.parentNode.parentNode.parentNode.className === 'item-category__second'
                  ) {
                     let i = 0;
                     const title =
                        btn.parentNode.parentNode.parentNode.parentNode.children[0].textContent.trim();
                     const name = btn.parentNode.textContent.trim();
                     listCategory.filter((element) => {
                        if (element.title === title) {
                           listCategory[i].detail = listCategory[i].detail.filter((tempValue) => {
                              return tempValue.second !== name;
                           });
                        }
                        i++;
                     });
                  }
               }
               renderList();
               handleAdd();
            };
         }
      }
   });
}

handleAdd();

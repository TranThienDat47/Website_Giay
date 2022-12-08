import ListProduct from '../../app/controllers/ProductController.js';
import Product from '../../app/models/Product.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let curPage = 10;

let listCategory = [
   {
      collection: '',
      title: 'Nam',
      detail: [
         {
            second: 'Hunter',
            third: [],
            collection: '/collections/nam/index.html?type=hunter-nam',
         },
         {
            second: 'Sandal',
            third: [],
            collection: '/collections/nam/index.html?type=sandal-nam-1',
         },
         {
            second: 'Giày Thể Thao',
            third: [],
            collection: '/collections/nam/index.html?type=giay-the-thao-nam',
         },
         {
            second: 'Giày Chạy Bộ',
            third: [],
            collection: '/collections/nam/index.html?type=hunter-running-nam',
         },
         {
            second: 'Giày Đá Banh',
            third: [],
            collection: '/collections/nam/index.html?type=giay-da-banh',
         },
         {
            second: 'Giày Tây',
            third: [],
            collection: '/collections/nam/index.html?type=giay-tay-nam',
         },
         { second: 'Dép', third: [], collection: '/collections/nam/index.html?type=dep-nam' },
         {
            second: 'Phụ Kiện',
            third: [],
            collection: '/collections/nam/index.html?type=phu-kien',
         },
      ],
   },
   {
      collection: 'nu',
      title: 'Nữ',
      detail: [
         {
            second: 'Hunter',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=hunter',
         },
         {
            second: 'GOSTO',
            third: [
               {
                  name: 'Giày Tao Gót',
                  collection: '/collections/nam/index.html?collection=nu&floor=3&type=giay-cao-got',
               },
               {
                  name: 'Giày Thời Trang',
                  collection:
                     '/collections/nam/index.html?collection=nu&floor=3&type=giay-the-thao-gosto',
               },
               {
                  name: 'Sandal',
                  collection: '/collections/nam/index.html?collection=nu&floor=3&type=sandal-gosto',
               },
               {
                  name: 'Dép',
                  collection: '/collections/nam/index.html?collection=nu&floor=3&type=dep-gosto',
               },
            ],
            collection: '/',
         },
         {
            second: 'Sandal',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=sandal-nu-1',
         },
         {
            second: 'Giày Búp Bê',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=giay-bup-be-nu',
         },
         {
            second: 'Giày Thời Trang',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=giay-thoi-trang-nu-1',
         },
         {
            second: 'Giày Chạy Bộ - Đi Bộ',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=hunter-running-jogging',
         },
         {
            second: 'Giày Thể Thao Nữ',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=giay-the-thao-nu',
         },
         {
            second: 'Dép',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=dep-nu',
         },
         {
            second: 'Túi xách',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=tui-xach',
         },
      ],
   },
];

function renderList() {
   $('.list-category').innerHTML =
      listCategory.map((element) => ItemCategory(element)).join('') +
      `<li class="item-category item-category__add"><h3>Thêm danh mục</h3>
         <i class="fa-solid fa-circle-plus"></i></li>`;
}

function ViewProc({
   _id = '',
   img = '',
   name = '',
   color_sizes_qty = { color: ['None'], detail: { size: '-1', qty: -1 } },
   qty = '-1',
   price = '-1',
   category = { gender: 'None', type: 'None' },
}) {
   return `
         <tr class="main-dashboard__product-item">
            <td class="main-dashboard__product-item-proc">
               <div>
                  <div class="main-dashboard__product-item-img">
                     <img
                        src="${img}"
                        alt="${name})"
                     />
                  </div>
                  <h4 class="main-dashboard__product-item-title">
                     ${name}})
                  </h4>
               </div>
            </td>
            <td class="main-dashboard__product-item-id">
               <p>${_id}</p>
            </td>
            <td class="main-dashboard__product-item-color">
               <p>${color_sizes_qty.color
                  .map((element) => {
                     const tempSize_Qty = color_sizes_qty.detail
                        .map((element1) => {
                           return `${element1.size} - ${element1.qty}`;
                        })
                        .join(';<br>&emsp;&emsp;&nbsp;');
                     return `${element} (${tempSize_Qty})`;
                  })
                  .join(`<br>`)}</p>
            </td>
            <td class="main-dashboard__product-item-qty">
               <p>${qty}</p>
            </td>
            <td class="main-dashboard__product-item-price">
               <p>${price} ₫</p>
            </td>
            <td class="main-dashboard__product-item-type">
               <p>${category.gender + ' - ' + category.type}</p>
            </td>
            <td class="main-dashboard__product-item-control">
               <div>
                  <div
                     class="main-dasboard__product-item-icon main-dasboard__product-item-update"
                  >
                     <i class="fa-solid fa-file-pen"></i>
                  </div>
                  <div
                     class="main-dasboard__product-item-icon main-dasboard__product-item-delete"
                  >
                     <i class="fa-regular fa-trash-can"></i>
                  </div>
               </div>
            </td>
         </tr>
         `;
}

const innerProc = $('.main-dashboard__product-item-wrapper');

const filterViewProc = (listProc) => {
   return listProc
      .map((element, index) => {
         const imgTemp = element.colors.detail[0].imgs.firstImg || '';

         let detailSize_Qty;

         element.colors.list.forEach((element1, index1) => {
            detailSize_Qty = element.colors.detail[index1].detail;
         });

         return ViewProc({
            _id: element._id,
            img: imgTemp,
            name: element.name,
            color_sizes_qty: { color: element.colors.list, detail: detailSize_Qty },
            qty: element.qty,
            price: element.price,
            category: element.shoeTypes,
         });
      })
      .join('');
};

innerProc.innerHTML = filterViewProc(ListProduct.getProducts.slice(0, curPage));

const btnMainProc = $('.dasboard-product-add');
const btnCancle = $('.dasboard-product-add__form-submit.cancle');
const btnAddWrapper = $('.main-dashboard__product-add');
const formAddProc = $('.dasboard-product-add__form');

function getFormData() {
   let temp_data = new FormData(formAddProc);
   let temp_detail = {};
   for (const [name, value] of temp_data) {
      temp_detail[`${name}`] = `${value}`;
   }
   return temp_detail;
}
const temp_data = getFormData();

btnAddWrapper.onclick = function () {
   btnMainProc.style.display = 'flex';

   $('#category_product').innerHTML = listCategory[0].detail
      .map((element) => {
         return `
            <option value="${element.value}">${element.second}</option>
            `;
      })
      .join('');

   $('#id_product').value = ListProduct.getProducts.length + 1;
};

btnCancle.onclick = function () {
   const cur_data = getFormData();
   let flag = true;
   for (let element in cur_data) {
      if (cur_data[element] !== temp_data[element]) flag = false;
   }

   if (flag) {
      btnMainProc.style.display = 'none';
   } else if (confirm('Dữ liệu sẽ không được sao lưu, có muốn rời khỏi?')) {
      btnMainProc.style.display = 'none';
      location.reload();
   }
};

const btnMale = $('#male');
const btnFemale = $('#female');

btnMale.onchange = () => {
   let tempThird = [];
   $('#category_product').innerHTML =
      listCategory[0].detail
         .map((element) => {
            if (element.third.length > 0) {
               tempThird.concat(
                  element.third
                     .map(
                        (element1) => `
                           <option value="${element1.value}">${element1.name}</option>
                           `,
                     )
                     .join(''),
               );
            } else
               return `
            <option value="${element.value}">${element.second}</option>
            `;
         })
         .join('') + tempThird;
};

btnFemale.onchange = () => {
   let tempThird = [];
   $('#category_product').innerHTML =
      listCategory[1].detail
         .map((element) => {
            if (element.third.length > 0) {
               tempThird.concat(
                  element.third
                     .map(
                        (element1) => `
                           <option value="${element1.value}">${element1.name}</option>
                           `,
                     )
                     .join(''),
               );
            } else
               return `
            <option value="${element.value}">${element.second}</option>
            `;
         })
         .join('') + tempThird;
};

function ItemColorSize(tempClass = 2, listColor = []) {
   return `
   <div class="dasboard-product-add__color-size-item ${tempClass}">
      <div class='dasboard-product-add__color'>
         ${listColor
            .map(
               (element) => `
                  <div>
                     <input type="radio" name="c_${tempClass}-color" value="${element.color}" id="c_${tempClass}-${element.tempName}">
                     <label class="dashboard__add-color" style="background-color: ${element.tempName};"
                           for="c_${tempClass}-${element.tempName}"></label>
                  </div>
                  `,
            )
            .join('')}
      </div>
      <div class="dasboard-product-add__size">
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-35" value="35" id="s_${tempClass}-size-35">
            <label for="s_${tempClass}-size-35">35</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-36" value="36" id="s_${tempClass}-size-36">
            <label for="s_${tempClass}-size-36">36</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-37" value="37" id="s_${tempClass}-size-37">
            <label for="s_${tempClass}-size-37">37</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-38" value="38" id="s_${tempClass}-size-38">
            <label for="s_${tempClass}-size-38">38</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-39" value="39" id="s_${tempClass}-size-39">
            <label for="s_${tempClass}-size-39">39</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-40" value="40" id="s_${tempClass}-size-40">
            <label for="s_${tempClass}-size-40">40</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-41" value="41" id="s_${tempClass}-size-41">
            <label for="s_${tempClass}-size-41">41</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-42" value="42" id="s_${tempClass}-size-42">
            <label for="s_${tempClass}-size-42">42</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-43" value="43" id="s_${tempClass}-size-43">
            <label for="s_${tempClass}-size-43">43</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-44" value="44" id="s_${tempClass}-size-44">
            <label for="s_${tempClass}-size-44">44</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-45" value="45" id="s_${tempClass}-size-45">
            <label for="s_${tempClass}-size-45">45</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
         <div>
            <input class="dashboard__add-size" type="checkbox" name="s_${tempClass}-size-46" value="46" id="s_${tempClass}-size-46">
            <label for="s_${tempClass}-size-46">46</label>
            <input
               type="number"
               min="1"
               max="10000"
               class="dasboard-product-add__size-qty"
               value="1"
            />
         </div>
      </div>
      <div class="dasboard-product-add__imgs">
         <label for="img_${tempClass}-first_img">Ảnh chính:</label>
         <input
            type="text"
            name="img_${tempClass}-first_img"
            id="img_${tempClass}-first_img"
            value=""
            placeholder="Nhập đường dẩn ảnh..."
         />
         <label for="img_${tempClass}-second_img">Ảnh phụ:</label>
         <input
            type="text"
            name="img_${tempClass}-second_img"
            id="img_${tempClass}-second_img"
            value=""
            placeholder="Nhập đường dẩn ảnh..."
         />
         <label>Ảnh khác (tối đa 5 ảnh):</label>
         <input
            type="text"
            name="img_${tempClass}-orther_1"
            id="img_${tempClass}-orther_1"
            value=""
            placeholder="Nhập đường dẩn ảnh..."
         />
         <input
            type="text"
            name="img_${tempClass}-orther_2"
            id="img_${tempClass}-orther_2"
            value=""
            placeholder="Nhập đường dẩn ảnh..."
         />
         <input
            type="text"
            name="img_${tempClass}-orther_3"
            id="img_${tempClass}-orther_3"
            value=""
            placeholder="Nhập đường dẩn ảnh..."
         />
         <input
            type="text"
            name="img_${tempClass}-orther_4"
            id="img_${tempClass}-orther_4"
            value=""
            placeholder="Nhập đường dẩn ảnh..."
         />
         <input
            type="text"
            name="img_${tempClass}-orther_5"
            id="img_${tempClass}-orther_5"
            value=""
            placeholder="Nhập đường dẩn ảnh..."
         />
      </div>
   </div>
   `;
}

const btnAddListColorSize = $('#btnAddColor_Size');
const listColorSize = $('.dasboard-product-add__color-size-list');

let tempClassItemColorSize = 2;
let templistColor = [];
let tempCheckSize = [];
let tempFirstImg = [];
let tempSecondImg = [];
let tempOther_1_Img = [];
let tempOther_2_Img = [];
let tempOther_3_Img = [];
let tempOther_4_Img = [];
let tempOther_5_Img = [];

function handleSizeCheck() {
   const listCheckSize = $$('.dashboard__add-size');
   for (let i of listCheckSize) {
      i.onclick = function () {
         if (i.checked == true) {
            i.parentNode.children[2].style.display = 'block';
         } else {
            i.parentNode.children[2].style.display = 'none';
         }
      };
   }
}

handleSizeCheck();

let tempError = false;

let countSize = 0;
btnAddListColorSize.onclick = function () {
   const lengthColor = listColorSize.children.length;

   const data = new FormData($('.dasboard-product-add__form'));
   var detail = {};
   for (const [name, value] of data) {
      detail[`${name}`] = `${value}`;

      const tempFlagColor = templistColor.find((temp) => temp.tempName === name);
      if (name.indexOf('-color') > 0 && !tempFlagColor) {
         templistColor.push({ tempName: name, color: value });
      }

      const tempFlagFirstImg = tempFirstImg.find((temp) => temp.tempName === name);
      if (name.indexOf('-first_img') > 0 && !tempFlagFirstImg) {
         tempFirstImg.push({ tempName: name, img: value });
      }

      const tempFlagSecondImg = tempSecondImg.find((temp) => temp.tempName === name);
      if (name.indexOf('-second_img') > 0 && !tempFlagSecondImg) {
         tempSecondImg.push({ tempName: name, img: value });
      }

      const tempFlagOther_1_Img = tempOther_1_Img.find((temp) => temp.tempName === name);
      if (name.indexOf('-orther_1') > 0 && !tempFlagOther_1_Img) {
         tempOther_1_Img.push({ tempName: name, img: value });
      }
      const tempFlagOther_2_Img = tempOther_2_Img.find((temp) => temp.tempName === name);
      if (name.indexOf('-orther_2') > 0 && !tempFlagOther_2_Img) {
         tempOther_2_Img.push({ tempName: name, img: value });
      }
      const tempFlagOther_3_Img = tempOther_3_Img.find((temp) => temp.tempName === name);
      if (name.indexOf('-orther_3') > 0 && !tempFlagOther_3_Img) {
         tempOther_3_Img.push({ tempName: name, img: value });
      }
      const tempFlagOther_4_Img = tempOther_4_Img.find((temp) => temp.tempName === name);
      if (name.indexOf('-orther_4') > 0 && !tempFlagOther_4_Img) {
         tempOther_4_Img.push({ tempName: name, img: value });
      }
      const tempFlagOther_5_Img = tempOther_5_Img.find((temp) => temp.tempName === name);
      if (name.indexOf('-orther_5') > 0 && !tempFlagOther_5_Img) {
         tempOther_5_Img.push({ tempName: name, img: value });
      }

      let qty = 0;
      const tempFlagSize = tempCheckSize.find((temp) => temp.tempName === name);
      if (name.indexOf('-size') > 0 && !tempFlagSize) {
         const listSize = $$(`input[name=${name}]`);
         for (let i of listSize) {
            if (i.value === value) {
               qty = i.parentNode.children[2].value;
            }
         }
         tempCheckSize.push({ tempName: name, size: value, qty });
         countSize++;
      }
   }

   if (templistColor.length === tempClassItemColorSize - 1 && countSize > 0) {
      let listColor = [
         { tempName: 'white', color: 'Trắng' },
         { tempName: 'black', color: 'Đen' },
         { tempName: 'green', color: 'Xanh lá' },
         { tempName: 'blue', color: 'Xanh dương' },
         { tempName: 'pink', color: 'Hồng' },
         { tempName: 'grey', color: 'Xám' },
         { tempName: 'yellow', color: 'Vàng' },
         { tempName: 'violet', color: 'Tím' },
      ];

      listColor = listColor.filter((element) => {
         for (let i of templistColor) {
            if (i.color.trim().toLocaleLowerCase() === element.color.trim().toLocaleLowerCase())
               return false;
         }
         return true;
      });

      if (lengthColor < 7) {
         listColorSize.innerHTML =
            listColorSize.innerHTML + ItemColorSize(tempClassItemColorSize, listColor);
         tempClassItemColorSize++;
         btnAddListColorSize.style.display = 'block';
      } else if (lengthColor === 7) {
         listColorSize.innerHTML =
            listColorSize.innerHTML + ItemColorSize(tempClassItemColorSize, listColor);
         tempClassItemColorSize++;
         btnAddListColorSize.style.display = 'none';
      }

      setTimeout(() => {
         templistColor.forEach((element) => {
            const listColor = $$(`input[name=${element.tempName}]`);
            for (let i of listColor) {
               if (
                  i.value.trim().toLocaleLowerCase() === element.color.trim().toLocaleLowerCase()
               ) {
                  i.checked = true;
               }
            }
         });

         tempFirstImg.forEach((element) => {
            const listFirstImg = $$(`input[name=${element.tempName}]`);
            for (let i of listFirstImg) {
               if (i.name === element.tempName) {
                  i.value = element.img;
               }
            }
         });

         tempSecondImg.forEach((element) => {
            const listSecondImg = $$(`input[name=${element.tempName}]`);
            for (let i of listSecondImg) {
               if (i.name === element.tempName) {
                  i.value = element.img;
               }
            }
         });

         tempOther_1_Img.forEach((element) => {
            const listImg = $$(`input[name=${element.tempName}]`);
            for (let i of listImg) {
               if (i.name === element.tempName) {
                  i.value = element.img;
               }
            }
         });
         tempOther_2_Img.forEach((element) => {
            const listImg = $$(`input[name=${element.tempName}]`);
            for (let i of listImg) {
               if (i.name === element.tempName) {
                  i.value = element.img;
               }
            }
         });
         tempOther_3_Img.forEach((element) => {
            const listImg = $$(`input[name=${element.tempName}]`);
            for (let i of listImg) {
               if (i.name === element.tempName) {
                  i.value = element.img;
               }
            }
         });
         tempOther_4_Img.forEach((element) => {
            const listImg = $$(`input[name=${element.tempName}]`);
            for (let i of listImg) {
               if (i.name === element.tempName) {
                  i.value = element.img;
               }
            }
         });

         tempOther_5_Img.forEach((element) => {
            const listImg = $$(`input[name=${element.tempName}]`);
            for (let i of listImg) {
               if (i.name === element.tempName) {
                  i.value = element.img;
               }
            }
         });

         tempCheckSize.forEach((element) => {
            const listSize = $$(`input[name=${element.tempName}]`);
            for (let i of listSize) {
               if (i.value.trim().toLocaleLowerCase() === element.size.trim().toLocaleLowerCase()) {
                  i.checked = true;
                  i.parentNode.children[2].value = Number(element.qty);
               }
            }
         });
         handleSizeCheck();
      });

      countSize = 0;
   } else {
      if (templistColor.length !== tempClassItemColorSize - 1) {
         alert('Dữ liệu không hợp lệ (thiếu màu sắc). Vui lòng nhập lại từ đầu!');
         tempError = true;
         $('.dasboard-product-add__form').reset();
         return;
      } else {
         alert('Dữ liệu không hợp lệ (thiếu kích thước). Vui lòng nhập lại từ đầu!');
         tempError = true;
         $('.dasboard-product-add__form').reset();
         return;
      }
   }
};

const btnAddProcForm = $('#add_proc_form');

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

function uniqueSize(arr) {
   var newArr = [];
   for (var i = 0; i < arr.length; i++) {
      let flag = false;
      for (let j = 0; j < newArr.length; j++) {
         if (Number(newArr[j].size) === Number(arr[i].size)) {
            flag = true;
            break;
         }
         flag === false;
      }
      if (flag === false) {
         newArr.push(arr[i]);
      }
   }
   return newArr;
}

function unique(arr) {
   var newArr = [];
   for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
         newArr.push(arr[i]);
      }
   }
   return newArr;
}

function handleUpdate() {
   const listUpdate = $$('.main-dasboard__product-item-update');

   for (let i = 0; i < listUpdate.length; i++) {
      listUpdate[i].onclick = () => {
         btnMainProc.style.display = 'flex';

         const tempProc = ListProduct.getProducts[i];

         $('#id_product').value = tempProc._id;
         $('#name_product').value = tempProc.name;
         $('#description_product').value = tempProc.description;
         $('#price_product').value = Number(tempProc.price.replaceAll(',', ''));

         if (tempProc.shoeTypes.gender === 'Nam') {
            $('#male').checked = true;
         } else $('#female').checked = true;

         const listColor = [
            { tempName: 'white', color: 'Trắng' },
            { tempName: 'black', color: 'Đen' },
            { tempName: 'green', color: 'Xanh lá' },
            { tempName: 'blue', color: 'Xanh dương' },
            { tempName: 'pink', color: 'Hồng' },
            { tempName: 'grey', color: 'Xám' },
            { tempName: 'yellow', color: 'Vàng' },
            { tempName: 'violet', color: 'Tím' },
         ];

         let tempColor = tempProc.colors.list[0];

         const nameColor = listColor.find((element) => element.color === tempColor);

         let listSize_Qty = tempProc.colors.detail[0].detail;

         $(`#c_1-${nameColor.tempName}`).checked = true;

         for (let i = 0; i < listSize_Qty.length; i++) {
            const tempElement = $(`#s_1-size-${listSize_Qty[i].size}`);
            tempElement.click();
            setTimeout(() => {
               tempElement.parentNode.children[2].value = listSize_Qty[i].qty;
            });
         }
         let tempImg = tempProc.colors.detail[0].imgs;
         $(`#img_1-first_img`).value = tempImg.firstImg;
         $(`#img_1-second_img`).value = tempImg.secondeImg;
         for (let i = 0; i < tempImg.orthers.length; i++) {
            $(`#img_1-orther_${i + 1}`).value = tempImg.orthers[i];
         }

         for (let index = 1; index < tempProc.colors.detail.length; index++) {
            setTimeout(() => {
               $('#btnAddColor_Size').click();

               setTimeout(() => {
                  tempColor = tempProc.colors.list[index];

                  const nameColor = listColor.find((element) => element.color === tempColor);
                  let listSize_Qty = tempProc.colors.detail[index].detail;
                  $(`#c_${index + 1}-${nameColor.tempName}`).checked = true;

                  for (let i = 0; i < listSize_Qty.length; i++) {
                     const tempElement = $(`#s_${index + 1}-size-${listSize_Qty[i].size}`);
                     tempElement.click();
                     setTimeout(() => {
                        tempElement.parentNode.children[2].value = listSize_Qty[i].qty;
                     });
                  }
                  let tempImg = tempProc.colors.detail[index].imgs;
                  $(`#img_${index + 1}-first_img`).value = tempImg.firstImg;
                  $(`#img_${index + 1}-second_img`).value = tempImg.secondeImg;
                  for (let i = 0; i < tempImg.orthers.length; i++) {
                     $(`#img_${index + 1}-orther_${i + 1}`).value = tempImg.orthers[i];
                  }
               }, 10);
            }, index * 50);
         }
      };
   }
}

handleUpdate();

function handleUpload() {
   btnAddProcForm.onclick = function () {
      tempError = false;
      const data = new FormData($('.dasboard-product-add__form'));
      var dataDetail = {};

      let tempColor = [];
      for (const [name, value] of data) {
         if (name.includes('-color')) {
            if (tempColor.includes(value)) {
               alert('Màu sắc không thể trùng nhau. Vui lòng thao tác lại!');
               return;
            }
            tempColor.push(value);
         }
         dataDetail[`${name}`] = `${value}`;
      }
      // console.log();

      btnAddListColorSize.onclick();

      if (tempError) {
         return;
      }

      let listSize = tempCheckSize.map((element) => element.size);
      listSize = unique(listSize);

      const listColor = templistColor.map((element) => element.color);
      let i = -1;
      const qty = tempCheckSize.reduce(
         (previousValue, currentValue) => Number(Number(previousValue) + Number(currentValue.qty)),
         0,
      );
      const detail = templistColor.map((element) => {
         i++;
         let detailNew = [];
         let detailTemp = tempCheckSize.map((element1) => {
            if (Number(element.tempName[2]) === Number(element1.tempName[2])) {
               return {
                  size: element1.size,
                  qty: element1.qty,
               };
            }
            return;
         });

         detailTemp.forEach((elementSize) => {
            if (elementSize) {
               detailNew.push(elementSize);
            }
         });

         detailNew = uniqueSize(detailNew);

         const listOther = [];

         const tenpListOther = [
            tempOther_1_Img[i].img || '',
            tempOther_2_Img[i].img || '',
            tempOther_3_Img[i].img || '',
            tempOther_4_Img[i].img || '',
            tempOther_5_Img[i].img || '',
         ];

         tenpListOther.forEach((elementOther) => {
            if (elementOther.trim() !== '') {
               listOther.push(elementOther);
            }
         });

         const sl = tempCheckSize.reduce((previousValue, currentValue) => {
            if (Number(element.tempName[2]) === Number(currentValue.tempName[2])) {
               return Number(Number(previousValue) + Number(currentValue.qty));
            }
            return Number(previousValue);
         }, 0);

         return {
            color: element.color,
            imgs: {
               firstImg: tempFirstImg[i].img || '',
               secondeImg: tempSecondImg[i].img || '',
               orthers: listOther,
            },
            qty: sl,
            detail: detailNew,
         };
      });
      setTimeout(() => {
         ListProduct.add(
            new Product(
               $('#id_product').value,
               dataDetail.name_product,
               dataDetail.description_product,
               numberMoney(dataDetail.price_product.toString())[0] !== ','
                  ? numberMoney(dataDetail.price_product.toString())
                  : numberMoney(dataDetail.price_product.toString()).replace(',', ''),
               qty,
               true,
               {
                  gender: dataDetail.gender_product,
                  type: $('#category_product').options[$('#category_product').selectedIndex].text,
               },
               listSize,
               {
                  list: listColor,
                  detail,
               },
               0,
            ),
         );
      });
   };
}

setTimeout(() => {
   handleUpload();
}, 10);

function handleDel() {
   const btnDel = $$('.main-dasboard__product-item-delete');

   for (let element of btnDel) {
      element.onclick = function () {
         const parrentElement = element.parentNode.parentNode.parentNode.children[1];
         const tempText = prompt('Nhập "Ok" để đồng ý xoá!');
         if (tempText === 'Ok') {
            ListProduct.delete(parrentElement.innerText);
            alert('Xoá sản phẩm thành công!');
            document.location.reload();
         } else alert('Xoá sản phẩm thất bại!');
      };
   }
}

handleDel();

const btnMore = $('#nextPageWishList');
if (ListProduct.getProducts.length > curPage) btnMore.style.display = 'flex';

btnMore.onclick = function () {
   curPage += 10;
   if (ListProduct.getProducts.length <= curPage) {
      btnMore.style.display = 'none';
      curPage = ListProduct.getProducts.length;
   }
   innerProc.innerHTML = filterViewProc(ListProduct.getProducts.slice(0, curPage));
   handleUpdate();
   handleDel();
};

import ListProduct from '../../app/controllers/ProductController.js';
import Product from '../../app/models/Product.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
            .join(',,,,')
            .toString()
            .replaceAll(',,,,', '')}
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
      if (templistColor.length !== tempClassItemColorSize - 1) alert('Bạn chưa chọn màu sắc!');
      else alert('Bạn chưa chọn kích thước!');
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

btnAddProcForm.onclick = function () {
   const data = new FormData($('.dasboard-product-add__form'));
   var dataDetail = {};

   for (const [name, value] of data) {
      dataDetail[`${name}`] = `${value}`;
   }

   btnAddListColorSize.onclick();

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
   ListProduct.add(
      new Product(
         $('#id_product').value,
         dataDetail.name_product,
         dataDetail.description_product,
         numberMoney(dataDetail.price_product.toString())[0] !== ','
            ? numberMoney(dataDetail.price_product.toString())[0]
            : numberMoney(dataDetail.price_product.toString()).replace(',', ''),
         qty,
         true,
         { gender: dataDetail.gender_product, type: dataDetail.category_product.split(' (')[0] },
         listSize,
         {
            list: listColor,
            detail,
         },
         0,
      ),
   );
};

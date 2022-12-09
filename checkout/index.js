const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

import ListCart from '../app/controllers/CartController.js';

//check login
let isLogin = false;

let arr_account_local = [],
   nameUserLogin,
   emailUserLogin,
   phoneUserLogin,
   addressUserLogin;
arr_account_local = JSON.parse(localStorage.getItem('arr_account'));
(function check_login() {
   const user = JSON.parse(localStorage.getItem('current_account'));
   if (user) {
      var val_tk = user.tk;
      var val_mk = user.mk;
      for (var i = 0; i < arr_account_local.length; i++) {
         if (val_tk == arr_account_local[i].tk && val_mk == arr_account_local[i].mk) {
            isLogin = true;
            nameUserLogin = arr_account_local[i].ho + ' ' + arr_account_local[i].ten;
            emailUserLogin = arr_account_local[i].tk;
            phoneUserLogin = arr_account_local[i].sdt;
            addressUserLogin = arr_account_local[i].diachi;
         }
      }
   }
})();

const _login = $('.main-detail');

if (isLogin) {
   if (_login) {
      _login.style.display = 'none';
   }

   const nameUser = $('#name_user');
   const phoneUser = $('#phone_user');
   const emailUser = $('#email_user');
   const addressUser = $('#address_user');

   if (nameUser) nameUser.value = nameUserLogin;
   if (emailUser) emailUser.value = emailUserLogin;
   if (phoneUser) phoneUser.value = phoneUserLogin;
   if (addressUser) addressUser.value = addressUserLogin;
} else _login.style.display = 'block';

const listAddress = [
   {
      tinh: 'Hồ Chí Minh',
      huyen: [
         {
            title: 'Quận 1',
            xa: ['Phường Bến Nghé', 'Phường Bến Thành', 'Phường Cầu Kho', 'Phường Đa Kao'],
         },
         {
            title: 'Quận 3',
            xa: [
               'Phường 1',
               'Phường 2',
               'Phường 3',
               'Phường 4',
               'Phường 5',
               'Phường 6',
               'Phường 7',
            ],
         },
         {
            title: 'Quận 5',
            xa: [
               'Phường 1',
               'Phường 2',
               'Phường 3',
               'Phường 4',
               'Phường 5',
               'Phường 6',
               'Phường 7',
            ],
         },
         {
            title: 'Quận 7',
            xa: [
               'Phường Tân Quy',
               'Phường Phú Nhuận',
               'Phường Tân Hưng',
               'Phường Tân Kiểng',
               'Phường Tân Phong',
            ],
         },
         {
            title: 'Quận 11',
            xa: [
               'Phường 1',
               'Phường 2',
               'Phường 3',
               'Phường 4',
               'Phường 5',
               'Phường 6',
               'Phường 7',
            ],
         },
         {
            title: 'Quận Gò Vấp',
            xa: [
               'Phường 1',
               'Phường 2',
               'Phường 3',
               'Phường 4',
               'Phường 5',
               'Phường 6',
               'Phường 7',
            ],
         },
         {
            title: 'Thành Phố Thủ Đức',
            xa: [
               'Phường An Khánh',
               'Phương An Phú',
               'Phường Linh Đông',
               'Phường Linh Tây',
               'Phường Linh Xuân',
            ],
         },
      ],
   },
   {
      tinh: 'Hà Nội',
      huyen: [
         {
            title: 'Huyện Ba Vì',
            xa: ['Xã Ba Trại', 'Xã Ba Vì', 'Xã Chu Minh', 'Xã Châu Sơn', 'Xã Cấm Linh', 'Xã Cổ Đô'],
         },
         {
            title: 'Huyện Chương Mỹ',
            xa: ['Thị trấn Trúc Sơn', 'Thị trấn Xuân Mai', 'Xã Hoàng Diệu', 'Xã Hoàng Văn Thụ'],
         },
         { title: 'Huyện Gia Lâm', xa: ['Xã Kim Lan', 'Xã Kim Sơn', 'Xã Lệ Chi'] },
         {
            title: 'Quận Ba Đình',
            xa: ['Phường Ngọc Hà', 'Phường Ngọc Khánh', 'Phường Quốc Xá', 'Phường Quán Thánh'],
         },
      ],
   },
];

const listTinh = $('#customer_shipping_province');
const listHuyen = $('#customer_shipping_district');
const listXa = $('#customer_shipping_ward');

if (listTinh) {
   listTinh.innerHTML =
      listTinh.innerHTML +
      listAddress
         .map((element) => {
            return `
        <option id = "id_Tinh">${element.tinh}</option>
        `;
         })
         .join('');

   listTinh.onchange = () => {
      if (listTinh.value !== 'Chọn tỉnh / thành') {
         listAddress.find((element, index) => {
            if (element.tinh === listTinh.value) {
               listHuyen.innerHTML =
                  listHuyen.innerHTML +
                  listAddress[index].huyen
                     .map((element1) => {
                        return `
                           <option id = "id_Huyen">${element1.title}</option>
                           `;
                     })
                     .join('');

               setTimeout(() => {
                  const listHuyen = $('#customer_shipping_district');
                  listHuyen.onchange = () => {
                     if (listHuyen.value !== 'Chọn quận / huyện') {
                        listAddress[index].huyen.find((element, index1) => {
                           if (element.title === listHuyen.value) {
                              console.log(element);
                              listXa.innerHTML =
                                 listXa.innerHTML +
                                 element.xa
                                    .map((element1) => {
                                       return `
                              <option id = "id_Xa">${element1}</option>
                              `;
                                    })
                                    .join('');
                              return true;
                           }
                        });
                     }
                  };
               });
               return true;
            }
         });
      }
   };
}

function ViewProc({ name = '', price = '', img = '', _id = '', size = '', color = '', qty = '' }) {
   return `
   <div class="sidebar_item_proc" data-id = "${_id}">
      <div class="sidebar_item_img">
         <img
            src="${img}"
            alt="${name} (${color})"
         />
         <div class="sidebar_item_count">${qty}</div>
      </div>
      <div class="sidebar_item_inf">
         <h4 class="sidebar_item_title">${name} (${color})</h4>
         <p class="sidebar_item_description">${color} / ${size}</p>
      </div>
      <div class="sidebar_item_price">${price} ₫</div>
   </div>
   `;
}

const listProc = $('.list_proc');

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

const totelCartView = $('.order-summary-emphasis');
const totelCartView1 = $('.payment-due-price');

function totalCarts(totelCartView) {
   const totalCarts = ListCart.getCarts.reduce((total, curValue) => {
      return Number(total + Number(curValue.product.price.replaceAll(',', '') * curValue.qty));
   }, 0);

   const total = numberMoney(totalCarts.toString());

   totelCartView.innerHTML = `${total[0] === ',' ? total.replace(',', '') : total} ₫`;
}

const showProc = (listCart) => {
   listProc.innerHTML = listCart
      .map((element, index) => {
         const totalTemp = Number(element.qty) * Number(element.product.price.replaceAll(',', ''));
         let imgTemp;
         element.product.colors.detail.find((element1) => {
            if (element1.color === element.detail.option1) {
               imgTemp = element1.imgs.firstImg;
               return true;
            }
         });
         return ViewProc({
            name: element.product.name,
            price: numberMoney(totalTemp.toString()),
            img: imgTemp,
            _id: element.product._id,
            size: element.detail.option2,
            color: element.detail.option1,
            qty: element.qty,
         });
      })
      .join('');

   totalCarts(totelCartView);
   totalCarts(totelCartView1);
};

showProc(ListCart.getCarts);

const btnPayment = $('.step-footer-continue-btn');
const btnFinishPayment = $('.step-footer-finish-btn');

const formMain = $('#form_inf_delivery');

if (btnPayment) {
   btnPayment.onclick = () => {
      if (listTinh.value === 'Chọn tỉnh / thành') {
         alert('Bạn chưa chọn tỉnh / thành!');
      } else if (listHuyen.value === 'Chọn quận / huyện') {
         alert('Bạn chưa chọn quận / huyện!');
      } else if (listXa.value === 'Chọn xã / phường') {
         alert('Bạn chưa chọn xã / phường!');
      } else {
         $('#btnSubmit').click();
      }
   };
}

const methodPayment = $('#payment_method_id_662340');

if (btnFinishPayment) {
   btnFinishPayment.onclick = () => {
      if (methodPayment.checked) {
         alert('Chúc mừng bạn đã mua hàng thành công!');

         const user = JSON.parse(localStorage.getItem('current_account'));

         const checkBill = JSON.parse(localStorage.getItem('Bill'));

         if (checkBill) {
            console.log(checkBill);
            const bill = [
               {
                  _id: Math.floor(Math.random() * 100),
                  user_id: user.tk,
                  cart: JSON.parse(localStorage.getItem('Carts')),
               },
            ];

            const tempBill = checkBill.concat(bill);

            localStorage.setItem('Bill', JSON.stringify(tempBill));
         } else {
            const bill = [
               {
                  _id: Math.floor(Math.random() * 100),
                  user_id: user.tk,
                  cart: JSON.parse(localStorage.getItem('Carts')),
               },
            ];
            localStorage.setItem('Bill', JSON.stringify(bill));
         }
         localStorage.removeItem('Carts');
         window.location.href = '/';
      }
   };
}

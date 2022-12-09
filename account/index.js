const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//routing
const urlParams = new URLSearchParams(window.location.search);

function ItemPoc({ name = ' ', color = '', size = '', qty = '', price = '', img = '' }) {
   return `
    <ul
        class="main-dashboard__order-detail main-dashboard__order-detail-content"
    >
        <li style="flex: 1">
            <div class="main-dashboard__order-item-proc">
            <div class="main-dashboard__order-item-img">
                <img
                    src="${img}"
                    alt=" ${name} (${color})"
                />
            </div>
            <h4 class="main-dashboard__order-item-title">
                ${name} (${color})
            </h4>
            </div>
        </li>
        <li style="width: 20%">${color} - ${size}</li>
        <li style="width: 5%">${qty}</li>
        <li style="width: 17%">${price}</li>
    </ul>
    `;
}

function ViewBill({ bill_id = '', total = '', listIem = [] }) {
   return `
    <tr class="main-dashboard__order-item">
        <td class="main-dashboard__order-item-id">
            <p>${bill_id}</p>
        </td>
        <td class="main-dashboard__order-item-list">
            ${ShowItemOfBill(listIem)}
        </td>
        <td class="main-dashboard__order-item-total-price">
            <p>${total} ₫</p>
        </td>
    </tr>
    `;
}

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

function ShowBill(listBill) {
   return listBill.map((element) => {
      let totalTemp = 0;
      element.cart.forEach((element) => {
         totalTemp += Number(element.qty) * Number(element.product.price.replaceAll(',', ''));
         return;
      });

      return ViewBill({
         bill_id: element._id,
         total: numberMoney(totalTemp.toString()),
         listIem: element.cart,
      });
   });
}

function ShowItemOfBill(listIem) {
   return listIem
      .map((element) => {
         let imgTemp;
         element.product.colors.detail.find((element1) => {
            if (element1.color === element.detail.option1) {
               imgTemp = element1.imgs.firstImg;
               return true;
            }
         });
         return ItemPoc({
            name: element.product.name,
            color: element.detail.option1,
            size: element.detail.option2,
            qty: element.qty,
            price: element.product.price,
            img: imgTemp,
         });
      })
      .join('');
}

const content = $('.main-dashboard__order-item-wrapper');

if (urlParams.get('view')) {
   $('.content__bill').style.display = 'block';
   $('.wrap_content_account').style.display = 'none';

   const curUser = JSON.parse(localStorage.getItem('current_account'));
   const listBills = JSON.parse(localStorage.getItem('Bill'));
   let bill = [];
   for (let element of listBills) {
      if (element.user_id === curUser.tk) {
         bill.push(element);
      }
   }

   if (bill.length > 0) {
      content.innerHTML = ShowBill(bill);
   } else {
      content.innerHTML = 'Bạn chưa có đơn hàng nào!';
   }
} else {
   $('.content__bill').style.display = 'none';
   $('.wrap_content_account').style.display = 'block';
}

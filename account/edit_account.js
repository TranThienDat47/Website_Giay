var ui_last_name = document.getElementById('last_name');
var ui_first_name = document.getElementById('first_name');
var ui_phone = document.getElementById('phone_ac');
var ui_staff_address = document.getElementById('staff_address');
var btn_update_data = document.getElementsByClassName('btn button m-b-10');
var ui_mk = document.getElementById('mk');
var ui_sex_nu = document.getElementById('radio1');
var ui_sex_nam = document.getElementById('radio2');
var ui_mail = document.getElementById('email');

var ui_hoten_left = document.querySelector('.AccountSidebar .AccountTitle span');

var arr_acc = [];
arr_acc = JSON.parse(localStorage.getItem('arr_account'));
var acc_now = [];
acc_now = JSON.parse(localStorage.getItem('current_account'));
ui_hoten_left.innerHTML = acc_now.ho + ' ' + acc_now.ten;

ui_last_name.value = acc_now.ho;
ui_first_name.value = acc_now.ten;
ui_phone.value = acc_now.sdt;
ui_staff_address.value = acc_now.diachi;
ui_mk.value = acc_now.mk;
ui_mail.value = acc_now.tk;
if (acc_now.sex == 'Nữ') {
   ui_sex_nu.checked = true;
} else {
   ui_sex_nam.checked = true;
}

btn_update_data[0].onclick = () => {
   update_data();
};

function account(tk, mk, sex, ho, ten, sdt, diachi) {
   // Hàm khởi tạo
   this.tk = tk; // this tham khảo đến đối tượng cần tạo
   this.mk = mk;
   this.sex = sex;
   this.ho = ho;
   this.ten = ten;
   this.sdt = sdt;
   this.diachi = diachi;
}

function update_data() {
   var upd_tk = ui_mail.value;

   var upd_ho = ui_last_name.value;
   if (upd_ho == '') {
      upd_ho = acc_now.ho;
   }
   var upd_ten = ui_first_name.value;
   if (upd_ten == '') {
      upd_ten = acc_now.ten;
   }

   if (is_phonenumber(ui_phone.value) == true) {
      var upd_sdt = ui_phone.value;
   } else {
      alert('SỐ ĐIỆN THOÀI KHÔNG PHÙ HỢP');
      var upd_sdt = acc_now.sdt;
   }

   var upd_diachi = ui_staff_address.value;
   var upd_mk = ui_mk.value;
   var upd_sex = 'Nữ';
   if (ui_sex_nam.checked == true) {
      upd_sex = 'Nam';
   }
   var p1 = new account(upd_tk, upd_mk, upd_sex, upd_ho, upd_ten, upd_sdt, upd_diachi);
   localStorage.setItem('current_account', JSON.stringify(p1));

   //thay đổi dữ liệu acc hiện tại trong arr_account
   for (var i = 0; i < arr_acc.length; i++) {
      if (acc_now.tk == arr_acc[i].tk) {
         arr_acc.splice(i, 1);
         arr_acc.push(p1);
         localStorage.setItem('arr_account', JSON.stringify(arr_acc));
         acc_now = JSON.parse(localStorage.getItem('current_account'));
         ui_hoten_left.innerHTML = acc_now.ho + ' ' + acc_now.ten;

         window.location.href = 'index.html';
      }
   }
}

function is_phonenumber(phonenumber) {
   var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
   if (phonenumber.match(phoneno)) {
      return true;
   } else {
      return false;
   }
}

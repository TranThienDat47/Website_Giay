var btn_res = document.getElementById('btn_res');
var tf_ho = document.getElementById('ho');
var tf_ten = document.getElementById('ten');
var rd_nu = document.getElementById('radio1');
var rd_nam = document.getElementById('radio2');
var tf_tk = document.getElementById('taikhoan');
var tf_mk = document.getElementById('matkhau');
var tf_sdt = document.getElementById('sdt');
var tf_diachi = document.getElementById('diachi');

//thẻ hiện chữ "đang kí thành công"
var label_correct = document.getElementsByClassName('correct');
var label_error = document.getElementsByClassName('errors');
var label_error_mail = document.getElementsByClassName('errors_mail');

var arr_local = JSON.parse(localStorage.getItem('arr_account'));
var arr_acc = [];
arr_acc = arr_local;

const btnHideShowPassword = document.querySelector('#btnShowHidePassword');

btnHideShowPassword.onclick = function () {
   var x = document.getElementById('matkhau');
   if (x.type === 'password') {
      btnHideShowPassword.classList.add('hidePassWord');
      btnHideShowPassword.classList.remove('showPassWord');
      x.type = 'text';
   } else {
      btnHideShowPassword.classList.remove('hidePassWord');
      btnHideShowPassword.classList.add('showPassWord');
      x.type = 'password';
   }
};

function check_login() {
   const user = JSON.parse(localStorage.getItem('current_account'));
   if (user) {
      var val_tk = user.tk;
      var val_mk = user.mk;
      for (var i = 0; i < arr_acc.length; i++) {
         if (val_tk == arr_acc[i].tk && val_mk == arr_acc[i].mk) {
            window.location.href = '/';
         }
      }
   }
}

check_login();

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
if (arr_acc == null) {
   // acc mặc định
   arr_acc = [];
   var p1 = new account('admin@gmail.com', 1, 'Nam', 'Minh', 'Khoa', '0795858555', '4 bể là nhà');
   arr_acc.push(p1);
   localStorage.setItem('arr_account', JSON.stringify(arr_acc));
}

function add_arr() {
   var sex = 'Nữ';
   if (rd_nam.checked == true) {
      sex = 'Nam';
   }
   var p1 = new account(
      tf_tk.value,
      tf_mk.value,
      sex,
      tf_ho.value,
      tf_ten.value,
      tf_sdt.value,
      tf_diachi.value,
   );
   var check_same = false;
   for (var i = 0; i < arr_acc.length; i++) {
      if (p1.tk == arr_acc[i].tk) {
         check_same = true;
         return false;
      }
   }
   if (check_same == false) {
      arr_acc.push(p1);
      return true;
   }
}

btn_res.onclick = () => {
   label_correct[0].style.display = 'none';
   label_error[0].style.display = 'none';
   label_error_mail[0].style.display = 'none';

   var check = true;

   label_error[0].children[0].innerHTML = 'Thông tin đăng kí không hợp lệ.';
   label_error_mail[0].children[0].innerHTML = 'Email đã được sử dụng.';

   if (check_res() == false) {
      label_error[0].children[0].innerHTML = 'Họ Tên hoặc tài khoản không hợp lệ.';
      label_error[0].style.display = 'block';
      document.querySelector('.content-center').scrollIntoView();

      check = false;
      return;
   }
   if (checkEmail() == false) {
      label_error_mail[0].children[0].innerHTML = 'Email không hợp lệ!';
      label_error_mail[0].style.display = 'block';
      document.querySelector('#field-gender').scrollIntoView();
      check = false;
      return;
   }
   if (is_phonenumber() == false) {
      label_error[0].children[0].innerHTML = 'Số điện thoại không hợp lê.';
      label_error[0].style.display = 'block';
      document.querySelector('.content-center').scrollIntoView();
      check = false;
   }

   var sex = 'Nữ';
   if (rd_nam.checked == true) {
      sex = 'Nam';
   }
   var p1 = new account(
      tf_tk.value,
      tf_mk.value,
      sex,
      tf_ho.value,
      tf_ten.value,
      tf_sdt.value,
      tf_diachi.value,
   );

   for (var i = 0; i < arr_acc.length; i++) {
      if (p1.tk == arr_acc[i].tk) {
         check = false;
         label_error_mail[0].style.display = 'block';
      }
   }

   if (check == true) {
      arr_acc.push(p1);
      localStorage.setItem('arr_account', JSON.stringify(arr_acc));
      label_correct[0].style.display = 'block';
      clear_tf();
      window.location.href = '/login';
   } else {
      label_error[0].style.display = 'block';
      document.querySelector('.content-center').scrollIntoView();
   }
};

function check_res() {
   if (
      tf_ho.value == '' ||
      tf_ten.value == '' ||
      tf_tk.value == '' ||
      tf_mk.value == '' ||
      (rd_nam.checked == false && rd_nu.checked == false)
   ) {
      return false;
   } else {
      return true;
   }
}

function is_phonenumber() {
   var phonenumber = tf_sdt.value;
   var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
   if (phonenumber.match(phoneno)) {
      return true;
   } else {
      return false;
   }
}

function checkEmail() {
   var filter = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   if (!filter.test(tf_tk.value)) {
      return false;
   } else {
      return true;
   }
}

function clear_tf() {
   tf_ho.value = '';
   tf_ten.value = '';
   tf_tk.value = '';
   tf_mk.value = '';
   tf_diachi.value = '';
   tf_sdt.value = '';
   rd_nam.checked = false;
   rd_nu.checked = false;
}

import ImgAnimation from '../components/ImgAnimation/index.js';

const $ = document.querySelector.bind(document);

$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_4_eff4b4e0d3e5496790737063aefc92d5.jpg',
);
$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_1_fcccf4c902ec4c5dbffb267d55480361.jpg',
);
$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_2_eb3aab14e3c4460598b186581e14319c.jpg',
);
$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_3_4ea1528b7b6c4b768edca82c5177b63f.jpg',
);
$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_5_796788d0cc3c4cb8becdd4095b9657ec.jpg',
);
$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_6_cbc7d744bbad464393bbf3b378eb17e0.jpg',
);
$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_7_c8ce843f94c74e0e8e8aa51372ddf97b.jpg',
);
$('.img_footer').innerHTML += ImgAnimation(
   'https://file.hstatic.net/200000522597/file/240x240_8_bfbc1f9a56f24921979f053befbb7d67.jpg',
);

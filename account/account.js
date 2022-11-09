var acc_now=JSON.parse(localStorage.getItem("current_account"));
// console.log(acc_now);

var ui_hoten_left=document.querySelector('.AccountSidebar .AccountTitle span')
var ui_hoten_right=document.querySelector('.col-12  .name_account .infor_detail')
var ui_mail=document.querySelector('.col-12  .email  .infor_detail')
var ui_sex=document.querySelector('.col-12  .sex   .infor_detail')
var ui_address=document.querySelector('.col-12  .address    .infor_detail')
var ui_phonenumber=document.querySelector('.col-12  .phone_number    .infor_detail')


var hovaten=acc_now.ho +" "+ acc_now.ten

ui_hoten_left.innerHTML=hovaten 
ui_hoten_right.innerHTML=hovaten
ui_mail.innerHTML=acc_now.tk
ui_sex.innerHTML=acc_now.sex
ui_address.innerHTML=acc_now.diachi
ui_phonenumber.innerHTML=acc_now.sdt
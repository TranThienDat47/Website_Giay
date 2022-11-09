var login = document.getElementsByClassName("form_login");
//đây là form repâss
var re_pass = document.getElementsByClassName("recover_pass_form");
var erro_login=document.getElementsByClassName("errors")
//đây là nút khi ấn vào là gửi re pass
var active_re_pass=document.getElementsByClassName("btn_re_pas")
var tf_email_repass=document.querySelector(".recover_pass_form #tf_email_repass")

var tk=document.getElementById("taikhoan")
var mk=document.getElementById("matkhau")



var btn_login=document.getElementById('dangnhap')
//đây là chữ khi ấn vào thì chuyển sang form re pass
var btn_re_pass=document.getElementById('req_pas')
var btn_cancer_re_pass=document.getElementById('cancer_repass')

var arr_account_local=[]
arr_account_local=JSON.parse(localStorage.getItem("arr_account"));

function account(tk, mk, sex,ho,ten,sdt,diachi) {         // Hàm khởi tạo
    this.tk = tk;                         // this tham khảo đến đối tượng cần tạo
    this.mk = mk;
    this.sex = sex;
    this.ho=ho;
    this.ten=ten;
    this.sdt=sdt;
    this.diachi=diachi
  }
 if(arr_account_local==null){
    // acc mặc định
    arr_account_local=[]
    var p1 = new account("minelady92@gmail.com",1,"Nam","Minh","Khoa","0909090909","456"); 
    arr_account_local.push(p1)
    localStorage.setItem("arr_account", JSON.stringify(arr_account_local));
 }



active_re_pass[0].onclick=()=>{
    for(var i=0;i<arr_account_local.length;i++){
        if(tf_email_repass.value==arr_account_local[i].tk)
        {
            alert("MẬT KHẨU CỦA BẠN LÀ : "+arr_account_local[i].mk)
        }
    }
    
}


btn_login.onclick=()=>{
    dangnhap()
    
}
btn_re_pass.onclick=()=>{
    req_pass()
}
btn_cancer_re_pass.onclick=()=>{
    return_login()
}
function req_pass(){
   login[0].style.display="none"
   re_pass[0].style.display="block"

}

function return_login(){
    login[0].style.display="block"
    re_pass[0].style.display="none"
}

function dangnhap(){
    var val_tk=tk.value
    var val_mk=mk.value
    
    if (val_mk=="" || val_tk=="" || checkEmail()==false)
    {
       
        erro_login[0].style.display="block"
    }
    else if(check_login()==true){
        
        window.location.href="../account/index.html"
    }
    else{
        erro_login[0].style.display="block"
    }
}

function check_login(){
    
    var val_tk=tk.value
    var val_mk=mk.value
    for(var i=0;i<arr_account_local.length;i++)
    {
        if(val_tk==arr_account_local[i].tk && val_mk==arr_account_local[i].mk)
        {
            localStorage.removeItem('current_account');
            localStorage.setItem("current_account", JSON.stringify(arr_account_local[i]));
          
            return true
          
            
        }
       
        
    }
    
}


function checkEmail() { 
   
    var filter =  /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!filter.test(tk.value)) { 
           
             return false; 
    }
} 










import ImgAnimation from '../components/ImgAnimation/index.js'

const $=document.querySelector.bind(document)

$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_4_eff4b4e0d3e5496790737063aefc92d5.jpg');
$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_1_fcccf4c902ec4c5dbffb267d55480361.jpg');
$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_2_eb3aab14e3c4460598b186581e14319c.jpg');
$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_3_4ea1528b7b6c4b768edca82c5177b63f.jpg');
$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_5_796788d0cc3c4cb8becdd4095b9657ec.jpg');
$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_6_cbc7d744bbad464393bbf3b378eb17e0.jpg');
$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_7_c8ce843f94c74e0e8e8aa51372ddf97b.jpg');
$('.img_footer').innerHTML += ImgAnimation(
'https://file.hstatic.net/200000522597/file/240x240_8_bfbc1f9a56f24921979f053befbb7d67.jpg');
    

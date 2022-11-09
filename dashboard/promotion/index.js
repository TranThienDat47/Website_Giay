const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPlayPause = $('.main-dashboard__promotion-item-pause-play');
const btnDel = $('.main-dashboard__promotion-item-delete');

btnPlayPause.onclick = function () {
   if (
      btnPlayPause.classList.contains('play') &&
      confirm('Bạn có muốn dừng chương trình khuyến mãi?')
   ) {
      btnPlayPause.classList.remove('play');
      btnPlayPause.classList.add('pause');
   } else if (
      btnPlayPause.classList.contains('pause') &&
      confirm('Bạn có muốn bắt đầu chương trình khuyến mãi?')
   ) {
      btnPlayPause.classList.remove('pause');
      btnPlayPause.classList.add('play');
   }
};

btnDel.onclick = function () {
   if (confirm('Bạn chắc chắn muốn xoá chương trình khuyến mãi này?')) {
   }
};

// check all
const checkAll = $('#select__all');

checkAll.onclick = function () {
   const listCheck = $$('.select__one');
   if (checkAll.checked === true) {
      for (let i of listCheck) {
         i.checked = true;
      }
   } else {
      for (let i of listCheck) {
         i.checked = false;
      }
   }
};

//cancle
const btnCancle = $('.dasboard-promotion-add__form-submit.cancle');
const formAddProc = $('.dasboard-promotion-add__form');
const btnMainProc = $('.dasboard-promotion-add');
const btnAddWrapper = $('.main-dashboard__promotion-add');

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

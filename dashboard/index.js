const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listMenu = $$('.sidebar__middle-item');

for (let element of listMenu) {
   element.onclick = function () {
      for (let element1 of listMenu) {
         element1.classList.remove('sidebar-active');
      }
      element.classList.add('sidebar-active');
   };
}

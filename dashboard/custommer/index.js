const btnBans = document.querySelectorAll('.main-dashboard__custommer-item-ban');
for (let element of btnBans) {
   element.onclick = function () {
      const userName = element.parentNode.parentNode.parentNode.children[1].children[0].textContent;
      const value = prompt(
         `Bạn có muốn chắn chặn người dùng có email ${userName} này?\nNhập "Ok" để đồng ý:`,
      );
      if (value === 'Ok') {
         alert('Chặn người dùng thành công!');
      }
   };
}

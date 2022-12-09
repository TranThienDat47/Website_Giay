import ListProduct from '../../app/controllers/ProductController.js';

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

let listCategory = [
   {
      collection: '',
      title: 'Nam',
      detail: [
         {
            second: 'Hunter',
            third: [],
            collection: '/collections/nam/index.html?type=hunter-nam',
         },
         {
            second: 'Sandal',
            third: [],
            collection: '/collections/nam/index.html?type=sandal-nam-1',
         },
         {
            second: 'Giày Thể Thao',
            third: [],
            collection: '/collections/nam/index.html?type=giay-the-thao-nam',
         },
         {
            second: 'Giày Chạy Bộ',
            third: [],
            collection: '/collections/nam/index.html?type=hunter-running-nam',
         },
         {
            second: 'Giày Đá Banh',
            third: [],
            collection: '/collections/nam/index.html?type=giay-da-banh',
         },
         {
            second: 'Giày Tây',
            third: [],
            collection: '/collections/nam/index.html?type=giay-tay-nam',
         },
         { second: 'Dép', third: [], collection: '/collections/nam/index.html?type=dep-nam' },
         {
            second: 'Phụ Kiện',
            third: [],
            collection: '/collections/nam/index.html?type=phu-kien',
         },
      ],
   },
   {
      collection: 'nu',
      title: 'Nữ',
      detail: [
         {
            second: 'Hunter',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=hunter',
         },
         {
            second: 'GOSTO',
            third: [
               {
                  name: 'Giày Cao Gót',
                  collection: '/collections/nam/index.html?collection=nu&floor=3&type=giay-cao-got',
               },
               {
                  name: 'Giày Thời Trang',
                  collection:
                     '/collections/nam/index.html?collection=nu&floor=3&type=giay-the-thao-gosto',
               },
               {
                  name: 'Sandal',
                  collection: '/collections/nam/index.html?collection=nu&floor=3&type=sandal-gosto',
               },
               {
                  name: 'Dép',
                  collection: '/collections/nam/index.html?collection=nu&floor=3&type=dep-gosto',
               },
            ],
            collection: '/',
         },
         {
            second: 'Sandal',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=sandal-nu-1',
         },
         {
            second: 'Giày Búp Bê',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=giay-bup-be-nu',
         },
         {
            second: 'Giày Thời Trang',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=giay-thoi-trang-nu-1',
         },
         {
            second: 'Giày Chạy Bộ - Đi Bộ',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=hunter-running-jogging',
         },
         {
            second: 'Giày Thể Thao Nữ',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=giay-the-thao-nu',
         },
         {
            second: 'Dép',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=dep-nu',
         },
         {
            second: 'Túi xách',
            third: [],
            collection: '/collections/nam/index.html?collection=nu&type=tui-xach',
         },
      ],
   },
];

(function () {
   let tempThird = [];
   var xValues = [];
   for (let i = 0; i < listCategory.length; i++) {
      xValues = xValues.concat(
         listCategory[i].detail
            .map((element) => {
               if (element.third.length > 0) {
                  const temp = element.third.map(
                     (element1) => `${element1.name} (${listCategory[i].title})`,
                  );
                  tempThird = tempThird.concat(temp);
                  return 'NoData(Third)';
               } else return `${element.second} (${listCategory[i].title})`;
            })
            .concat(tempThird),
      );
   }
   xValues = xValues.filter((element) => {
      if (element !== 'NoData(Third)') {
         return true;
      }
   });

   var yValues = [];

   for (let i in xValues) {
      yValues.push(0);
   }

   let sumMax = 0;
   for (let i in xValues) {
      for (let j of ListProduct.getProducts) {
         if (
            (xValues[i].replace(' (Nam)', '') === j.shoeTypes.type &&
               j.shoeTypes.gender === 'Nam') ||
            (xValues[i].replace(' (Nữ)', '') === j.shoeTypes.type && j.shoeTypes.gender === 'Nữ')
         ) {
            yValues[i] += Number(j.qty);
            sumMax += yValues[i];
         }
      }
   }

   new Chart('myChart', {
      type: 'line',
      data: {
         labels: xValues,
         datasets: [
            {
               fill: true,
               lineTension: 0,
               backgroundColor: 'rgba(0,0,255,1.0)',
               borderColor: 'rgba(0,0,255,0.1)',
               data: yValues,
            },
         ],
      },
      options: {
         legend: { display: false },
         scales: {
            yAxes: [{ ticks: { min: 0, max: sumMax } }],
         },
      },
   });
})();

(function () {
   var xValues = ['Nam', 'Nữ', 'Khác'];
   var yValues = [0, 0, 0];
   var barColors = ['#b91d47', '#00aba9', '#2b5797'];

   const listUser = JSON.parse(localStorage.getItem('arr_account'));

   console.log(listUser);
   for (let j of listUser) {
      if (j.sex == 'Nam') {
         yValues[0]++;
      } else if (j.sex == 'Nữ') {
         yValues[1]++;
      } else {
         yValues[2]++;
      }
   }

   new Chart('myChart1', {
      type: 'pie',
      data: {
         labels: xValues,
         datasets: [
            {
               backgroundColor: barColors,
               data: yValues,
            },
         ],
      },
      options: {
         title: {
            display: true,
            text: 'Thống kê giới tính người dùng',
         },
      },
   });
})();

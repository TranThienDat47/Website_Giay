class ProductController {
   constructor(Products = []) {
      Products = JSON.parse(localStorage.getItem('Products')) || [];
      if (Products.length <= 0) {
         Products = [
            {
               _id: '1',
               name: 'Giày Thể Thao Nam Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,050,000',
               qty: 338,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Xám', 'Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Xám',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__2__4d84d50f5d9741f6b6d74dcd716f4176.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__5__113fd43149a74ead82897abb58b78cf9.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__7__aa3b3ad4ee1d423b858e9cf8fc652756.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__6__5d70fee9e27a44c2aa845c298cb7fd8d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c8077d78927047d397b6eb8bb1da6a48.jpg',
                           ],
                        },
                        qty: 172,
                        detail: [
                           { size: '35', qty: '8' },
                           { size: '36', qty: '7' },
                           { size: '37', qty: '8' },
                           { size: '38', qty: '7' },
                           { size: '39', qty: '35' },
                           { size: '40', qty: '54' },
                           { size: '41', qty: '21' },
                           { size: '42', qty: '11' },
                           { size: '43', qty: '21' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__2__876e6ceee0bc4f4688dc0479beed3f30.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__5__70792867b9754641810abe461efb97de.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__3__b420481103274d29b8b250efb3f972e8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__7__b9f6abd2e6ee4c04a758f460f337335d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__6__343b6e824bc746e2b92de5d3321845d9.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__4__9d4a4f3d42d546ce930795846422a7a0.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_96b654dc2f84462bbbbd43fb42dea813.jpg',
                           ],
                        },
                        qty: 110,
                        detail: [
                           { size: '37', qty: '12' },
                           { size: '38', qty: '21' },
                           { size: '39', qty: '13' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '41' },
                           { size: '42', qty: '11' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__6ea6f065d44f4e1285017c2ad763b201.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__ea0cda5998a642b29c279d6025ab5155.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__25a02f3c98b9477e96fd991c4a65192f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__dd0f265a69d246eca51fbfe6a409326a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__7a9052a534d0401c8ce404add08046b6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__c2145f5f02aa490594fb506b8c431325.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_80ba72f18dff4409908e45862d1d779e.jpg',
                           ],
                        },
                        qty: 56,
                        detail: [
                           { size: '35', qty: '12' },
                           { size: '39', qty: '31' },
                           { size: '41', qty: '13' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '2',
               name: 'Giày Thể Thao Nam DSM076000TRG',
               description:
                  '- Đế: Cao su mới \n- Quai: Si Nubucks \n\n- Lót trong: Lưới \n\n- Điểm nhấn nổi bật: \n\n+ Giày thông dụng mới sử dụng đế cao su mới tăng tính ma sát, chống trơn trượt tạo cảm giác thoải mái khi di chuyển. \n\n+ Kiểu dáng trẻ trung, năng động phù họp với các đối tượng học sinh và khách hàng trẻ tuổi với các hoạt động như đi học, đi chơi\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '519,000',
               qty: 300,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0153_2149393560ad4d06bfc742b4b41d8447.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0156_4f9a6c68babb4e379bd51d2627854266.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0154_bd89004adf52457ca0c74edda2c8b5d8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0157_f824e655e4ff40bb903fa6fc88bc432a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0158_72a5b377b6bf48bb9090e14c8941d026.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0155_65f2df4c3d8a49089274bca8819de082.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c4b8f138e3a64272bb006635828aa9bb.jpg',
                           ],
                        },
                        qty: 226,
                        detail: [
                           { size: '36', qty: '21' },
                           { size: '37', qty: '41' },
                           { size: '38', qty: '51' },
                           { size: '39', qty: '71' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0160_7ab44233ce6144bab31be87383c510fc.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0161_9a99c7099c3a4580bbca6084e2bc75fe.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0164_07924db5b7ec4ec193b558c0488c2fd2.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0166_be2518c5d9c6443cb6c8ac17a483e938.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0165_196d05cc33fe4fe5b7a2e17b2e1f4851.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0162_ca7607ad29b44474b4ecf63ca8b5ad98.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_16c4d8b40f3046a684f55e683d29c479.jpg',
                           ],
                        },
                        qty: 74,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '11' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '3',
               name: 'Giày Thể Thao Nữ Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 120,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__2d0991d8535b4312ab1f699d96c09872.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__2a79f5a2a361402087a7c706f0281355.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__cc54860128134c3f8dac038650a52dc6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__9265153907604d37baa5744ed5a2d20d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__da00b3f212db48adbb92a90cd46e51c4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__0e65e8bf80ec433c9b97a5df6ac0f449.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_d03943379669476e9cb448422811d16d.jpg',
                           ],
                        },
                        qty: 120,
                        detail: [
                           { size: '35', qty: '31' },
                           { size: '36', qty: '21' },
                           { size: '37', qty: '13' },
                           { size: '38', qty: '14' },
                           { size: '39', qty: '15' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '14' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '4',
               name: 'Giày Thể Thao Nữ Hunter Street x VietMax Vietnam Arising',
               description:
                  "- Phom dáng cổ cao đầu tiên từ Biti's Hunter Street.\n\n- Mũ quai sử dụng chất liệu cao cấp là DA BÒ THẬT, kết hợp hoạ tiết trang trí Simili.\n\n- Lót quai thun cá sấu kháng khuẩn giúp hạn chế mùi hôi và ẩm mốc. Cấu trúc lót đa lớp kết hợp xốp dày và êm ái.\n\n- Lót đế trong (Insole) với chất liệu EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Đế (Outsole) với chất liệu EVA cao su R.E với tính năng mềm dẻo và nhẹ hơn rất nhiều so với cao su truyền thống, nhưng vẫn đảm bảo khả năng chịu mài mòn và va chạm. Độ Shore phù hợp, êm và nẩy tốt giúp bảo vệ và nâng đỡ bàn chân.\n\n- Đế hộp cao thành ôm gọn mũ quai và liền lạc với mặt đế thành một khối giúp sản phẩm bền bỉ và linh hoạt trong mọi tình\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.",
               price: '1,547,000',
               qty: 324,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0322_a561a175903d445eaf7758c8aa101c05.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__5__eb6191738e344e96a0e09f5378e24ea1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0323_e7f483e8ac4345d3b32fe90d1a4bd896.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__7__ee6af4896bf24b2c8b0cd235fa3ae5db.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__6__70327b9b84b0402e97f0ff348d36f498.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0324_e4f6924b45b44bc4bfc1613e5783c01d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_91a5df4051b249b593590947f2e77d88.jpg',
                           ],
                        },
                        qty: 324,
                        detail: [
                           { size: '35', qty: '21' },
                           { size: '36', qty: '111' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '31' },
                           { size: '39', qty: '81' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '16' },
                           { size: '43', qty: '17' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '5',
               name: 'Giày Thể Thao Nữ Hunter X DSWH10600',
               description:
                  '- Đế: IP/Cao su \n\n- Quai: Knits/ si Nubucks \n\n- Lót trong: \n\n- Điểm nhấn nổi bật: Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 527,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '38', '39', '40', '41', '44'],
               colors: {
                  list: ['Đen', 'Trắng'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__2__b2b752e4ce9c4cf091f3820c865c8cd7.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__5__415a47c6c1244dd3b2406e0b4ec72f3e.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__3__8c02684c7743438db591f622592224b3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__6__dcfbfcc9f3a140d9a07e127694a6eaf0.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__7__0c43bde1165f4a29885b26bc22dc906e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__4__f97ca0ac0e0049b7a0589260f6ac945c.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_580e79bbb7054f1f8bb36a39c0eb1b1f.jpg',
                           ],
                        },
                        qty: 302,
                        detail: [
                           { size: '36', qty: '134' },
                           { size: '38', qty: '125' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__2__5debe40c627e4577bc68abc16ab380e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__5__aae80cc20f3349acbdcf3c5e8c217bf1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__3__39b0c8d0a9124288b4f826dad998783f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__6__85c26f6103744891964c6a8bfd7bbf0e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__7__07b0f0e0e30a42cd95eb191a3dbf998c.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__4__a4e7171eff6d4280899b34e683f38336.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_edb0509b1a51409482027b05521804a2.jpg',
                           ],
                        },
                        qty: 225,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '51' },
                           { size: '40', qty: '71' },
                           { size: '41', qty: '41' },
                           { size: '44', qty: '41' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '6',
               name: 'Giày Thể Thao Nữ Hunter Street Cream',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Cream DSMH10400KEM/DSWH10400KEM (KEM)\n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 245,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['37', '38', '39', '40', '41', '42'],
               colors: {
                  list: ['Hồng'],
                  detail: [
                     {
                        color: 'Hồng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__2__8a828199b10b41fcadaa0ffe3708fa5f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__5__3861766063fe45b083a91173130a3dff.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__3__04fa61203a424d57bea439e2bbd67bfb.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__6__cfd2ebe3d7aa427f83df26e832bcd409.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__7__eb21767c76b248f3a2f21bc04d71eed3.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__4__9d1e287add05479cabd650c564618cca.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_a61daa8309bd4b3f915e9695cd2535f6.jpg',
                           ],
                        },
                        qty: 245,
                        detail: [
                           { size: '37', qty: '41' },
                           { size: '38', qty: '132' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '15' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '7',
               name: "Giày Thể Thao Nữ Hunter Street Bloomin' Central",
               description:
                  '- Đế #LiteTraction với chất liệu cao su EVA nhẹ và êm ái nâng đỡ bàn chân trên mọi trải nghiệm. Độ ma sát & bền bỉ cao, tự tin “cân" mọi thử thách.\n\n- Đệm lót EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,354,000',
               qty: 82,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__2__1933c95871ea4af59b4c6608191fb860.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__5__dcbc750bd8c64c57b78f7a30aa510683.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__3__336aa88a9a324ca789440346f10d975b.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__6__6a3c778fdf1d4aceaf2afe1aac566362.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__7__ce6faa939c544c7d8d20ad7d6e24edb7.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__4__f52da233bc7146ccbc5f83a835c5b0ac.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_fb46745b00ed4853a9ab360a25269439.jpg',
                           ],
                        },
                        qty: 82,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '12' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '21' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '8',
               name: 'Giày Thể Thao Nữ Hunter Street Black',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Black DSMH10400DEN/DSWH10400DEN (Đen) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 175,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '37', '38', '40', '41', '42'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__2__817bd4419dfe40c2af87116ebccdb55f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__5__b6be3a4bcda74ab7931b1c38c835c8f1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__3__e938addc53bf48cdaf500fca01a37815.jpg',
                              'src="https://product.hstatic.net/1000230642/product/dsmh10400den__7__238bff21a5b94a9097fead1e4329fcf3.jpg"',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__6__be3f413838544eac95f9618009673e89.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__4__e52b0912bb394aa8877f43db39b7adcc.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_771b8510ed364c69b2db1d28424a8eb1.jpg',
                           ],
                        },
                        qty: 175,
                        detail: [
                           { size: '36', qty: '13' },
                           { size: '37', qty: '122' },
                           { size: '38', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '13' },
                           { size: '42', qty: '1' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '9',
               name: 'Giày Thể Thao Nữ Hunter Street White',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street White DSMH10400TRG/DSWH10400TRG (Trắng) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 228,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'sandal(nu)' },
               size: ['38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__2__c0c34e5eba684afbba3e5a061f43f9ae.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__5__f34f6222a22343949d77241b1425d776.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__3__ed4af61ea22644cab9671a045d5bd48a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__6__c8bc05b0903e49ddb9b877c8e68e0fec.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__7__2bf26cb6b0e24d05b7c75124b4fe85ff.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__4__7da8b7e74e2b4c84b47e659e09c9576d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_11451e9a0c8941edb4af96a6052156db.jpg',
                           ],
                        },
                        qty: 228,
                        detail: [
                           { size: '38', qty: '132' },
                           { size: '39', qty: '61' },
                           { size: '40', qty: '19' },
                           { size: '41', qty: '16' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '10',
               name: 'Giày Thể Thao Nam DSM075200',
               description:
                  '* Giày dùng đế bằng, ít ngóc mũi. \n* Sản phẩm thiết kế lưỡi gà liền, có 2 bản thun 2 bên hông trong ngoài. \n\n* Chất liệu quai : Lưới thun, Si \n\n* Chất liệu đế : EVA phun\n\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '417,000',
               qty: 448,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['38', '39', '40', '41', '42', '35', '36', '37'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__2__7d998132e03240d9990820877a4fd9e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__5__91c2d72dbd144e1fa665852e80515dde.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__3__bba5c19e05134e74acfd033cd0650ec3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__1__86a336ae57374333820176a3df050a83.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__6__0c89d3bbb1514ff4b96f0e7aac83cc99.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__4__953bea7061fc42688a18c2cda5c5fa38.jpg',
                           ],
                        },
                        qty: 313,
                        detail: [
                           { size: '38', qty: '133' },
                           { size: '39', qty: '133' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '12' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__2__b4816996fec840c680d9cf5f5fd840b4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__5__1497907f3d8f40e987845a4643166576.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200den__3__b17010f05d3d4aa4aad824a7d1ed30c5.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__1__8ef1bccc156f4bd3be73f4efc5bf22fa.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__4__6f660dfe026549fb8089650fb62be520.jpg',
                           ],
                        },
                        qty: 135,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '41' },
                           { size: '37', qty: '31' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '12' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '11',
               name: 'Giày Thể Thao Nam Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,050,000',
               qty: 338,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Xám', 'Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Xám',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__2__4d84d50f5d9741f6b6d74dcd716f4176.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__5__113fd43149a74ead82897abb58b78cf9.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__7__aa3b3ad4ee1d423b858e9cf8fc652756.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__6__5d70fee9e27a44c2aa845c298cb7fd8d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c8077d78927047d397b6eb8bb1da6a48.jpg',
                           ],
                        },
                        qty: 172,
                        detail: [
                           { size: '35', qty: '8' },
                           { size: '36', qty: '7' },
                           { size: '37', qty: '8' },
                           { size: '38', qty: '7' },
                           { size: '39', qty: '35' },
                           { size: '40', qty: '54' },
                           { size: '41', qty: '21' },
                           { size: '42', qty: '11' },
                           { size: '43', qty: '21' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__2__876e6ceee0bc4f4688dc0479beed3f30.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__5__70792867b9754641810abe461efb97de.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__3__b420481103274d29b8b250efb3f972e8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__7__b9f6abd2e6ee4c04a758f460f337335d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__6__343b6e824bc746e2b92de5d3321845d9.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__4__9d4a4f3d42d546ce930795846422a7a0.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_96b654dc2f84462bbbbd43fb42dea813.jpg',
                           ],
                        },
                        qty: 110,
                        detail: [
                           { size: '37', qty: '12' },
                           { size: '38', qty: '21' },
                           { size: '39', qty: '13' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '41' },
                           { size: '42', qty: '11' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__6ea6f065d44f4e1285017c2ad763b201.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__ea0cda5998a642b29c279d6025ab5155.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__25a02f3c98b9477e96fd991c4a65192f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__dd0f265a69d246eca51fbfe6a409326a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__7a9052a534d0401c8ce404add08046b6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__c2145f5f02aa490594fb506b8c431325.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_80ba72f18dff4409908e45862d1d779e.jpg',
                           ],
                        },
                        qty: 56,
                        detail: [
                           { size: '35', qty: '12' },
                           { size: '39', qty: '31' },
                           { size: '41', qty: '13' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '12',
               name: 'Giày Thể Thao Nam DSM076000TRG',
               description:
                  '- Đế: Cao su mới \n- Quai: Si Nubucks \n\n- Lót trong: Lưới \n\n- Điểm nhấn nổi bật: \n\n+ Giày thông dụng mới sử dụng đế cao su mới tăng tính ma sát, chống trơn trượt tạo cảm giác thoải mái khi di chuyển. \n\n+ Kiểu dáng trẻ trung, năng động phù họp với các đối tượng học sinh và khách hàng trẻ tuổi với các hoạt động như đi học, đi chơi\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '519,000',
               qty: 300,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0153_2149393560ad4d06bfc742b4b41d8447.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0156_4f9a6c68babb4e379bd51d2627854266.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0154_bd89004adf52457ca0c74edda2c8b5d8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0157_f824e655e4ff40bb903fa6fc88bc432a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0158_72a5b377b6bf48bb9090e14c8941d026.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0155_65f2df4c3d8a49089274bca8819de082.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c4b8f138e3a64272bb006635828aa9bb.jpg',
                           ],
                        },
                        qty: 226,
                        detail: [
                           { size: '36', qty: '21' },
                           { size: '37', qty: '41' },
                           { size: '38', qty: '51' },
                           { size: '39', qty: '71' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0160_7ab44233ce6144bab31be87383c510fc.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0161_9a99c7099c3a4580bbca6084e2bc75fe.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0164_07924db5b7ec4ec193b558c0488c2fd2.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0166_be2518c5d9c6443cb6c8ac17a483e938.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0165_196d05cc33fe4fe5b7a2e17b2e1f4851.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0162_ca7607ad29b44474b4ecf63ca8b5ad98.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_16c4d8b40f3046a684f55e683d29c479.jpg',
                           ],
                        },
                        qty: 74,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '11' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '13',
               name: 'Giày Thể Thao Nữ Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 120,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__2d0991d8535b4312ab1f699d96c09872.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__2a79f5a2a361402087a7c706f0281355.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__cc54860128134c3f8dac038650a52dc6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__9265153907604d37baa5744ed5a2d20d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__da00b3f212db48adbb92a90cd46e51c4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__0e65e8bf80ec433c9b97a5df6ac0f449.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_d03943379669476e9cb448422811d16d.jpg',
                           ],
                        },
                        qty: 120,
                        detail: [
                           { size: '35', qty: '31' },
                           { size: '36', qty: '21' },
                           { size: '37', qty: '13' },
                           { size: '38', qty: '14' },
                           { size: '39', qty: '15' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '14' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '14',
               name: 'Giày Thể Thao Nữ Hunter Street x VietMax Vietnam Arising',
               description:
                  "- Phom dáng cổ cao đầu tiên từ Biti's Hunter Street.\n\n- Mũ quai sử dụng chất liệu cao cấp là DA BÒ THẬT, kết hợp hoạ tiết trang trí Simili.\n\n- Lót quai thun cá sấu kháng khuẩn giúp hạn chế mùi hôi và ẩm mốc. Cấu trúc lót đa lớp kết hợp xốp dày và êm ái.\n\n- Lót đế trong (Insole) với chất liệu EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Đế (Outsole) với chất liệu EVA cao su R.E với tính năng mềm dẻo và nhẹ hơn rất nhiều so với cao su truyền thống, nhưng vẫn đảm bảo khả năng chịu mài mòn và va chạm. Độ Shore phù hợp, êm và nẩy tốt giúp bảo vệ và nâng đỡ bàn chân.\n\n- Đế hộp cao thành ôm gọn mũ quai và liền lạc với mặt đế thành một khối giúp sản phẩm bền bỉ và linh hoạt trong mọi tình\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.",
               price: '1,547,000',
               qty: 324,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0322_a561a175903d445eaf7758c8aa101c05.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__5__eb6191738e344e96a0e09f5378e24ea1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0323_e7f483e8ac4345d3b32fe90d1a4bd896.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__7__ee6af4896bf24b2c8b0cd235fa3ae5db.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__6__70327b9b84b0402e97f0ff348d36f498.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0324_e4f6924b45b44bc4bfc1613e5783c01d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_91a5df4051b249b593590947f2e77d88.jpg',
                           ],
                        },
                        qty: 324,
                        detail: [
                           { size: '35', qty: '21' },
                           { size: '36', qty: '111' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '31' },
                           { size: '39', qty: '81' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '16' },
                           { size: '43', qty: '17' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '15',
               name: 'Giày Thể Thao Nữ Hunter X DSWH10600',
               description:
                  '- Đế: IP/Cao su \n\n- Quai: Knits/ si Nubucks \n\n- Lót trong: \n\n- Điểm nhấn nổi bật: Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 527,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '38', '39', '40', '41', '44'],
               colors: {
                  list: ['Đen', 'Trắng'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__2__b2b752e4ce9c4cf091f3820c865c8cd7.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__5__415a47c6c1244dd3b2406e0b4ec72f3e.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__3__8c02684c7743438db591f622592224b3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__6__dcfbfcc9f3a140d9a07e127694a6eaf0.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__7__0c43bde1165f4a29885b26bc22dc906e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__4__f97ca0ac0e0049b7a0589260f6ac945c.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_580e79bbb7054f1f8bb36a39c0eb1b1f.jpg',
                           ],
                        },
                        qty: 302,
                        detail: [
                           { size: '36', qty: '134' },
                           { size: '38', qty: '125' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__2__5debe40c627e4577bc68abc16ab380e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__5__aae80cc20f3349acbdcf3c5e8c217bf1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__3__39b0c8d0a9124288b4f826dad998783f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__6__85c26f6103744891964c6a8bfd7bbf0e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__7__07b0f0e0e30a42cd95eb191a3dbf998c.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__4__a4e7171eff6d4280899b34e683f38336.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_edb0509b1a51409482027b05521804a2.jpg',
                           ],
                        },
                        qty: 225,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '51' },
                           { size: '40', qty: '71' },
                           { size: '41', qty: '41' },
                           { size: '44', qty: '41' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '16',
               name: 'Giày Thể Thao Nữ Hunter Street Cream',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Cream DSMH10400KEM/DSWH10400KEM (KEM)\n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 245,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['37', '38', '39', '40', '41', '42'],
               colors: {
                  list: ['Hồng'],
                  detail: [
                     {
                        color: 'Hồng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__2__8a828199b10b41fcadaa0ffe3708fa5f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__5__3861766063fe45b083a91173130a3dff.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__3__04fa61203a424d57bea439e2bbd67bfb.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__6__cfd2ebe3d7aa427f83df26e832bcd409.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__7__eb21767c76b248f3a2f21bc04d71eed3.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__4__9d1e287add05479cabd650c564618cca.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_a61daa8309bd4b3f915e9695cd2535f6.jpg',
                           ],
                        },
                        qty: 245,
                        detail: [
                           { size: '37', qty: '41' },
                           { size: '38', qty: '132' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '15' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '17',
               name: "Giày Thể Thao Nữ Hunter Street Bloomin' Central",
               description:
                  '- Đế #LiteTraction với chất liệu cao su EVA nhẹ và êm ái nâng đỡ bàn chân trên mọi trải nghiệm. Độ ma sát & bền bỉ cao, tự tin “cân" mọi thử thách.\n\n- Đệm lót EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,354,000',
               qty: 82,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__2__1933c95871ea4af59b4c6608191fb860.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__5__dcbc750bd8c64c57b78f7a30aa510683.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__3__336aa88a9a324ca789440346f10d975b.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__6__6a3c778fdf1d4aceaf2afe1aac566362.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__7__ce6faa939c544c7d8d20ad7d6e24edb7.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__4__f52da233bc7146ccbc5f83a835c5b0ac.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_fb46745b00ed4853a9ab360a25269439.jpg',
                           ],
                        },
                        qty: 82,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '12' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '21' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '18',
               name: 'Giày Thể Thao Nữ Hunter Street Black',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Black DSMH10400DEN/DSWH10400DEN (Đen) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 175,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '37', '38', '40', '41', '42'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__2__817bd4419dfe40c2af87116ebccdb55f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__5__b6be3a4bcda74ab7931b1c38c835c8f1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__3__e938addc53bf48cdaf500fca01a37815.jpg',
                              'src="https://product.hstatic.net/1000230642/product/dsmh10400den__7__238bff21a5b94a9097fead1e4329fcf3.jpg"',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__6__be3f413838544eac95f9618009673e89.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__4__e52b0912bb394aa8877f43db39b7adcc.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_771b8510ed364c69b2db1d28424a8eb1.jpg',
                           ],
                        },
                        qty: 175,
                        detail: [
                           { size: '36', qty: '13' },
                           { size: '37', qty: '122' },
                           { size: '38', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '13' },
                           { size: '42', qty: '1' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '19',
               name: 'Giày Thể Thao Nữ Hunter Street White',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street White DSMH10400TRG/DSWH10400TRG (Trắng) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 228,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'sandal(nu)' },
               size: ['38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__2__c0c34e5eba684afbba3e5a061f43f9ae.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__5__f34f6222a22343949d77241b1425d776.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__3__ed4af61ea22644cab9671a045d5bd48a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__6__c8bc05b0903e49ddb9b877c8e68e0fec.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__7__2bf26cb6b0e24d05b7c75124b4fe85ff.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__4__7da8b7e74e2b4c84b47e659e09c9576d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_11451e9a0c8941edb4af96a6052156db.jpg',
                           ],
                        },
                        qty: 228,
                        detail: [
                           { size: '38', qty: '132' },
                           { size: '39', qty: '61' },
                           { size: '40', qty: '19' },
                           { size: '41', qty: '16' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '20',
               name: 'Giày Thể Thao Nam DSM075200',
               description:
                  '* Giày dùng đế bằng, ít ngóc mũi. \n* Sản phẩm thiết kế lưỡi gà liền, có 2 bản thun 2 bên hông trong ngoài. \n\n* Chất liệu quai : Lưới thun, Si \n\n* Chất liệu đế : EVA phun\n\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '417,000',
               qty: 448,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['38', '39', '40', '41', '42', '35', '36', '37'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__2__7d998132e03240d9990820877a4fd9e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__5__91c2d72dbd144e1fa665852e80515dde.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__3__bba5c19e05134e74acfd033cd0650ec3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__1__86a336ae57374333820176a3df050a83.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__6__0c89d3bbb1514ff4b96f0e7aac83cc99.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__4__953bea7061fc42688a18c2cda5c5fa38.jpg',
                           ],
                        },
                        qty: 313,
                        detail: [
                           { size: '38', qty: '133' },
                           { size: '39', qty: '133' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '12' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__2__b4816996fec840c680d9cf5f5fd840b4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__5__1497907f3d8f40e987845a4643166576.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200den__3__b17010f05d3d4aa4aad824a7d1ed30c5.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__1__8ef1bccc156f4bd3be73f4efc5bf22fa.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__4__6f660dfe026549fb8089650fb62be520.jpg',
                           ],
                        },
                        qty: 135,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '41' },
                           { size: '37', qty: '31' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '12' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '21',
               name: 'Giày Thể Thao Nam Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,050,000',
               qty: 338,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Xám', 'Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Xám',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__2__4d84d50f5d9741f6b6d74dcd716f4176.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__5__113fd43149a74ead82897abb58b78cf9.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__7__aa3b3ad4ee1d423b858e9cf8fc652756.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__6__5d70fee9e27a44c2aa845c298cb7fd8d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c8077d78927047d397b6eb8bb1da6a48.jpg',
                           ],
                        },
                        qty: 172,
                        detail: [
                           { size: '35', qty: '8' },
                           { size: '36', qty: '7' },
                           { size: '37', qty: '8' },
                           { size: '38', qty: '7' },
                           { size: '39', qty: '35' },
                           { size: '40', qty: '54' },
                           { size: '41', qty: '21' },
                           { size: '42', qty: '11' },
                           { size: '43', qty: '21' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__2__876e6ceee0bc4f4688dc0479beed3f30.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__5__70792867b9754641810abe461efb97de.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__3__b420481103274d29b8b250efb3f972e8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__7__b9f6abd2e6ee4c04a758f460f337335d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__6__343b6e824bc746e2b92de5d3321845d9.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__4__9d4a4f3d42d546ce930795846422a7a0.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_96b654dc2f84462bbbbd43fb42dea813.jpg',
                           ],
                        },
                        qty: 110,
                        detail: [
                           { size: '37', qty: '12' },
                           { size: '38', qty: '21' },
                           { size: '39', qty: '13' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '41' },
                           { size: '42', qty: '11' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__6ea6f065d44f4e1285017c2ad763b201.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__ea0cda5998a642b29c279d6025ab5155.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__25a02f3c98b9477e96fd991c4a65192f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__dd0f265a69d246eca51fbfe6a409326a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__7a9052a534d0401c8ce404add08046b6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__c2145f5f02aa490594fb506b8c431325.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_80ba72f18dff4409908e45862d1d779e.jpg',
                           ],
                        },
                        qty: 56,
                        detail: [
                           { size: '35', qty: '12' },
                           { size: '39', qty: '31' },
                           { size: '41', qty: '13' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '22',
               name: 'Giày Thể Thao Nam DSM076000TRG',
               description:
                  '- Đế: Cao su mới \n- Quai: Si Nubucks \n\n- Lót trong: Lưới \n\n- Điểm nhấn nổi bật: \n\n+ Giày thông dụng mới sử dụng đế cao su mới tăng tính ma sát, chống trơn trượt tạo cảm giác thoải mái khi di chuyển. \n\n+ Kiểu dáng trẻ trung, năng động phù họp với các đối tượng học sinh và khách hàng trẻ tuổi với các hoạt động như đi học, đi chơi\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '519,000',
               qty: 300,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0153_2149393560ad4d06bfc742b4b41d8447.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0156_4f9a6c68babb4e379bd51d2627854266.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0154_bd89004adf52457ca0c74edda2c8b5d8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0157_f824e655e4ff40bb903fa6fc88bc432a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0158_72a5b377b6bf48bb9090e14c8941d026.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0155_65f2df4c3d8a49089274bca8819de082.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c4b8f138e3a64272bb006635828aa9bb.jpg',
                           ],
                        },
                        qty: 226,
                        detail: [
                           { size: '36', qty: '21' },
                           { size: '37', qty: '41' },
                           { size: '38', qty: '51' },
                           { size: '39', qty: '71' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0160_7ab44233ce6144bab31be87383c510fc.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0161_9a99c7099c3a4580bbca6084e2bc75fe.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0164_07924db5b7ec4ec193b558c0488c2fd2.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0166_be2518c5d9c6443cb6c8ac17a483e938.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0165_196d05cc33fe4fe5b7a2e17b2e1f4851.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0162_ca7607ad29b44474b4ecf63ca8b5ad98.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_16c4d8b40f3046a684f55e683d29c479.jpg',
                           ],
                        },
                        qty: 74,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '11' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '23',
               name: 'Giày Thể Thao Nữ Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 120,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__2d0991d8535b4312ab1f699d96c09872.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__2a79f5a2a361402087a7c706f0281355.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__cc54860128134c3f8dac038650a52dc6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__9265153907604d37baa5744ed5a2d20d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__da00b3f212db48adbb92a90cd46e51c4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__0e65e8bf80ec433c9b97a5df6ac0f449.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_d03943379669476e9cb448422811d16d.jpg',
                           ],
                        },
                        qty: 120,
                        detail: [
                           { size: '35', qty: '31' },
                           { size: '36', qty: '21' },
                           { size: '37', qty: '13' },
                           { size: '38', qty: '14' },
                           { size: '39', qty: '15' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '14' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '24',
               name: 'Giày Thể Thao Nữ Hunter Street x VietMax Vietnam Arising',
               description:
                  "- Phom dáng cổ cao đầu tiên từ Biti's Hunter Street.\n\n- Mũ quai sử dụng chất liệu cao cấp là DA BÒ THẬT, kết hợp hoạ tiết trang trí Simili.\n\n- Lót quai thun cá sấu kháng khuẩn giúp hạn chế mùi hôi và ẩm mốc. Cấu trúc lót đa lớp kết hợp xốp dày và êm ái.\n\n- Lót đế trong (Insole) với chất liệu EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Đế (Outsole) với chất liệu EVA cao su R.E với tính năng mềm dẻo và nhẹ hơn rất nhiều so với cao su truyền thống, nhưng vẫn đảm bảo khả năng chịu mài mòn và va chạm. Độ Shore phù hợp, êm và nẩy tốt giúp bảo vệ và nâng đỡ bàn chân.\n\n- Đế hộp cao thành ôm gọn mũ quai và liền lạc với mặt đế thành một khối giúp sản phẩm bền bỉ và linh hoạt trong mọi tình\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.",
               price: '1,547,000',
               qty: 324,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0322_a561a175903d445eaf7758c8aa101c05.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__5__eb6191738e344e96a0e09f5378e24ea1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0323_e7f483e8ac4345d3b32fe90d1a4bd896.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__7__ee6af4896bf24b2c8b0cd235fa3ae5db.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__6__70327b9b84b0402e97f0ff348d36f498.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0324_e4f6924b45b44bc4bfc1613e5783c01d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_91a5df4051b249b593590947f2e77d88.jpg',
                           ],
                        },
                        qty: 324,
                        detail: [
                           { size: '35', qty: '21' },
                           { size: '36', qty: '111' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '31' },
                           { size: '39', qty: '81' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '16' },
                           { size: '43', qty: '17' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '25',
               name: 'Giày Thể Thao Nữ Hunter X DSWH10600',
               description:
                  '- Đế: IP/Cao su \n\n- Quai: Knits/ si Nubucks \n\n- Lót trong: \n\n- Điểm nhấn nổi bật: Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 527,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '38', '39', '40', '41', '44'],
               colors: {
                  list: ['Đen', 'Trắng'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__2__b2b752e4ce9c4cf091f3820c865c8cd7.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__5__415a47c6c1244dd3b2406e0b4ec72f3e.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__3__8c02684c7743438db591f622592224b3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__6__dcfbfcc9f3a140d9a07e127694a6eaf0.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__7__0c43bde1165f4a29885b26bc22dc906e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__4__f97ca0ac0e0049b7a0589260f6ac945c.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_580e79bbb7054f1f8bb36a39c0eb1b1f.jpg',
                           ],
                        },
                        qty: 302,
                        detail: [
                           { size: '36', qty: '134' },
                           { size: '38', qty: '125' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__2__5debe40c627e4577bc68abc16ab380e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__5__aae80cc20f3349acbdcf3c5e8c217bf1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__3__39b0c8d0a9124288b4f826dad998783f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__6__85c26f6103744891964c6a8bfd7bbf0e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__7__07b0f0e0e30a42cd95eb191a3dbf998c.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__4__a4e7171eff6d4280899b34e683f38336.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_edb0509b1a51409482027b05521804a2.jpg',
                           ],
                        },
                        qty: 225,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '51' },
                           { size: '40', qty: '71' },
                           { size: '41', qty: '41' },
                           { size: '44', qty: '41' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '26',
               name: 'Giày Thể Thao Nữ Hunter Street Cream',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Cream DSMH10400KEM/DSWH10400KEM (KEM)\n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 245,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['37', '38', '39', '40', '41', '42'],
               colors: {
                  list: ['Hồng'],
                  detail: [
                     {
                        color: 'Hồng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__2__8a828199b10b41fcadaa0ffe3708fa5f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__5__3861766063fe45b083a91173130a3dff.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__3__04fa61203a424d57bea439e2bbd67bfb.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__6__cfd2ebe3d7aa427f83df26e832bcd409.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__7__eb21767c76b248f3a2f21bc04d71eed3.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__4__9d1e287add05479cabd650c564618cca.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_a61daa8309bd4b3f915e9695cd2535f6.jpg',
                           ],
                        },
                        qty: 245,
                        detail: [
                           { size: '37', qty: '41' },
                           { size: '38', qty: '132' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '15' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '27',
               name: "Giày Thể Thao Nữ Hunter Street Bloomin' Central",
               description:
                  '- Đế #LiteTraction với chất liệu cao su EVA nhẹ và êm ái nâng đỡ bàn chân trên mọi trải nghiệm. Độ ma sát & bền bỉ cao, tự tin “cân" mọi thử thách.\n\n- Đệm lót EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,354,000',
               qty: 82,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__2__1933c95871ea4af59b4c6608191fb860.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__5__dcbc750bd8c64c57b78f7a30aa510683.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__3__336aa88a9a324ca789440346f10d975b.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__6__6a3c778fdf1d4aceaf2afe1aac566362.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__7__ce6faa939c544c7d8d20ad7d6e24edb7.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__4__f52da233bc7146ccbc5f83a835c5b0ac.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_fb46745b00ed4853a9ab360a25269439.jpg',
                           ],
                        },
                        qty: 82,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '12' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '21' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '28',
               name: 'Giày Thể Thao Nữ Hunter Street Black',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Black DSMH10400DEN/DSWH10400DEN (Đen) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 175,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '37', '38', '40', '41', '42'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__2__817bd4419dfe40c2af87116ebccdb55f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__5__b6be3a4bcda74ab7931b1c38c835c8f1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__3__e938addc53bf48cdaf500fca01a37815.jpg',
                              'src="https://product.hstatic.net/1000230642/product/dsmh10400den__7__238bff21a5b94a9097fead1e4329fcf3.jpg"',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__6__be3f413838544eac95f9618009673e89.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__4__e52b0912bb394aa8877f43db39b7adcc.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_771b8510ed364c69b2db1d28424a8eb1.jpg',
                           ],
                        },
                        qty: 175,
                        detail: [
                           { size: '36', qty: '13' },
                           { size: '37', qty: '122' },
                           { size: '38', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '13' },
                           { size: '42', qty: '1' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '29',
               name: 'Giày Thể Thao Nữ Hunter Street White',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street White DSMH10400TRG/DSWH10400TRG (Trắng) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 228,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'sandal(nu)' },
               size: ['38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__2__c0c34e5eba684afbba3e5a061f43f9ae.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__5__f34f6222a22343949d77241b1425d776.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__3__ed4af61ea22644cab9671a045d5bd48a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__6__c8bc05b0903e49ddb9b877c8e68e0fec.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__7__2bf26cb6b0e24d05b7c75124b4fe85ff.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__4__7da8b7e74e2b4c84b47e659e09c9576d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_11451e9a0c8941edb4af96a6052156db.jpg',
                           ],
                        },
                        qty: 228,
                        detail: [
                           { size: '38', qty: '132' },
                           { size: '39', qty: '61' },
                           { size: '40', qty: '19' },
                           { size: '41', qty: '16' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '30',
               name: 'Giày Thể Thao Nam DSM075200',
               description:
                  '* Giày dùng đế bằng, ít ngóc mũi. \n* Sản phẩm thiết kế lưỡi gà liền, có 2 bản thun 2 bên hông trong ngoài. \n\n* Chất liệu quai : Lưới thun, Si \n\n* Chất liệu đế : EVA phun\n\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '417,000',
               qty: 448,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['38', '39', '40', '41', '42', '35', '36', '37'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__2__7d998132e03240d9990820877a4fd9e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__5__91c2d72dbd144e1fa665852e80515dde.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__3__bba5c19e05134e74acfd033cd0650ec3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__1__86a336ae57374333820176a3df050a83.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__6__0c89d3bbb1514ff4b96f0e7aac83cc99.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__4__953bea7061fc42688a18c2cda5c5fa38.jpg',
                           ],
                        },
                        qty: 313,
                        detail: [
                           { size: '38', qty: '133' },
                           { size: '39', qty: '133' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '12' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__2__b4816996fec840c680d9cf5f5fd840b4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__5__1497907f3d8f40e987845a4643166576.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200den__3__b17010f05d3d4aa4aad824a7d1ed30c5.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__1__8ef1bccc156f4bd3be73f4efc5bf22fa.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__4__6f660dfe026549fb8089650fb62be520.jpg',
                           ],
                        },
                        qty: 135,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '41' },
                           { size: '37', qty: '31' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '12' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '31',
               name: 'Giày Thể Thao Nam Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,050,000',
               qty: 338,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Xám', 'Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Xám',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__2__4d84d50f5d9741f6b6d74dcd716f4176.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__5__113fd43149a74ead82897abb58b78cf9.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__7__aa3b3ad4ee1d423b858e9cf8fc652756.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__6__5d70fee9e27a44c2aa845c298cb7fd8d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c8077d78927047d397b6eb8bb1da6a48.jpg',
                           ],
                        },
                        qty: 172,
                        detail: [
                           { size: '35', qty: '8' },
                           { size: '36', qty: '7' },
                           { size: '37', qty: '8' },
                           { size: '38', qty: '7' },
                           { size: '39', qty: '35' },
                           { size: '40', qty: '54' },
                           { size: '41', qty: '21' },
                           { size: '42', qty: '11' },
                           { size: '43', qty: '21' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__2__876e6ceee0bc4f4688dc0479beed3f30.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__5__70792867b9754641810abe461efb97de.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__3__b420481103274d29b8b250efb3f972e8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__7__b9f6abd2e6ee4c04a758f460f337335d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__6__343b6e824bc746e2b92de5d3321845d9.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__4__9d4a4f3d42d546ce930795846422a7a0.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_96b654dc2f84462bbbbd43fb42dea813.jpg',
                           ],
                        },
                        qty: 110,
                        detail: [
                           { size: '37', qty: '12' },
                           { size: '38', qty: '21' },
                           { size: '39', qty: '13' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '41' },
                           { size: '42', qty: '11' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__6ea6f065d44f4e1285017c2ad763b201.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__ea0cda5998a642b29c279d6025ab5155.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__25a02f3c98b9477e96fd991c4a65192f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__dd0f265a69d246eca51fbfe6a409326a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__7a9052a534d0401c8ce404add08046b6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__c2145f5f02aa490594fb506b8c431325.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_80ba72f18dff4409908e45862d1d779e.jpg',
                           ],
                        },
                        qty: 56,
                        detail: [
                           { size: '35', qty: '12' },
                           { size: '39', qty: '31' },
                           { size: '41', qty: '13' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '32',
               name: 'Giày Thể Thao Nam DSM076000TRG',
               description:
                  '- Đế: Cao su mới \n- Quai: Si Nubucks \n\n- Lót trong: Lưới \n\n- Điểm nhấn nổi bật: \n\n+ Giày thông dụng mới sử dụng đế cao su mới tăng tính ma sát, chống trơn trượt tạo cảm giác thoải mái khi di chuyển. \n\n+ Kiểu dáng trẻ trung, năng động phù họp với các đối tượng học sinh và khách hàng trẻ tuổi với các hoạt động như đi học, đi chơi\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '519,000',
               qty: 300,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0153_2149393560ad4d06bfc742b4b41d8447.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0156_4f9a6c68babb4e379bd51d2627854266.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0154_bd89004adf52457ca0c74edda2c8b5d8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0157_f824e655e4ff40bb903fa6fc88bc432a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0158_72a5b377b6bf48bb9090e14c8941d026.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0155_65f2df4c3d8a49089274bca8819de082.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c4b8f138e3a64272bb006635828aa9bb.jpg',
                           ],
                        },
                        qty: 226,
                        detail: [
                           { size: '36', qty: '21' },
                           { size: '37', qty: '41' },
                           { size: '38', qty: '51' },
                           { size: '39', qty: '71' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0160_7ab44233ce6144bab31be87383c510fc.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0161_9a99c7099c3a4580bbca6084e2bc75fe.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0164_07924db5b7ec4ec193b558c0488c2fd2.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0166_be2518c5d9c6443cb6c8ac17a483e938.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0165_196d05cc33fe4fe5b7a2e17b2e1f4851.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0162_ca7607ad29b44474b4ecf63ca8b5ad98.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_16c4d8b40f3046a684f55e683d29c479.jpg',
                           ],
                        },
                        qty: 74,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '11' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '33',
               name: 'Giày Thể Thao Nữ Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 120,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__2d0991d8535b4312ab1f699d96c09872.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__2a79f5a2a361402087a7c706f0281355.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__cc54860128134c3f8dac038650a52dc6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__9265153907604d37baa5744ed5a2d20d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__da00b3f212db48adbb92a90cd46e51c4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__0e65e8bf80ec433c9b97a5df6ac0f449.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_d03943379669476e9cb448422811d16d.jpg',
                           ],
                        },
                        qty: 120,
                        detail: [
                           { size: '35', qty: '31' },
                           { size: '36', qty: '21' },
                           { size: '37', qty: '13' },
                           { size: '38', qty: '14' },
                           { size: '39', qty: '15' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '14' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '34',
               name: 'Giày Thể Thao Nữ Hunter Street x VietMax Vietnam Arising',
               description:
                  "- Phom dáng cổ cao đầu tiên từ Biti's Hunter Street.\n\n- Mũ quai sử dụng chất liệu cao cấp là DA BÒ THẬT, kết hợp hoạ tiết trang trí Simili.\n\n- Lót quai thun cá sấu kháng khuẩn giúp hạn chế mùi hôi và ẩm mốc. Cấu trúc lót đa lớp kết hợp xốp dày và êm ái.\n\n- Lót đế trong (Insole) với chất liệu EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Đế (Outsole) với chất liệu EVA cao su R.E với tính năng mềm dẻo và nhẹ hơn rất nhiều so với cao su truyền thống, nhưng vẫn đảm bảo khả năng chịu mài mòn và va chạm. Độ Shore phù hợp, êm và nẩy tốt giúp bảo vệ và nâng đỡ bàn chân.\n\n- Đế hộp cao thành ôm gọn mũ quai và liền lạc với mặt đế thành một khối giúp sản phẩm bền bỉ và linh hoạt trong mọi tình\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.",
               price: '1,547,000',
               qty: 324,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0322_a561a175903d445eaf7758c8aa101c05.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__5__eb6191738e344e96a0e09f5378e24ea1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0323_e7f483e8ac4345d3b32fe90d1a4bd896.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__7__ee6af4896bf24b2c8b0cd235fa3ae5db.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh05502trg__6__70327b9b84b0402e97f0ff348d36f498.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0324_e4f6924b45b44bc4bfc1613e5783c01d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_91a5df4051b249b593590947f2e77d88.jpg',
                           ],
                        },
                        qty: 324,
                        detail: [
                           { size: '35', qty: '21' },
                           { size: '36', qty: '111' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '31' },
                           { size: '39', qty: '81' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '16' },
                           { size: '43', qty: '17' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '35',
               name: 'Giày Thể Thao Nữ Hunter X DSWH10600',
               description:
                  '- Đế: IP/Cao su \n\n- Quai: Knits/ si Nubucks \n\n- Lót trong: \n\n- Điểm nhấn nổi bật: Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 527,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '38', '39', '40', '41', '44'],
               colors: {
                  list: ['Đen', 'Trắng'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__2__b2b752e4ce9c4cf091f3820c865c8cd7.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__5__415a47c6c1244dd3b2406e0b4ec72f3e.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__3__8c02684c7743438db591f622592224b3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__6__dcfbfcc9f3a140d9a07e127694a6eaf0.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__7__0c43bde1165f4a29885b26bc22dc906e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600den__4__f97ca0ac0e0049b7a0589260f6ac945c.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_580e79bbb7054f1f8bb36a39c0eb1b1f.jpg',
                           ],
                        },
                        qty: 302,
                        detail: [
                           { size: '36', qty: '134' },
                           { size: '38', qty: '125' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__2__5debe40c627e4577bc68abc16ab380e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__5__aae80cc20f3349acbdcf3c5e8c217bf1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__3__39b0c8d0a9124288b4f826dad998783f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__6__85c26f6103744891964c6a8bfd7bbf0e.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__7__07b0f0e0e30a42cd95eb191a3dbf998c.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10600trg__4__a4e7171eff6d4280899b34e683f38336.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_edb0509b1a51409482027b05521804a2.jpg',
                           ],
                        },
                        qty: 225,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '51' },
                           { size: '40', qty: '71' },
                           { size: '41', qty: '41' },
                           { size: '44', qty: '41' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '36',
               name: 'Giày Thể Thao Nữ Hunter Street Cream',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Cream DSMH10400KEM/DSWH10400KEM (KEM)\n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 245,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'the_thao(nam)' },
               size: ['37', '38', '39', '40', '41', '42'],
               colors: {
                  list: ['Hồng'],
                  detail: [
                     {
                        color: 'Hồng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__2__8a828199b10b41fcadaa0ffe3708fa5f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__5__3861766063fe45b083a91173130a3dff.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__3__04fa61203a424d57bea439e2bbd67bfb.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__6__cfd2ebe3d7aa427f83df26e832bcd409.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__7__eb21767c76b248f3a2f21bc04d71eed3.jpg',
                              'https://product.hstatic.net/1000230642/product/dswh10400kem__4__9d1e287add05479cabd650c564618cca.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_a61daa8309bd4b3f915e9695cd2535f6.jpg',
                           ],
                        },
                        qty: 245,
                        detail: [
                           { size: '37', qty: '41' },
                           { size: '38', qty: '132' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '31' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '15' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '37',
               name: "Giày Thể Thao Nữ Hunter Street Bloomin' Central",
               description:
                  '- Đế #LiteTraction với chất liệu cao su EVA nhẹ và êm ái nâng đỡ bàn chân trên mọi trải nghiệm. Độ ma sát & bền bỉ cao, tự tin “cân" mọi thử thách.\n\n- Đệm lót EVA cùng công nghệ ép khuôn 3D theo biên dạng bàn chân, ôm đều & định vị tốt, tránh tuột chân khi vận động mạnh. Kết hợp với chất liệu thun kháng khuẩn, giúp thấm hút mồ hôi, hạn chế mùi và ẩm mốc.\n\n- Có dây buộc\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,354,000',
               qty: 82,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__2__1933c95871ea4af59b4c6608191fb860.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__5__dcbc750bd8c64c57b78f7a30aa510683.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__3__336aa88a9a324ca789440346f10d975b.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__6__6a3c778fdf1d4aceaf2afe1aac566362.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__7__ce6faa939c544c7d8d20ad7d6e24edb7.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh08500den__4__f52da233bc7146ccbc5f83a835c5b0ac.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_fb46745b00ed4853a9ab360a25269439.jpg',
                           ],
                        },
                        qty: 82,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '12' },
                           { size: '37', qty: '12' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '21' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '38',
               name: 'Giày Thể Thao Nữ Hunter Street Black',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street Black DSMH10400DEN/DSWH10400DEN (Đen) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 175,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['36', '37', '38', '40', '41', '42'],
               colors: {
                  list: ['Đen'],
                  detail: [
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__2__817bd4419dfe40c2af87116ebccdb55f.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__5__b6be3a4bcda74ab7931b1c38c835c8f1.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__3__e938addc53bf48cdaf500fca01a37815.jpg',
                              'src="https://product.hstatic.net/1000230642/product/dsmh10400den__7__238bff21a5b94a9097fead1e4329fcf3.jpg"',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__6__be3f413838544eac95f9618009673e89.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400den__4__e52b0912bb394aa8877f43db39b7adcc.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_771b8510ed364c69b2db1d28424a8eb1.jpg',
                           ],
                        },
                        qty: 175,
                        detail: [
                           { size: '36', qty: '13' },
                           { size: '37', qty: '122' },
                           { size: '38', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '13' },
                           { size: '42', qty: '1' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '39',
               name: 'Giày Thể Thao Nữ Hunter Street White',
               description:
                  'Giày Thể Thao Nam Biti’s Hunter Street White DSMH10400TRG/DSWH10400TRG (Trắng) \n- Đế Eva cao su - nhẹ như bay - Độ nhẹ tối đa 300g/chiếc \n\n- Đàn hồi tốt mà vẫn chịu được mài mòn, chịu lực cao \n\n- Đế lót EVA Kháng khuẩn, hút ẩm tốt và êm ái. \n\n- Mũ quai si nubuck: Cao cấp, bóng mịn, êm nhờ cấu trúc chặt chẽ theo từng sợi của lớp si. \n\n- Lót quai thun cá sấu & vải tricot êm mềm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '781,000',
               qty: 228,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'sandal(nu)' },
               size: ['38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__2__c0c34e5eba684afbba3e5a061f43f9ae.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__5__f34f6222a22343949d77241b1425d776.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__3__ed4af61ea22644cab9671a045d5bd48a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__6__c8bc05b0903e49ddb9b877c8e68e0fec.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__7__2bf26cb6b0e24d05b7c75124b4fe85ff.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10400trg__4__7da8b7e74e2b4c84b47e659e09c9576d.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_11451e9a0c8941edb4af96a6052156db.jpg',
                           ],
                        },
                        qty: 228,
                        detail: [
                           { size: '38', qty: '132' },
                           { size: '39', qty: '61' },
                           { size: '40', qty: '19' },
                           { size: '41', qty: '16' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '40',
               name: 'Giày Thể Thao Nam DSM075200',
               description:
                  '* Giày dùng đế bằng, ít ngóc mũi. \n* Sản phẩm thiết kế lưỡi gà liền, có 2 bản thun 2 bên hông trong ngoài. \n\n* Chất liệu quai : Lưới thun, Si \n\n* Chất liệu đế : EVA phun\n\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '417,000',
               qty: 448,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['38', '39', '40', '41', '42', '35', '36', '37'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__2__7d998132e03240d9990820877a4fd9e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__5__91c2d72dbd144e1fa665852e80515dde.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__3__bba5c19e05134e74acfd033cd0650ec3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__1__86a336ae57374333820176a3df050a83.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__6__0c89d3bbb1514ff4b96f0e7aac83cc99.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__4__953bea7061fc42688a18c2cda5c5fa38.jpg',
                           ],
                        },
                        qty: 313,
                        detail: [
                           { size: '38', qty: '133' },
                           { size: '39', qty: '133' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '12' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__2__b4816996fec840c680d9cf5f5fd840b4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__5__1497907f3d8f40e987845a4643166576.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200den__3__b17010f05d3d4aa4aad824a7d1ed30c5.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__1__8ef1bccc156f4bd3be73f4efc5bf22fa.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__4__6f660dfe026549fb8089650fb62be520.jpg',
                           ],
                        },
                        qty: 135,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '41' },
                           { size: '37', qty: '31' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '12' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '41',
               name: 'Giày Thể Thao Nam Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,050,000',
               qty: 338,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Xám', 'Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Xám',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__2__4d84d50f5d9741f6b6d74dcd716f4176.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__5__113fd43149a74ead82897abb58b78cf9.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__7__aa3b3ad4ee1d423b858e9cf8fc652756.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__6__5d70fee9e27a44c2aa845c298cb7fd8d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c8077d78927047d397b6eb8bb1da6a48.jpg',
                           ],
                        },
                        qty: 172,
                        detail: [
                           { size: '35', qty: '8' },
                           { size: '36', qty: '7' },
                           { size: '37', qty: '8' },
                           { size: '38', qty: '7' },
                           { size: '39', qty: '35' },
                           { size: '40', qty: '54' },
                           { size: '41', qty: '21' },
                           { size: '42', qty: '11' },
                           { size: '43', qty: '21' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__2__876e6ceee0bc4f4688dc0479beed3f30.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__5__70792867b9754641810abe461efb97de.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__3__b420481103274d29b8b250efb3f972e8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__7__b9f6abd2e6ee4c04a758f460f337335d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__6__343b6e824bc746e2b92de5d3321845d9.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__4__9d4a4f3d42d546ce930795846422a7a0.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_96b654dc2f84462bbbbd43fb42dea813.jpg',
                           ],
                        },
                        qty: 110,
                        detail: [
                           { size: '37', qty: '12' },
                           { size: '38', qty: '21' },
                           { size: '39', qty: '13' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '41' },
                           { size: '42', qty: '11' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__6ea6f065d44f4e1285017c2ad763b201.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__ea0cda5998a642b29c279d6025ab5155.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__25a02f3c98b9477e96fd991c4a65192f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__dd0f265a69d246eca51fbfe6a409326a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__7a9052a534d0401c8ce404add08046b6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__c2145f5f02aa490594fb506b8c431325.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_80ba72f18dff4409908e45862d1d779e.jpg',
                           ],
                        },
                        qty: 56,
                        detail: [
                           { size: '35', qty: '12' },
                           { size: '39', qty: '31' },
                           { size: '41', qty: '13' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '42',
               name: 'Giày Thể Thao Nam DSM076000TRG',
               description:
                  '- Đế: Cao su mới \n- Quai: Si Nubucks \n\n- Lót trong: Lưới \n\n- Điểm nhấn nổi bật: \n\n+ Giày thông dụng mới sử dụng đế cao su mới tăng tính ma sát, chống trơn trượt tạo cảm giác thoải mái khi di chuyển. \n\n+ Kiểu dáng trẻ trung, năng động phù họp với các đối tượng học sinh và khách hàng trẻ tuổi với các hoạt động như đi học, đi chơi\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '519,000',
               qty: 300,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0153_2149393560ad4d06bfc742b4b41d8447.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0156_4f9a6c68babb4e379bd51d2627854266.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0154_bd89004adf52457ca0c74edda2c8b5d8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0157_f824e655e4ff40bb903fa6fc88bc432a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0158_72a5b377b6bf48bb9090e14c8941d026.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0155_65f2df4c3d8a49089274bca8819de082.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c4b8f138e3a64272bb006635828aa9bb.jpg',
                           ],
                        },
                        qty: 226,
                        detail: [
                           { size: '36', qty: '21' },
                           { size: '37', qty: '41' },
                           { size: '38', qty: '51' },
                           { size: '39', qty: '71' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0160_7ab44233ce6144bab31be87383c510fc.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0161_9a99c7099c3a4580bbca6084e2bc75fe.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0164_07924db5b7ec4ec193b558c0488c2fd2.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0166_be2518c5d9c6443cb6c8ac17a483e938.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0165_196d05cc33fe4fe5b7a2e17b2e1f4851.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0162_ca7607ad29b44474b4ecf63ca8b5ad98.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_16c4d8b40f3046a684f55e683d29c479.jpg',
                           ],
                        },
                        qty: 74,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '11' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '43',
               name: 'Giày Thể Thao Nam DSM075200',
               description:
                  '* Giày dùng đế bằng, ít ngóc mũi. \n* Sản phẩm thiết kế lưỡi gà liền, có 2 bản thun 2 bên hông trong ngoài. \n\n* Chất liệu quai : Lưới thun, Si \n\n* Chất liệu đế : EVA phun\n\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '417,000',
               qty: 448,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['38', '39', '40', '41', '42', '35', '36', '37'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__2__7d998132e03240d9990820877a4fd9e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__5__91c2d72dbd144e1fa665852e80515dde.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__3__bba5c19e05134e74acfd033cd0650ec3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__1__86a336ae57374333820176a3df050a83.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__6__0c89d3bbb1514ff4b96f0e7aac83cc99.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__4__953bea7061fc42688a18c2cda5c5fa38.jpg',
                           ],
                        },
                        qty: 313,
                        detail: [
                           { size: '38', qty: '133' },
                           { size: '39', qty: '133' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '12' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__2__b4816996fec840c680d9cf5f5fd840b4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__5__1497907f3d8f40e987845a4643166576.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200den__3__b17010f05d3d4aa4aad824a7d1ed30c5.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__1__8ef1bccc156f4bd3be73f4efc5bf22fa.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__4__6f660dfe026549fb8089650fb62be520.jpg',
                           ],
                        },
                        qty: 135,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '41' },
                           { size: '37', qty: '31' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '12' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '44',
               name: 'Giày Thể Thao Nam Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,050,000',
               qty: 338,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Xám', 'Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Xám',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__2__4d84d50f5d9741f6b6d74dcd716f4176.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__5__113fd43149a74ead82897abb58b78cf9.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__7__aa3b3ad4ee1d423b858e9cf8fc652756.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__6__5d70fee9e27a44c2aa845c298cb7fd8d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c8077d78927047d397b6eb8bb1da6a48.jpg',
                           ],
                        },
                        qty: 172,
                        detail: [
                           { size: '35', qty: '8' },
                           { size: '36', qty: '7' },
                           { size: '37', qty: '8' },
                           { size: '38', qty: '7' },
                           { size: '39', qty: '35' },
                           { size: '40', qty: '54' },
                           { size: '41', qty: '21' },
                           { size: '42', qty: '11' },
                           { size: '43', qty: '21' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__2__876e6ceee0bc4f4688dc0479beed3f30.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__5__70792867b9754641810abe461efb97de.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__3__b420481103274d29b8b250efb3f972e8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__7__b9f6abd2e6ee4c04a758f460f337335d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__6__343b6e824bc746e2b92de5d3321845d9.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__4__9d4a4f3d42d546ce930795846422a7a0.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_96b654dc2f84462bbbbd43fb42dea813.jpg',
                           ],
                        },
                        qty: 110,
                        detail: [
                           { size: '37', qty: '12' },
                           { size: '38', qty: '21' },
                           { size: '39', qty: '13' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '41' },
                           { size: '42', qty: '11' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__6ea6f065d44f4e1285017c2ad763b201.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__ea0cda5998a642b29c279d6025ab5155.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__25a02f3c98b9477e96fd991c4a65192f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__dd0f265a69d246eca51fbfe6a409326a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__7a9052a534d0401c8ce404add08046b6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__c2145f5f02aa490594fb506b8c431325.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_80ba72f18dff4409908e45862d1d779e.jpg',
                           ],
                        },
                        qty: 56,
                        detail: [
                           { size: '35', qty: '12' },
                           { size: '39', qty: '31' },
                           { size: '41', qty: '13' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '45',
               name: 'Giày Thể Thao Nam DSM076000TRG',
               description:
                  '- Đế: Cao su mới \n- Quai: Si Nubucks \n\n- Lót trong: Lưới \n\n- Điểm nhấn nổi bật: \n\n+ Giày thông dụng mới sử dụng đế cao su mới tăng tính ma sát, chống trơn trượt tạo cảm giác thoải mái khi di chuyển. \n\n+ Kiểu dáng trẻ trung, năng động phù họp với các đối tượng học sinh và khách hàng trẻ tuổi với các hoạt động như đi học, đi chơi\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '519,000',
               qty: 300,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0153_2149393560ad4d06bfc742b4b41d8447.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0156_4f9a6c68babb4e379bd51d2627854266.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0154_bd89004adf52457ca0c74edda2c8b5d8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0157_f824e655e4ff40bb903fa6fc88bc432a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0158_72a5b377b6bf48bb9090e14c8941d026.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0155_65f2df4c3d8a49089274bca8819de082.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c4b8f138e3a64272bb006635828aa9bb.jpg',
                           ],
                        },
                        qty: 226,
                        detail: [
                           { size: '36', qty: '21' },
                           { size: '37', qty: '41' },
                           { size: '38', qty: '51' },
                           { size: '39', qty: '71' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0160_7ab44233ce6144bab31be87383c510fc.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0161_9a99c7099c3a4580bbca6084e2bc75fe.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0164_07924db5b7ec4ec193b558c0488c2fd2.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0166_be2518c5d9c6443cb6c8ac17a483e938.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0165_196d05cc33fe4fe5b7a2e17b2e1f4851.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0162_ca7607ad29b44474b4ecf63ca8b5ad98.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_16c4d8b40f3046a684f55e683d29c479.jpg',
                           ],
                        },
                        qty: 74,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '11' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '46',
               name: 'Giày Thể Thao Nam DSM075200',
               description:
                  '* Giày dùng đế bằng, ít ngóc mũi. \n* Sản phẩm thiết kế lưỡi gà liền, có 2 bản thun 2 bên hông trong ngoài. \n\n* Chất liệu quai : Lưới thun, Si \n\n* Chất liệu đế : EVA phun\n\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '417,000',
               qty: 448,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['38', '39', '40', '41', '42', '35', '36', '37'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__2__7d998132e03240d9990820877a4fd9e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__5__91c2d72dbd144e1fa665852e80515dde.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__3__bba5c19e05134e74acfd033cd0650ec3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__1__86a336ae57374333820176a3df050a83.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__6__0c89d3bbb1514ff4b96f0e7aac83cc99.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__4__953bea7061fc42688a18c2cda5c5fa38.jpg',
                           ],
                        },
                        qty: 313,
                        detail: [
                           { size: '38', qty: '133' },
                           { size: '39', qty: '133' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '12' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__2__b4816996fec840c680d9cf5f5fd840b4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__5__1497907f3d8f40e987845a4643166576.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200den__3__b17010f05d3d4aa4aad824a7d1ed30c5.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__1__8ef1bccc156f4bd3be73f4efc5bf22fa.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__4__6f660dfe026549fb8089650fb62be520.jpg',
                           ],
                        },
                        qty: 135,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '41' },
                           { size: '37', qty: '31' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '12' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '47',
               name: 'Giày Thể Thao Nam Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,050,000',
               qty: 338,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['35', '36', '37', '38', '39', '40', '41', '42', '43'],
               colors: {
                  list: ['Xám', 'Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Xám',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__2__4d84d50f5d9741f6b6d74dcd716f4176.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__5__113fd43149a74ead82897abb58b78cf9.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__7__aa3b3ad4ee1d423b858e9cf8fc652756.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__6__5d70fee9e27a44c2aa845c298cb7fd8d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500xam__4__7918383faa5840749c4d1fd6a7bede3a.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c8077d78927047d397b6eb8bb1da6a48.jpg',
                           ],
                        },
                        qty: 172,
                        detail: [
                           { size: '35', qty: '8' },
                           { size: '36', qty: '7' },
                           { size: '37', qty: '8' },
                           { size: '38', qty: '7' },
                           { size: '39', qty: '35' },
                           { size: '40', qty: '54' },
                           { size: '41', qty: '21' },
                           { size: '42', qty: '11' },
                           { size: '43', qty: '21' },
                        ],
                     },
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__2__876e6ceee0bc4f4688dc0479beed3f30.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__5__70792867b9754641810abe461efb97de.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__3__b420481103274d29b8b250efb3f972e8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__7__b9f6abd2e6ee4c04a758f460f337335d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__6__343b6e824bc746e2b92de5d3321845d9.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500den__4__9d4a4f3d42d546ce930795846422a7a0.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_96b654dc2f84462bbbbd43fb42dea813.jpg',
                           ],
                        },
                        qty: 110,
                        detail: [
                           { size: '37', qty: '12' },
                           { size: '38', qty: '21' },
                           { size: '39', qty: '13' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '41' },
                           { size: '42', qty: '11' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__6ea6f065d44f4e1285017c2ad763b201.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__ea0cda5998a642b29c279d6025ab5155.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__25a02f3c98b9477e96fd991c4a65192f.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__dd0f265a69d246eca51fbfe6a409326a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__7a9052a534d0401c8ce404add08046b6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__c2145f5f02aa490594fb506b8c431325.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_80ba72f18dff4409908e45862d1d779e.jpg',
                           ],
                        },
                        qty: 56,
                        detail: [
                           { size: '35', qty: '12' },
                           { size: '39', qty: '31' },
                           { size: '41', qty: '13' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '48',
               name: 'Giày Thể Thao Nam DSM076000TRG',
               description:
                  '- Đế: Cao su mới \n- Quai: Si Nubucks \n\n- Lót trong: Lưới \n\n- Điểm nhấn nổi bật: \n\n+ Giày thông dụng mới sử dụng đế cao su mới tăng tính ma sát, chống trơn trượt tạo cảm giác thoải mái khi di chuyển. \n\n+ Kiểu dáng trẻ trung, năng động phù họp với các đối tượng học sinh và khách hàng trẻ tuổi với các hoạt động như đi học, đi chơi\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '519,000',
               qty: 300,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0153_2149393560ad4d06bfc742b4b41d8447.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0156_4f9a6c68babb4e379bd51d2627854266.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0154_bd89004adf52457ca0c74edda2c8b5d8.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0157_f824e655e4ff40bb903fa6fc88bc432a.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0158_72a5b377b6bf48bb9090e14c8941d026.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0155_65f2df4c3d8a49089274bca8819de082.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_c4b8f138e3a64272bb006635828aa9bb.jpg',
                           ],
                        },
                        qty: 226,
                        detail: [
                           { size: '36', qty: '21' },
                           { size: '37', qty: '41' },
                           { size: '38', qty: '51' },
                           { size: '39', qty: '71' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0160_7ab44233ce6144bab31be87383c510fc.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsc_0161_9a99c7099c3a4580bbca6084e2bc75fe.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsc_0164_07924db5b7ec4ec193b558c0488c2fd2.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0166_be2518c5d9c6443cb6c8ac17a483e938.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0165_196d05cc33fe4fe5b7a2e17b2e1f4851.jpg',
                              'https://product.hstatic.net/1000230642/product/dsc_0162_ca7607ad29b44474b4ecf63ca8b5ad98.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_16c4d8b40f3046a684f55e683d29c479.jpg',
                           ],
                        },
                        qty: 74,
                        detail: [
                           { size: '38', qty: '21' },
                           { size: '39', qty: '11' },
                           { size: '40', qty: '11' },
                           { size: '41', qty: '31' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '49',
               name: 'Giày Thể Thao Nam DSM075200',
               description:
                  '* Giày dùng đế bằng, ít ngóc mũi. \n* Sản phẩm thiết kế lưỡi gà liền, có 2 bản thun 2 bên hông trong ngoài. \n\n* Chất liệu quai : Lưới thun, Si \n\n* Chất liệu đế : EVA phun\n\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '417,000',
               qty: 448,
               newProc: true,
               shoeTypes: { gender: 'Nam', type: 'the_thao(nam)' },
               size: ['38', '39', '40', '41', '42', '35', '36', '37'],
               colors: {
                  list: ['Trắng', 'Đen'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__2__7d998132e03240d9990820877a4fd9e4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__5__91c2d72dbd144e1fa665852e80515dde.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__3__bba5c19e05134e74acfd033cd0650ec3.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__1__86a336ae57374333820176a3df050a83.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__6__0c89d3bbb1514ff4b96f0e7aac83cc99.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200trg__4__953bea7061fc42688a18c2cda5c5fa38.jpg',
                           ],
                        },
                        qty: 313,
                        detail: [
                           { size: '38', qty: '133' },
                           { size: '39', qty: '133' },
                           { size: '40', qty: '21' },
                           { size: '41', qty: '14' },
                           { size: '42', qty: '12' },
                        ],
                     },
                     {
                        color: 'Đen',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__2__b4816996fec840c680d9cf5f5fd840b4.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsm075200den__5__1497907f3d8f40e987845a4643166576.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsm075200den__3__b17010f05d3d4aa4aad824a7d1ed30c5.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__1__8ef1bccc156f4bd3be73f4efc5bf22fa.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__6__339fef067fce4a3ab87b30624d426cb4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsm075200den__4__6f660dfe026549fb8089650fb62be520.jpg',
                           ],
                        },
                        qty: 135,
                        detail: [
                           { size: '35', qty: '13' },
                           { size: '36', qty: '41' },
                           { size: '37', qty: '31' },
                           { size: '38', qty: '12' },
                           { size: '39', qty: '12' },
                           { size: '40', qty: '14' },
                           { size: '41', qty: '12' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
            {
               _id: '50',
               name: 'Giày Thể Thao Nữ Hunter X',
               description:
                  '- Đế: IP/Cao su \n- Quai: Knits/ si Nubucks \n\n- Điểm nhấn nổi bật : Quai knits thông thoáng. Đế IP/Cao su nhẹ, uốn gấp đàn hồi tốt. \n\n- Ý tưởng thiết kế: từ những góc cắt mạnh mẽ liên kết từ thành đế tạo sự đồng nhất sản phẩm\n\n- Có dây buộc \n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.',
               price: '1,000,000',
               qty: 120,
               newProc: true,
               shoeTypes: { gender: 'Nữ', type: 'hunter(nu)' },
               size: ['35', '36', '37', '38', '39', '40', '41'],
               colors: {
                  list: ['Trắng'],
                  detail: [
                     {
                        color: 'Trắng',
                        imgs: {
                           firstImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__2__2d0991d8535b4312ab1f699d96c09872.jpg',
                           secondeImg:
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__5__2a79f5a2a361402087a7c706f0281355.jpg',
                           orthers: [
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__3__cc54860128134c3f8dac038650a52dc6.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__7__9265153907604d37baa5744ed5a2d20d.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__6__da00b3f212db48adbb92a90cd46e51c4.jpg',
                              'https://product.hstatic.net/1000230642/product/dsmh10500trg__4__0e65e8bf80ec433c9b97a5df6ac0f449.jpg',
                              'https://product.hstatic.net/1000230642/product/do_size_giay_d03943379669476e9cb448422811d16d.jpg',
                           ],
                        },
                        qty: 120,
                        detail: [
                           { size: '35', qty: '31' },
                           { size: '36', qty: '21' },
                           { size: '37', qty: '13' },
                           { size: '38', qty: '14' },
                           { size: '39', qty: '15' },
                           { size: '40', qty: '12' },
                           { size: '41', qty: '14' },
                        ],
                     },
                  ],
               },
               promotions: 0,
            },
         ];
         localStorage.setItem('Products', JSON.stringify(Products));
      }
      this.Products = Products;
   }

   get getProducts() {
      return this.Products;
   }

   add(product) {
      const flagAdd = this.Products.find((element) => element._id === product._id);
      if (!flagAdd) {
         this.Products.push(product);
      } else {
         this.Products = this.Products.map((element) => {
            if (element._id === flagAdd._id) {
               return product;
            } else return element;
         });
      }
      localStorage.setItem('Products', JSON.stringify(this.Products));
   }

   delete(productID) {
      this.Products = this.Products.filter((item) => Number(item._id) !== Number(productID));
      localStorage.setItem('Products', JSON.stringify(this.Products));
   }

   find(productID) {
      return this.Products.filter((item) => Number(item._id) === Number(productID));
   }

   findAll(value) {
      return this.Products.filter(
         (item) =>
            item._id.toString().toLowerCase().search(value.toString().toLowerCase()) >= 0 ||
            item.name.toString().toLowerCase().search(value.toString().toLowerCase()) >= 0,
      );
   }
}

export default new ProductController();

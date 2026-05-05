//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Samsung S25 Ultra',
            img: '/Applications/XAMPP/xamppfiles/htdocs/CongVinhshop/assets/img/products/s25 ultra.jpg',
            category: 'Điện Thoại ',
            price: 49999999,
            desc: ''
        },
        {
            id: 2,
            status: 1,
            title: 'Vivo X300 Pro',
            img: 'CongVinhshop/assets/img/products/x300 pro.jpg',
            category: 'Điện Thoại',
            price: 49999999,
            desc: ''
        },
        {
            id: 3,
            status: 1,
            title: ' Redmagic 11 Pro ',
            img: 'CongVinhshop/assets/img/products/red 11.jpg',
            category: 'Điện Thoại ',
            price: 18999999,
            desc: ''
        },
        {
            id: 4,
            status: 1,
            title: 'Oppo K13 Turbo Pro ',
            img: 'CongVinhshop/assets/img/products/oppo k13.jpg',
            category: 'Điện Thoại ',
            price: 6999999,
            desc: ''
        },
        {
            id: 5,
            status: 1,
            title: 'Xiaomi 17 Ultra ',
            img: 'CongVinhshop/assets/img/products/Xiaomi 17 Ultra.jpg',
            category: 'Điện Thoại ',
            price: 26999999,
            desc: ''
        },
        {
            id: 6,
            status: 1,
            title: 'Meizu 21 5G ',
            img: 'CongVinhshop/assets/img/products/Meizu 21 5G.jpg',
            category: 'Điện Thoại ',
            price: 7899999,
            desc: ''
        },
        {
            id: 7,
            status: 1,
            title: 'Opoo Find X8 Pro ',
            img: 'CongVinhshop/assets/img/products/oppo find x8.jpg',
            category: 'Điện Thoại ',
            price: 13999999,
            desc: ''
        },
        {
            id: 8,
            status: 1,
            title: ' iphone 17 pro max',
            img: 'CongVinhshop/assets/img/products/17 pro max.jpg',
            category: 'Điện Thoại ',
            price: 49999999,
            desc: ''
        },
        {
            id: 9,
            status: 1,
            title: ' Honor Magic 8 Pro ',
            img: 'CongVinhshop/assets/img/products/magic 8 pro.jpg',
            category: 'Điện Thoại ',
            price: 22999999,
            desc: ''
        },
        {
            id: 10,
            status: 1,
            title: ' Honor Win ',
            img: 'CongVinhshop/assets/img/products/honor win.jpg',
            category: 'Điện Thoại ',
            price: 15999999,
            desc: ''
        },
        {
            id: 11,
            status: 1,
            title: ' Vivo Iqoo 15 ',
            img: 'CongVinhshop/assets/img/products/iqoo15.jpg',
            category: 'Điện Thoại ',
            price: 15999999,
            desc: ''
        },
        {
            id: 12,
            status: 1,
            title: ' Oppo Find X9 Pro ',
            img: 'CongVinhshop/assets/img/products/x9 pro.jpg',
            category: 'Điện Thoại ',
            price: 30999999,
            desc: ''
        },
        {
            id: 13,
            status: 1,
            title: 'Laptop Lenovo IdeaPad Slim 3',
            img: 'CongVinhshop/assets/img/products/ideapad slim 3.jpg',
            category: 'lapTop',
            price: 200000,
            desc: ''
        },
        {
            id: 14,
            status: 1,
            title: ' MacBook Pro M4 Pro 14 inch ',
            img: 'assets/img/products/latop.avif',
            category: 'LapTop ',
            price: 200000,
            desc: ''
        },
        {
            id: 15,
            status: 1,
            title: ' laptop Asus Zenbook 14 OLED 2025 ',
            img: 'CongVinhshop/assets/img/products/Zenbook 14 Oled.jpg',
            category: 'lapTop ',
            price: 29999999,
            desc: ''
        },
        {
            id: 16,
            status: 1,
            title: ' Dell XPS 14 2025 ',
            img: 'CongVinhshop/assets/img/products/dell xps.jpg',
            category: 'lapTop ',
            price: 200000,
            desc: ''
        },
        {
            id: 17,
            status: 1,
            title: ' Lenovo ThinkPad X1 Carbon Gen 13 2025 ',
            img: 'assets/img/products/images.jpg',
            category: 'lapTop ',
            price: 200000,
            desc: ''
        },
        {
            id: 18,
            status: 1,
            title: 'MSI Titan 18 2025',
            img: 'CongVinhshop/assets/img/products/msi titan.png',
            category: 'lapTop',
            price: 139999999,
            desc: ''
        },
        {
            id: 19,
            status: 1,
            title: 'Dell gaming G15 2022',
            img: 'CongVinhshop/assets/img/products/dell gaming.jpg',
            category: 'lapTop',
            price: 21999999,
            desc: ''
        },
        {
            id: 20,
            status: 1,
            title: 'Acer Shadow SH16-71-5G61',
            img: 'CongVinhshop/assets/img/products/Acer shadow.jpg',
            category: 'lapTop',
            price: 29999999,
            desc: ''
        },
        {
            id: 21,
            status: 1,
            title: 'latop Lenovo Lecoo Fighter 7000',
            img: 'CongVinhshop/assets/img/products/Acer shadow.jpg',
            category: 'lapTop',
            price: 29999999,
            desc: ''
        },
        {
            id: 22,
            status: 1,
            title: 'Hp Zbook Power G11',
            img: 'CongVinhshop/assets/img/products/power g11.jpg',
            category: 'lapTop',
            price: 28999999,
            desc: ''
        },
        {
            id: 23,
            status: 1,
            title: 'Dell Precision 5570',
            img: 'CongVinhshop/assets/img/products/dell-precision-5570-gen-12th.jpg',
            category: 'lapTop',
            price: 26999999,
            desc: ''
        },
        {
            id: 24,
            status: 1,
            title: 'Lenovo Ideapad 5 Pro',
            img: 'CongVinhshop/assets/img/products/ideapad.jpg',
            category: 'lapTop',
            price: 19999999,
            desc: ''
        },
        {
            id: 25,
            status: 1,
            title: ' Apple watch series 10 ',
            img: 'CongVinhshop/assets/img/products/lecoo.jpg',
            category: 'Đồng Hồ ',
            price: 49999999,
            desc: ''
        },
        {
            id: 26,
            status: 1,
            title: ' Rolex OYSTER PERPETUAL Land‑Dweller',
            img: 'CongVinhshop/assets/img/products/rolex.jpg',
            category: 'Đồng Hồ ',
            price: 1999999999,
            desc: ''
        },
        {
            id: 27,
            status: 1,
            title: ' Redmi Watch 4 ',
            img: 'CongVinhshop/assets/img/products/Redmi Watch 4.jpg',
            category: 'Đồng Hồ ',
            price: 1699999,
            desc: ''
        },
        {
            id: 28,
            status: 1,
            title: ' Samsung Galaxy Watch 8 ',
            img: 'CongVinhshop/assets/img/products/Galaxy Watch 8.jpg',
            category: 'Đồng Hồ ',
            price: 6999999,
            desc: ''
        },
        {
            id: 29,
            status: 1,
            title: ' Garmin fenix 7s ',
            img: 'CongVinhshop/assets/img/products/Garmin fenix 7s.jpg',
            category: 'Đồng Hồ ',
            price: 22999999,
            desc: ''
        },
        {
            id: 30,
            status: 1,
            title: ' Google Pixel Watch 3',
            img: 'CongVinhshop/assets/img/products/Google Pixel Watch 3.jpg',
            category: 'Đồng Hồ ',
            price: 7299999,
            desc: ''
        },
        {
            id: 31,
            status: 1,
            title: ' Xiaomi Watch S4',
            img: 'CongVinhshop/assets/img/products/Xiaomi Watch S4.jpg',
            category: 'Đồng Hồ ',
            price: 3499999,
            desc: ''
        },
        {
            id: 32,
            status: 1,
            title: ' Oppo Watch 46mm',
            img: 'CongVinhshop/assets/img/products/Oppo Watch 46mm.jpg',
            category: 'Đồng Hồ ',
            price: 8999999,
            desc: ''
        },
        {
            id: 33,
            status: 1,
            title: ' Huawei Watch D2',
            img: 'CongVinhshop/assets/img/products/Huawei Watch D2.jpg',
            category: 'Đồng Hồ ',
            price: 7899999,
            desc: ''
        },
        {
            id: 34,
            status: 1,
            title: ' Galaxy Watch Ultra',
            img: 'CongVinhshop/assets/img/products/Galaxy Watch Ultra.jpg',
            category: 'Đồng Hồ ',
            price: 11999999,
            desc: ''
        },
        {
            id: 35,
            status: 1,
            title: ' Redmi Watch 5',
            img: 'CongVinhshop/assets/img/products/Redmi Watch 5 Active.jpg',
            category: 'Đồng Hồ ',
            price: 2199999,
            desc: ''
        },
        {
            id: 36,
            status: 1,
            title: ' Oppo Watch X',
            img: 'CongVinhshop/assets/img/products/Oppo Watch X.jpg',
            category: 'Đồng Hồ ',
            price: 3999999,
            desc: ''
        },
        {
            id: 37,
            status: 1,
            title: 'Lenovo Tab Extreme',
            img: 'CongVinhshop/assets/img/products/71F23k-cEyL._AC_UF1000,1000_QL80_.jpg',
            category: 'Tablet ',
            price: 29999999,
            desc: ''
        },
        {
            id: 38,
            status: 1,
            title: 'Google Pixel Tablet ',
            img: 'CongVinhshop/assets/img/products/Google Pixel Tablet.jpg',
            category: 'Tablet ',
            price: 9599999,
            desc: ''
        },
        {
            id: 39,
            status: 1,
            title: 'Honor Pad V9 ',
            img: 'CongVinhshop/assets/img/products/Honor Pad V9.jpg',
            category: 'Tablet ',
            price: 7399999,
            desc: ''
        },
        {
            id: 40,
            status: 1,
            title: 'Ipad Air 7 ',
            img: 'CongVinhshop/assets/img/products/Ipad Air 7.jpg',
            category: 'Tablet ',
            price: 11999999,
            desc: ''
        },
        {
            id: 41,
            status: 1,
            title: 'Samsung Galaxy Tab S10+ ',
            img: 'CongVinhshop/assets/img/products/Samsung Galaxy Tab S10+.jpg',
            category: 'Tablet ',
            price: 14999999,
            desc: ''
        },
        {
            id: 42,
            status: 1,
            title: 'Xiaomi Pad 7 Pro ',
            img: 'CongVinhshop/assets/img/products/Xiaomi Pad 7 Pro.jpg',
            category: 'Tablet ',
            price: 11399999,
            desc: ''
        },
        {
            id: 43,
            status: 1,
            title: 'Ipad Gen 11',
            img: 'CongVinhshop/assets/img/products/Ipad Gen 11.jpg',
            category: 'Tablet ',
            price: 7299999,
            desc: ''
        },
        {
            id: 44,
            status: 1,
            title: 'Lenovo Legion Y700 Gen 4',
            img: 'CongVinhshop/assets/img/products/Lenovo Legion Y700 Gen 4.jpg',
            category: 'Tablet ',
            price: 10999999,
            desc: ''
        },
        {
            id: 45,
            status: 1,
            title: 'Huawei MatePad Papermatte',
            img: 'CongVinhshop/assets/img/products/Huawei MatePad.jpg',
            category: 'Tablet ',
            price: 6399999,
            desc: ''
        },
        {
            id: 46,
            status: 1,
            title: 'Honor Pad GT Pro',
            img: 'CongVinhshop/assets/img/products/Honor Pad GT Pro.jpg',
            category: 'Tablet ',
            price: 8899999,
            desc: ''
        },
        {
            id: 47,
            status: 1,
            title: 'Redmi K Pad',
            img: 'CongVinhshop/assets/img/products/Redmi K Pad.jpg',
            category: 'Tablet ',
            price: 10999999,
            desc: ''
        },
        {
            id: 48,
            status: 1,
            title: 'Ipad Pro M5',
            img: 'CongVinhshop/assets/img/products/Ipad Pro M5.jpg',
            category: 'Tablet ',
            price: 27999999,
            desc: ''
        },
        {
            id: 49,
            status: 1,
            title: 'Lenovo L27QE',
            img: 'CongVinhshop/assets/img/products/Lenovo L27QE.jpg',
            category: 'Màn Hình ',
            price: 2699999,
            desc: ''
        },
        {
            id: 50,
            status: 1,
            title: 'LG 24QP500-B',
            img: 'CongVinhshop/assets/img/products/LG 24QP500-B.jpg',
            category: 'Màn Hình ',
            price: 3899999,
            desc: ''
        },
        {
            id: 51,
            status: 1,
            title: 'AOC 24G2',
            img: 'CongVinhshop/assets/img/products/AOC 24G2.jpg',
            category: 'Màn Hình ',
            price: 2399999,
            desc: ''
        },
        {
            id: 52,
            status: 1,
            title: 'Asus Tuf Gaming VG249Q1A',
            img: 'CongVinhshop/assets/img/products/Asus Tuf Gaming VG249Q1A.jpg',
            category: 'Màn Hình ',
            price: 2799999,
            desc: ''
        },
        {
            id: 53,
            status: 1,
            title: 'BenQ GW2480A',
            img: 'CongVinhshop/assets/img/products/BenQ GW2480A.jpg',
            category: 'Màn Hình ',
            price: 2499999,
            desc: ''
        },
        {
            id: 54,
            status: 1,
            title: 'Xiaomi Mi Display',
            img: 'CongVinhshop/assets/img/products/Xiaomi Mi Display.jpg',
            category: 'Màn Hình ',
            price: 4499999,
            desc: ''
        },
        {
            id: 55,
            status: 1,
            title: 'LG 27EP950-B',
            img: 'CongVinhshop/assets/img/products/LG 27EP950-B.jpg',
            category: 'Màn Hình ',
            price: 7999999,
            desc: ''
        },
        {
            id: 56,
            status: 1,
            title: 'Dell UltraSharp U2422H',
            img: 'CongVinhshop/assets/img/products/Dell UltraSharp U2422H.jpg',
            category: 'Màn Hình ',
            price: 3899999,
            desc: ''
        },
        {
            id: 57,
            status: 1,
            title: 'ViewSonic VA2432-H',
            img: 'CongVinhshop/assets/img/products/ViewSonic VA2432-H.jpg',
            category: 'Màn Hình ',
            price: 2299999,
            desc: ''
        },
        {
            id: 58,
            status: 1,
            title: 'MSI G2412',
            img: 'CongVinhshop/assets/img/products/MSI G2412.jpg',
            category: 'Màn Hình ',
            price: 3199999,
            desc: ''
        },
        {
            id: 59,
            status: 1,
            title: 'Samsung Odyssey G3 24”',
            img: 'CongVinhshop/assets/img/products/Samsung Odyssey G3 24”.jpg',
            category: 'Màn Hình ',
            price: 2499999,
            desc: ''
        },
        {
            id: 60,
            status: 1,
            title: 'LG UltraGear 27GN800-B',
            img: 'CongVinhshop/assets/img/products/LG UltraGear 27GN800-B.jpg',
            category: 'Màn Hình ',
            price: 4499999,
            desc: ''
        },
        {
            id: 61,
            status: 1,
            title: 'Akko 3068/3084 Midnight',
            img: 'CongVinhshop/assets/img/products/Akko 3068-3084 Midnight.jpg',
            category: 'Bàn Phím ',
            price: 899999,
            desc: ''
        },
        {
            id: 62,
            status: 1,
            title: 'ASUS ROG Strix Scope',
            img: 'CongVinhshop/assets/img/products/ASUS ROG Strix Scope.jpg',
            category: 'Bàn Phím ',
            price: 1499999,
            desc: ''
        },
        {
            id: 63,
            status: 1,
            title: 'Aula F75 Pro',
            img: 'CongVinhshop/assets/img/products/Aula F75 Pro.jpg',
            category: 'Bàn Phím ',
            price: 1299999,
            desc: ''
        },
        {
            id: 64,
            status: 1,
            title: 'Ducky One 2 Mini',
            img: 'CongVinhshop/assets/img/products/Ducky One 2 Mini.jpg',
            category: 'Bàn Phím ',
            price: 1899999,
            desc: ''
        },
        {
            id: 65,
            status: 1,
            title: 'EPOMAKER Skyloong SK61',
            img: 'CongVinhshop/assets/img/products/EPOMAKER Skyloong SK61.jpg',
            category: 'Bàn Phím ',
            price: 4799999,
            desc: ''
        },
        {
            id: 66,
            status: 1,
            title: 'HyperX Alloy FPS Pro',
            img: 'CongVinhshop/assets/img/products/HyperX Alloy FPS Pro.jpg',
            category: 'Bàn Phím ',
            price: 2499999,
            desc: ''
        },
        {
            id: 67,
            status: 1,
            title: 'Keychron K2 V2',
            img: 'CongVinhshop/assets/img/products/Keychron K2 V2.jpg',
            category: 'Bàn Phím ',
            price: 2299999,
            desc: ''
        },
        {
            id: 68,
            status: 1,
            title: 'Leobog Hi75c Pro',
            img: 'CongVinhshop/assets/img/products/Leobog Hi75c Pro.jpg',
            category: 'Bàn Phím ',
            price: 1699999,
            desc: ''
        },
        {
            id: 69,
            status: 1,
            title: 'Logitech G Pro X',
            img: 'CongVinhshop/assets/img/products/Logitech G Pro X.jpg',
            category: 'Bàn Phím ',
            price: 3899999,
            desc: ''
        },
        {
            id: 70,
            status: 1,
            title: 'Razer BlackWidow V3',
            img: 'CongVinhshop/assets/img/products/Razer BlackWidow V3.jpg',
            category: 'Bàn Phím ',
            price: 1999999,
            desc: ''
        },
        {
            id: 71,
            status: 1,
            title: 'SteelSeries Apex 5',
            img: 'CongVinhshop/assets/img/products/SteelSeries Apex 5.jpg',
            category: 'Bàn Phím ',
            price: 2899999,
            desc: ''
        },
        {
            id: 72,
            status: 1,
            title: 'Varmilo VA87M',
            img: 'CongVinhshop/assets/img/products/Varmilo VA87M.jpg',
            category: 'Bàn Phím ',
            price: 3799999,
            desc: ''
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "congvinh",
            phone: "vinh123",
            password: "123456",
            address: 'congvinh',
            email: 'congvinh@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "congvinh",
            phone: "vinh123",
            password: "123456",
            address: '123@abc1nabc1n',
            email: 'admin0512@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();

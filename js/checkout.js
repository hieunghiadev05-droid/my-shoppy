const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");
let currentCheckoutOption = 1;
let currentCheckoutProduct = null;
// Listen for payment success messages from other tabs/windows (same browser)
if (typeof BroadcastChannel !== 'undefined') {
    try {
        const paymentChannel = new BroadcastChannel('cvshop_payments');
        paymentChannel.onmessage = (e) => {
            const data = e.data || {};
            if (data.type === 'payment_success') {
                // Clear current user's cart and update storage
                const currentUser = JSON.parse(localStorage.getItem('currentuser') || '{}');
                if (currentUser && Array.isArray(currentUser.cart) && currentUser.cart.length > 0) {
                    currentUser.cart.length = 0;
                    localStorage.setItem('currentuser', JSON.stringify(currentUser));
                }
                // Optional UI feedback: toast and navigate to order history
                if (typeof toast === 'function') {
                    toast({ title: 'Thanh toán', message: 'Thanh toán thành công. Giỏ hàng đã được cập nhật.', type: 'success', duration: 3000 });
                }
                // If on checkout page, redirect to order history section
                if (location.pathname.endsWith('index.html') || location.pathname.endsWith('/') ) {
                    setTimeout(() => { location.href = 'index.html#order-history'; }, 1200);
                }
            }
        }
    } catch (err) {
        console.warn('BroadcastChannel not available', err);
    }
}
// Trang thanh toan
function thanhtoanpage(option, product) {
    currentCheckoutOption = option;
    currentCheckoutProduct = product || null;
    // Xu ly ngay nhan hang
    let today = new Date();
    let ngaymai = new Date();
    let ngaykia = new Date();
    ngaymai.setDate(today.getDate() + 1);
    ngaykia.setDate(today.getDate() + 2);
    let dateorderhtml = `<a href="javascript:;" class="pick-date active" data-date="${today}">
        <span class="text">Hôm nay</span>
        <span class="date">${today.getDate()}/${today.getMonth() + 1}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaymai}">
            <span class="text">Ngày mai</span>
            <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}</span>
        </a>

        <a href="javascript:;" class="pick-date" data-date="${ngaykia}">
            <span class="text">Ngày kia</span>
            <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}</span>
    </a>`
    document.querySelector('.date-order').innerHTML = dateorderhtml;
    let pickdate = document.getElementsByClassName('pick-date')
    for (let i = 0; i < pickdate.length; i++) {
        pickdate[i].onclick = function () {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        }
    }

    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;
    // Xu ly don hang
    switch (option) {
        case 1: // Truong hop thanh toan san pham trong gio
            // Hien thi don hang
            showProductCart();
            // Tinh tien
            totalBillOrderHtml = `<div class="priceFlx">
            <div class="text">
                Tiền hàng 
                <span class="count">${getAmountCart()} món</span>
            </div>
            <div class="price-detail">
                <span id="checkout-cart-total">${vnd(getCartTotal())}</span>
            </div>
        </div>
        <div class="priceFlx chk-ship">
            <div class="text">Phí vận chuyển</div>
            <div class="price-detail chk-free-ship">
                <span>${vnd(PHIVANCHUYEN)}</span>
            </div>
        </div>`;
            // Tong tien
            priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
            break;
        case 2: // Truong hop mua ngay
            // Hien thi san pham
            showProductBuyNow(product);
            // Tinh tien
            totalBillOrderHtml = `<div class="priceFlx">
                <div class="text">
                    Tiền hàng 
                    <span class="count">${product.soluong} món</span>
                </div>
                <div class="price-detail">
                    <span id="checkout-cart-total">${vnd(product.soluong * product.price)}</span>
                </div>
            </div>
            <div class="priceFlx chk-ship">
                <div class="text">Phí vận chuyển</div>
                <div class="price-detail chk-free-ship">
                    <span>${vnd(PHIVANCHUYEN)}</span>
                </div>
            </div>`
            // Tong tien
            priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
            break;
    }

    // Tinh tien
    totalBillOrder.innerHTML = totalBillOrderHtml;

    // Xu ly hinh thuc giao hang
    let giaotannoi = document.querySelector('#giaotannoi');
    let tudenlay = document.querySelector('#tudenlay');
    let tudenlayGroup = document.querySelector('#tudenlay-group');
    let chkShip = document.querySelectorAll(".chk-ship");

    tudenlay.addEventListener('click', () => {
        giaotannoi.classList.remove("active");
        tudenlay.classList.add("active");
        chkShip.forEach(item => {
            item.style.display = "none";
        });
        tudenlayGroup.style.display = "block";
        switch (option) {
            case 1:
                priceFinal.innerText = vnd(getCartTotal());
                break;
            case 2:
                priceFinal.innerText = vnd((product.soluong * product.price));
                break;
        }
    })

    giaotannoi.addEventListener('click', () => {
        tudenlay.classList.remove("active");
        giaotannoi.classList.add("active");
        tudenlayGroup.style.display = "none";
        chkShip.forEach(item => {
            item.style.display = "flex";
        });
        switch (option) {
            case 1:
                priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
                break;
            case 2:
                priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
                break;
        }
    })

    // Su kien khu nhan nut dat hang
    document.querySelector(".complete-checkout-btn").onclick = () => {
        switch (option) {
            case 1:
                xulyDathang();
                break;
            case 2:
                xulyDathang(product);
                break;
        }
    }
}

// Hien thi hang trong gio
function showProductCart() {
    let currentuser = JSON.parse(localStorage.getItem('currentuser'));
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = '';
    currentuser.cart.forEach(item => {
        let product = getProduct(item);
        listOrderHtml += `<div class="food-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-food">
            <div class="name-food">${product.title}</div>
        </div>
    </div>`
    })
    listOrder.innerHTML = listOrderHtml;
}

// Hien thi hang mua ngay
function showProductBuyNow(product) {
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = `<div class="food-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-food">
            <div class="name-food">${product.title}</div>
        </div>
    </div>`;
    listOrder.innerHTML = listOrderHtml;
}

//Open Page Checkout
let nutthanhtoan = document.querySelector('.thanh-toan')
let checkoutpage = document.querySelector('.checkout-page');
nutthanhtoan.addEventListener('click', () => {
    checkoutpage.classList.add('active');
    thanhtoanpage(1);
    closeCart();
    body.style.overflow = "hidden"
})

// Thanh toán online qua QR (mở trang tạo QR với amount + returnUrl)
let onlineCheckoutBtn = document.querySelector('.online-checkout-btn');
if (onlineCheckoutBtn) {
    onlineCheckoutBtn.addEventListener('click', () => {
        // Kiểm tra thông tin cần thiết giống khi đặt hàng (tối thiểu tên, sdt, địa chỉ)
        const tennguoinhan = document.querySelector('#tennguoinhan').value;
        const sdtnhan = document.querySelector('#sdtnhan').value;
        const diachinhan = document.querySelector('#diachinhan').value || '';
        if (!tennguoinhan || !sdtnhan || !diachinhan) {
            toast({ title: 'Chú ý', message: 'Vui lòng nhập đầy đủ thông tin nhận hàng trước khi thanh toán!', type: 'warning', duration: 3000 });
            return;
        }

        // Lấy tổng tiền hiển thị trong #checkout-cart-price-final (chuẩn hóa số)
        const totalEl = document.getElementById('checkout-cart-price-final');
        let amount = 0;
        if (totalEl) {
            // Loại bỏ ký tự không phải số
            const digits = totalEl.innerText.replace(/\D/g, '');
            amount = digits ? parseInt(digits) : (getCartTotal() + PHIVANCHUYEN);
        } else {
            amount = getCartTotal() + PHIVANCHUYEN;
        }

        const paymentId = 'p' + Date.now().toString(36);
        const currentUserPhone = JSON.parse(localStorage.getItem('currentuser') || '{}').phone || '';
        const orderData = {
            paymentId,
            option: currentCheckoutOption,
            khachhang: currentUserPhone,
            product: currentCheckoutProduct,
            cart: currentCheckoutOption === 1 ? JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('currentuser') || '{}').cart || [])) : null,
            tennguoinhan,
            sdtnhan,
            diachinhan,
            hinhthucgiao: document.querySelector('#giaotannoi').classList.contains('active') ? document.querySelector('#giaotannoi').innerText : document.querySelector('#tudenlay').innerText,
            thoigiangiao: document.querySelector('#giaongay').checked ? 'Giao ngay khi xong' : document.querySelector('.choise-time') ? document.querySelector('.choise-time').value : '',
            ngaygiaohang: document.querySelector('.pick-date.active') ? document.querySelector('.pick-date.active').getAttribute('data-date') : '',
            ghichu: document.querySelector('.note-order').value || '',
        };

        const pendingPaymentOrder = orderData;
        localStorage.setItem('pendingPaymentOrder', JSON.stringify(pendingPaymentOrder));

        const base = location.href.replace(/[^\/]*$/, '');
        const returnUrl = base + 'payment-success.html?paymentId=' + paymentId + '&orderData=' + encodeURIComponent(JSON.stringify(orderData));
        const qrUrl = base + 'payment-qr.html?paymentId=' + paymentId + '&amount=' + encodeURIComponent(amount) + '&returnUrl=' + encodeURIComponent(returnUrl);
        // Chuyển sang trang tạo QR (mở trong cùng tab)
        window.location.href = qrUrl;
    });
}

// Đặt hàng ngay
function dathangngay() {
    let productInfo = document.getElementById("product-detail-content");
    let datHangNgayBtn = productInfo.querySelector(".button-dathangngay");
    datHangNgayBtn.onclick = () => {
        if (localStorage.getItem('currentuser')) {
            let productId = datHangNgayBtn.getAttribute("data-product");
            let soluong = parseInt(productInfo.querySelector(".buttons_added .input-qty").value);
            let notevalue = productInfo.querySelector("#popup-detail-note").value;
            let ghichu = notevalue == "" ? "Không có ghi chú" : notevalue;
            let products = JSON.parse(localStorage.getItem('products'));
            let a = products.find(item => item.id == productId);
            a.soluong = parseInt(soluong);
            a.note = ghichu;
            checkoutpage.classList.add('active');
            thanhtoanpage(2, a);
            closeCart();
            body.style.overflow = "hidden"
        } else {
            toast({ title: 'Warning', message: 'Chưa đăng nhập tài khoản !', type: 'warning', duration: 3000 });
        }
    }
}

// Close Page Checkout
function closecheckout() {
    checkoutpage.classList.remove('active');
    body.style.overflow = "auto"
}

// Thong tin cac don hang da mua - Xu ly khi nhan nut dat hang
function xulyDathang(product) {
    let diachinhan = "";
    let hinhthucgiao = "";
    let thoigiangiao = "";
    let giaotannoi = document.querySelector("#giaotannoi");
    let tudenlay = document.querySelector("#tudenlay");
    let giaongay = document.querySelector("#giaongay");
    let giaovaogio = document.querySelector("#deliverytime");
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    // Hinh thuc giao & Dia chi nhan hang
    if (giaotannoi.classList.contains("active")) {
        diachinhan = document.querySelector("#diachinhan").value;
        hinhthucgiao = giaotannoi.innerText;
    }
    if (tudenlay.classList.contains("active")) {
        let chinhanh1 = document.querySelector("#chinhanh-1");
        let chinhanh2 = document.querySelector("#chinhanh-2");
        if (chinhanh1.checked) {
            diachinhan = "273 An Dương Vương, Phường 3, Quận 5";
        }
        if (chinhanh2.checked) {
            diachinhan = "04 Tôn Đức Thắng, Phường Bến Nghé, Quận 1";
        }
        hinhthucgiao = tudenlay.innerText;
    }

    // Thoi gian nhan hang
    if (giaongay.checked) {
        thoigiangiao = "Giao ngay khi xong";
    }

    if (giaovaogio.checked) {
        thoigiangiao = document.querySelector(".choise-time").value;
    }

    let orderDetails = localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")) : [];
    let order = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let madon = createId(order);
    let tongtien = 0;
    if (product == undefined) {
        currentUser.cart.forEach(item => {
            item.madon = madon;
            item.price = getpriceProduct(item.id);
            tongtien += item.price * item.soluong;
            orderDetails.push(item);
        });
    } else {
        product.madon = madon;
        product.price = getpriceProduct(product.id);
        tongtien += product.price * product.soluong;
        orderDetails.push(product);
    }

    let tennguoinhan = document.querySelector("#tennguoinhan").value;
    let sdtnhan = document.querySelector("#sdtnhan").value

    if (tennguoinhan == "" || sdtnhan == "" || diachinhan == "") {
        toast({ title: 'Chú ý', message: 'Vui lòng nhập đầy đủ thông tin !', type: 'warning', duration: 4000 });
    } else {
        let donhang = {
            id: madon,
            khachhang: currentUser.phone,
            hinhthucgiao: hinhthucgiao,
            ngaygiaohang: document.querySelector(".pick-date.active").getAttribute("data-date"),
            thoigiangiao: thoigiangiao,
            ghichu: document.querySelector(".note-order").value,
            tenguoinhan: tennguoinhan,
            sdtnhan: sdtnhan,
            diachinhan: diachinhan,
            thoigiandat: new Date(),
            tongtien: tongtien,
            trangthai: 0
        }

        order.unshift(donhang);
        if (product == null) {
            currentUser.cart.length = 0;
        }

        localStorage.setItem("order", JSON.stringify(order));
        localStorage.setItem("currentuser", JSON.stringify(currentUser));
        localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
        // Hiển thị thông báo, xóa giỏ hàng và điều hướng
        // handlePaymentSuccess sẽ tự show toast, clear cart và redirect
        handlePaymentSuccess('index.html#order-history');
    }
}

function getpriceProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    let sp = products.find(item => {
        return item.id == id;
    })
    return sp.price;
}

// -------------------------
// Thanh toán: clear/notify/redirect helpers
// -------------------------
// Xóa giỏ hàng khỏi localStorage (hỗ trợ cả key `cart` và `currentuser.cart`)
function clearCartLocalStorage() {
    try {
        // Nếu có key 'cart' (ví dụ implementations khác) thì xóa
        localStorage.removeItem('cart');
    } catch (e) {
        console.warn('clear cart key failed', e);
    }

    try {
        // Nếu lưu giỏ hàng trong currentuser.cart thì xóa mảng
        const cuRaw = localStorage.getItem('currentuser');
        if (cuRaw) {
            const cu = JSON.parse(cuRaw);
            if (cu && Array.isArray(cu.cart) && cu.cart.length > 0) {
                cu.cart.length = 0;
                localStorage.setItem('currentuser', JSON.stringify(cu));
            }
        }
    } catch (e) {
        console.warn('clear currentuser.cart failed', e);
    }
}

// Cập nhật giao diện giỏ hàng sau khi xóa (đơn giản, rõ ràng)
function updateCartUI() {
    // Danh sách đơn hàng trên trang checkout
    const listOrder = document.getElementById('list-order-checkout');
    if (listOrder) {
        listOrder.innerHTML = '<div class="empty-cart">Giỏ hàng trống</div>';
    }

    // Hiển thị tổng tiền là 0
    const priceFinalEl = document.getElementById('checkout-cart-price-final');
    if (priceFinalEl) {
        priceFinalEl.innerText = '0 đ';
    }

    // Nếu có bộ đếm số lượng ở header hoặc icon, cố gắng cập nhật (tự chịu biến tên)
    try {
        const cartCountEls = document.querySelectorAll('.cart-count');
        cartCountEls.forEach(el => el.textContent = '0');
    } catch (e) { /* ignore */ }
}

// Thông báo thành công + очистка giỏ hàng + redirect
// redirectUrl (optional) — nếu không truyền thì chuyển về `index.html#order-history`
function handlePaymentSuccess(redirectUrl) {
    // Hiển thị toast nếu có hàm `toast`, nếu không dùng alert
    if (typeof toast === 'function') {
        toast({ title: 'Thanh toán', message: 'Thanh toán thành công', type: 'success', duration: 2000 });
    } else {
        alert('Thanh toán thành công');
    }

    // Xóa dữ liệu giỏ hàng
    clearCartLocalStorage();

    // Cập nhật giao diện ngay lập tức
    updateCartUI();

    // Gửi sự kiện broadcast để các tab khác có thể cập nhật giao diện
    try {
        if (typeof BroadcastChannel !== 'undefined') {
            const bc = new BroadcastChannel('cvshop_payments');
            bc.postMessage({ type: 'payment_success' });
            bc.close();
        } else {
            // Fallback: ghi vào localStorage để trigger event 'storage' trên các tab khác
            const evt = { payment: true, time: Date.now() };
            localStorage.setItem('cvshop_payment_event', JSON.stringify(evt));
            setTimeout(() => { localStorage.removeItem('cvshop_payment_event'); }, 2000);
        }
    } catch (e) {
        console.warn('broadcast payment event failed', e);
    }

    // Redirect sau 1.2s để người dùng kịp thấy thông báo
    setTimeout(() => {
        if (redirectUrl) location.href = redirectUrl;
        else location.href = 'index.html#order-history';
    }, 1200);
}
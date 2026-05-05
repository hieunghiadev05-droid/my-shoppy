Đăng lên GitHub Pages và test QR / Momo flow

1. Tạo repo và đẩy mã nguồn

- Tạo repository mới trên GitHub.
- Trong máy local, ở thư mục dự án, chạy:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <url-repo>
git push -u origin main
```

2. Bật GitHub Pages

- Vào Settings > Pages cho repo trên GitHub.
- Chọn Source: `main` branch và folder `/ (root)`.
- Lưu; GitHub sẽ cung cấp URL dạng `https://<username>.github.io/<repo>/`.

3. Kiểm tra flow trên điện thoại

- Mở URL GitHub Pages trên điện thoại.
- Trên trang, thêm sản phẩm vào giỏ → Mở giỏ hàng → Thanh toán → điền Tên/SĐT/Địa chỉ → nhấn `Thanh toán Online (QR)`.
- Trang sẽ chuyển tới `payment-qr.html` và hiển thị mã QR.
- Dùng app quét QR trên điện thoại (hoặc mở liên kết trực tiếp): sẽ mở trang `momo_pay.html`.
- Trên trang Momo giả, nhấn `Thanh toán` → trang sẽ redirect về `payment-success.html` và hiển thị thành công.

4. Nếu QR không hiển thị

- Trang đã hỗ trợ 2 cơ chế:
  - Thử dùng CDN `qrcode.min.js` để sinh QR cục bộ.
  - Nếu CDN bị chặn, trang sẽ dùng Google Charts image.
  - Nếu cả hai không hoạt động, dùng "Liên kết trực tiếp" bên dưới QR để mở bằng trình duyệt di động.

5. Cấu hình tên miền tùy chọn

- Mua domain, tạo DNS A/CNAME theo hướng dẫn GitHub Pages.
- Thêm file `CNAME` vào root repo chứa domain bạn mua.
- Chờ DNS propogation và kiểm tra.

Nếu bạn muốn, mình có thể:

- Thêm bản `qrcode.min.js` cục bộ vào `js/` (khuyến nghị cho môi trường mạng bị chặn).
- Viết 1 script nhỏ tự động deploy bằng `gh-pages` hoặc `git` hướng dẫn chi tiết.

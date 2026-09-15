# NightPulse

Thư mục (directory) tĩnh các nền tảng cam live **18+ chính thức** — giao diện tối / neon nightlife, tiếng Việt mặc định.

> **EN:** Beautiful Vietnamese-primary aggregator of official adult live-cam homepages. No embedded streams — outbound links only.

---

## Chạy local / Local run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output → dist/
npm run preview  # xem bản build
```

Yêu cầu: Node.js 18+.

---

## Deploy miễn phí trên GitHub Pages

Site: **https://jakebrand24.github.io/x18/**

- `vite.config.ts` dùng `base: '/x18/'`
- Bản build tĩnh nằm trên nhánh `gh-pages`
- Repo Settings → Pages → Branch: `gh-pages` / root (đã bật qua API nếu token đủ quyền)

Cập nhật site: `npm run build` rồi đẩy lại nội dung `dist/` lên nhánh `gh-pages`.


## Tính năng

- Age gate 18+ (lưu `localStorage`)
- EN / VI toggle (mặc định VI)
- Tìm kiếm + chip lọc danh mục
- Featured + lưới thẻ nền tảng
- Thẻ: avatar gradient, mô tả VI, tags, badge “Đang live” (cosmetic), CTA mở tab mới
- Mobile-first, glass/neon, animation nhẹ

## Lưu ý pháp lý

NightPulse **không** lưu trữ, phát sóng hay nhúng nội dung người lớn. Chỉ liên kết tới trang chủ chính thức của bên thứ ba. Người dùng tự chịu trách nhiệm khi truy cập trang ngoài.

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

## Deploy miễn phí trên Cloudflare Pages

### Cách 1 — Kết nối GitHub

1. Push repo lên GitHub (ví dụ `jakebrand24/x18`).
2. Vào [Cloudflare Dashboard → Workers & Pages](https://dash.cloudflare.com/) → **Create** → **Pages** → **Connect to Git**.
3. Chọn repo, cấu hình:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy → nhận subdomain miễn phí `*.pages.dev`.

### Cách 2 — Deploy trực tiếp bằng Wrangler

```bash
npm run build
npx wrangler pages deploy dist
```

`wrangler.toml` đã có sẵn (`pages_build_output_dir = "dist"`).

---

## Tính năng

- Age gate 18+ (lưu `localStorage`)
- EN / VI toggle (mặc định VI)
- Tìm kiếm + chip lọc danh mục
- Featured + lưới thẻ nền tảng
- Thẻ: avatar gradient, mô tả VI, tags, badge “Đang live” (cosmetic), CTA mở tab mới
- Mobile-first, glass/neon, animation nhẹ

## Lưu ý pháp lý

NightPulse **không** lưu trữ, phát sóng hay nhúng nội dung người lớn. Chỉ liên kết tới trang chủ chính thức của bên thứ ba. Người dùng tự chịu trách nhiệm khi truy cập trang ngoài.

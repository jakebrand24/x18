export type Lang = 'vi' | 'en';

export const translations = {
  vi: {
    brand: 'NightPulse',
    tagline: 'Thư mục cam live 18+ chính thức',
    heroTitle: 'Nhịp đập đêm.',
    heroSubtitle:
      'Khám phá các nền tảng cam live người lớn uy tín — chỉ liên kết chính thức, không nhúng stream.',
    searchPlaceholder: 'Tìm nền tảng…',
    featured: 'Nổi bật',
    allSites: 'Tất cả nền tảng',
    results: 'kết quả',
    noResults: 'Không tìm thấy nền tảng phù hợp.',
    visit: 'Truy cập',
    liveBadge: 'Đang live',
    ageTitle: 'Nội dung 18+',
    ageBody:
      'Trang này dành cho người từ 18 tuổi trở lên. Bằng cách vào, bạn xác nhận đã đủ tuổi theo luật địa phương và đồng ý xem nội dung người lớn.',
    enter: 'Tôi đủ 18 — Vào',
    leave: 'Rời đi',
    footerDisclaimer:
      'NightPulse chỉ là thư mục liên kết tới các trang bên thứ ba. Chúng tôi không lưu trữ, phát sóng hay nhúng nội dung người lớn. Người dùng tự chịu trách nhiệm khi truy cập các trang ngoài.',
    footerRights: '© {year} NightPulse. Chỉ dành cho người lớn.',
    langLabel: 'Ngôn ngữ',
    clearSearch: 'Xóa tìm kiếm',
  },
  en: {
    brand: 'NightPulse',
    tagline: 'Official 18+ live cam directory',
    heroTitle: 'Night pulse.',
    heroSubtitle:
      'Discover trusted adult live cam platforms — official outbound links only, no embedded streams.',
    searchPlaceholder: 'Search platforms…',
    featured: 'Featured',
    allSites: 'All platforms',
    results: 'results',
    noResults: 'No matching platforms found.',
    visit: 'Visit',
    liveBadge: 'Live now',
    ageTitle: '18+ Content',
    ageBody:
      'This site is for adults 18+. By entering, you confirm you are of legal age in your jurisdiction and consent to viewing adult content.',
    enter: "I'm 18+ — Enter",
    leave: 'Leave',
    footerDisclaimer:
      'NightPulse is a directory of third-party links only. We do not host, stream, or embed adult content. Users are responsible for their visits to external sites.',
    footerRights: '© {year} NightPulse. Adults only.',
    langLabel: 'Language',
    clearSearch: 'Clear search',
  },
} as const;

export type TranslationKey = keyof typeof translations.vi;

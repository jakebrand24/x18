export type Tag = 'Free' | 'Premium' | 'HD' | 'VR' | 'Mobile';

export type Category =
  | 'all'
  | 'popular'
  | 'free'
  | 'premium'
  | 'asian'
  | 'couple'
  | 'vr';

export interface SiteEntry {
  id: string;
  name: string;
  url: string;
  descriptionVi: string;
  descriptionEn: string;
  tags: Tag[];
  categories: Category[];
  featured: boolean;
  gradient: string;
  initial: string;
}

export const CATEGORIES: { id: Category; labelVi: string; labelEn: string }[] = [
  { id: 'all', labelVi: 'Tất cả', labelEn: 'All' },
  { id: 'popular', labelVi: 'Phổ biến', labelEn: 'Popular' },
  { id: 'free', labelVi: 'Miễn phí', labelEn: 'Free' },
  { id: 'premium', labelVi: 'Premium', labelEn: 'Premium' },
  { id: 'asian', labelVi: 'Châu Á', labelEn: 'Asian' },
  { id: 'couple', labelVi: 'Cặp đôi', labelEn: 'Couples' },
  { id: 'vr', labelVi: 'VR', labelEn: 'VR' },
];

export const SITES: SiteEntry[] = [
  {
    id: 'chaturbate',
    name: 'Chaturbate',
    url: 'https://chaturbate.com',
    descriptionVi:
      'Nền tảng cam live miễn phí lớn nhất thế giới với hàng nghìn phòng đang phát.',
    descriptionEn:
      'One of the largest free live cam platforms with thousands of rooms online.',
    tags: ['Free', 'HD', 'Mobile'],
    categories: ['popular', 'free', 'couple'],
    featured: true,
    gradient: 'from-orange-500 via-amber-500 to-yellow-400',
    initial: 'CB',
  },
  {
    id: 'stripchat',
    name: 'Stripchat',
    url: 'https://stripchat.com',
    descriptionVi:
      'Cam HD chất lượng cao, giao diện hiện đại và nhiều mô hình quốc tế.',
    descriptionEn:
      'High-quality HD cams with a modern UI and a global model roster.',
    tags: ['Free', 'HD', 'VR'],
    categories: ['popular', 'free', 'vr', 'asian'],
    featured: true,
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    initial: 'SC',
  },
  {
    id: 'livejasmin',
    name: 'LiveJasmin',
    url: 'https://www.livejasmin.com',
    descriptionVi:
      'Thương hiệu premium lâu đời với show riêng tư và chất lượng studio.',
    descriptionEn:
      'Long-standing premium brand known for private shows and studio quality.',
    tags: ['Premium', 'HD'],
    categories: ['popular', 'premium'],
    featured: true,
    gradient: 'from-fuchsia-500 via-purple-500 to-violet-600',
    initial: 'LJ',
  },
  {
    id: 'bongacams',
    name: 'BongaCams',
    url: 'https://bongacams.com',
    descriptionVi:
      'Cam live miễn phí phổ biến châu Âu với đa dạng nội dung người lớn.',
    descriptionEn:
      'Popular free European live cam network with diverse adult content.',
    tags: ['Free', 'HD', 'Mobile'],
    categories: ['popular', 'free', 'couple'],
    featured: true,
    gradient: 'from-red-500 via-orange-500 to-amber-400',
    initial: 'BC',
  },
  {
    id: 'camsoda',
    name: 'CamSoda',
    url: 'https://www.camsoda.com',
    descriptionVi:
      'Cam interactive với VR, toys điều khiển từ xa và show độc đáo.',
    descriptionEn:
      'Interactive cams featuring VR, tip-controlled toys, and unique shows.',
    tags: ['Free', 'HD', 'VR'],
    categories: ['free', 'vr', 'popular'],
    featured: false,
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    initial: 'CS',
  },
  {
    id: 'myfreecams',
    name: 'MyFreeCams',
    url: 'https://www.myfreecams.com',
    descriptionVi:
      'Cộng đồng cam lâu năm, giao diện cổ điển và mô hình thân thiện.',
    descriptionEn:
      'Long-running cam community with a classic UI and friendly models.',
    tags: ['Free', 'HD'],
    categories: ['free', 'popular'],
    featured: false,
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    initial: 'MF',
  },
  {
    id: 'streamate',
    name: 'Streamate',
    url: 'https://streamate.com',
    descriptionVi:
      'Mạng lưới premium lớn với hàng nghìn phòng private chất lượng cao.',
    descriptionEn:
      'Major premium network with thousands of high-quality private rooms.',
    tags: ['Premium', 'HD', 'Mobile'],
    categories: ['premium', 'popular'],
    featured: true,
    gradient: 'from-violet-500 via-purple-600 to-indigo-700',
    initial: 'SM',
  },
  {
    id: 'flirt4free',
    name: 'Flirt4Free',
    url: 'https://www.flirt4free.com',
    descriptionVi:
      'Nền tảng live cam với show nhóm, private và nhiều danh mục người lớn.',
    descriptionEn:
      'Live cam platform offering group shows, privates, and varied adult categories.',
    tags: ['Premium', 'HD'],
    categories: ['premium', 'couple'],
    featured: false,
    gradient: 'from-rose-400 via-pink-500 to-fuchsia-600',
    initial: 'F4',
  },
  {
    id: 'cam4',
    name: 'Cam4',
    url: 'https://www.cam4.com',
    descriptionVi:
      'Cam cộng đồng miễn phí với mô hình từ khắp nơi trên thế giới.',
    descriptionEn:
      'Free community cams featuring performers from around the world.',
    tags: ['Free', 'HD', 'Mobile'],
    categories: ['free', 'couple', 'asian'],
    featured: false,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    initial: 'C4',
  },
  {
    id: 'cherrytv',
    name: 'Cherry.tv',
    url: 'https://cherry.tv',
    descriptionVi:
      'Nền tảng cam hiện đại, giao diện đẹp và trải nghiệm xem mượt mà.',
    descriptionEn:
      'Modern cam platform with a polished UI and smooth viewing experience.',
    tags: ['Free', 'HD'],
    categories: ['free', 'popular', 'asian'],
    featured: true,
    gradient: 'from-red-400 via-rose-500 to-pink-600',
    initial: 'CH',
  },
  {
    id: 'adultwork',
    name: 'AdultWork',
    url: 'https://www.adultwork.com',
    descriptionVi:
      'Marketplace người lớn Anh Quốc với cam, nội dung và dịch vụ 1:1.',
    descriptionEn:
      'UK adult marketplace offering cams, content, and 1:1 services.',
    tags: ['Premium', 'HD'],
    categories: ['premium'],
    featured: false,
    gradient: 'from-slate-400 via-zinc-500 to-neutral-600',
    initial: 'AW',
  },
  {
    id: 'imlive',
    name: 'ImLive',
    url: 'https://www.imlive.com',
    descriptionVi:
      'Cam live lâu đời tập trung vào chat riêng tư và kết nối 1:1.',
    descriptionEn:
      'Established live cams focused on private chat and 1:1 connections.',
    tags: ['Premium', 'HD'],
    categories: ['premium'],
    featured: false,
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    initial: 'IL',
  },
  {
    id: 'xlovecam',
    name: 'XLoveCam',
    url: 'https://www.xlovecam.com',
    descriptionVi:
      'Nền tảng châu Âu với show riêng tư HD và mô hình đa quốc gia.',
    descriptionEn:
      'European platform with HD private shows and international models.',
    tags: ['Premium', 'HD'],
    categories: ['premium', 'asian'],
    featured: false,
    gradient: 'from-pink-400 via-red-400 to-rose-600',
    initial: 'XL',
  },
  {
    id: 'cams',
    name: 'Cams.com',
    url: 'https://www.cams.com',
    descriptionVi:
      'Thương hiệu cam lớn thuộc mạng Streamate với trải nghiệm premium.',
    descriptionEn:
      'Major Streamate-network brand delivering a premium cam experience.',
    tags: ['Premium', 'HD', 'Mobile'],
    categories: ['premium', 'popular'],
    featured: false,
    gradient: 'from-indigo-400 via-blue-500 to-cyan-500',
    initial: 'CM',
  },
  {
    id: 'skyprivate',
    name: 'SkyPrivate',
    url: 'https://www.skyprivate.com',
    descriptionVi:
      'Kết nối riêng tư qua Skype/Zoom với người mẫu đã xác minh.',
    descriptionEn:
      'Private 1:1 connections via Skype/Zoom with verified performers.',
    tags: ['Premium', 'HD'],
    categories: ['premium', 'asian'],
    featured: false,
    gradient: 'from-sky-400 via-blue-500 to-indigo-600',
    initial: 'SP',
  },
  {
    id: 'jasmin',
    name: 'Jasmin.com',
    url: 'https://www.jasmin.com',
    descriptionVi:
      'Thương hiệu chị em của LiveJasmin với giao diện mới và cam HD.',
    descriptionEn:
      'LiveJasmin sister brand with a refreshed UI and HD live cams.',
    tags: ['Premium', 'HD', 'Mobile'],
    categories: ['premium', 'popular'],
    featured: false,
    gradient: 'from-purple-400 via-fuchsia-500 to-pink-500',
    initial: 'JA',
  },
];

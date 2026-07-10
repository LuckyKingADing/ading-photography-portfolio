export interface PortfolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PhotoSeries {
  slug: string;
  title: string;
  year: string;
  location: string;
  category: string;
  summary: string;
  description: string;
  isPlaceholder: boolean;
  cover: PortfolioImage;
  secondaryCover: PortfolioImage;
  images: PortfolioImage[];
}

export const series: PhotoSeries[] = [
  {
    slug: 'quiet-hours',
    title: '静默时刻',
    year: '2026',
    location: '布达佩斯',
    category: '人像习作',
    summary: '关于柔和日光，以及动作之间短暂停顿的一组观察。',
    description:
      '这个示例系列用于展示一组完整人像故事的阅读节奏。完成选片后，请按照最终顺序替换这些抽象画面。',
    isPlaceholder: true,
    cover: {
      src: 'images/series/quiet-hours/frame-01.svg',
      alt: '标记为画面 01 的石墨灰与银色抽象人像占位图',
      width: 1200,
      height: 1600,
    },
    secondaryCover: {
      src: 'images/series/quiet-hours/frame-02.svg',
      alt: '标记为画面 02 的浅银色抽象人像占位图',
      width: 1200,
      height: 1600,
    },
    images: [
      {
        src: 'images/series/quiet-hours/frame-01.svg',
        alt: '标记为画面 01 的石墨灰与银色抽象人像占位图',
        width: 1200,
        height: 1600,
      },
      {
        src: 'images/series/quiet-hours/frame-03.svg',
        alt: '标记为画面 03 的石墨灰抽象横幅占位图',
        width: 1800,
        height: 1200,
      },
      {
        src: 'images/series/quiet-hours/frame-02.svg',
        alt: '标记为画面 02 的浅银色抽象人像占位图',
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    slug: 'after-rain',
    title: '雨后',
    year: '2026',
    location: '布达佩斯',
    category: '城市人像',
    summary: '湿润街面的倒影、清冷空气，以及午后最后一束光。',
    description:
      '这个系列展示如何把环境人像与更宽阔的场景画面编排为同一个故事。',
    isPlaceholder: true,
    cover: {
      src: 'images/series/after-rain/frame-01.svg',
      alt: '标记为画面 01 的蓝灰色抽象横幅占位图',
      width: 1800,
      height: 1200,
    },
    secondaryCover: {
      src: 'images/series/after-rain/frame-02.svg',
      alt: '标记为画面 02 的深色抽象人像占位图',
      width: 1200,
      height: 1600,
    },
    images: [
      {
        src: 'images/series/after-rain/frame-01.svg',
        alt: '标记为画面 01 的蓝灰色抽象横幅占位图',
        width: 1800,
        height: 1200,
      },
      {
        src: 'images/series/after-rain/frame-02.svg',
        alt: '标记为画面 02 的深色抽象人像占位图',
        width: 1200,
        height: 1600,
      },
      {
        src: 'images/series/after-rain/frame-03.svg',
        alt: '标记为画面 03 的倒影主题抽象横幅占位图',
        width: 1800,
        height: 1200,
      },
    ],
  },
  {
    slug: 'sunday-window',
    title: '星期日的窗边',
    year: '2026',
    location: '居所',
    category: '私人人像',
    summary: '由窗边光线与室内静谧共同构成的一组人像。',
    description:
      '这个示例适合更精简、更亲密的人像组照。请克制选片，让每一张照片都拥有不可替代的位置。',
    isPlaceholder: true,
    cover: {
      src: 'images/series/sunday-window/frame-01.svg',
      alt: '标记为画面 01 的暖灰色抽象人像占位图',
      width: 1200,
      height: 1600,
    },
    secondaryCover: {
      src: 'images/series/sunday-window/frame-02.svg',
      alt: '标记为画面 02 的窗光主题抽象横幅占位图',
      width: 1800,
      height: 1200,
    },
    images: [
      {
        src: 'images/series/sunday-window/frame-01.svg',
        alt: '标记为画面 01 的暖灰色抽象人像占位图',
        width: 1200,
        height: 1600,
      },
      {
        src: 'images/series/sunday-window/frame-02.svg',
        alt: '标记为画面 02 的窗光主题抽象横幅占位图',
        width: 1800,
        height: 1200,
      },
      {
        src: 'images/series/sunday-window/frame-03.svg',
        alt: '标记为画面 03 的暖灰色抽象方形占位图',
        width: 1400,
        height: 1400,
      },
    ],
  },
];

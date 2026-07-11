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
    slug: 'shenzhen-melania-town',
    title: '深圳 · 梅拉尼娅小镇',
    year: '2026.06',
    location: '深圳',
    category: '旅行人像',
    summary: '夏日傍晚的彩色街巷、游乐场灯光，以及一组白裙人像。',
    description:
      '从斜照进街巷的夕阳，到夜色里的游乐场灯光，这组照片记录了同一段傍晚里不断变化的颜色与情绪。',
    isPlaceholder: false,
    cover: {
      src: 'images/series/shenzhen-melania-town/01-dscf7727.webp',
      alt: '夕阳下，一位身穿白裙的女孩侧身站在蓝紫色建筑旁',
      width: 1600,
      height: 2400,
    },
    secondaryCover: {
      src: 'images/series/shenzhen-melania-town/07-dscf7993.webp',
      alt: '夜色中，一位身穿白裙的女孩站在亮起的钟楼装饰前',
      width: 1600,
      height: 2400,
    },
    images: [
      {
        src: 'images/series/shenzhen-melania-town/01-dscf7727.webp',
        alt: '夕阳下，一位身穿白裙的女孩侧身站在蓝紫色建筑旁',
        width: 1600,
        height: 2400,
      },
      {
        src: 'images/series/shenzhen-melania-town/02-dscf7839.webp',
        alt: '一位女孩背对镜头，望向梅拉尼娅小镇的入口标志',
        width: 1600,
        height: 2400,
      },
      {
        src: 'images/series/shenzhen-melania-town/03-dscf7853.webp',
        alt: '一位戴眼镜、身穿白裙的女孩站在印有多语文字的墙前',
        width: 1600,
        height: 2400,
      },
      {
        src: 'images/series/shenzhen-melania-town/04-dscf7933.webp',
        alt: '暖黄色灯光里，一位身穿白裙的女孩侧身站在彩色玻璃门旁',
        width: 1600,
        height: 2400,
      },
      {
        src: 'images/series/shenzhen-melania-town/05-dscf7960.webp',
        alt: '蓝调时刻，一位身穿白裙的女孩倚在露台栏杆上回望',
        width: 1600,
        height: 2400,
      },
      {
        src: 'images/series/shenzhen-melania-town/06-dscf7976.webp',
        alt: '傍晚，一位身穿白裙的女孩扶着白色旋转楼梯栏杆',
        width: 1600,
        height: 2400,
      },
      {
        src: 'images/series/shenzhen-melania-town/07-dscf7993.webp',
        alt: '夜色中，一位身穿白裙的女孩站在亮起的钟楼装饰前',
        width: 1600,
        height: 2400,
      },
    ],
  },
];

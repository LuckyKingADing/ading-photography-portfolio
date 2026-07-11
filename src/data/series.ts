export interface PortfolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  featuredOrder?: number;
}

export type SeriesCategory = '人像' | '旅行';

export interface PhotoSeries {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: SeriesCategory;
  summary: string;
  description: string;
  images: PortfolioImage[];
}

export const series: PhotoSeries[] = [
  {
    slug: 'budapest',
    title: '匈牙利 · 布达佩斯',
    date: '2026.07',
    location: '布达佩斯',
    category: '旅行',
    summary: '沿着多瑙河，从日落前的桥与城堡，看到夜色中亮起的国会大厦。',
    description:
      '白天的河岸、教堂与城堡逐渐让位给蓝调时刻。这组照片围绕多瑙河展开，把布达与佩斯两岸的建筑、游船和夜色串成一段城市漫步。',
    images: [
      {
        src: 'images/series/budapest/01-06bd22.webp',
        alt: '从布达一侧高处俯瞰链子桥、多瑙河和匈牙利国会大厦',
        width: 2400,
        height: 1807,
      },
      {
        src: 'images/series/budapest/02-e102c4.webp',
        alt: '阳光下，马加什教堂彩色屋顶、石墙和尖塔的近景',
        width: 1807,
        height: 2400,
      },
      {
        src: 'images/series/budapest/03-fe74da.webp',
        alt: '多瑙河对岸的布达城堡与河岸建筑',
        width: 1807,
        height: 2400,
      },
      {
        src: 'images/series/budapest/04-0b3841.webp',
        alt: '逆光中的匈牙利国会大厦与河岸骑行者',
        width: 1807,
        height: 2400,
      },
      {
        src: 'images/series/budapest/05-b5c20c.webp',
        alt: '近距离仰望匈牙利国会大厦的穹顶和尖塔',
        width: 1807,
        height: 2400,
      },
      {
        src: 'images/series/budapest/06-c23b30.webp',
        alt: '傍晚，多瑙河对岸的匈牙利国会大厦',
        width: 2400,
        height: 1807,
      },
      {
        src: 'images/series/budapest/07-4c4d0d.webp',
        alt: '蓝调时刻映在多瑙河畔的匈牙利国会大厦',
        width: 2400,
        height: 1807,
      },
      {
        src: 'images/series/budapest/08-a8d6ee.webp',
        alt: '夜色中，一只手举着可乐瓶，背景是亮起的国会大厦',
        width: 2400,
        height: 1807,
      },
      {
        src: 'images/series/budapest/09-169b40.webp',
        alt: '深蓝夜空下金色亮灯的匈牙利国会大厦与多瑙河游船',
        width: 2400,
        height: 1807,
      },
    ],
  },
  {
    slug: 'shenzhen-melania-town',
    title: '深圳 · 梅拉尼娅小镇',
    date: '2026.06',
    location: '深圳',
    category: '人像',
    summary: '夏日傍晚的彩色街巷、游乐场灯光，以及一组白裙人像。',
    description:
      '从斜照进街巷的夕阳，到夜色里的游乐场灯光，这组照片记录了同一段傍晚里不断变化的颜色与情绪。',
    images: [
      {
        src: 'images/series/shenzhen-melania-town/01-dscf7727.webp',
        alt: '夕阳下，一位身穿白裙的女孩侧身站在蓝紫色建筑旁',
        width: 1600,
        height: 2400,
        featuredOrder: 1,
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
        featuredOrder: 2,
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
        featuredOrder: 3,
      },
      {
        src: 'images/series/shenzhen-melania-town/06-dscf7976.webp',
        alt: '傍晚，一位身穿白裙的女孩扶着白色旋转楼梯栏杆',
        width: 1600,
        height: 2400,
        featuredOrder: 4,
      },
      {
        src: 'images/series/shenzhen-melania-town/07-dscf7993.webp',
        alt: '夜色中，一位身穿白裙的女孩站在亮起的钟楼装饰前',
        width: 1600,
        height: 2400,
        featuredOrder: 5,
      },
    ],
  },
  {
    slug: 'stuttgart',
    title: '德国 · 斯图加特',
    date: '2025.10–11',
    location: '斯图加特',
    category: '旅行',
    summary: '从市中心的建筑、广场与雕像，走进奔驰博物馆里的机械历史。',
    description:
      '这组照片从斯图加特的城市空间开始，随后进入奔驰博物馆。几何楼梯、广场纪念柱、街边建筑与展厅中的汽车，共同组成一段关于城市和工业设计的旅行记录。',
    images: [
      {
        src: 'images/series/stuttgart/01-img3032.webp',
        alt: '从高处俯瞰斯图加特市立图书馆层层交错的白色楼梯',
        width: 1800,
        height: 2400,
      },
      {
        src: 'images/series/stuttgart/02-img3045.webp',
        alt: '蓝天下，斯图加特王宫广场中央的纪念柱',
        width: 1800,
        height: 2400,
      },
      {
        src: 'images/series/stuttgart/03-img3050.webp',
        alt: '蓝天下，一座深色人物雕像立在石质基座上',
        width: 1800,
        height: 2400,
      },
      {
        src: 'images/series/stuttgart/04-img3064.webp',
        alt: '秋日街道旁的石砌历史建筑、落叶与白色车辆',
        width: 1800,
        height: 2400,
      },
      {
        src: 'images/series/stuttgart/05-img3264.webp',
        alt: '奔驰博物馆中陈列品牌标志与机械零件的历史展墙',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/stuttgart/06-img3267.webp',
        alt: '奔驰博物馆展厅里一辆黑色经典轿车与参观者',
        width: 1800,
        height: 2400,
      },
      {
        src: 'images/series/stuttgart/07-img3276.webp',
        alt: '粉色展厅中陈列的一辆黄色奔驰跑车',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/stuttgart/08-img3282.webp',
        alt: '从高处俯瞰奔驰博物馆里成排陈列的赛车',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/stuttgart/09-img3310.webp',
        alt: '阴天下的梅赛德斯-奔驰博物馆圆形建筑外观',
        width: 2400,
        height: 1800,
      },
    ],
  },
  {
    slug: 'shenzhen-observatory',
    title: '深圳 · 天文台',
    date: '2025.08–10',
    location: '深圳',
    category: '旅行',
    summary: '从山海步道、礁石海岸到日落沙滩，一组关于深圳东部海岸的旅行记录。',
    description:
      '沿着山路走向天文台，在高处看海，也在傍晚回到浪边。这组照片把晴日的蓝、山海之间的层次和落日后的余光连在一起。',
    images: [
      {
        src: 'images/series/shenzhen-observatory/01-img2212.webp',
        alt: '蓝天下，群山、湖面与蜿蜒的白色步道',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/shenzhen-observatory/02-img2289.webp',
        alt: '从深圳天文台山脊步道俯瞰海岸与远处海面',
        width: 1800,
        height: 2400,
      },
      {
        src: 'images/series/shenzhen-observatory/03-img2323.webp',
        alt: '透过山坡树木望见蓝色海湾与礁石海岸',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/shenzhen-observatory/04-img2232.webp',
        alt: '晴日里拍打礁石的海浪与远方小岛',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/shenzhen-observatory/05-img2340.webp',
        alt: '阳光下呈现青绿色层次的礁石海湾',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/shenzhen-observatory/06-img2344.webp',
        alt: '深圳东部海岸的蓝色海面、礁石与远方岛屿',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/shenzhen-observatory/07-img2328.webp',
        alt: '从高处俯瞰海上快艇、礁石与沿山步道',
        width: 2400,
        height: 1807,
      },
      {
        src: 'images/series/shenzhen-observatory/08-img0889.webp',
        alt: '落日余晖映照海面与岸边黑色礁石',
        width: 2400,
        height: 1800,
      },
      {
        src: 'images/series/shenzhen-observatory/09-img0896.webp',
        alt: '暮色中的海滩、浅水倒影与散步的人群',
        width: 2400,
        height: 1800,
      },
    ],
  },
];

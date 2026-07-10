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
    title: 'Quiet Hours',
    year: '2026',
    location: 'Budapest',
    category: 'Portrait study',
    summary: 'A study of soft daylight and the spaces between gestures.',
    description:
      'This demo series shows how a finished portrait story will read. Replace the abstract frames with your own ordered photographs when the final selection is ready.',
    isPlaceholder: true,
    cover: {
      src: 'images/series/quiet-hours/frame-01.svg',
      alt: 'Abstract graphite and silver portrait placeholder labelled frame 01',
      width: 1200,
      height: 1600,
    },
    secondaryCover: {
      src: 'images/series/quiet-hours/frame-02.svg',
      alt: 'Abstract pale silver portrait placeholder labelled frame 02',
      width: 1200,
      height: 1600,
    },
    images: [
      {
        src: 'images/series/quiet-hours/frame-01.svg',
        alt: 'Abstract graphite and silver portrait placeholder labelled frame 01',
        width: 1200,
        height: 1600,
      },
      {
        src: 'images/series/quiet-hours/frame-03.svg',
        alt: 'Abstract graphite landscape placeholder labelled frame 03',
        width: 1800,
        height: 1200,
      },
      {
        src: 'images/series/quiet-hours/frame-02.svg',
        alt: 'Abstract pale silver portrait placeholder labelled frame 02',
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    slug: 'after-rain',
    title: 'After Rain',
    year: '2026',
    location: 'Budapest',
    category: 'City portrait',
    summary: 'Reflected streets, cool air, and the last light of afternoon.',
    description:
      'Use this series as a template for a story that mixes environmental portraits with wider scene-setting photographs.',
    isPlaceholder: true,
    cover: {
      src: 'images/series/after-rain/frame-01.svg',
      alt: 'Abstract blue-grey landscape placeholder labelled frame 01',
      width: 1800,
      height: 1200,
    },
    secondaryCover: {
      src: 'images/series/after-rain/frame-02.svg',
      alt: 'Abstract dark portrait placeholder labelled frame 02',
      width: 1200,
      height: 1600,
    },
    images: [
      {
        src: 'images/series/after-rain/frame-01.svg',
        alt: 'Abstract blue-grey landscape placeholder labelled frame 01',
        width: 1800,
        height: 1200,
      },
      {
        src: 'images/series/after-rain/frame-02.svg',
        alt: 'Abstract dark portrait placeholder labelled frame 02',
        width: 1200,
        height: 1600,
      },
      {
        src: 'images/series/after-rain/frame-03.svg',
        alt: 'Abstract reflected landscape placeholder labelled frame 03',
        width: 1800,
        height: 1200,
      },
    ],
  },
  {
    slug: 'sunday-window',
    title: 'Sunday Window',
    year: '2026',
    location: 'Home',
    category: 'Private portrait',
    summary: 'A quiet interior sequence shaped by window light and stillness.',
    description:
      'This demo series is intended for a smaller, more intimate portrait set. Keep the final edit concise so every frame earns its place.',
    isPlaceholder: true,
    cover: {
      src: 'images/series/sunday-window/frame-01.svg',
      alt: 'Abstract warm-grey portrait placeholder labelled frame 01',
      width: 1200,
      height: 1600,
    },
    secondaryCover: {
      src: 'images/series/sunday-window/frame-02.svg',
      alt: 'Abstract window-light landscape placeholder labelled frame 02',
      width: 1800,
      height: 1200,
    },
    images: [
      {
        src: 'images/series/sunday-window/frame-01.svg',
        alt: 'Abstract warm-grey portrait placeholder labelled frame 01',
        width: 1200,
        height: 1600,
      },
      {
        src: 'images/series/sunday-window/frame-02.svg',
        alt: 'Abstract window-light landscape placeholder labelled frame 02',
        width: 1800,
        height: 1200,
      },
      {
        src: 'images/series/sunday-window/frame-03.svg',
        alt: 'Abstract warm-grey square placeholder labelled frame 03',
        width: 1400,
        height: 1400,
      },
    ],
  },
];


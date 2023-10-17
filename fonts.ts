import localFont from 'next/font/local';

export const dfdsFont = localFont({
  src: [
    {
      path: '/fonts/DFDS-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/DFDS-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/fonts/DFDS-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/DFDS-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
});

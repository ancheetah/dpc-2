import type { BuilderElement } from '@builder.io/react';

// defaultLink builds the Link object used within dropdown
export const defaultLink: BuilderElement = {
   '@type': '@builder.io/sdk:Element',
   component: {
      name: 'Link',
      options: {
         link: 'https://google.com',
      },
   },
   children: [
      {
         '@type': '@builder.io/sdk:Element',
         component: {
            name: 'Text',
            options: { text: 'Enter text here...' },
         },
         responsiveStyles: {
            large: { fontSize: '14px', paddingTop: '18px', paddingLeft: '18px', paddingRight: '18px' },
         },
      },
   ],
};

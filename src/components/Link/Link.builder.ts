import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { NextLink } from './Link';

const LinkWithChildren = withChildren(NextLink);

Builder.registerComponent(LinkWithChildren, {
   name: 'Link',
   noWrap: true,
   canHaveChildren: true,
   inputs: [
      {
         name: 'link',
         type: 'text',
         helperText: `To link to an external site such as google.com for example use this format: https://www.google.com.
          To link internal to an anchor use this format: #anchorId.`,
      },
   ],

   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Text',
            options: { text: 'Enter some text...' },
         },
      },
   ],
});

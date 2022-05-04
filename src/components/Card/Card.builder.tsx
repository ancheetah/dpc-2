import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { defaultStyles as defaultStylesImage } from '@components/Image/_constants';
import { Card } from './Card';

const CardWithChildren = withChildren(Card);

Builder.registerComponent(CardWithChildren, {
   name: 'Card',
   canHaveChildren: true,
   noWrap: true,
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Image',
            options: {
               image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               aspectRatio: '0.7041',
            },
         },
         responsiveStyles: {
            large: defaultStylesImage,
         },
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'CardBody',
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Header 3',
                  options: {
                     title: 'Enter title...',
                  },
               },
            },
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Text',
                  options: {
                     text: 'Enter text...',
                  },
               },
            },
         ],
      },
   ],
});

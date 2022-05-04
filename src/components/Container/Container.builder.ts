import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { Container } from './Container';

const ContainerWithChildren = withChildren(Container);
Builder.registerComponent(ContainerWithChildren, {
   name: 'Container',
   noWrap: true,
   canHaveChildren: true,
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Row',

            options: {
               layout: {
                  laptop: { offset: 0 },
                  tablet: { offset: 0 },
               },
            },
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Column',

                  options: {
                     alignCol: 'unset',
                     layout: {
                        laptop: { offset: 0 },
                        tablet: { offset: 0 },
                     },
                  },
               },
               children: [
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'Text',
                        options: { text: 'Enter some text...' },
                     },
                  },
               ],
            },
         ],
      },
   ],
   childRequirements: {
      message:
         'The immediate children of a Container can only be a Row, Navigation Section, CollapseToggler, or Collapse.',
      query: { 'component.name': { $in: ['Row', 'NavigationSection', 'CollapseToggler', 'Collapse'] } },
   },
});

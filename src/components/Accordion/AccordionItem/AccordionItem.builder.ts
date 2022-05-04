import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from '@global/constants';
import { AccordionItem } from './AccordionItem';

const AccordionItemWithChildren = withChildren(AccordionItem);

Builder.registerComponent(AccordionItemWithChildren, {
   name: 'AccordionItem',
   noWrap: true,
   canHaveChildren: true,
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'AccordionHeader',
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'AccordionButton',
               },
               responsiveStyles: {
                  medium: {
                     paddingLeft: 'calc(50% - 20px)',
                  },
               },
            },
         ],
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'AccordionBody',
            options: { roundBodyBackgroundCorner: 'top left' },
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Text',
                  options: { text: 'Enter accordion body text here...' },
               },
            },
         ],
      },
   ],
   childRequirements: {
      message: 'You can only put AccordionHeaders and AccordionBodies in AccordionItem',
      query: {
         'component.name': { $in: ['AccordionHeader', 'AccordionBody'] },
      },
   },
});

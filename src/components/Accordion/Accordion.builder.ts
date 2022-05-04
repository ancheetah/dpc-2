import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { Accordion } from './Accordion';

const AccordionWithChildren = withChildren(Accordion);

Builder.registerComponent(AccordionWithChildren, {
   name: 'Accordion',
   noWrap: true,
   canHaveChildren: true,
   defaultStyles: {
      margin: '0px',
      padding: '0px',
      wordWrap: 'break-word',
   },

   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'AccordionItem',
         },
         children: [
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
      },
   ],
   childRequirements: {
      message: 'You can only put AccordionItems in a Accordion',
      query: {
         'component.name': { $in: ['AccordionItem'] },
      },
   },
});

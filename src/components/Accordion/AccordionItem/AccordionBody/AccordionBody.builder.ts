import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from '@global/constants';
import { AccordionBody } from './AccordionBody';

const AccordionBodyWithChildren = withChildren(AccordionBody);

Builder.registerComponent(AccordionBodyWithChildren, {
   name: 'AccordionBody',
   noWrap: true,
   canHaveChildren: true,
   inputs: [
      {
         name: 'roundBodyBackgroundCorner',
         type: 'string',
         enum: ['top left', 'top right'],
         helperText: 'rounds the body background corner of the the corner selected and the corner diagonal to it',
      },
   ],
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Text',
            options: { text: 'Enter accordion body text...' },
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
            },
         },
      },
   ],
   childRequirements: {
      message: 'You can only put Texts in AccordionBody',
      query: {
         'component.name': { $in: ['Text'] },
      },
   },
});

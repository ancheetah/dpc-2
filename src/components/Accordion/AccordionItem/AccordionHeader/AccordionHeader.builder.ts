import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from '@global/constants';
import { AccordionHeader } from './AccordionHeader';

const AccordionHeaderWithChildren = withChildren(AccordionHeader);

Builder.registerComponent(AccordionHeaderWithChildren, {
   name: 'AccordionHeader',
   noWrap: true,
   canHaveChildren: true,
   defaultChildren: [
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
   childRequirements: {
      message: 'You can only put AccordionButtons in AccordionHeader',
      query: {
         'component.name': { $in: ['AccordionButton'] },
      },
   },
});

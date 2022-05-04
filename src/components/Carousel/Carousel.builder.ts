import { Builder, withChildren } from '@builder.io/react';
import { Carousel } from './Carousel';

const CarouselWithChildren = withChildren(Carousel);

Builder.registerComponent(CarouselWithChildren, {
   name: 'Carousel',
   canHaveChildren: true,
   noWrap: true,
   defaultStyles: {
      margin: '0px',
      padding: '0px',
   },
   inputs: [
      {
         name: 'itemAmount',
         type: 'number',
         defaultValue: 2.5,
         helperText: 'The amount of items shown in the carousel at a time',
      },
      {
         name: 'showControls',
         type: 'boolean',
         defaultValue: true,
         helperText: 'Show the controls on the carousel',
      },
   ],
});

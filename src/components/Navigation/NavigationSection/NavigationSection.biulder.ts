import { Builder, withChildren } from '@builder.io/react';
import { NavigationSection } from './NavigationSection';

const NavigationSectionWithChildren = withChildren(NavigationSection);

Builder.registerComponent(NavigationSectionWithChildren, {
   name: 'NavigationSection',
   noWrap: true,
   canHaveChildren: true,
   models: ['navigation-bar'],

   inputs: [
      {
         name: 'position',
         type: 'text',
         advanced: true,
         defaultValue: 'unset',
         enum: ['left', 'right', 'unset'],
      },
   ],
});

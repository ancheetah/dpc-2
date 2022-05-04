import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { Collapse } from './Collapse';

const CollapseWithChildren = withChildren(Collapse);

Builder.registerComponent(CollapseWithChildren, {
   name: 'Collapse',
   noWrap: true,
   canHaveChildren: true,
   models: ['navigation-bar'],
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Text',
            options: { text: 'Enter some text...' },
         },
      },
   ],
   childRequirements: {
      message: 'Children of Collapse can only be Navigation Section component.',
      query: { 'component.name': { $in: ['NavigationSection'] } },
   },
});

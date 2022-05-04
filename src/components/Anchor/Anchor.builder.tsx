import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from '@global/constants';
import { Anchor } from './Anchor';

const AnchorWithChildren = withChildren(Anchor);
Builder.registerComponent(AnchorWithChildren, {
   name: 'Anchor',
   noWrap: true,
   canHaveChildren: true,
   inputs: [
      {
         name: 'anchorId',
         type: 'string',
         defaultValue: '',
         required: true,
         helperText:
            'A reference id used by other components on the same page to link back to this row. For example, if an anchorId is given a value of "top-section", any component that has LinkURL set to "#top-section" would navigate to this row when clicked.',
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

import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { Column } from './Column';

const ColWithChildren = withChildren(Column);
Builder.registerComponent(ColWithChildren, {
   name: 'Column',
   models: ['page', 'footer'],
   noWrap: true,
   inputs: [
      {
         name: 'alignCol',
         friendlyName: 'Align',
         type: 'text',
         defaultValue: 'unset',
         enum: ['unset', 'start', 'center', 'end'],
         helperText:
            'The vertical alignment of this column inside its row.  This will supercede the value set in its parent row.',
      },

      {
         name: 'layout',
         friendlyName: 'Layout and Responsiveness',
         type: 'object',
         helperText: `This controls how much screen space the column occupies depending on the size of the device the website 
            is being viewed from.`,
         defaultValue: {},
         subFields: [
            {
               name: 'laptop',
               type: 'object',
               subFields: [
                  {
                     name: 'span',
                     type: 'text',
                     helperText: `The amount of space the column occupies.  The maximum amount is 12. Setting this 
                  value to auto will have the column occupy the amount of space euqal to the widest element in the column.  If this
                  value is empty, the column will occupy the remaing space left on the screen.`,
                     max: 12,
                  },
                  {
                     name: 'offset',
                     type: 'number',
                     helperText: `The amount of empty space to the left of the column.  The maximum amount is 12. Setting this 
                  value to empty or 0 will provide no space to the left of the column.`,
                     max: 12,
                  },
               ],
            },
            {
               name: 'tablet',
               type: 'object',

               subFields: [
                  {
                     name: 'span',
                     type: 'text',
                     helperText: `The amount of space the column occupies.  The maximum amount is 12. Setting this 
                  value to empty will have the column occupy the amount of space euqal to the widest element in the column.`,
                     max: 12,
                  },
                  {
                     name: 'offset',
                     type: 'number',
                     helperText: `The amount of empty space to the left of the column. The maximum amount is 12. Setting this 
                  value to empty or 0 will provide no space to the left of the column.`,
                     max: 12,
                  },
               ],
            },
            {
               name: 'mobile',
               type: 'object',

               subFields: [
                  {
                     name: 'span',
                     type: 'text',
                     helperText: `The amount of space the column occupies.  The maximum amount is 12. Setting this 
                  value to empty will have the column occupy the amount of space euqal to the widest element in the column.`,
                     max: 12,
                  },
                  {
                     name: 'offset',
                     type: 'number',
                     helperText: `The amount of empty space to the left of the column. The maximum amount is 12. Setting this 
                  value to empty or 0 will provide no space to the left of the column.`,
                     max: 12,
                  },
               ],
            },
         ],
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
   requiresParent: { message: 'Columns can only be placed inside of a row.', component: 'Row' },
});

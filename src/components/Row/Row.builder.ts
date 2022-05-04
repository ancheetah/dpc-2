import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { Row } from './Row';

const RowWithChildren = withChildren(Row);
Builder.registerComponent(RowWithChildren, {
   name: 'Row',
   models: ['page', 'footer'],
   noWrap: true,
   canHaveChildren: true,
   inputs: [
      {
         name: 'justify',
         type: 'text',
         defaultValue: 'start',
         enum: ['start', 'end', 'center', 'around', 'between'],
         helperText: `The horizontal arrangement of all columns inside the container.`,
      },
      {
         name: 'align',
         type: 'text',
         defaultValue: 'start',
         enum: ['start', 'center', 'end'],
         helperText: 'The vertical alignment of all the columns inside its row.',
      },
   ],
   defaultChildren: [
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
   childRequirements: {
      message: 'The immediate children of a row can only be Columns.',
      query: { 'component.name': { $in: ['Column'] } },
   },
   // requiresParent: {
   //    message: 'The direct parent of a row must be a Container',
   //    query: {
   //       'component.name': { $contains: ['Container'] },
   //    },
   // },
});

import { Builder } from '@builder.io/react';
import { Text } from '@components/Text/Text';

Builder.registerComponent(Text, {
   name: 'Text',
   noWrap: true,
   inputs: [
      {
         name: 'text',
         type: 'html',
         required: true,
         defaultValue: '<span>Enter text to edit...</span>',
         helperText:
            'The text input is used for rich-text editing bodies of text that would need some sort of formatting, or customized styling. This is useful for cases, such as creating lists with ellipses, or creating a numbered list of items.',
      },
   ],
});

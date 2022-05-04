import { Builder, withChildren } from '@builder.io/react';
import { defaultLink } from 'src/_global/constants';
import { Dropdown } from './Dropdown';

const dropDownWithChildren = withChildren(Dropdown);
Builder.registerComponent(dropDownWithChildren, {
   name: 'Dropdown',
   canHaveChildren: true,
   noWrap: true,
   inputs: [
      {
         name: 'isSubmenu',
         friendlyName: 'submenu',
         type: 'boolean',
         advanced: true,
         defaultValue: false,
         helperText: 'switch this on if this dropdown should be treated as a submenu of another dropdown.',
      },
      {
         name: 'placement',
         type: 'text',
         advanced: true,
         enum: ['right', 'left'],
         defaultValue: 'right',
         helperText: 'Position the submenu should show',
         showIf: `options.get('isSubmenu') === true`,
      },
   ],
   defaultChildren: [
      {
         '@type': '@builder.io/sdk:Element',
         component: {
            name: 'Text',
            options: { text: 'Enter text here...' },
         },
         responsiveStyles: {
            large: { fontSize: '14px' },
         },
      },
      {
         '@type': '@builder.io/sdk:Element',
         component: {
            name: 'DropdownMenu',
         },
         children: [defaultLink, defaultLink, defaultLink],
      },
   ],
   childRequirements: {
      message: 'The immediate children of a Dropdown can only be Text or Dropdown Menu',
      query: { 'component.name': { $in: ['Text', 'DropdownMenu'] } },
   },
});

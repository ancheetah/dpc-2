import { Builder, withChildren } from '@builder.io/react';
import { defaultLink } from 'src/_global/constants';
import { DropdownMenu } from './DropdownMenu';

const dropDownMenuWithChildren = withChildren(DropdownMenu);
Builder.registerComponent(dropDownMenuWithChildren, {
   name: 'DropdownMenu',
   canHaveChildren: true,
   noWrap: true,
   defaultChildren: [defaultLink, defaultLink, defaultLink],
   childRequirements: {
      message: 'The immediate children of a DropdownMenu can only be Link, Dropdown, or Divider.',
      query: { 'component.name': { $in: ['Link', 'Dropdown', 'Divider'] } },
   },
});

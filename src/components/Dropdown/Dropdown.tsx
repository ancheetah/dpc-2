import React from 'react';
import { Dropdown as Ddown } from 'react-bootstrap';
import type { DropdownProps } from './_types';

export const Dropdown = (props: DropdownProps) => {
   const { placement, isSubmenu, children, attributes } = props;

   let submenu = '';
   if (isSubmenu) {
      if (placement === 'right') {
         submenu = 'submenu-right';
      } else {
         submenu = 'submenu-left';
      }
   }

   return (
      <Ddown {...attributes} className={`${submenu} ${attributes.className}`}>
         <Ddown.Toggle as="div" id="dropdown-basic">
            {children.filter((child: JSX.Element) => child.props.block.component.name === 'Text')}
         </Ddown.Toggle>
         {children.filter((child: JSX.Element) => child.props.block.component.name !== 'Text')}
      </Ddown>
   );
};

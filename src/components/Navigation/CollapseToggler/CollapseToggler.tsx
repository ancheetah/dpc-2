import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { getIconBasedOnType } from './_functions/getIconBasedOnType';
import type { Props } from './_types';

export const CollapseToggler = (props: Props) => {
   const { collapsedIcon, expandedIcon, attributes } = props;
   const [showContent, setShowContent] = useState(false);

   return (
      <Navbar.Toggle
         aria-controls="basic-navbar-nav"
         onClick={() => {
            setShowContent(!showContent);
         }}
         {...attributes}
      >
         {showContent ? getIconBasedOnType(expandedIcon) : getIconBasedOnType(collapsedIcon)}
      </Navbar.Toggle>
   );
};

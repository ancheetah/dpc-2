import { Navbar } from 'react-bootstrap';
import type { Props } from './_types';

export const Collapse = (props: Props) => {
   const { children, attributes } = props;

   return (
      <Navbar.Collapse id="basic-navbar-nav" {...attributes}>
         {children}
      </Navbar.Collapse>
   );
};

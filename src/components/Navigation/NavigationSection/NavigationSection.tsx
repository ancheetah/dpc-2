import { Nav } from 'react-bootstrap';
import type { Props } from './_types';

export const NavigationSection = (props: Props) => {
   const { position, children, attributes } = props;

   let placement = position === 'left' ? 'me-auto' : 'ms-auto';

   switch (position) {
      case 'left':
         placement = 'me-auto';
         break;
      case 'right':
         placement = 'ms-auto';
         break;
      case 'unset':
         placement = '';
         break;
   }
   return (
      <Nav {...attributes} className={`mb-lg-0 ${placement} ${attributes.className}`}>
         {children}
      </Nav>
   );
};

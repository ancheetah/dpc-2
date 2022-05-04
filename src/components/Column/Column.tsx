import { MDBCol } from 'mdb-react-ui-kit';
import type { Props } from './_types';

export const Column = (props: Props) => {
   const { children, attributes, layout, alignCol } = props;

   const colProps = {
      sm: layout?.mobile?.span || undefined,
      offsetSm: layout?.mobile?.offset,
      md: layout?.tablet?.span || undefined,
      offsetMd: layout?.tablet?.offset,
      lg: layout?.laptop?.span || undefined,
      offsetLg: layout?.laptop?.offset,
      [alignCol]: true,
   };

   return (
      <MDBCol {...colProps} {...attributes}>
         {children}
      </MDBCol>
   );
};

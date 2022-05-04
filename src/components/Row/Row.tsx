import { MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import type { Props, rowProps } from './_types';

export const Row = (props: Props) => {
   const { children, justify, align, attributes } = props;
   const rowProps: rowProps = {
      [justify]: true,
      ...attributes,
      style: { alignItems: align },
   };

   return (
      <MDBRow {...rowProps} className={`g-0 ${attributes.className}`}>
         {children}
      </MDBRow>
   );
};

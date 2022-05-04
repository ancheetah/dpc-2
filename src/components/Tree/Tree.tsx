import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import type { TreeProps } from './Props';

export const Tree: React.FC<TreeProps> = (props: TreeProps) => {
   const { children } = props;

   return (
      <MDBRow style={{ margin: '0px', padding: '0px' }}>
         <MDBCol style={{ margin: '0px', padding: '0px' }} size={12}>
            {children}
         </MDBCol>
      </MDBRow>
   );
};

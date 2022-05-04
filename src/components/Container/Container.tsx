import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import styles from './Container.module.css';
import type { Props } from './_types';

export const Container = (props: Props) => {
   const { children, attributes } = props;

   return (
      <MDBContainer {...attributes} className={`${styles.container} ${attributes.className}`}>
         {children}
      </MDBContainer>
   );
};

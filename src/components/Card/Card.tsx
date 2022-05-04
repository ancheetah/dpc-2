import { MDBCard } from 'mdb-react-ui-kit';
import React from 'react';
import styles from './Card.module.css';
import type { Props } from './_types';

export const Card = (props: Props) => {
   const { attributes, children } = props;
   return (
      <MDBCard {...attributes} className={`${styles.card} ${attributes.className} `}>
         {children}
      </MDBCard>
   );
};

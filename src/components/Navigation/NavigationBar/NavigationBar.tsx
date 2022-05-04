import React from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './NavigationBar.module.css';
import type { Props } from './_types';

export const NavigationBar = (props: Props) => {
   const { children, attributes } = props;

   return (
      <Navbar bg="light" expand="lg" {...attributes} className={`${styles['navigation-bar']} ${attributes.className}`}>
         {children}
      </Navbar>
   );
};

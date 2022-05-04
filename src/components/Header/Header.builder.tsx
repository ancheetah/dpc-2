import { Builder } from '@builder.io/react';
import { HeaderStyle } from '@components/Header/_types';
import { Header } from './Header';

// Iterate through the pre-defined header styles to create specialized Header components
const registerHeaderComponents = () => {
   Object.values(HeaderStyle).forEach((headerStyle: HeaderStyle) => {
      Builder.registerComponent(Header, {
         name: headerStyle,
         noWrap: true, // set noWrap to allow for consuming the builder context to have builder's css blocks override the stylesheet to maximize customizability
         inputs: [
            {
               name: 'title',
               type: 'text',
               defaultValue: headerStyle,
               helperText: 'Change the header title using this input field',
            },
         ],
      });
   });
};

registerHeaderComponents();

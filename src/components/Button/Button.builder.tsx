import { Builder } from '@builder.io/react';
import { Button } from './Button';
import { ButtonStyle } from './_types';

const registerButtonComponents = () => {
   Object.values(ButtonStyle).forEach((buttonStyle: ButtonStyle) => {
      Builder.registerComponent(Button, {
         name: buttonStyle,
         noWrap: true, // set noWrap to allow for consuming the builder context to have builder's css blocks override the stylesheet to maximize customizability
         inputs:
            buttonStyle === ButtonStyle.roundButton
               ? undefined
               : [
                    {
                       name: 'text',
                       type: 'text',
                       defaultValue: buttonStyle,
                       helperText: 'The text shown on the button',
                    },
                 ],
      });
   });
};

registerButtonComponents();

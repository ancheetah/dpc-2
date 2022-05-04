import { MDBCollapse } from 'mdb-react-ui-kit';
import { useAccordionState } from '@components/Accordion/context';
import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import type { AccordionBodyProps } from './Props';

const roundTopLeftStyle: CSSProperties = { borderRadius: '20px 0px' };
const roundTopRightStyle: CSSProperties = { borderRadius: '0px 20px' };
const noRoundStyle: CSSProperties = { borderRadius: '0px' };

export const AccordionBody: React.FC<AccordionBodyProps> = (props: AccordionBodyProps) => {
   const { children, attributes, roundBodyBackgroundCorner } = props;
   const accordionState = useAccordionState();

   const [backgroundStyle, setBackgroundStyle] = useState(
      roundBodyBackgroundCorner === 'top right' ? roundTopRightStyle : roundTopLeftStyle,
   );

   useEffect(() => {
      const updateBodyBackgroundView = () => {
         const newWidth = window.innerWidth;
         if (newWidth >= 1000 && roundBodyBackgroundCorner === 'top left') {
            setBackgroundStyle(roundTopLeftStyle);
         } else if (newWidth >= 1000 && roundBodyBackgroundCorner === 'top right') {
            setBackgroundStyle(roundTopRightStyle);
         } else {
            setBackgroundStyle(noRoundStyle);
         }
      };

      updateBodyBackgroundView();

      // update body background styling on window resizing event
      window.addEventListener('resize', updateBodyBackgroundView);
      return () => {
         window.removeEventListener('resize', updateBodyBackgroundView);
      };
   }, [roundBodyBackgroundCorner]);

   return (
      <MDBCollapse className="accordion-collapse" show={accordionState.show}>
         <div {...attributes} className={`accordion-body ${attributes.className}`} style={backgroundStyle}>
            {children}
         </div>
      </MDBCollapse>
   );
};

import { AccordionContextProvider } from './context';
import type { AccordionProps } from './Props';

export const Accordion = (props: AccordionProps) => {
   const { children, attributes } = props;

   return (
      <AccordionContextProvider>
         <div {...attributes} className={`accordion ${attributes.className}`}>
            {children}
         </div>
      </AccordionContextProvider>
   );
};

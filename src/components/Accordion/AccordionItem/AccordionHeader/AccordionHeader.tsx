import type { AccordionHeaderProps } from './Props';

export const AccordionHeader: React.FC<AccordionHeaderProps> = (props: AccordionHeaderProps) => {
   const { children, attributes } = props;
   return (
      <h2 {...attributes} className={`accordion-header ${attributes.className}`}>
         {children}
      </h2>
   );
};

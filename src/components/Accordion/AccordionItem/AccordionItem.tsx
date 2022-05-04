import type { AccordionItemProps } from './Props';

export const AccordionItem: React.FC<AccordionItemProps> = (props: AccordionItemProps) => {
   const { children, attributes } = props;
   return (
      <div {...attributes} className={`accordion-item ${attributes.className}`}>
         {children}
      </div>
   );
};

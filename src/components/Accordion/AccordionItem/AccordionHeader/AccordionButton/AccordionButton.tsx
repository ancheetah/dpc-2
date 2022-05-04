import { useAccordion, AccordionActions } from '@components/Accordion/context';
import type { AccordionButtonProps } from './Props';

export const AccordionButton: React.FC<AccordionButtonProps> = (props: AccordionButtonProps) => {
   const { attributes } = props;
   const [accordionState, accordionDispatch] = useAccordion();
   return (
      <button
         {...attributes}
         className={
            accordionState.show
               ? `accordion-button ${attributes.className}`
               : `accordion-button collapsed ${attributes.className}`
         }
         type="button"
         onClick={() => {
            accordionDispatch({ type: AccordionActions.toggleShow, payload: { value: !accordionState.show } });
         }}
      >
         {' '}
      </button>
   );
};

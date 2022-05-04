import { Dropdown as Ddown } from 'react-bootstrap';
import styles from './DropdownMenu.module.css';
import type { Props } from './_types';

export const DropdownMenu = (props: Props) => {
   const { children, attributes } = props;

   return (
      <Ddown.Menu {...attributes} className={`${styles.dropdownMenu} ${attributes.className}`}>
         {children.map(child => {
            // If we don't wrap the child in a .Item, the drop down menu won't close when we click a link.
            // We don't want to wrap nested drop downs though because we don't want it to close when we click a drop
            if (child.props.block.component.name !== 'Dropdown') {
               return <Ddown.Item className={styles.dropdownItem}>{child}</Ddown.Item>;
            }
            return child;
         })}
      </Ddown.Menu>
   );
};

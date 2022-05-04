import styles from './Divider.module.css';
import type { Props } from './_types';

export const Divider = (props: Props) => {
   const { attributes } = props;

   return <hr {...attributes} className={`${styles.divider} ${attributes.className}`} />;
};

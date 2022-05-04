import Link from 'next/link';
import styles from './Link.module.css';
import type { Props } from './_types';

export const NextLink = (props: Props) => {
   const { children, link, attributes } = props;
   return (
      <Link href={link || ''}>
         <a {...attributes} rel="noreferrer noopener" className={`${styles.link} ${attributes.className}`}>
            {children}
         </a>
      </Link>
   );
};

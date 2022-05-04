/* eslint-disable react/no-danger */
import DOMPurify from 'isomorphic-dompurify';
import styles from './Text.module.css';
import type { Props } from './_types';

export const Text = (props: Props) => {
   const { text, attributes } = props;

   // sanitize the text provided by the user to prevent XSS
   const sanitizedHtmlText = DOMPurify.sanitize(text);
   return (
      <div
         {...attributes}
         className={`text ${styles.text} ${attributes.className}`}
         dangerouslySetInnerHTML={{ __html: sanitizedHtmlText }} // this is safe due to the sanitization above
      />
   );
};

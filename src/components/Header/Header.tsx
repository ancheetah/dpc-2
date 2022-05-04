import { HeaderStyle } from './_types';
import styles from './Header.module.css';
import type { Props } from './_types';

export const Header = (props: Props) => {
   const { title, builderBlock, attributes } = props;

   const componentName = builderBlock?.component?.name || '';
   // convert the header component name to match the className for styling
   const headerClassName = componentName.toLowerCase().toLowerCase().replace(/\s/gu, '-');

   switch (componentName) {
      case HeaderStyle.header1:
         return (
            <h1 {...attributes} className={` ${styles[headerClassName] || ''} ${attributes.className}`}>
               {title}
            </h1>
         );
      case HeaderStyle.header2:
         return (
            <h2 {...attributes} className={` ${styles[headerClassName] || ''} ${attributes.className}`}>
               {title}
            </h2>
         );
      case HeaderStyle.header3:
         return (
            <h3 {...attributes} className={` ${styles[headerClassName] || ''} ${attributes.className}`}>
               {title}
            </h3>
         );
      case HeaderStyle.headline:
         return (
            <h4 {...attributes} className={` ${styles[headerClassName] || ''} ${attributes.className}`}>
               {title}
            </h4>
         );
      case HeaderStyle.subhead1:
         return (
            <h5 {...attributes} className={` ${styles[headerClassName] || ''} ${attributes.className}`}>
               {title}
            </h5>
         );
      case HeaderStyle.subhead2:
         return (
            <h6 {...attributes} className={` ${styles[headerClassName] || ''} ${attributes.className}`}>
               {title}
            </h6>
         );
      case HeaderStyle.subhead3:
      default:
         return (
            <text {...attributes} className={` ${styles[headerClassName] || ''} ${attributes.className}`}>
               {title}
            </text>
         );
   }
};

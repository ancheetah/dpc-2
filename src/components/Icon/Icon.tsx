import { MDBIcon } from 'mdb-react-ui-kit';
import { iconMap, typeMap } from './_constants';
import styles from './Icon.module.css';
import type { Props } from './_types';

export const Icon = (props: Props) => {
   const { icon, icondpc, type, attributes } = props;
   const faType = {
      far: type === typeMap['font-awesome-regular'],
      fab: type === typeMap['font-awesome-brands'],
   };

   return (
      <>
         {type !== `${typeMap.dpc}` && (
            <MDBIcon {...faType} icon={icon} {...attributes} className={`${styles.icon} ${attributes.className}`} />
         )}
         {type === `${typeMap.dpc}` && (
            <img
               src={iconMap[icondpc]}
               alt={`A dpc ${iconMap[icondpc]} icon.`}
               {...attributes}
               className={`${styles.dpcIcon} ${attributes.className}`}
            />
         )}
      </>
   );
};

import { MDBIcon } from 'mdb-react-ui-kit';
import { iconMap, typeMap } from '@components/Icon/_constants';
import styles from '@components/Icon/Icon.module.css';
import type { IconProps } from '../_types';

export const getIconBasedOnType = (iconProps: IconProps = { type: '', icon: '', icondpc: '' }) => {
   const { type, icon, icondpc } = iconProps;
   const faType = {
      fab: type === typeMap['font-awesome-brands'],
      far: type === typeMap['font-awesome-regular'],
   };
   if (type !== typeMap.dpc) {
      return <MDBIcon {...faType} icon={icon} className={`${styles.icon}`} />;
   }
   return <img src={iconMap[icondpc]} alt={`A dpc ${iconMap[icondpc]} icon.`} className={`${styles.dpcIcon}`} />;
};

import styles from './VerticalDivider.module.css';
import type { VerticalDividerProps } from './Props';

export const VerticalDivider: React.FC<VerticalDividerProps> = (props: VerticalDividerProps) => {
   const { attributes } = props;
   return <div {...attributes} className={`${styles.divider} ${attributes.className}`} />;
};

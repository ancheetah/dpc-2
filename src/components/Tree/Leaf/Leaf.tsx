import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import type { LeafProps } from './Props';

export const Leaf: React.FC<LeafProps> = (props: LeafProps) => {
   const { children, className } = props;

   return (
      <MDBCol lg={5} {...props} className={className}>
         {children?.map((child: JSX.Element) => {
            return (
               <MDBRow key={child.key} style={{ margin: '0px', padding: '0px' }}>
                  {child}
               </MDBRow>
            );
         })}
      </MDBCol>
   );
};

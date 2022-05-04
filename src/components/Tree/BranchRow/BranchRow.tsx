import { useEffect, useState } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import type { BranchRowProps } from './Props';

export const BranchRow: React.FC<BranchRowProps> = (props: BranchRowProps) => {
   const { children, className } = props;
   const [hasImageFirst, setHasImageFirst] = useState(
      children &&
         children.length > 0 &&
         children[0].props?.block?.component?.name === 'Leaf' &&
         children[0].props?.block?.children &&
         children[0].props?.block?.children[0]?.component?.name === 'Image',
   );

   useEffect(() => {
      setHasImageFirst(
         children &&
            children.length > 0 &&
            children[0].props?.block?.component?.name === 'Leaf' &&
            children[0].props?.block?.children &&
            children[0].props?.block?.children[0]?.component?.name === 'Image',
      );
   }, [children]);

   return (
      <MDBRow style={{ margin: '0px', padding: '0px' }}>
         <MDBCol style={{ margin: '0px', padding: '0px' }} size={12}>
            <MDBRow className={`${className} gx-0`} {...props}>
               {children?.map((child: JSX.Element) => {
                  // modify order of leaf rendering if image is not first element
                  if (
                     children.length > 1 &&
                     !hasImageFirst &&
                     child.props.block?.component?.name === 'Leaf' &&
                     child.props.block?.children &&
                     child.props.block?.children[0]?.component.name === 'Image'
                  ) {
                     child.props.block.component.options.orderClassName = 'order-lg-last order-first';
                  }

                  // if leaf image was moved to the front and order class name was added to it, remove it
                  if (child.props.block?.component?.options?.orderClassName && hasImageFirst) {
                     delete child.props.block.component.options.orderClassName;
                  }

                  return child;
               })}
            </MDBRow>
         </MDBCol>
      </MDBRow>
   );
};

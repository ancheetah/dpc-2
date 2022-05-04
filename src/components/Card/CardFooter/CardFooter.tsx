import { MDBCardFooter } from 'mdb-react-ui-kit';
import type { Props } from './_types';

export const CardFooter = (props: Props) => {
   const { children } = props;
   return <MDBCardFooter>{children}</MDBCardFooter>;
};

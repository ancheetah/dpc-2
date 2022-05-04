import { MDBCardBody } from 'mdb-react-ui-kit';
import type { Props } from './_types';

export const CardBody = (props: Props) => {
   const { children } = props;
   return <MDBCardBody style={{ padding: 'inherit' }}>{children}</MDBCardBody>;
};

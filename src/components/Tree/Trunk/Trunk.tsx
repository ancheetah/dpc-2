import { MDBCol } from 'mdb-react-ui-kit';
import type { TrunkProps } from './Props';

export const Trunk: React.FC<TrunkProps> = (props: TrunkProps) => {
   return <MDBCol {...props} className={props.className} lg={2} />;
};

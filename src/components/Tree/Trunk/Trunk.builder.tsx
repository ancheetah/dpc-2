import { Builder } from '@builder.io/react';
import { Trunk } from './Trunk';
import type { TrunkProps } from './Props';

const BuilderTrunk: React.FC<TrunkProps> = props => (
   <Trunk {...props.attributes} className={`${props.attributes.className}`} />
);

Builder.registerComponent(BuilderTrunk, {
   name: 'Trunk',
   noWrap: true,
   canHaveChildren: false,
   inputs: [],
   defaultStyles: {
      width: '8px',
      minHeight: '100px',
      margin: '0px',
      padding: '0px',
      backgroundColor: '#0C3A78',
   },
});

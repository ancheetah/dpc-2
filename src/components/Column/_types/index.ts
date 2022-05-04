import type { Attributes } from 'src/_global/types';

export type Props = {
   children: JSX.Element[];
   attributes: Attributes;
   alignCol: string;
   layout: {
      laptop: Record<string, string | number>;
      tablet: Record<string, string | number>;
      mobile: Record<string, string | number>;
   };
};

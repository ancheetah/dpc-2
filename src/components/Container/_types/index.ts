import type { Attributes } from 'src/_global/types';

export type Props = {
   children: JSX.Element[];
   attributes: Attributes;
   layout: {
      laptop: Record<string, string | number>;
      tablet: Record<string, string | number>;
   };
};

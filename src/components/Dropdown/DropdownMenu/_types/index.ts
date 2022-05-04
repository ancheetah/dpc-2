import type { Attributes } from '@global/types';

export type Props = {
   children: JSX.Element[];
   attributes: Attributes;
   keepOpen: boolean;
   key: string;
};

import type { Attributes } from 'src/_global/types';

export type Props = {
   children: JSX.Element[];
   attributes: Attributes;
   justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
   align: 'top' | 'middle' | 'bottom';
};

export type rowProps = {
   style: { alignItems: string };
};

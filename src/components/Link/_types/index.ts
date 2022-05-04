import type { Attributes } from 'src/_global/types';

export type Props = {
   children: JSX.Element | JSX.Element[];
   styleName: string;
   attributes: Attributes;
   link: string;
};

import type { Attributes } from 'src/_global/types';

export type Props = {
   type: string;
   icon: string;
   icondpc: string;
   collapseOpenType: string;
   collapseOpenIcon: string;
   collapseOpenIcondpc: string;
   attributes: Attributes;
};

export type Options = {
   get: (option: string) => string;
};

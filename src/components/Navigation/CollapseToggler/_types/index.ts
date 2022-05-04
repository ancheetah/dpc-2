import type { Attributes } from '@global/types';

export type IconProps = {
   type: string;
   icon: string;
   icondpc: string;
};

export type Props = {
   children: JSX.Element;
   attributes: Attributes;
   expandedIcon: IconProps;
   collapsedIcon: IconProps;
};

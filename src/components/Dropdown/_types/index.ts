import type { Attributes } from 'src/_global/types';

export type DropdownProps = {
   attributes: Attributes;
   children: JSX.Element[];
   placement: string;
   isSubmenu: boolean;
};

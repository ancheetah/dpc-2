import type { BuilderProps } from '@global/types/Builder';

export type Props = BuilderProps & {
   title: string;
   fontSize: number;
   style: HeaderStyle;
};

export enum HeaderStyle {
   header1 = 'Header 1',
   header2 = 'Header 2',
   header3 = 'Header 3',
   headline = 'Headline',
   subhead1 = 'Subhead 1',
   subhead2 = 'Subhead 2',
   subhead3 = 'Subhead 3',
}

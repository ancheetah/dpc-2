import type { BuilderProps } from '@global/types/Builder';

export type Props = BuilderProps & {
   text: string;
   style: ButtonStyle;
};

export enum ButtonStyle {
   primaryButton = 'Primary Button',
   roundButton = 'Round Button',
   textButton = 'Text Button',
}

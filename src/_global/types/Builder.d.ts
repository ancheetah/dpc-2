import type { BuilderElement } from '@builder.io/react';

export type Attributes = Record<string, string | number>;

export type BuilderProps = {
   builderBlock: BuilderElement | undefined;
   builderState: BuilderBlockState;
   attributes: Attributes;
};

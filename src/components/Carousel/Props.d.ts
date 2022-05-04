import type { ReactNode } from 'react';

export type CarouselProps = {
   children: ReactNode;
   attributes: Record<string, unknown>;
   itemAmount: number;
   showControls: boolean;
};

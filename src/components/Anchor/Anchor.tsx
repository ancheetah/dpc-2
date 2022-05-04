import type { AnchorProps } from '@components/Anchor/_types';

export const Anchor = ({ anchorId, children, attributes }: AnchorProps) => {
   return (
      <div id={anchorId} {...attributes}>
         {children}
      </div>
   );
};

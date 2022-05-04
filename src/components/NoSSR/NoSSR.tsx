import { useEffect, useState } from 'react';
import type { Props } from './_types';

const NoSSR = (props: Props) => {
   const { children } = props;
   const [render, setRender] = useState(false);

   useEffect(() => {
      setRender(true);
   }, []);

   if (render) {
      return children;
   }
   return null;
};
export { NoSSR };

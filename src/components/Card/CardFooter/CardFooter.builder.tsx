import { Builder, withChildren } from '@builder.io/react';
import { CardFooter } from '@components/Card/CardFooter/CardFooter';

const CardFooterWithChildren = withChildren(CardFooter);

Builder.registerComponent(CardFooterWithChildren, {
   name: 'CardFooter',
   canHaveChildren: true,
   requiresParent: {
      message: 'The parent of CardFooter must be a card component',
      query: {
         'component.name': { $contains: ['Card'] },
      },
   },
});

import { Builder, withChildren } from '@builder.io/react';
import { CardBody } from '@components/Card/CardBody/CardBody';

const CardBodyWithChildren = withChildren(CardBody);

Builder.registerComponent(CardBodyWithChildren, {
   name: 'CardBody',
   canHaveChildren: true,
   requiresParent: {
      message: 'The parent of CardBody must be a card component',
      query: {
         'component.name': { $contains: ['Card'] },
      },
   },
});

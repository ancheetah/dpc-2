import { Builder } from '@builder.io/react';

// inserts a Layout Components menu in the Builder page with a list of components given in the object
// The name has to match the builder component in order for it to register

Builder.set({ customInsertMenu: true });

Builder.register('insertMenu', {
   name: 'Navigation Components',
   items: [
      { name: 'NavigationBar' },
      { name: 'NavigationSection' },
      { name: 'Collapse' },
      { name: 'CollapseToggler' },
      { name: 'Link' },
      { name: 'Anchor' },
      { name: 'Dropdown' },
      { name: 'DropdownMenu' },
   ],
});

Builder.register('insertMenu', {
   name: 'Layout Components',
   items: [
      { name: 'Container' },
      { name: 'Row' },
      { name: 'Column' },
      { name: 'Divider' },
      { name: 'VerticalDivider' },
   ],
});

Builder.register('insertMenu', {
   name: 'Typography Components',
   items: [
      { name: 'Text' },

      { name: 'Header' },
      {
         name: 'Header 1',
      },
      {
         name: 'Header 2',
      },
      {
         name: 'Header 3',
      },
      {
         name: 'Headline',
      },
      {
         name: 'Subhead 1',
      },
      {
         name: 'Subhead 2',
      },
      {
         name: 'Subhead 3',
      },
   ],
});

Builder.register('insertMenu', {
   name: 'Buttons',
   items: [{ name: 'Primary Button' }, { name: 'Round Button' }, { name: 'Text Button' }],
});

// inserts a Card Components menu in the Builder page with a list of components given in the object
// The name has to match the builder component in order for it to register
Builder.register('insertMenu', {
   name: 'Card Components',
   items: [{ name: 'Card' }, { name: 'CardBody' }, { name: 'CardFooter' }],
});

// inserts a Tree Components menu in the Builder page with a list of components given in the object
// The name has to match the builder component in order for it to register
Builder.register('insertMenu', {
   name: 'Tree Components',
   items: [{ name: 'Tree' }, { name: 'Trunk' }, { name: 'BranchRow' }, { name: 'Leaf' }],
});

// inserts a Media Components menu in the Builder page with a list of components given in the object
// The name has to match the builder component in order for it to register
Builder.register('insertMenu', {
   name: 'Media Components',
   items: [{ name: 'Icon' }, { name: 'Image' }, { name: 'VideoUrl' }, { name: 'Carousel' }],
});

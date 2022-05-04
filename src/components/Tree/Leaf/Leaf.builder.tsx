import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { Leaf } from './Leaf';
import type { LeafProps } from './Props';

const BuilderLeaf: React.FC<LeafProps> = props => {
   const { children, attributes, orderClassName } = props;
   return (
      <Leaf
         {...attributes}
         className={orderClassName ? `${orderClassName} ${attributes.className}` : `${attributes.className}`}
      >
         {children}
      </Leaf>
   );
};

const LeafWithChildren = withChildren(BuilderLeaf);

const textPaddingLeftDefault = '0px 0px 0px 24px';

Builder.registerComponent(LeafWithChildren, {
   name: 'Leaf',
   noWrap: true,
   canHaveChildren: true,
   inputs: [],
   defaultStyles: {
      margin: '0px',
      padding: '0px',
   },
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Icon',
            options: { type: 'dpc', icondpc: 'Lightbulb-Idea' },
         },
         responsiveStyles: {
            large: {
               marginTop: '16px',
               marginBottom: '16px',
               marginLeft: '16px',
               padding: '0px ',
            },
            medium: {
               marginTop: '16px',
               marginBottom: '16px',
               marginLeft: 'auto',
               marginRight: 'auto',
               padding: '0px ',
            },
         },
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Headline',
            options: { title: 'Headline' },
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: textPaddingLeftDefault,
            },
            medium: {
               margin: '0px',
               padding: '0px',
               textAlign: 'center',
            },
         },
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Text',
            options: { text: 'Enter text here...' },
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: textPaddingLeftDefault,
            },
            medium: {
               margin: '0px',
               padding: '0px 32px',
               textAlign: 'center',
            },
         },
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Accordion',
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
            },
         },

         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'AccordionItem',
               },
               children: [
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'AccordionHeader',
                     },
                     children: [
                        {
                           '@type': builderSDKElementType,
                           component: {
                              name: 'AccordionButton',
                           },
                           responsiveStyles: {
                              medium: {
                                 paddingLeft: 'calc(50% - 20px)',
                              },
                           },
                        },
                     ],
                  },
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'AccordionBody',
                        options: { roundBodyBackgroundCorner: 'top left' },
                     },
                     children: [
                        {
                           '@type': builderSDKElementType,
                           component: {
                              name: 'Text',
                              options: { text: 'Enter accordion body text here...' },
                           },
                        },
                     ],
                  },
               ],
            },
         ],
      },
   ],
   childRequirements: {
      message: 'You can only put Icons, Headers, Texts, Images, or Accordions in a Leaf',
      query: {
         'component.name': {
            $in: [
               'Icon',
               'Header 1',
               'Header 2',
               'Header 3',
               'Headline',
               'Subhead 1',
               'Subhead 2',
               'Subhead 3',
               'Text',
               'Image',
               'Accordion',
            ],
         },
      },
   },
});

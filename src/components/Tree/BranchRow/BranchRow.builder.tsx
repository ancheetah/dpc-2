import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { example_1 } from 'src/assets/leaf_image_example';
import { BranchRow } from './BranchRow';
import type { BranchRowProps } from './Props';

const BuilderRowBranch: React.FC<BranchRowProps> = props => {
   const { children, attributes } = props;
   return (
      <BranchRow {...attributes} className={`${attributes.className}`}>
         {children}
      </BranchRow>
   );
};

const BranchWithChildren = withChildren(BuilderRowBranch);

const textPaddingLeftDefault = '0px 0px 0px 24px';

const imgAspectRatioDefault = 267 / 577; // image height divide by image width

Builder.registerComponent(BranchWithChildren, {
   name: 'BranchRow',
   noWrap: true,
   canHaveChildren: true,
   inputs: [],
   defaultStyles: {
      margin: '0px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
   },
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Leaf',
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
                  name: 'Image',
                  options: {
                     src: example_1.src,
                     altText: 'image example 1',
                     aspectRatio: imgAspectRatioDefault,
                  },
               },
               responsiveStyles: {
                  large: {
                     position: 'relative',
                     padding: '0px',
                     minWidth: '20px',
                     minHeight: '20px',
                  },
                  medium: {
                     position: 'relative',
                     marginTop: '50px',
                     padding: '0px',
                     minWidth: '20px',
                     minHeight: '20px',
                  },
               },
            },
         ],
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Trunk',
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
               width: '8px',
               backgroundColor: '#0C3A78',
            },
            medium: {
               display: 'none',
            },
         },
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Leaf',
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
                                    options: {
                                       text: 'Enter accordion body text here...',
                                    },
                                 },
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
         ],
      },
   ],
   childRequirements: {
      message: 'You can only put Trunk Leaves in a Branch',
      query: {
         'component.name': { $in: ['Leaf', 'Trunk'] },
      },
   },
});

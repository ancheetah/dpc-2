import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType } from 'src/_global/constants';
import { example_1, example_2, example_3 } from '../../assets/leaf_image_example';
import { Tree } from './Tree';

const TreeWithChildren = withChildren(Tree);

const textPaddingLeftDefault = '0px 0px 0px 24px';
const textPaddingRightDefault = '0px 24px 0px 0px';
const accordionButtonMDPaddingLeftDefault = 'calc(50% - 20px)';

const imgAspectRatioDefault = 267 / 577; // image height divide by image width

Builder.registerComponent(TreeWithChildren, {
   name: 'Tree',
   canHaveChildren: true,
   inputs: [],
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'BranchRow',
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
               display: 'flex',
               justifyContent: 'center',
            },
         },
         children: [
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
                           backgroundPosition: 'center',
                           backgroundSize: 'cover',
                           aspectRatio: imgAspectRatioDefault,
                        },
                     },
                     responsiveStyles: {
                        large: {
                           position: 'relative',
                           marginLeft: 'auto',
                           marginRight: '-8px',
                           padding: '0px',
                           minWidth: '20px',
                           minHeight: '20px',
                        },
                        medium: {
                           position: 'relative',
                           margin: '0px',
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
                     marginTop: '50px',
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
                     padding: '0px ',
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
                           textAlign: 'center',
                        },
                     },
                  },
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'Headline',
                        options: { title: 'An Idea Sprouted' },
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
                        options: {
                           text: 'The Diversity Program Consortium (DPC) started with evidence about NIH funding patterns that sparked an idea.',
                        },
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
                                             paddingLeft: accordionButtonMDPaddingLeftDefault,
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
                                             text: 'A group of seven researchers wanted to know more about who applied and received funding from NIH (Ginther et. al., 2011). While Black/African American scientists applied for NIH funding, there was a gap in the percentage of requests funded, given that successful applications from Black/African American scientists were 10% less than other groups. This wake-up call spurred the NIH to action.',
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
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'BranchRow',
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
               display: 'flex',
               justifyContent: 'center',
            },
            medium: {
               display: 'none',
            },
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Trunk',
               },
               responsiveStyles: {
                  large: {
                     width: '8px',
                     minHeight: '100px',
                     margin: '0px',
                     padding: '0px',
                     backgroundColor: '#0C3A78',
                  },
               },
            },
         ],
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'BranchRow',
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
               display: 'flex',
               justifyContent: 'center',
            },
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Leaf',
               },
               responsiveStyles: {
                  large: {
                     margin: '0px',
                     padding: '0px',
                     textAlign: 'right',
                  },
               },
               children: [
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'Icon',
                        options: { type: 'dpc', icondpc: 'Growth' },
                     },
                     responsiveStyles: {
                        large: {
                           marginTop: '16px',
                           marginBottom: '16px',
                           marginLeft: 'auto',
                           marginRight: '16px',
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
                        options: { title: 'Action of Growth' },
                     },
                     responsiveStyles: {
                        large: {
                           margin: '0px',
                           padding: textPaddingRightDefault,
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
                        options: {
                           text: 'Because evidence is the foundation of science, experts make recommendations based on what has been learned.',
                        },
                     },
                     responsiveStyles: {
                        large: {
                           margin: '0px',
                           padding: textPaddingRightDefault,
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
                                          large: {
                                             padding: '20.7px 27px 20.7px calc(100% -  71px)', // 27 (default right button padding) + 24 (default right padding) + 20 (size of button)
                                          },
                                          medium: {
                                             paddingLeft: accordionButtonMDPaddingLeftDefault,
                                          },
                                       },
                                    },
                                 ],
                              },
                              {
                                 '@type': builderSDKElementType,
                                 component: {
                                    name: 'AccordionBody',
                                    options: { roundBodyBackgroundCorner: 'top right' },
                                 },
                                 children: [
                                    {
                                       '@type': builderSDKElementType,
                                       component: {
                                          name: 'Text',
                                          options: {
                                             text: `The evidence is used to form strategies aimed at enhancing the diversity of the workforce and include representation from all groups. A path was laid out to guide how funding received from the NIH for the first five years (Phase 1) would be used to enhance the DPC's goal of determining the most effective methods to improve training and mentoring, as well as make institution-wide changes.`,
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
                        name: 'Image',
                        options: {
                           src: example_2.src,
                           altText: 'image example 2',
                           backgroundPosition: 'center',
                           backgroundSize: 'cover',
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
         ],
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'BranchRow',
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
               display: 'flex',
               justifyContent: 'center',
            },
            medium: {
               display: 'none',
            },
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Trunk',
               },
               responsiveStyles: {
                  large: {
                     width: '8px',
                     minHeight: '100px',
                     margin: '0px',
                     padding: '0px',
                     backgroundColor: '#0C3A78',
                  },
               },
            },
         ],
      },
      {
         '@type': builderSDKElementType,
         component: {
            name: 'BranchRow',
         },
         responsiveStyles: {
            large: {
               margin: '0px',
               padding: '0px',
               display: 'flex',
               justifyContent: 'center',
            },
         },
         children: [
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
                           src: example_3.src,
                           altText: 'image example 3',
                           backgroundPosition: 'center',
                           backgroundSize: 'cover',
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
                     padding: '0px ',
                  },
               },
               children: [
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'Icon',
                        options: { type: 'dpc', icondpc: 'Notes' },
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
                        options: { title: 'Logging the Evidence' },
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
                        options: {
                           text: `The first step was funding the DPC to measure the impact of training, mentoring and institutional support at the outset of a biomedical researcher's jorney.`,
                        },
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
                                             paddingLeft: accordionButtonMDPaddingLeftDefault,
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
                                             text: 'The goal was to build evidence about what works in supporting students seeking to go into biomedical research careers through interventions in undergraduate education, mentorship and tracking those results over time.',
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
      },
   ],
   childRequirements: {
      message: 'You can only put HeadBranchRows/BranchRows in a Tree',
      query: {
         'component.name': { $in: ['HeadBranchRow', 'BranchRow'] },
      },
   },
});

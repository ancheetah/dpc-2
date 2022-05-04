import { Builder, withChildren } from '@builder.io/react';
import { builderSDKElementType, defaultLink } from 'src/_global/constants';
import { defaultStyles as defaultStylesImage } from '@components/Image/_constants';
import { typeMap } from '../../Icon/_constants';
import { dpcIconsMap } from '../../Icon/_constants/inputEnums';
import { NavigationBar } from './NavigationBar';

const NavigationBarWithChildren = withChildren(NavigationBar);
Builder.registerComponent(NavigationBarWithChildren, {
   name: 'NavigationBar',
   models: ['navigation-bar'],
   noWrap: true,
   defaultStyles: {
      padding: '0px',
      boxShadow: 'none',
   },
   defaultChildren: [
      {
         '@type': builderSDKElementType,
         component: {
            name: 'Container',
         },
         responsiveStyles: {
            large: {
               backgroundColor: '#FFFFFF',
            },
         },
         children: [
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'NavigationSection',
                  options: { position: 'left' },
               },
               children: [
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'Image',
                        options: {
                           src: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           aspectRatio: '0.7041',
                        },
                     },
                     responsiveStyles: { large: defaultStylesImage },
                  },
               ],
            },
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'CollapseToggler',
                  options: {
                     collapsedIcon: { type: 'font-awesome-solid', icon: 'bars', icondpc: dpcIconsMap.Announcement },
                     expandedIcon: { type: 'font-awesome-solid', icon: 'times', icondpc: dpcIconsMap.Announcement },
                  },
               },
            },
            {
               '@type': builderSDKElementType,
               component: {
                  name: 'Collapse',
               },
               children: [
                  {
                     '@type': builderSDKElementType,
                     component: {
                        name: 'NavigationSection',
                        options: { position: 'right' },
                     },
                     children: [
                        {
                           '@type': builderSDKElementType,
                           component: {
                              name: 'Dropdown',
                              options: { dropdownText: 'Dropdown Menu' },
                           },
                           children: [
                              {
                                 '@type': '@builder.io/sdk:Element',
                                 component: {
                                    name: 'Text',
                                    options: { text: 'Enter text here...' },
                                 },
                                 responsiveStyles: {
                                    large: { fontSize: '14px' },
                                 },
                              },
                              {
                                 '@type': builderSDKElementType,
                                 component: {
                                    name: 'DropdownMenu',
                                 },
                                 children: [
                                    defaultLink,
                                    defaultLink,
                                    {
                                       '@type': builderSDKElementType,
                                       component: {
                                          name: 'Dropdown',
                                          options: { dropdownText: 'Dropdown Menu' },
                                       },
                                       children: [
                                          {
                                             '@type': '@builder.io/sdk:Element',
                                             component: {
                                                name: 'Text',
                                                options: { text: 'Enter text here...' },
                                             },
                                             responsiveStyles: {
                                                large: { fontSize: '14px' },
                                             },
                                          },
                                          {
                                             '@type': builderSDKElementType,
                                             component: {
                                                name: 'DropdownMenu',
                                             },
                                             children: [defaultLink, defaultLink, defaultLink],
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
                        name: 'NavigationSection',
                        options: { position: 'unset' },
                     },
                     responsiveStyles: {
                        medium: {
                           marginTop: '15px',
                           flexDirection: 'row',
                           borderTop: '1px solid #CFCFCF',
                           justifyContent: 'center',
                        },
                     },
                     children: [
                        {
                           '@type': builderSDKElementType,
                           component: {
                              name: 'Link',
                           },
                           children: [
                              {
                                 '@type': builderSDKElementType,
                                 component: {
                                    name: 'Icon',
                                    options: {
                                       type: typeMap['font-awesome-brands'],
                                       icon: 'twitter',
                                       icondpc: dpcIconsMap.Announcement,
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
      message: 'Children of Navigation Bar can only be Navigation Section, Collapse, or CollapseToggler',
      query: { 'component.name': { $in: ['Container'] } },
   },
});

import { Builder, withChildren } from '@builder.io/react';
import { dpcIcons, types, typeMap } from '../../Icon/_constants';
import { dpcIconsMap } from '../../Icon/_constants/inputEnums';
import { CollapseToggler } from './CollapseToggler';

const CollapseTogglerWithChildren = withChildren(CollapseToggler);

Builder.registerComponent(CollapseTogglerWithChildren, {
   name: 'CollapseToggler',
   noWrap: true,
   models: ['navigation-bar'],
   inputs: [
      {
         name: 'collapsedIcon',
         friendlyName: 'Collapsed Icon',
         type: 'object',
         helperText: 'The icon to show when the navigation content is collapsed.',
         subFields: [
            {
               name: 'type',
               type: 'text',
               enum: types,
               defaultValue: typeMap['font-awesome-solid'], // font-awesome-solid
               helperText: `The type of icon you want to display. dpc: an icon from your library, builtin: an icon from the font-awesome library.`,
            },
            {
               name: 'icon',
               type: 'text',
               defaultValue: 'bars',
               helperText: `The font awesome icon you want to display.  Please note, font awesome icons are treated as text. So for example, to adjust the size of font awesome icons, you must adjust the font size in the style tab instead of adjusting the height and width.`,
               showIf: `options.get('type') !== '${typeMap.dpc}'`,
            },
            {
               name: 'icondpc',
               friendlyName: 'Icon',
               type: 'text',
               enum: dpcIcons,
               defaultValue: dpcIconsMap.Announcement, // Announcment
               helperText: `The icon from the dpc library that you want to display.`,
               showIf: `options.get('type') === '${typeMap.dpc}'`,
            },
         ],
      },
      {
         name: 'expandedIcon',
         friendlyName: 'Expanded Icon',
         type: 'object',
         helperText: 'The icon to show when the navigation content is expanded.',
         subFields: [
            {
               name: 'type',
               type: 'text',
               enum: types,
               defaultValue: typeMap['font-awesome-solid'], // font-awesome-solid
               helperText: `The type of icon you want to display. dpc: an icon from your library, builtin: an icon from the font-awesome library.`,
            },
            {
               name: 'icon',
               type: 'text',
               defaultValue: 'times',
               helperText: `The font awesome icon you want to display.  Please note, font awesome icons are treated as text. So for example, to adjust the size of font awesome icons, you must adjust the font size in the style tab instead of adjusting the height and width.`,
               showIf: `options.get('type') !== '${typeMap.dpc}'`,
            },
            {
               name: 'icondpc',
               type: 'text',
               enum: dpcIcons,
               defaultValue: dpcIconsMap.Announcement, // Annoucment
               helperText: `The icon from the dpc library that you want to display.`,
               showIf: `options.get('type') === '${typeMap.dpc}'`,
            },
         ],
      },
   ],
});

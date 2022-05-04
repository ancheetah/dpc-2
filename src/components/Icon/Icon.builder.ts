import { Builder, withChildren } from '@builder.io/react';
import { Icon } from './Icon';
import { types, dpcIcons, typeMap } from './_constants';
import { dpcIconsMap } from './_constants/inputEnums';

const IconWithChildren = withChildren(Icon);

Builder.registerComponent(IconWithChildren, {
   name: 'Icon',
   noWrap: true,
   inputs: [
      {
         name: 'type',
         type: 'text',
         enum: types,
         defaultValue: typeMap.dpc,
         helperText: `The type of icon you want to display. dpc: an icon from your library, builtin: an icon from the font-awesome library.`,
      },
      {
         name: 'icon',
         type: 'text',
         defaultValue: 'twitter',
         helperText: `The font awesome icon you want to display.  Please note, font awesome icons are treated as text. So for example, to adjust the size of font awesome icons, you must adjust the font size in the style tab instead of adjusting the height and width.`,
         showIf: `options.get('type') !== '${typeMap.dpc}'`,
      },
      {
         name: 'icondpc',
         friendlyName: 'icon',
         type: 'text',
         enum: dpcIcons,
         defaultValue: dpcIconsMap.Announcement, // Announcment
         helperText: `The icon from the dpc library that you want to display.`,
         showIf: `options.get('type') === '${typeMap.dpc}'`,
      },
   ],
});

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { ButtonStyle } from '@components/Button/_types';
import { ArrowRight } from 'src/assets/icons/primary';
import { centerStyle, greyFilter } from '@components/Button/_constants';
import type { Props } from './_types';

export const Button = (props: Props) => {
   const { text, attributes, builderBlock } = props;

   const componentName = builderBlock?.component?.name || '';
   const headerClassName = componentName.toLowerCase().replace(/\s/gu, '-');

   switch (componentName) {
      case ButtonStyle.primaryButton:
         return (
            <MDBBtn {...attributes} className={` ${headerClassName || ''} ${attributes.className}`} style={centerStyle}>
               {text}
            </MDBBtn>
         );
      case ButtonStyle.roundButton:
         return (
            <MDBBtn {...attributes} className={` ${headerClassName || ''} ${attributes.className}`} floating tag="a">
               <MDBIcon fas icon="long-arrow-alt-right" id="arrow-right-icon" />
            </MDBBtn>
         );
      case ButtonStyle.textButton:
         return (
            <div {...attributes} className={` ${headerClassName || ''} ${attributes.className}`}>
               <a>{text}</a>
               <img
                  src={ArrowRight.src}
                  alt="right-arrow"
                  style={{ filter: greyFilter, height: '12px', width: '12px', marginLeft: '11px', marginTop: '-2px' }}
               />
            </div>
         );
      default:
         break;
   }
};

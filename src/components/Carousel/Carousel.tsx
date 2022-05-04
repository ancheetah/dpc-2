import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';
import Script from 'next/script';
import type { CarouselProps } from './Props';

export const Carousel = (props: CarouselProps) => {
   const { children, attributes, itemAmount, showControls } = props;
   return (
      <>
         <MDBCarousel {...attributes} className="multi-carousel" id="carousel" showControls={showControls}>
            <MDBCarouselInner className="multi-carousel-inner">
               {Array.isArray(children) &&
                  children.map(child => (
                     <div key={child.key} className="multi-carousel-item" style={{ width: `${100 / itemAmount}%` }}>
                        {child}
                     </div>
                  ))}
            </MDBCarouselInner>
         </MDBCarousel>
         <Script
            id="multi-carousel-script"
            src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/docs-app/js/dist/mdb5/plugins/multi-carousel.min.js"
            strategy="afterInteractive"
         />
      </>
   );
};

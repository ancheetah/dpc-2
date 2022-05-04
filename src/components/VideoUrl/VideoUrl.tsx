import styles from './VideoUrl.module.css';
import type { Props } from './_types';

export const VideoUrl = (props: Props) => {
    const { videoURL, attributes } = props;

    return (
    <div {...attributes} className={`${styles.videoUrl} ${attributes.className}`}>
        <iframe 
            src={videoURL}
            title="Embedded Video URL"
            frameBorder="0"
            allowFullScreen
         />
    </div>
   );
};
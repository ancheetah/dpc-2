import { Builder, withChildren } from '@builder.io/react'
import { VideoUrl } from './VideoUrl';

const VideoUrlWithChildren = withChildren(VideoUrl);
Builder.registerComponent(VideoUrlWithChildren, {
    name: 'VideoUrl',
    noWrap: true,
    inputs: [
        {
           name: 'videoURL',
           type: 'url',
           defaultValue: '',
           required: true,
           helperText:
              'Add video URL to render',
        },
     ],
})
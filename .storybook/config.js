import { configure, addDecorator, addParameters, setAddon  } from '@storybook/react';
 // 避免jest识别webpack context 报错
import requireContext from 'require-context.macro';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import chaptersAddon from 'react-storybook-addon-chapters';

setAddon(chaptersAddon);
addDecorator(withNotes);
addDecorator(withKnobs);
// addReadme与withInfo不能共存
addDecorator(withInfo); 
addParameters({
    info: {
        inline: true,
        styles: stylesheet => ({
            // Setting the style with a function
            ...stylesheet,
            infoBody: {
                ...stylesheet.infoBody,
                padding: '20px 40px 20px'
            },
            header: {
              ...stylesheet.header,
              h1: {
                ...stylesheet.header.h1,
              },
            },
        }),
    }
});

/**
 * 动态加载所有stories
 */
const req = requireContext('../src/stories', true, /\.stories\.(ts|tsx)$/);
function loadStories() {
    req.keys().forEach(fileName => req(fileName));
}

configure(loadStories, module);
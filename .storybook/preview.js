import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import '!style-loader!css-loader!sass-loader!./scssLoader.scss';
import { setConsoleOptions } from '@storybook/addon-console';
import { addParameters } from '@storybook/angular';
import { customViewports } from './viewports';

setConsoleOptions({
  panelExclude: [],
});

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports }
}


addParameters({
  themes: {
    list: [
      { name: 'VTR', class: 'theme-vtr', color: '#ff2c83', default: true },
      { name: 'Flow', class: 'theme-flow', color: '#0085ca' },
    ],
    onChange: (theme) => {
      const themeName = theme.name;
      sessionStorage.setItem('theme', themeName);
    },
  },
});

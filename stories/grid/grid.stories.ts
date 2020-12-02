import { Meta } from '@storybook/angular/types-6-0';
import {​​​​​​​​ moduleMetadata }​​​​​​​​ from '@storybook/angular';
import Grid from './grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  boolean,
  text,
  withKnobs,
  select,
  color,
} from '@storybook/addon-knobs';

export default {
  title: 'Grid',
  component: Grid,
  decorators: [withKnobs,
    moduleMetadata({
        imports: [MatGridListModule],
    })
],
} as Meta;

export const grid = () => ({
  moduleMetaData: {
    imports: [MatGridListModule],
  },
  component: Grid,
  props: {
  },
});
grid.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=55%3A2',
    },
  },
};

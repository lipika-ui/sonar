import { color, select, withKnobs } from '@storybook/addon-knobs';
import colorsComponent from './colors.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatGridListModule,
  MatGridTile,
  MatGridList,
} from '@angular/material/grid-list';
import { withDesign } from 'storybook-addon-designs';

const colorOptions = {
  white: 'white',
  black: 'black',
};
const category = {
  primary: 'primary',
  secondary: 'secondary',
  teritary: 'teritary',
  neutral: 'neutral',
};

export default {
  title: 'Colors',
  controls: { expanded: true },
  argTypes: {
    bgcolor: { control: 'color' },
  },
  decorators: [withKnobs, withDesign],
};

export const primary = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList],
  },
  component: colorsComponent,
  props: {
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    btnCategory: select('btnCategory', category, 'primary', 'GROUP-ID3'),
  },
});
primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};

export const secondary = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList],
  },
  component: colorsComponent,
  props: {
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    btnCategory: select('btnCategory', category, 'secondary', 'GROUP-ID3'),
  },
});
secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};

export const neutral = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList],
  },
  component: colorsComponent,
  props: {
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    btnCategory: select('btnCategory', category, 'neutral', 'GROUP-ID3'),
  },
});
neutral.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};

export const support = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList],
  },
  component: colorsComponent,
  props: {
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    btnCategory: select('btnCategory', category, 'teritary', 'GROUP-ID3'),
  },
});
support.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { select, withKnobs, color } from '@storybook/addon-knobs';
import typographyComponent from './typography.component';
import { withDesign } from 'storybook-addon-designs';

const alignOptions = {
  left: 'left',
  right: 'right',
  center: 'center',
};
const colorOptions = {
  white: 'white',
  black: 'black',
};
const buttonOptions = {
  default: 'default',
  primary: 'primary',
  disabled: 'disabled',
};
const colorVariants = {
  default: 'default',
  primary: 'primary',
  success: 'success',
  info: 'info',
  disabled: 'disabled',
  error: 'error',
};

const textComboOptions = {
  large: 'large',
  medium: 'medium',
  small: 'small',
  regular: 'regular',
};

export default {
  title: 'Typography',
  controls: { expanded: true },
  argTypes: {
    bgcolor: { control: 'color' },
  },
  decorators: [withKnobs, withDesign],
};

export const heading = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    colorVariant: select('Color', colorVariants, 'default', 'Colors'),
    isheading: true,
  },
});
heading.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

export const body = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    colorVariant: select('Color', colorVariants, 'default', 'Colors'),
    isbody: true,
  },
});
body.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

export const subline = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    colorVariant: select('Color', colorVariants, 'default', 'Colors'),
    issubline: true,
  },
});
subline.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

export const textcombinations = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    textcombo: select(
      'TextCombo',
      textComboOptions,
      'large',
      'Text Combinations'
    ),
    istextcombinations: true,
  },
});
textcombinations.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};
export const button = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    button: select('Button', buttonOptions, 'default', 'Colors'),
    isbutton: true,
  },
});
button.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

export const Bigsizes = () => ({
  moduleMetadat: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    isbigsizes: true,
  },
});
Bigsizes.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

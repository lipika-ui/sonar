// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/angular/types-6-0';
import Buttons from './buttons.component';
import { MatButtonModule } from '@angular/material/button';
import {
  boolean,
  text,
  withKnobs,
  select,
  color,
} from '@storybook/addon-knobs';

const btnOptions = {
  'Large button': 'btn-large',
  'Small button': 'btn-small',
  'large with right icon': 'btn-large-icon btn-right',
  'large with left icon': 'btn-large-icon btn-left',
  'Small with right icon': 'btn-small-icon btn-right',
  'Small with left icon': 'btn-small-icon btn-left',
  'large with only icon': 'btn-icon large-icon',
  'Small with only icon': 'btn-icon small-icon',
};

const linkOptions = {
  'Large button': 'btn-large',
  'Small button': 'btn-small',
  'large with right icon': 'btn-large-icon btn-right',
  'large with left icon': 'btn-large-icon btn-left',
  'Small with right icon': 'btn-small-icon btn-right',
  'Small with left icon': 'btn-small-icon btn-left',
};

export default {
  title: 'Buttons',
  component: Buttons,
  decorators: [withKnobs],
  moduleMetaData: {
    imports: [MatButtonModule],
  },
} as Meta;

export const primary = () => ({
  moduleMetadata: {
    imports: [MatButtonModule],
  },
  component: Buttons,
  props: {
    text: text('text', 'Main CTA'),
    extraClass: select('Styles', btnOptions, 'btn-large'),
    isdisabled: boolean('isdisabled', false),
    noExist: boolean('Animation No Exist', false),
    backgroundColor: color('backgroundColor', '#ffff', 'Background'),
    isPrimary: true,
  },
});
primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=564%3A1936',
    },
  },
};

export const secondary = () => ({
  moduleMetadata: {
    imports: [MatButtonModule],
  },
  component: Buttons,
  props: {
    text: text('text', 'Main CTA'),
    extraClass: select('Styles', btnOptions, 'btn-large'),
    isdisabled: boolean('isdisabled', false),
    noExist: boolean('Animation No Exist', false),
    backgroundColor: color('backgroundColor', '#fff', 'Background'),
    isSecondary: true,
  },
});
secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=564%3A1936',
    },
  },
};

export const link = () => ({
  moduleMetadata: {
    imports: [MatButtonModule],
  },
  component: Buttons,
  props: {
    text: text('text', 'Main CTA'),
    extraClass: select('Styles', linkOptions, 'btn-large'),
    isdisabled: boolean('isdisabled', false),
    noExist: boolean('Animation No Exist', false),
    backgroundColor: color('backgroundColor', '#ffff', 'Background'),
    isLink: true,
  },
});
link.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=564%3A1936',
    },
  },
};

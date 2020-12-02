import { color, select, withKnobs } from '@storybook/addon-knobs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { withDesign } from 'storybook-addon-designs';
import inputsComponent from './inputs.component';
import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const inputStatus = {
  default: 'default',
  active: 'active',
  readOnly: 'readOnly',
  success: 'success',
  disabled: 'disabled',
  required: 'required',
  error: 'error',
};
const styles = {
  fillInput: 'fillInput',
  outlineInput: 'outlineInput',
};
const size = {
  small: 'small',
  large: 'large',
};
const position = {
  prefix: 'prefix',
  suffix: 'suffix',
};
const iconTypes = {
  none: 'none',
  iconcopy: 'icon-copy',
  iconLock: 'icon-lock',
  iconSearch: 'icon-search',
  iconEye: 'icon-eye',
};
const affixTypes = {
  none: '',
  dollar: '$',
  // star: '*',
  percentage: '%',
  hash: '#',
  gb: 'Gb.',
  gct: 'GCT',
  mins: 'mins',
};
export default {
  title: 'Input',
  component: inputsComponent,
  decorators: [
    withKnobs,
    withDesign,
    moduleMetadata({
      imports: [
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

export const Inputs = () => ({
  component: inputsComponent,
  props: {
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    status: select('status', inputStatus, 'default', 'Status'),
    size: select('size', size, 'large', 'Size'),
    styles: select('styles', styles, 'fillInput', 'Styles'),
    iconType: select('iconType', iconTypes, 'none', 'Icon'),
    types: 'defaultInputs',
  },
});
Inputs.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};

export const Price = () => ({
  component: inputsComponent,
  props: {
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    status: select('status', inputStatus, 'default', 'Status'),
    size: select('size', size, 'large', 'Size'),
    styles: select('styles', styles, 'fillInput', 'Styles'),
    affixTypes: select('affixTypes', affixTypes, '', 'Affix'),
    position: select('position', position, 'prefix', 'Position'),
    types: 'Price'
  }
})

export const Textarea = () => ({
  component: inputsComponent,
  props: {
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    status: select('status', inputStatus, 'default', 'Status'),
    size: select('size', size, 'large', 'Size'),
    styles: select('styles', styles, 'fillInput', 'Styles'),
    types: 'inputWithTextarea',
  },
});
Textarea.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};

export const Password = () => ({
  component: inputsComponent,
  props: {
    ispassword: true,
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    status: select('status', inputStatus, 'default', 'States'),
    size: select('size', size, 'large', 'Size'),
    styles: select('styles', styles, 'fillInput', 'Styles'),
    types: 'inputWithPassword',
  },
});
Password.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};

export const Code = () => ({
  component: inputsComponent,
  props: {
    isinputcode: true,
    backgroundColor: color('backgroundColor', '#ffffff', 'Background'),
    TextColor: color('TextColor', '#000000', 'TextColor'),
    status: select('status', inputStatus, 'default', 'States'),
    styles: select('styles', styles, 'fillInput', 'Styles'),
    types: 'inputWithCode',
  },
});
Code.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};

import { boolean, withKnobs, color } from '@storybook/addon-knobs';
import { Meta } from '@storybook/angular/types-6-0';
import toggle from './toggle.component';
import { withDesign } from 'storybook-addon-designs';
import { moduleMetadata } from '@storybook/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export default {
  title: 'Toggle',
  component: toggle,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
} as Meta;

export const Primary = () => ({
  component: toggle,
  props: {
    isdisabled: boolean('isdisabled', false),
    label: boolean('label', false),
    caption: boolean('caption', false),
    isprimary: true,
    backgroundColor: color(
        'backgroundColor',
        'rgba(255,255,255,1)',
        'Background'
      ),
  },
});
Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1158',
    },
  },
};

export const Error = () => ({
  component: toggle,
  props: {
    isdisabled: boolean('isdisabled', false),
    label: boolean('label', false),
    caption: boolean('caption', false),
    iserror: true,
  },
});
Error.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1158',
    },
  },
};

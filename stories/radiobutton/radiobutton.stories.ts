import { boolean, withKnobs, color, button } from '@storybook/addon-knobs';
import { Meta } from '@storybook/angular/types-6-0';
import radiobutton from './radiobutton.component';
import { withDesign } from 'storybook-addon-designs';
import { moduleMetadata } from '@storybook/angular';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

export default {
  title: 'Radiobutton',
  component: radiobutton,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MatRadioModule, MatListModule],
    }),
  ],
} as Meta;

export interface radioAdd {
  name: string;
  id: number;
}


export const Primary = () => ({
  component: radiobutton,
  props: {
    disabled: boolean('disabled', false),
    label: boolean('label', false),
    caption: boolean('caption', false),
    horizontal: boolean('horizontal', false),
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
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1053',
    },
  }
};

export const Error = () => ({
  component: radiobutton,
  props: {
    disabled: boolean('disabled', false),
    label: boolean('label', false),
    caption: boolean('caption', false),
    horizontal: boolean('horizontal', false),
    iserror: true,
  },
});
Error.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1053',
    },
  }
};



const label = 'Add Radio Button';
const handler = () => add(radioBtn_list);
const handler1 = () => remove(radioBtn_list);
let radioBtn_list = [
  {
    name: 'Radio Button 1',
    id: 1,
  },
  {
    name: 'Radio Button 2',
    id: 2,
  },
  {
    name: 'Radio Button 3',
    id: 3,
  },
];
function add(radioBtn_list) {
  let arrLength = radioBtn_list.length;
  const check: radioAdd = {
    name: 'Radio Button ' + ++arrLength,
    id: arrLength + 1,
  };
  radioBtn_list.push(check);
  return radioBtn_list;
}

function remove(radioBtn_list) {
  radioBtn_list.pop();
}
export const Group = () => ({
  component: radiobutton,
  props: {
    label: boolean('label', false),
    caption: boolean('caption', false),
    isgroup: true,
    values: radioBtn_list,
    add: button(label, handler),
    remove: button('Remove Radio Button', handler1),
  },
});
Group.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1053',
    },
  }
};

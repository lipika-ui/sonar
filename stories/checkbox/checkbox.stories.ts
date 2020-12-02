import {
  boolean,
  withKnobs,
  color,
  button,
  select,
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/angular/types-6-0';
import checkbox from './checkbox.component';
import { withDesign } from 'storybook-addon-designs';
import { moduleMetadata } from '@storybook/angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { Component } from '@angular/core';
import checkboxComponent from './checkbox.component';

export interface checkadd {
  name: string;
  checked: boolean;
  id: number;
}

export default {
  title: 'Checkbox',
  component: checkboxComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MatCheckboxModule, MatListModule],
    }),
  ],
} as Meta;

export const Primary = () => ({
  component: checkbox,
  props: {
    disabled: boolean('disabled', false),
    label: boolean('label', false),
    caption: boolean('caption', false),
    backgroundColor: color(
      'backgroundColor',
      'rgba(255,255,255,1)',
      'Background'
    ),
    isprimary: true,
  },
});
Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A892',
    },
  },
};

export const Error = () => ({
  component: checkbox,
  props: {
    label: boolean('label', false),
    caption: boolean('caption', false),
    iserror: true,
  },
});
Error.story = {};

const label = 'Add Checkbox';
const handler = () => add(checkbox_list);
const handler1 = () => remove(checkbox_list);
let checkbox_list = [
  {
    name: 'Group Checkbox Label 1',
    checked: false,
    id: 1,
  },
  {
    name: 'Group Checkbox Label 2',
    checked: false,
    id: 2,
  },
  {
    name: 'Group Checkbox Label 3',
    checked: false,
    id: 3,
  },
];
function add(checkbox_list) {
  let arrLength = checkbox_list.length;
  const check: checkadd = {
    name: 'Group Checkbox Label ' + ++arrLength,
    checked: false,
    id: arrLength + 1,
  };
  checkbox_list.push(check);
  return checkbox_list;
}

function remove(checkbox_list) {
  checkbox_list.pop();
}

export const Group = () => ({
  component: checkbox,
  props: {
    label: boolean('label', false),
    caption: boolean('caption', false),
    add: button(label, handler),
    remove: button('Remove Checkbox', handler1),
    isgroup: true,
    values: checkbox_list,
  },
});
Group.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A892',
    },
  },
};

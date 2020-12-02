import { Meta } from '@storybook/angular/types-6-0';
import {IconsComponent} from './icons.component';
import {
  text,
  withKnobs,
  color,
  select,
  boolean,
} from '@storybook/addon-knobs';

export default {
  title: 'Icons',
  component: IconsComponent,
  decorators: [withKnobs],
} as Meta;

const iconSize = {
  'Extra Small' :  'xs-icon',
  'Small' : 'sm-icon',
  'Medium' : `md-icon`,
  'Large' : 'lg-icon',
  'Extra Large' : 'xl-icon'
}
export const icon = () => ({
  component: IconsComponent,
  props: {
    iconClass: text("Icon Class", "icon-battery-charging"),
    fontSize : select("Font Size" , iconSize, "md-icon"),
    fontColor: color('Font Color', '#000000'),
    label : boolean("Label",false),
    backgroundColor: color('backgroundColor', '#ffff', 'Background'),
  },
});
icon.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A2134',
    },
  },
};

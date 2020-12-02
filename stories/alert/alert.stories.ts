import { Meta } from '@storybook/angular/types-6-0';
import {​​​​​​​​ moduleMetadata }​​​​​​​​ from '@storybook/angular';
import { MatDialogModule } from '@angular/material/dialog';
import Alert from './alert.component';
import {
  boolean,
  text,
  withKnobs,
  select,
  color,
} from '@storybook/addon-knobs';
const bgsuccessOption = {
    'normal' : 'bg-success',
    'Opacity 40%' : 'bg-success-4',
    'Opacity 24%' :  'bg-success-24'
}
const bgwarningOption = {
    'normal' : 'bg-warning',
    'Opacity 40%' : 'bg-warning-4',
    'Opacity 24%' :  'bg-warning-24'
}
const bgerrorOption = {
    'normal' : 'bg-error',
    'Opacity 40%' : 'bg-error-4',
    'Opacity 24%' :  'bg-error-24'
}
const bginfoOption = {
    'normal' : 'bg-info',
    'Opacity 40%' : 'bg-info-4',
    'Opacity 24%' :  'bg-info-24'
}
export default {
  title: 'Alert',
  component: Alert,
  decorators: [withKnobs,
    moduleMetadata({
        imports: [MatDialogModule],
    })
],
} as Meta;

export const success = () => ({
  component: Alert,
  props: {
    title : text("title", "Success!"),
    content : text("content", "Everything good"),
    backgroundColor: color('backgroundColor', '#ffff', 'Background'),
    category : select('Category', bgsuccessOption, 'bg-success'),
    fullwidth: boolean('Full width', false)
  },
});
success.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
    },
  },
};
export const warning = () => ({
    component: Alert,
    props: {
      title : text("title", "Warning!"),
      content : text("content", "Something wrong"),
      backgroundColor: color('backgroundColor', '#ffff', 'Background'),
      category : select('Category', bgwarningOption, 'bg-warning'),
      fullwidth: boolean('Full width', false)
    },
  });
  warning.story = {
    parameters: {
      design: {
        type: 'figma',
        url:
          'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
      },
    },
  };
  export const error = () => ({
    component: Alert,
    props: {
      title : text("title", "Error"),
      content : text("content", "Try to refresh"),
      backgroundColor: color('backgroundColor', '#ffff', 'Background'),
      category : select('Category', bgerrorOption, 'bg-error'),
      fullwidth: boolean('Full width', false)
    },
  });
  error.story = {
    parameters: {
      design: {
        type: 'figma',
        url:
          'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
      },
    },
  };
  export const info = () => ({
    component: Alert,
    props: {
      title : text("title", "Information"),
      content : text("content", "Remember pay your check"),
      backgroundColor: color('backgroundColor', '#ffff', 'Background'),
      category : select('Category', bginfoOption, 'bg-info'),
      fullwidth: boolean('Full width', false)
    },
  });
  info.story = {
    parameters: {
      design: {
        type: 'figma',
        url:
          'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
      },
    },
  };

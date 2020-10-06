import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import {CardsComponent} from './cards.component';

export default {
  title: 'Perfil/Credit Cards',
  component: CardsComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardsComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const cards = [
    {
        number: 15534215421,
        vto: new Date,
        typeName: 'Naranja',
        type: 'naranja',
        name: "Ignacio Moreno"
    },
    {
        number: 44152526368,
        vto: new Date,
        typeName: 'Visa',
        type: 'visa',
        name: "Ignacio Moreno"
    },
    {
        number: 45845325615,
        vto: new Date,
        typeName: 'Master Card',
        type: 'master-card',
        name: "Ignacio Moreno"
    },
    {
        number: 15534215421,
        vto: new Date,
        typeName: 'Naranja',
        type: 'naranjas',
        name: "Ignacio Moreno"
    },
]

const Template: Story<CardsComponent> = (args: CardsComponent) => ({
  component: CardsComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    cards: cards
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';

export default {
  title: 'widgets/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Red = Template.bind({});
Red.args = { color: 'red' };

export const Blue = Template.bind({});
Blue.args = { color: 'rgba(10, 79, 217, 1)' };

export const Green = Template.bind({});
Green.args = { color: '#1ecc08' };

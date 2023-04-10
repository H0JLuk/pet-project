import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, VariantButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: VariantButton.PRIMARY,
  children: 'Primary button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: VariantButton.OUTLINE,
  children: 'Outline button',
};

export const Clear = Template.bind({});
Clear.args = {
  variant: VariantButton.CLEAR,
  children: 'Clear button',
};

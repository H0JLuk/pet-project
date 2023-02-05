import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  to: '/',
  children: 'Primary Link',
};

export const Secondary = Template.bind({});
Secondary.args = {
  to: '/',
  theme: AppLinkTheme.SECONDARY,
  children: 'Secondary Link',
};

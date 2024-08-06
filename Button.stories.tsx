import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  style: { fontSize: '20px' },
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  style: { fontSize: '12px' },
};


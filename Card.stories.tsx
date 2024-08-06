import React from 'react';
import Card from './Card';

// Default export to define the component and its metadata
export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the card content. It can be a longer text.',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card Title',
  content: 'This is the card content. It can be a longer text.',
  footer: <button>Click Me</button>,
};

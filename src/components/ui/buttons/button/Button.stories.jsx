import React from 'react';
import  Button from './Button';

export default {
    title: 'Simple/Button',
    component: Button,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        fontWeight: {
            options: ['normal', 'medium', 'bold'],
            control: { type: 'select' },
        },
        shadow: {
            options: ['light', 'medium', 'large'],
            control: { type: 'select' },
        },

    },
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
    label: 'Button',
};


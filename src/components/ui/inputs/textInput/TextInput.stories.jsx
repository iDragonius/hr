import React from 'react'

import TextInput from './TextInput'

export default {
    title: 'Simple/TextInput',
    component:  TextInput,
    argTypes: {
        type: {
            options: ['text', 'password', "email"],
            control: { type: 'select' },
        },
        mode: {
            options: ['normal', 'error', 'success'],
            control: { type: 'select' },
        },
    },
};

const Template = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
    label: 'Text',
    type:'text'
};

export const Password = Template.bind({});
Password.args ={
    label:'Password',
    type: 'password',
    mode:'error'
}


export const Email = Template.bind({});
Email.args ={
    label:'Email',
    type: 'email'
}
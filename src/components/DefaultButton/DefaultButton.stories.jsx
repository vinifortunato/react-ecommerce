import DefaultButton from './DefaultButton';

export default {
	title: 'Components/DefaultButton',
	component: DefaultButton,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Button label',
		},
		onClick: {
			action: 'onClick',
		},
	}
};

const Template = ((args) => (
	<DefaultButton {...args} />
));

export const Default = Template.bind({});

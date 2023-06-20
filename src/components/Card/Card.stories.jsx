import Card from './Card';

export default {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		text: {
			control: 'text',
			description: 'Cart text',
		},
		onClick: {
			action: 'onClick',
		},
		backgroundColor: {
			control: 'color'
		},
	}
};

const Template = ((args) => (
	<Card {...args} />
));

export const Default = Template.bind({});

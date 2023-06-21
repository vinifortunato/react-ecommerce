import './DefaultButton.css';

function DefaultButton({ label = 'Label', onClick }) {
	return (
		<button
			className='default-button-wrapper'
			onClick={onClick}
			data-testid="default-button"
		>
			{label}
		</button>
	);
}

export default DefaultButton;

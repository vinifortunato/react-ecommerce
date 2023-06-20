import './DefaultButton.css';

function DefaultButton({ label = 'Label', onClick }) {

    return (
        <button className='default-button-wrapper' onClick={onClick}>{label}</button>
    );
}

export default DefaultButton;

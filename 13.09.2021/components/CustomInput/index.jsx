import { useState } from 'react';

export default function CustomInput(props) {

    const [text, setText] = useState(props.text);

    const handleUpdateText = (event) => {
        const value = event.target.value;

        setText(value);
        props.handleUpdateText(value);
    };

    const handleClick = (event) => {
        console.log('i the child will handle the click');
        props.handleTextSubmit(text.toUpperCase());
    };

    return (
        <div>
            <p>Text</p>
            <input type='text' value={ text } onChange={ handleUpdateText }/>
            <p>{ text }</p>
            <button onClick={ handleClick }>
                <p>Click Me!</p>
            </button>
        </div>
    );

};
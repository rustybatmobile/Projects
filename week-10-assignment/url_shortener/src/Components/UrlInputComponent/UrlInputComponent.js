import {useState} from 'react';

const UrlInputComponent = ({onClick, setErrorMessage}) => {
    const [link, setLink] = useState("");

    return (
        <form>
            <input type = "text" value = {link} onChange = {(e) => {
                const value = e.target.value;
                setLink(value);
            }}/>
            <button type = "submit" onClick={(e) => {
                e.preventDefault();
                setLink("");
                onClick(link);
            }}>Shorten it!</button>
        </form>
    )
}

export default UrlInputComponent;
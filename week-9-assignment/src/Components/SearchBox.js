import React from 'react';

class SearchBox extends React.Component {

    render() {
        const {handleChange, content, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value = {content} type = "Text" placeholder='Enter todo item' />
                <input type = "submit"/>
            </form>
        )
    }
}

export default SearchBox
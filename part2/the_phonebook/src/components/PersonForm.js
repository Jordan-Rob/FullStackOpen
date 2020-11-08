import React from 'react';

const PersonForm = ({formFunc, val1, handler1, val2, handler2}) => {
    return(
        <form onSubmit={formFunc}>
            <div> name: <input value={val1} onChange={handler1} /> </div>
            <div> number: <input value={val2} onChange={handler2} /> </div>
            <button type="submit">add</button>
        </form>
    )
}

export default PersonForm;
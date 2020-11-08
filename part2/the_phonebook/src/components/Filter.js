import React from 'react'

const Filter = ({val, handler}) => {
    return(
        <div>Filter shown with <input value={val} onChange={handler} /></div>
    )
}

export default Filter;
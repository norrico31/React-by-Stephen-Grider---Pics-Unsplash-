import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
    const [state, setState] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        onSubmit(state)
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="">Image Search</label>
                    <input type="text" value={state} onChange={e => setState(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar

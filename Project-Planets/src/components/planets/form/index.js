import React, {Fragment, useState} from 'react';

const initialState = {
    name: '',
    description: ''
}

const Form = (props) =>{
    const [fields, setFields] = useState(initialState)
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name] : e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState)
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>
                </div>
                <br/>
                 <input type="submit"/>
            </form>
     </Fragment>
    )
}


export default Form;
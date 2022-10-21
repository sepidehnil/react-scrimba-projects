import React from 'react'

export default function App2(){
    //Challenge: add an email field/state to the form
    //Challenge: Add a textarea for "comments" to the form Make sure to update state when it changes.
    var [formData, setFormData] = React.useState(
        {firstName: "", lastName: "" , email :"" , comments:"" , isFriendly:true , employment: "" , favColor:""}  //objects
    )
    
    
    function handleChange(event) {
        var {name , value , type , checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,  //all old objects
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()    //it makes datas saved in after we click on submit button
        //submitToApi(formData)
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"  //make name property match exactly property name in the state
                value={formData.firstName}   //add this for controlled componets
            />   
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email} 
            />
            <textarea 
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />

                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                    >
                   <option value="">-- Choose --</option>
                   <option value="red">Red</option>
                   <option value="orange">Orange</option>
                   <option value="yellow">Yellow</option>
                   <option value="green">Green</option>
                   <option value="blue">Blue</option>
                   <option value="indigo">Indigo</option>
                   <option value="violet">Violet</option>
                </select>
            </fieldset>
            <br/>
            <br/>
            <button>submit</button>
        </form>
    )
}
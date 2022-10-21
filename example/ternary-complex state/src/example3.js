import React from 'react'

export default function App() {
    var [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    var starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(function(oldValue){
            return{
            ...oldValue,                                                 // or instead .., old value=> 
                                                                        //  firstName: "John",
                                                                         // lastName: "Doe",
                                                                         // phone: "+1 (719) 555-1212",
                                                                         // email: "itsmyrealname@example.com",
                                                                        //  isFavorite: true
            isFavorite : !oldValue.isFavorite  // opposite of whatever isfavorite currently is
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

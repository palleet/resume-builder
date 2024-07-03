import { useState } from 'react';

function PersonalInfo({ fullName, email, phoneNumber, handleInfoChange }) {

    return (
        <div id="personalInfo">
            <h2>Personal Info</h2>
            <form onSubmit={e => e.preventDefault()}>
                <div className="inputRow">
                    <label htmlFor="name">Full name</label>
                    <input 
                        placeholder="Full name"
                        id="name"
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="email">Email</label>
                    <input 
                        placeholder="Email"
                        id="email"
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input 
                        placeholder="Phone Number"
                        id="phoneNumber"
                    />
                </div>
                <button onClick={handleInfoChange}>Save</button>
            </form>

        </div>
    )
}

export default PersonalInfo;
import React, { useState } from "react";

export default function Contact() {
    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInfo({
            ...formInfo,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormInfo({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <div>
            <p>Hola pls leave a message</p>

            <form>
                <input
                    value={formInfo.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={formInfo.email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <input
                    value={formInfo.message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}
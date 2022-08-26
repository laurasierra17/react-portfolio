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

    const handleOnBlur = (e) => {
        if (!e.target.value) alert("Please type something")
    }

    return (
        <div>
            <p>Hola pls leave a message</p>

            <form>
                <input
                    value={formInfo.name}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={handleOnBlur}
                    type="text"
                    placeholder="Name"
                    required
                />
                <span className="name"></span>
                <input
                    value={formInfo.email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleOnBlur}
                    type="text"
                    placeholder="Email"
                    required
                />
                <span className="email"></span>
                <input
                    value={formInfo.message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleOnBlur}
                    type="message"
                    placeholder="Message"
                    required
                />
                <span className="message"></span>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}
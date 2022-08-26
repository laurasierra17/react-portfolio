import React, { useState } from "react";

export default function Contact() {
    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [completed, setCompleted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormInfo({
            ...formInfo,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        if (formInfo.name && formInfo.email && formInfo.message) {
            e.preventDefault();
            setCompleted(true);
    
            setFormInfo({
                name: '',
                email: '',
                message: ''
            })

        } else {
            alert("Please fill out the form first");
        }
    }

    const handleOnBlur = (e) => {
        if (!e.target.value) alert("Please type something");

        if (e.target.name === 'email') {
            if (e.target.value && !e.target.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                alert("Please insert a valid email address");
                setFormInfo({ ...formInfo, email: '' });
                return;
            }
        }
    }

    return (
        <div>
            {completed ? (
                <p>Thank you!</p>
            ) : (
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
                            type="email"
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
            )}
        </div>
    )
}
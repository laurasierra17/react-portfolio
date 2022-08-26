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
                    <h2>Let's connect</h2>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                className="form-control"
                                value={formInfo.name}
                                name="name"
                                onChange={handleInputChange}
                                onBlur={handleOnBlur}
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                className="form-control"
                                value={formInfo.email}
                                name="email"
                                onChange={handleInputChange}
                                onBlur={handleOnBlur}
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <input
                                className="form-control"
                                value={formInfo.message}
                                name="message"
                                onChange={handleInputChange}
                                onBlur={handleOnBlur}
                                type="message"
                                placeholder="Message"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                    </form>
                </div>
            )}
        </div>
    )
}
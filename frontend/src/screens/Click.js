import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional if you use modals, dropdowns, tooltips, etc.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Click() {
    return (
        <div className="container mt-4">
            <h1 className="text-primary">Hello Baby 😍</h1>
            <button className="btn btn-primary">Click Me</button>
            <i className="fas fa-user"></i>
            <i className="far fa-heart"></i>
            <i className="fab fa-github"></i>
        </div>
    )
}

export default Click
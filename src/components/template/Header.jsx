import './header.css'
// import React from 'react'

export default props =>
    <header className="header d-sm-flex flex-column">
        <h1 className="mt-3">
            {props.icon} {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>
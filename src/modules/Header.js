import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="blog-masthead">
                <div className="container">
                    <nav className="nav">
                        <a className="nav-link active" href="#">Home</a>
                        <a className="nav-link" href="#">New features</a>
                        <a className="nav-link" href="#">Press</a>
                        <a className="nav-link" href="#">New hires</a>
                        <a className="nav-link" href="#">About</a>
                    </nav>
                </div>
            </div>

            <div className="blog-header">
                <div className="container">
                    <h1 className="blog-title">The Bootstrap Blog</h1>
                    <p className="lead blog-description">An example blog template built with Bootstrap.</p>
                </div>
            </div>
        </header>
    );

}
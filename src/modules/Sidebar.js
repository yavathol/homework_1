import React from 'react';

export default function Sidebar(props) {
    const archivesItems = props.archives;
    const elsewhereItems = props.elsewhere;

    return (
        <aside className="col-sm-3 ml-sm-auto blog-sidebar">
            <SidebarModule additionalClass="sidebar-module-inset" title="About">
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                    fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </SidebarModule>
            <SidebarModule title="Archives">
                <UnstyledList items={archivesItems}/>
            </SidebarModule>
            <SidebarModule title="Elsewhere">
                <UnstyledList items={elsewhereItems}/>
            </SidebarModule>
        </aside>
    );
}

function SidebarModule(props) {
    const className = "sidebar-module " + props.additionalClass;
    return (
        <div className={className}>
            <h4>{props.title}</h4>
            {props.children}
        </div>
    );
}

function UnstyledList(props) {
    const items = props.items;

    const elements = items.map(item => {
            return (
                <li key={item}>
                    <a href="#">{item}</a>
                </li>
            );
        }
    );

    return (
        <ol className="list-unstyled">
            {elements}
        </ol>
    );
}
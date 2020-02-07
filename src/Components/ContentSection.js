import React from 'react';
import './styles/ContentSection.css';

function ContentSection(props) {
    return (
        <section className="ContentSection">
            <div>
                {props.text}
            </div>
        </section>
    )
}

export default ContentSection;
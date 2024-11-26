import React from 'react';

function Milestone({ milestone, onClick }) {
    return (
        <div className="milestone" onClick={onClick}>
            <div className="milestone-content">
                <h3>{milestone.title}</h3>
                <p>{milestone.date}</p>
            </div>
        </div>
    );
}

export default Milestone;

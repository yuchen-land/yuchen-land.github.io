import React from 'react';

function HonorsAwards({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="section card" id="honors-awards">
            <h2>Honors and Awards</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.name} {item.date && `(${item.date})`}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default HonorsAwards;
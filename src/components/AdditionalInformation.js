function AdditionalInformation({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <section className="section card" id="additional-info">
            <h2>Additional Information</h2>
            {data.map(info => (
                <div className="item" key={info.id}>
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                </div>
            ))}
        </section>
    );
}

export default AdditionalInformation;
import "./Section.css";

function Section({title, className = "", children}) {
    return (
        <section className={`section ${className}`}>
            <div className="section_header">
                <h2 className="section__title">{title}</h2>
                
            </div>
            {children}
        </section>
    );
}

export default Section;
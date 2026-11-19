import "./InfoList.css";

function InfoList({ title, rows, className = "" }) {
  return (
    <section className={`info-list ${className}`}>
      <h2 className="info-list__title">{title}</h2>
      <dl className="info-list__list">
        {rows
          .filter((row) => row.value)
          .map((row) => (
            <div key={row.label} className="info-list__row">
              <dt>{row.label}:</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
      </dl>
    </section>
  );
}

export default InfoList;

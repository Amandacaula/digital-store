import "./AuthCard.css";

function AuthCard({ title, subtitle, children }) {
  return (
    <div className="auth-card">
      <div className="container auth-card__container">
        <section className="auth-card__box" aria-labelledby="auth-card-title">
          <h1 id="auth-card-title" className="auth-card__title">
            {title}
          </h1>
          {subtitle && <p className="auth-card__subtitle">{subtitle}</p>}
          {children}
        </section>
      </div>
    </div>
  );
}

export default AuthCard;

import { useState } from "react";
import { FacebookIcon, GmailIcon } from "../Icons/Icons";
import "./SocialLogin.css";

const providers = [
  { name: "Google", Icon: GmailIcon },
  { name: "Facebook", Icon: FacebookIcon },
];

function SocialLogin() {
  const [message, setMessage] = useState("");

  return (
    <div className="social-login">
      <p className="social-login__text">Ou faça login com</p>

      <div className="social-login__buttons">
        {providers.map(({ name, Icon }) => (
          <button
            key={name}
            type="button"
            className="social-login__button"
            onClick={() => setMessage(`O login com ${name} ainda não está disponível.`)}
            aria-label={`Entrar com ${name}`}
          >
            <Icon />
          </button>
        ))}
      </div>

      {message && (
        <p className="social-login__message" role="status">
          {message}
        </p>
      )}
    </div>
  );
}

export default SocialLogin;

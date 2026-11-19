import { AuthContext } from "./AuthContext";
import { usePersistentState } from "../hooks/usePersistentState";
import { hashPassword } from "../utils/password";
import { profileFieldNames } from "../data/account";

function AuthProvider({ children }) {
  const [users, setUsers] = usePersistentState("digital-store:users", []);
  const [sessionEmail, setSessionEmail] = usePersistentState("digital-store:session", null);

  const findUser = (email) => users.find((user) => user.email === email.trim().toLowerCase());

  const storedUser = sessionEmail ? findUser(sessionEmail) : undefined;
  const user = storedUser ? { ...storedUser, passwordHash: undefined } : null;

  function emailExists(email) {
    return Boolean(findUser(email));
  }

  async function register(form) {
    const email = form.email.trim().toLowerCase();

    if (emailExists(email)) {
      return { ok: false, error: "Já existe uma conta com este e-mail." };
    }

    const profile = Object.fromEntries(profileFieldNames.map((name) => [name, form[name]]));
    const passwordHash = await hashPassword(form.password);

    setUsers((currentUsers) => [
      ...currentUsers,
      { ...profile, email, newsletter: form.newsletter, passwordHash },
    ]);
    setSessionEmail(email);
    return { ok: true };
  }

  async function login(email, password) {
    const found = findUser(email);
    const passwordHash = await hashPassword(password);

    if (!found || found.passwordHash !== passwordHash) {
      return { ok: false, error: "E-mail ou senha incorretos." };
    }

    setSessionEmail(found.email);
    return { ok: true };
  }

  function logout() {
    setSessionEmail(null);
  }

  const value = {
    user,
    emailExists,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

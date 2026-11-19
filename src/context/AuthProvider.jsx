import { AuthContext } from "./AuthContext";
import { usePersistentState } from "../hooks/usePersistentState";
import { hashPassword } from "../utils/password";
import { profileFieldNames } from "../data/account";

function AuthProvider({ children }) {
  const [users, setUsers] = usePersistentState("digital-store:users", []);
  const [sessionEmail, setSessionEmail] = usePersistentState("digital-store:session", null);
  const [orders, setOrders] = usePersistentState("digital-store:orders", []);

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

  function updateUser(data) {
    const profile = Object.fromEntries(profileFieldNames.map((name) => [name, data[name]]));

    setUsers((currentUsers) =>
      currentUsers.map((item) => (item.email === sessionEmail ? { ...item, ...profile, email: item.email } : item))
    );
  }

  function addOrder(order) {
    if (!user) return null;

    const number = String(Date.now()).slice(-10);
    const newOrder = {
      ...order,
      number,
      userEmail: user.email,
      date: new Date().toISOString(),
      status: "inTransit",
    };

    setOrders((currentOrders) => [newOrder, ...currentOrders]);
    return number;
  }

  const userOrders = user ? orders.filter((order) => order.userEmail === user.email) : [];

  const value = {
    user,
    userOrders,
    emailExists,
    register,
    login,
    logout,
    updateUser,
    addOrder,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

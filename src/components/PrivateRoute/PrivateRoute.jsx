import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: pathname }} />;
  }

  return children;
}

export default PrivateRoute;

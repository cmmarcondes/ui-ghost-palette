import { useEffect } from "react";
import { useAuthenticationContext } from "../context/AuthenticationContext";

const useAuth = ({ history }) => {
  const { currentUser } = useAuthenticationContext();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  return currentUser;
};

export default useAuth;

import { useAuth } from "../hooks";
import { withRouter } from "react-router-dom";
import { NavBar } from "../elements";

const WithAuth = ({ children, ...props }) =>
  useAuth(props) && <NavBar>{children}</NavBar>;

export default withRouter(WithAuth);

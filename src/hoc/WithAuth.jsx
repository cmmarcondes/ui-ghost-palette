import { useAuth } from "../hooks";
import { withRouter } from "react-router-dom";

const WithAuth = ({ children, ...props }) => useAuth(props) && children;

export default withRouter(WithAuth);

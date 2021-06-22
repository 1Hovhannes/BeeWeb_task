import { Switch, Route, Redirect } from "react-router-dom";
import Sign_In from "../../components/Sign_In/Sign_In";
import Sign_Up from "../../components/Sign_Up/Sign_Up";
import Dashboard from "../../components/Dashboard/Dashboard";
import { RedirectRoute } from "../RedirectRoute/RedirectRoute";

const Routes = () => {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route exact path="/sign_in" component={Sign_In} />
        <Route exact path="/sign_up" component={Sign_Up} />
        <RedirectRoute exact path="/dashboard" component={Dashboard} />
        <Redirect from="*" to={"/"} />
      </Switch>
    </>
  );
};

export default Routes;

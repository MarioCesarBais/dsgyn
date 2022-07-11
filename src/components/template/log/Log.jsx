import { useState } from "react";
import Card from "../../../layout/Card";
import Header from "./Header";
import Home from "./Home";

export default () => {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <Card titulo='Login' id='log' color='lightgreen'>
      <Home logoutUser={logoutUser} />
      <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
    </Card>
  );
};

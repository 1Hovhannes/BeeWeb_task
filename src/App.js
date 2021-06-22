import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Routes from "./features/Routes/Routes";
import { checkLogin } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

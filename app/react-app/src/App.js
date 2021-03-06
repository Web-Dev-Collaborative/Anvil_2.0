import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { LandingPage } from "./components";

import { restoreUser } from "./store/reducers/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>

    // <BrowserRouter>
    //   <NavBar setAuthenticated={setAuthenticated} />
    //   <Switch>
    //     <Route path="/login" exact>
    //       <LoginForm
    //         authenticated={authenticated}
    //         setAuthenticated={setAuthenticated}
    //       />
    //     </Route>
    //     <Route path="/sign-up" exact>
    //       <SignUpForm
    //         authenticated={authenticated}
    //         setAuthenticated={setAuthenticated}
    //       />
    //     </Route>
    //     <ProtectedRoute
    //       path="/users"
    //       exact
    //       authenticated={authenticated}
    //     >
    //       <UsersList />
    //     </ProtectedRoute>
    //     <ProtectedRoute
    //       path="/users/:userId"
    //       exact
    //       authenticated={authenticated}
    //     >
    //       <User />
    //       <NewFolder />
    //     </ProtectedRoute>
    //     <ProtectedRoute
    //       path="/folder/edit/:folderId"
    //       authenticated={authenticated}
    //     >
    //       <EditFolder />
    //     </ProtectedRoute>
    //     <ProtectedRoute path="/" exact authenticated={authenticated}>
    //       <h1>My Home Page</h1>
    //     </ProtectedRoute>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;

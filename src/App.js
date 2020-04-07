import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MultiQubitPage from "./MultiQubitPage";

export default function App() {

    return (
        <div className="root">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <Router>
            <Switch>
              <Route
                path={"/"}
                render={renderProps => (
                  <div>
                    <MultiQubitPage/>
                  </div>
                )}
              />
              <Route
                path={"/statistics"}
                render={renderProps => (
                  <div>
                    C
                  </div>
                )}
              />
              <Route
                path="/physics"
                render={renderProps => (
                  <div>
                    C
                  </div>
                )}
              />
            </Switch>
          </Router>
        </div>
      );
}
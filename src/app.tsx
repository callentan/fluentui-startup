import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppNav } from "./page-nav/page-nav";
import { Routes } from "./utils/routes";
import ParkingContainer from "./parking/parking-container";
import CardsContainer from "./cards/cards-container";
import PageHeader from "./page-header/page-header";
import { MailNotifyContainer } from "./mail-notify/mail-notify-container";

import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <div id="app-content">
          <div id="app-header">
            <PageHeader />
          </div>
          <div id="app-body">
            <Switch>
              <Route
                exact={true}
                path={[Routes.home, Routes.catalogs()]}
                component={AppNav}
              />
            </Switch>
            <div id="app-page">
              <Switch>
                <Route
                  exact={true}
                  path={Routes.catalogs("mailNotify")}
                  render={() => <MailNotifyContainer />}
                />
                <Route
                  exact={true}
                  path={Routes.catalogs("parking")}
                  render={() => <ParkingContainer />}
                />
                <Route
                  exact={true}
                  path={Routes.catalogs("cards")}
                  render={() => <CardsContainer />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

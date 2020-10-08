import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppNav } from "./app-nav";
import { Routes } from "./utils/routes";
import MailNotifyContainer from "./mail-notify/mail-notify-container";
import ParkingContainer from "./parking/parking-container";
import CardsContainer from "./cards/cards-container";

export interface AppProps {}

type Props = AppProps;

export const App: React.FC<Props> = (props: Props) => {
  // const [navExpanded, updateNavExpanded] = React.useState(true);

  return (
    <div id="app-container">
      <div id="app-content">
        <div id="app-body">
          {/* <div id="app-nav">
            <AppNav expanded={navExpanded} updateExpanded={updateNavExpanded} />
          </div> */}
          <div id="lab-app-page">
            <Switch>
              <Route exact={true} path={Routes.home} component={AppNav} />
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
};

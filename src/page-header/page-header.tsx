import _ from "lodash";
import * as React from "react";
import {
  CommandBar,
  DefaultButton,
  IButtonStyles,
  ICommandBarItemProps,
} from "office-ui-fabric-react";

import "./page-header.css";
import Routes from "../utils/routes";
import { Link } from "react-router-dom";

const styles: IButtonStyles = {
  root: {
    height: "54px",
    width: "100%",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "0px",
    borderRadius: "0px",
  },
  icon: {
    color: "#ffffff",
  },
  iconHovered: {
    color: "#ffffff",
  },
  iconPressed: {
    color: "#ffffff",
  },
  rootHovered: {
    backgroundColor: "#005A9E",
    color: "#ffffff",
  },
  rootPressed: {
    backgroundColor: "#004578",
    color: "#ffffff",
  },
  rootExpanded: {
    backgroundColor: "#F3F2F1",
    color: "#000000",
  },
};

const PageHeader: React.FC = () => {
  const items: ICommandBarItemProps[] = [
    {
      key: "Home",
      onRender: () => (
        <div role="menuitem" style={{ height: "54px", marginLeft: "20px" }}>
          <Link to={Routes.home}>
            <p style={{ color: "#FFFFFF" }}>App</p>
          </Link>
        </div>
      ),
    },
  ];

  // TODO: add items to the command bar
  const farItems: ICommandBarItemProps[] = [];

  return (
    <div id="page-header-container" role="banner">
      <CommandBar
        items={items}
        farItems={farItems}
        overflowButtonProps={{
          styles,
        }}
        styles={{
          root: {
            height: "100%",
            width: "100%",
            backgroundColor: "#000000",
            color: "#ffffff",
            margin: "0 0 0 0",
            padding: "0 0 0 0",
          },
        }}
      />
    </div>
  );
};

export default PageHeader;

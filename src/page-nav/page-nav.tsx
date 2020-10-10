import _ from "lodash";
import * as React from "react";
import {
  DefaultButton,
  getTheme,
  IButtonStyles,
  Stack,
} from "office-ui-fabric-react";
import { Link } from "react-router-dom";
import { ButtonName } from "../utils/ui-constant";
import { Routes } from "../utils/routes";

import "./page-nav.css";

const theme = getTheme();

const navButtonStyles: IButtonStyles = {
  root: {
    height: "36px",
    minWidth: "58px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    border: 0,
    backgroundColor: theme.palette.neutralLighter,
    textAlign: "left",
  },
  rootHovered: {
    backgroundColor: theme.palette.neutralLight,
  },
  label: {
    fontWeight: 400,
  },
};

const navButtonSelectedStyles: IButtonStyles = _.merge({}, navButtonStyles, {
  root: {
    backgroundColor: theme.palette.neutralQuaternaryAlt,
  },
  label: {
    fontWeight: 600,
  },
});

const navButtonIconOnlyStyles = _.merge({}, navButtonStyles, {
  root: {
    justifyContent: "center",
  },
});

const navButtonSelectedIconOnlyStyles = _.merge({}, navButtonSelectedStyles, {
  root: {
    justifyContent: "center",
  },
});

const navButtonHeader = _.merge({}, navButtonStyles, {
  root: {
    height: "44px",
    width: "58px",
  },
});

interface AppNavProps {
  match: any;
}

type Props = AppNavProps;

export const AppNav: React.FC<Props> = (props: Props) => {
  const { match } = props;
  const [expanded, updateExpanded] = React.useState(true);

  const encodedRoute = match.params.catalog;
  const buttonStyles = expanded ? navButtonStyles : navButtonIconOnlyStyles;
  const buttonSelectedStyles = expanded
    ? navButtonSelectedStyles
    : navButtonSelectedIconOnlyStyles;

  return (
    <nav id="app-nav" role="navigation">
      <Stack>
        <ul
          role="menu"
          aria-expanded={expanded}
          style={{
            minWidth: expanded ? "300px" : undefined,
          }}
        >
          <Stack.Item styles={{ root: { borderBottom: "solid 1px #EDEBE9" } }}>
            <li role="none">
              <DefaultButton
                role="menuitem"
                iconProps={{
                  iconName: expanded
                    ? "DoubleChevronLeft"
                    : "DoubleChevronRight",
                }}
                onClick={() => updateExpanded(!expanded)}
                styles={navButtonHeader}
              />
            </li>
          </Stack.Item>
          <Stack.Item styles={{ root: { marginTop: "20px" } }}>
            <li role="none">
              <Link to={Routes.catalogs("mailNotify")}>
                <DefaultButton
                  role="menuitem"
                  iconProps={{
                    iconName: "Mail",
                  }}
                  text={expanded ? ButtonName.MailNotify : undefined}
                  title={expanded ? undefined : ButtonName.MailNotify}
                  ariaLabel={ButtonName.MailNotify}
                  styles={
                    encodedRoute === "mailNotify"
                      ? buttonSelectedStyles
                      : buttonStyles
                  }
                />
              </Link>
            </li>
          </Stack.Item>
          <Stack.Item>
            <li role="none">
              <Link to={Routes.catalogs("parking")}>
                <DefaultButton
                  role="menuitem"
                  iconProps={{
                    iconName: "Car",
                  }}
                  text={expanded ? ButtonName.Parking : undefined}
                  title={expanded ? undefined : ButtonName.Parking}
                  ariaLabel={ButtonName.Parking}
                  styles={
                    encodedRoute === "packing"
                      ? buttonSelectedStyles
                      : buttonStyles
                  }
                />
              </Link>
            </li>
          </Stack.Item>
          <Stack.Item>
            <li role="none">
              <Link to={Routes.catalogs("cards")}>
                <DefaultButton
                  role="menuitem"
                  iconProps={{
                    iconName: "PaymentCard",
                  }}
                  text={expanded ? ButtonName.Cards : undefined}
                  title={expanded ? undefined : ButtonName.Cards}
                  ariaLabel={ButtonName.Cards}
                  styles={
                    encodedRoute === "cards"
                      ? buttonSelectedStyles
                      : buttonStyles
                  }
                />
              </Link>
            </li>
          </Stack.Item>
        </ul>
      </Stack>
    </nav>
  );
};

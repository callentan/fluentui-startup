import * as React from "react";
import { connect } from "react-redux";
import {
  CommandBar,
  DetailsListLayoutMode,
  IColumn,
  ICommandBarItemProps,
  SelectionMode,
  ShimmeredDetailsList,
  Stack,
} from "office-ui-fabric-react";
import { Users } from "../data/models/mail-notify";
import { StoreState } from "../redux/state/store-state";
import {
  getLastUploadTimeStamp,
  getUsers,
} from "../redux/actions/mail-notify-actions";
import FileUploadButton from "./file-upload-button";

import "./mail-notify.css";

interface StateProps {
  lastUpload: string | null;
  users: Users[] | null;
}

interface DispatchProps {
  getLastUploadTimeStamp: typeof getLastUploadTimeStamp;
  getUsers: typeof getUsers;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class MailNotifyContainerInjected extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount(): void {
    const { getLastUploadTimeStamp, getUsers } = this.props;
    getLastUploadTimeStamp();
    getUsers(1);  // TODO: remove this line. Currently just for reviewing data
  }

  private _onSendMail = () => {
    // TODO: dispatch send mails action
  };

  // Upload file
  private _onFileUpload(event: React.ChangeEvent<HTMLInputElement>): void {
    getUsers(event);
    event.target.value = "";
  }

  // Renders Upload button in command bar, including file upload control
  private _onRenderUploadCsv(
    dismissMenu: (ev?: any, dismissAll?: boolean) => void
  ): React.ReactNode {
    return (
      <Stack verticalFill verticalAlign="center">
        <Stack.Item>
          <FileUploadButton
            labelText="Upload"
            accept=".csv"
            onChange={(event) => {
              this._onFileUpload(event);
              dismissMenu();
            }}
          />
        </Stack.Item>
      </Stack>
    );
  }

  private _createBarItems(): ICommandBarItemProps[] {
    const items: ICommandBarItemProps[] = [
      {
        key: "upload",
        text: "Upload",
        iconProps: { iconName: "PeopleAdd" },
        onRender: this._onRenderUploadCsv,
      },
      {
        key: "sendMail",
        text: "Send mail",
        iconProps: { iconName: "MailReminder" },
        onClick: this._onSendMail,
      },
    ];

    return items;
  }

  private _createColumns(): IColumn[] {
    const columns: IColumn[] = [
      {
        key: "name",
        name: "User name",
        minWidth: 150,
        maxWidth: 350,
        isResizable: true,
        isCollapsible: true,
        onRender: (item: Users) => {
          <Stack verticalFill verticalAlign="center">
            <Stack.Item>{item.name}</Stack.Item>
          </Stack>;
        },
      },
      {
        key: "email",
        name: "Email",
        minWidth: 150,
        maxWidth: 350,
        isResizable: true,
        isCollapsable: true,
        onRender: (item: Users) => (
          <Stack verticalFill verticalAlign="center">
            <Stack.Item>{item.email}</Stack.Item>
          </Stack>
        ),
      },
      {
        key: "status",
        name: "Status",
        minWidth: 150,
        maxWidth: 350,
        isResizable: true,
        isCollapsible: true,
        onRender: (item: Users) => (
          <Stack verticalFill verticalAlign="center">
            <Stack.Item>{item.status}</Stack.Item>
          </Stack>
        ),
      },
    ];

    return columns;
  }

  render() {
    const { lastUpload, users } = this.props;

    const barItems = this._createBarItems();
    const columns = this._createColumns();
    return (
      <div id="mail-notify-container">
        <div id="mail-notify-content">
          <div id="mail-notify-header">
            <CommandBar className="mail-notify-command" items={barItems} />
          </div>
          <div id="mail-notify-body">
            <div id="mail-notify-records">
              <Stack
                style={{
                  marginLeft: "32px",
                  marginRight: "8px",
                  marginTop: "11px",
                  marginBottom: "25px",
                }}
              >
                <Stack.Item>
                  <h1>Records</h1>
                  {lastUpload && (
                    <div>{`Last uploaded date: ${lastUpload}`}</div>
                  )}
                </Stack.Item>
              </Stack>
            </div>
            <div id="mail-notify-users">
              <div id="mail-notify-users-header">
                <Stack
                  style={{
                    marginLeft: "32px",
                    marginRight: "8px",
                    marginTop: "11px",
                    marginBottom: "25px",
                  }}
                >
                  <Stack.Item>
                    <h1>Users</h1>
                    <div>Users need to be notified by email</div>
                  </Stack.Item>
                </Stack>
              </div>
              <div id="mail-notify-users-body">
                {users && (
                  <div id="mail-notify-users-list-container">
                    <ShimmeredDetailsList
                      data-is-scrollable="true"
                      items={users}
                      columns={columns}
                      selectionMode={SelectionMode.none}
                      getKey={(item: Users) => item.name}
                      setKey="set"
                      layoutMode={DetailsListLayoutMode.justified}
                      isHeaderVisible={true}
                      compact={false}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): StateProps => {
  const mailStore = state.mailNotify;
  const lastUpload = mailStore.lastUpload
    ? mailStore.lastUpload.lastUpload
    : "-";
  const users = mailStore.users;
  return {
    lastUpload,
    users,
  };
};

const mapDispatchToProps: DispatchProps = {
  getLastUploadTimeStamp,
  getUsers,
};

export const MailNotifyContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  StoreState
>(
  mapStateToProps,
  mapDispatchToProps
)(MailNotifyContainerInjected);

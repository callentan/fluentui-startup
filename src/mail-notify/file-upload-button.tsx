import * as React from "react";
import {
  CommandButton,
  IButtonStyles,
} from "office-ui-fabric-react";

export interface FileUploadButtonProps {
  labelText: string | JSX.Element;
  accept?: string;
  styles?: IButtonStyles;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = FileUploadButtonProps;

export class FileUploadButton extends React.Component<Props> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.inputRef = React.createRef<HTMLInputElement>();
  }

  render() {
    const { labelText, accept, styles, onChange } = this.props;
    const labelTextInputFile = (
      <>
        {labelText}
        <input
          id="upload"
          type="file"
          accept={accept}
          style={{ display: "none" }}
          ref={this.inputRef}
          onChange={onChange}
        />
      </>
    );

    return (
      <CommandButton
        iconProps={{
          iconName: "Upload",
          styles: {
            root: {
              width: "16px",
              padding: "0 4px 0 5px",
            },
          },
        }}
        styles={styles}
        onClick={() => this.inputRef.current && this.inputRef.current.click()}
      >
        {labelTextInputFile}
      </CommandButton>
    );
  }
}

export default FileUploadButton;

import { Alert } from "react-bootstrap";

const Message = ({ variant = "info", children }) => {
  return (
    <div>
      <Alert variant={variant} children>
        {" "}
        {children}{" "}
      </Alert>
    </div>
  );
};

export default Message;

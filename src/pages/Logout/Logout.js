import React from "react";
import Button from "react-bootstrap/Button";
import LogoutModal from "../../components/LogoutModal/LogoutModal";

export default function Logout() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <LogoutModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

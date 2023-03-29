import React from "react";
import Button from "react-bootstrap/Button";
import CanceltestModal from "../../components/CanceltestModal/CanceltestModal";

export default function Canceltest() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <CanceltestModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

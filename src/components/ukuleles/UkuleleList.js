import React, { useContext, useState } from "react";
import { UkuleleContext } from "./UkuleleProvider";
import { UkeSizeContext } from "./UkeSizeProvider";
import { UkeShapeContext } from "./UkeShapeProvider";
import Ukulele from "./Ukulele";
import "./Ukulele.css";
import UkuleleForm from "./UkuleleForm";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

export default () => {
  const { ukuleles } = useContext(UkuleleContext);
  const { ukeSizes } = useContext(UkeSizeContext) || {};
  const { ukeShapes } = useContext(UkeShapeContext) || {};

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <h2>My Uke Collection</h2>
      <Button
        onClick={() => {
          const userId = localStorage.getItem("ukehut_user");
          if (userId) {
            toggle();
          }
        }}
      >
        Add Ukulele
      </Button>

      <ul className="ukuleles">
        {ukuleles.map((uke) => {
          const matchingUkeSize = ukeSizes.find(
            (ukeSize) => ukeSize.id === uke.sizeId
          );
          const matchingUkeShape = ukeShapes.find(
            (ukeShape) => ukeShape.id === uke.shapeId
          );

          return (
            <Ukulele
              key={uke.id}
              ukulele={uke}
              ukeSize={matchingUkeSize}
              ukeShape={matchingUkeShape}
            />
          );
        })}
      </ul>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to your collection!</ModalHeader>
        <ModalBody>
          <UkuleleForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

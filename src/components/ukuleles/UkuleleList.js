import React, { useContext, useState } from "react";
import { UkuleleContext } from "./UkuleleProvider";
import { UkeSizeContext } from "./UkeSizeProvider";
import { UkeShapeContext } from "./UkeShapeProvider";
import Ukulele from "./Ukulele";
import UkuleleForm from "./UkuleleForm";
import { EditUkuleleForm } from "./EditUkuleleForm";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Ukulele.css";

export default () => {
  const { ukuleles, deleteUkulele } = useContext(UkuleleContext);
  const { ukeSizes } = useContext(UkeSizeContext);
  const { ukeShapes } = useContext(UkeShapeContext);

  const [selectedUkulele, setUkulele] = useState({
    ukuleles: { id: 0 },
    ukeSize: null,
    ukeShape: null,
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

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
        {ukuleles.map((ukulele) => {
          const matchingUkeSize =
            ukeSizes.find((ukeSize) => ukeSize.id === ukulele.sizeId) || [];

          const matchingUkeShape =
            ukeShapes.find((ukeShape) => ukeShape.id === ukulele.shapeId) || [];

          return (
            <div>
              <Ukulele
                key={ukulele.id}
                ukulele={ukulele}
                ukeSize={matchingUkeSize}
                ukeShape={matchingUkeShape}
              />
              <Button
                onClick={() => {
                  toggleEdit();
                  setUkulele({ ukulele, matchingUkeSize, matchingUkeShape });
                }}
              >
                Update Ukulele
              </Button>
              <Button
                onClick={() => {
                  deleteUkulele(selectedUkulele.ukuleles.id);
                }}
              >
                Remove
              </Button>
            </div>
          );
        })}
      </ul>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to your collection!</ModalHeader>
        <ModalBody>
          <UkuleleForm toggler={toggle} />
        </ModalBody>
      </Modal>
      <Modal isOpen={editModal} toggle={toggleEdit}>
        <ModalBody>
          <EditUkuleleForm
            key={selectedUkulele.ukuleles.id}
            toggleEdit={toggleEdit}
            {...selectedUkulele}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

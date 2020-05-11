import React, { useContext, useState } from "react";
import { UkuleleContext } from "./UkuleleProvider";
import { UkeSizeContext } from "./UkeSizeProvider";
import { UkeShapeContext } from "./UkeShapeProvider";
import Ukulele from "./Ukulele";
import UkuleleForm from "./UkuleleForm";
import { EditUkuleleForm } from "./EditUkuleleForm";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

export default () => {
  const { ukuleles, deleteUkulele } = useContext(UkuleleContext);
  const { ukeSizes } = useContext(UkeSizeContext);
  const { ukeShapes } = useContext(UkeShapeContext);

  const [selectedUkulele, setUkulele] = useState({
    ukuleles: { id: 0 },
    ukeSize: null,
    ukeShape: null,
  });

  const currentUserId = parseInt(localStorage.getItem("ukehut_user"));

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  return (
    <>
      <h2>My Uke Collection</h2>
      <Button
        onClick={() => {
          let userId = localStorage.getItem("ukehut_user");
          if (userId) {
            toggle();
          }
        }}
      >
        Add Ukulele
      </Button>

      <div className="ukuleles">
        {ukuleles
          .filter((ukulele) => ukulele.userId === currentUserId)
          .map((ukulele) => {
            console.log(ukuleles);
            const ukeSize =
              ukeSizes.find((ukeSize) => ukeSize.id === ukulele.sizeId) || [];

            const ukeShape =
              ukeShapes.find((ukeShape) => ukeShape.id === ukulele.shapeId) ||
              [];
            return (
              <ul className="eachUkulele">
                <Ukulele
                  key={ukulele.id}
                  ukulele={ukulele}
                  ukeSize={ukeSize}
                  ukeShape={ukeShape}
                />
                <div className="updateButton">
                  <Button
                    size="sm"
                    onClick={() => {
                      toggleEdit();

                      setUkulele({
                        ukuleles: ukulele,
                        ukeSize: ukeSize,
                        ukeShape: ukeShape,
                      });
                    }}
                  >
                    Update Ukulele
                  </Button>
                </div>
                <div className="deleteButton">
                  <Button
                    size="sm"
                    onClick={() => {
                      deleteUkulele(ukulele);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </ul>
            );
          })}
      </div>

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
            ukulele={selectedUkulele.ukuleles}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

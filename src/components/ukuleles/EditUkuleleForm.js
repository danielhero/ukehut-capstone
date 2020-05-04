import React, { useContext, useState } from "react";
import { UkuleleContext } from "./UkuleleProvider";
import { UkeSizeContext } from "./UkeSizeProvider";
import { UkeShapeContext } from "./UkeShapeProvider";

export const EditUkuleleForm = ({ ukulele, toggleEdit }) => {
  const { updateUkulele } = useContext(UkuleleContext);
  const { updateUkeSize } = useContext(UkeSizeContext);
  const { updateUkeShape } = useContext(UkeShapeContext);

  // Separate state variable to track the ukulele as it is edited
  const [updatedUkulele, setUkulele] = useState(ukulele);

  /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
  const handleControlledInputChange = (event) => {
    const newUkulele = Object.assign({}, updatedUkulele);
    newUkulele[event.target.name] = event.target.value;
    setUkulele(newUkulele);
  };

  const editUkulele = () => {
    const sizeId = parseInt(updatedUkulele.sizeId);
    const shapeId = parseInt(updatedUkulele.shapeId);

    if (sizeId === 0) {
      window.alert("Please select a size");
    } else if (shapeId === 0) {
      window.alert("Please select a size");
    } else {
      updateUkulele({
        id: updatedUkulele.id,
        name: updatedUkulele.make,
        breed: updatedUkulele.model,
        sizeId: sizeId,
        shapeId: shapeId,
        image: updatedUkulele.image,
      }).then(toggleEdit);

      return (
        <form className="editUkuleleForm">
          <fieldset>
            <div className="form-group">
              <label htmlFor="make">Make: </label>
              <input
                type="text"
                name="make"
                required
                autoFocus
                className="form-control"
                placeholder="Ukulele make"
                defaultValue={ukulele.make}
                onChange={handleControlledInputChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="model">Model: </label>
              <input
                type="text"
                name="model"
                required
                className="form-control"
                placeholder="Ukulele model"
                defaultValue={ukulele.model}
                onChange={handleControlledInputChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="sizeId">Size: </label>
              <select
                name="sizeId"
                className="form-control"
                defaultValue={ukulele.sizeId}
                onChange={handleControlledInputChange}
              >
                <option value="0">Select a size</option>
                {updateUkeSize.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="shapeId">Shape: </label>
              <select
                name="shapeId"
                className="form-control"
                defaultValue={ukulele.shapeId}
                onChange={handleControlledInputChange}
              >
                <option value="0">Select a shape</option>
                {updateUkeShape.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="customer">Image:</label>
              <input
                type="text"
                name="image"
                disabled
                className="form-control"
                defaultValue={ukulele.image}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(evt) => {
              evt.preventDefault();
              editUkulele();
            }}
          >
            Save Updates
          </button>
        </form>
      );
    }
  };
};

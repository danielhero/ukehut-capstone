import React, { useContext, useRef } from "react";
import { UkuleleContext } from "./UkuleleProvider";
import { UkeSizeContext } from "./UkeSizeProvider";
import { UkeShapeContext } from "./UkeShapeProvider";
import "./Ukulele.css";

export default (props) => {
  const { addUkulele } = useContext(UkuleleContext);
  const { ukeSizes } = useContext(UkeSizeContext);
  const { ukeShapes } = useContext(UkeShapeContext);

  const make = useRef();
  const model = useRef();
  const ukeSize = useRef();
  const ukeShape = useRef();
  const image = useRef();

  const constructNewUkulele = () => {
    const sizeId = parseInt(ukeSize.current.value);
    const shapeId = parseInt(ukeShape.current.value);
    const userId = parseInt(localStorage.getItem("ukehut_user"));

    addUkulele({
      make: make.current.value,
      model: model.current.value,
      sizeId: sizeId,
      shapeId: shapeId,
      image: image.current.value,
      userId: userId,
    }).then(props.toggler);
  };

  return (
    <form className="ukuleleForm">
      <h2 className="ukuleleForm__title">New Ukulele</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="ukuleleMake">Make: </label>
          <input
            type="text"
            id="ukuleleMake"
            ref={make}
            required
            autoFocus
            className="form-control"
            placeholder="Ukulele make"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="ukuleleModel">Model: </label>
          <input
            type="text"
            id="ukuleleModel"
            ref={model}
            required
            autoFocus
            className="form-control"
            placeholder="Ukulele model"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="ukeSize">Ukulele Size: </label>
          <select
            defaultValue=""
            name="ukeSize"
            ref={ukeSize}
            id="ukuleleSize"
            className="form-control"
          >
            <option value="0">Select a size</option>
            {ukeSizes.map((e) => (
              <option key={e.id} value={e.id}>
                {e.size}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="ukeSize">Ukulele Shape: </label>
          <select
            defaultValue=""
            name="ukeShape"
            ref={ukeShape}
            id="ukuleleShape"
            className="form-control"
          >
            <option value="0">Select a shape</option>
            {ukeShapes.map((e) => (
              <option key={e.id} value={e.id}>
                {e.shape}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="ukulelePic">Insert Picture URL: </label>
          <input
            type="text"
            id="ukulelePic"
            ref={image}
            required
            autoFocus
            className="form-control"
            placeholder="Ukulele pic"
          />
        </div>
      </fieldset>
      <fieldset></fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewUkulele();
        }}
        className="btn btn-primary"
      >
        Save Ukulele
      </button>
    </form>
  );
};

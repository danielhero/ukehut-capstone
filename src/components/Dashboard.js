import React, { useState, useEffect } from "react";
import { UkuleleProvider } from "./ukuleles/UkuleleProvider";
import UkuleleList from "./ukuleles/UkuleleList";
import { UkeShapeProvider } from "./ukuleles/UkeShapeProvider";
import { UkeSizeProvider } from "./ukuleles/UkeSizeProvider";

export default () => {
  return (
    <div className="mainContainer">
      <UkuleleProvider>
        <UkeSizeProvider>
          <UkeShapeProvider>
            <UkuleleList />
          </UkeShapeProvider>
        </UkeSizeProvider>
      </UkuleleProvider>
    </div>
  );
};

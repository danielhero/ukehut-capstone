import React, { useContext, useState } from "react";
import { UkuleleContext } from "./UkuleleProvider";
import { UkeSizeContext } from "./UkeSizeProvider";
import { UkeShapeContext } from "./UkeShapeProvider";
import Ukulele from "./Ukulele";
import { UserContext } from "../users/usersProvider";

export default () => {
  const { ukuleles } = useContext(UkuleleContext);
  const { ukeSizes } = useContext(UkeSizeContext);
  const { ukeShapes } = useContext(UkeShapeContext);
  const { users } = userContext(UserContext);

  const currentUserId = parseInt(localStorage.getItem("ukehut_user"));

  const [selectedUser, setUsers] = useState({
    users: { id: 0 },
    username: null,
  });

  return (
    <>
      <h2>{users.username}'s Uke Collection</h2>

      <div className="ukuleles">
        {ukuleles
          .filter((ukulele) => ukulele.userId === currentUserId)
          .map((ukulele) => {
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
              </ul>
            );
          })}
      </div>
    </>
  );
};

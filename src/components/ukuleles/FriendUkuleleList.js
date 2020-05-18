import React, { useContext, useState, useEffect } from "react";
import { UkuleleContext } from "./UkuleleProvider";
import { UkeSizeContext } from "./UkeSizeProvider";
import { UkeShapeContext } from "./UkeShapeProvider";
import Ukulele from "./Ukulele";
import { UserContext } from "../users/usersProvider";

export default ({ friendCollectionId }) => {
  const { ukuleles } = useContext(UkuleleContext);
  const { ukeSizes } = useContext(UkeSizeContext);
  const { ukeShapes } = useContext(UkeShapeContext);
  const { users } = useContext(UserContext);

  const currentUserId = parseInt(localStorage.getItem("ukehut_user"));

  const [filteredUser, setFiltered] = useState({});

  useEffect(() => {
    if (friendCollectionId !== currentUserId) {
      const selectedFriend =
        users.find((user) => user.id === parseInt(friendCollectionId)) || {};

      setFiltered(selectedFriend);
    } else {
      setFiltered([]);
    }
  }, [friendCollectionId]);

  return (
    <>
      <div className="friendUkeList">
        <div className="friendUkeListHeader">
          <h2>{filteredUser.username}'s Uke Collection</h2>
        </div>

        <div className="ukuleles">
          {ukuleles
            .filter((ukulele) => ukulele.userId === filteredUser.id)
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
      </div>
    </>
  );
};

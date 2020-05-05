import React, { useContext, useState } from "react";
import { FriendContext } from "./FriendsProvider";
import Friend from "./Friend";

export default () => {
  const { friends, deleteFriend } = useContext(FriendContext);

  return (
    <>
      <h2>UKeHut Members</h2>

      <ul className="animals">
        {animals.map((ani) => {
          const matchingLocation = locations.find(
            (loc) => loc.id === ani.locationId
          );
          const matchingCustomer = customers.find(
            (customer) => customer.id === ani.customerId
          );

          return (
            <Animal
              key={ani.id}
              animal={ani}
              customer={matchingCustomer}
              location={matchingLocation}
            />
          );
        })}
      </ul>
      <Button
        onClick={() => {
          const userId = localStorage.getItem("kennel_customer");
          if (userId) {
            toggle();
          }
        }}
      >
        Make Appointment
      </Button>
    </>
  );
};

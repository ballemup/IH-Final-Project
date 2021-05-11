import React, { useContext, useEffect, useState } from "react";
import actions from "./api";
import TheContext from "./TheContext";

function Profile(props) {
  const { user } = useContext(TheContext);

  return (
    <div>
      Profile {user?.name}
      {<img src={user?.imageUrl} alt="" />}
      {user?.email}
    </div>
  );
}

export default Profile;

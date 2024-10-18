"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const MainMenu = () => {
  const [first, setFirst] = useState("Pink-Esssence");

  const router = useRouter();

  if (first === "Pink-Essence") {
    // return <RedEssence />;
  } else {
    return <>
      <h1>Page Not Found</h1>
    </>;
  }
};

export default MainMenu;

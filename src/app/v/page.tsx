"use client";

import { useState } from "react";
import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import { useRouter } from "next/navigation";

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

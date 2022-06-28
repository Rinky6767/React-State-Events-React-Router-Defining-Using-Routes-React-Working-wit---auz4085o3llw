import React from "react";
import { useParams } from "react-router-dom";

export const BackgroundColorChanger = () => {
  let { colorname } = useParams();
  return (
    <>
      <main style={{ backgroundColor: colorname, height: "100vh" }}>
        Background Color Changer
      </main>
    </>
  );
};

import React, { ReactElement } from "react";
import MainLayout from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";

export default function About() {
  return (
    <h2 className="text-3xl font-bold">Este es el Acerca de</h2>
  );
}

About.getLayout = function getLayout ( page: JSX.Element ) {
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
} 

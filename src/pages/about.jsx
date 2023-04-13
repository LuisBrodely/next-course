import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import MainLayout from "@/components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <h2 className="text-3xl font-bold">Este es el Acerca de</h2>
    </MainLayout>
  );
}

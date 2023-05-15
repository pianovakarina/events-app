import React, { PropsWithChildren } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { NextPage } from "next";

const MainLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

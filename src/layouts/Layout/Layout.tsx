import { Footer, Header } from "../../components";
import s from "./Layout.module.css";
import "../../global.css";

import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

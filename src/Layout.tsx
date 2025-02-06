import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <main className="px-20 flex-1 flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

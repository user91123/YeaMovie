import { Footer } from "@/03_widgets/footer";
import { Header } from "@/03_widgets/header/ui";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

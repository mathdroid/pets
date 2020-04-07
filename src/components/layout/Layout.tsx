import { Header } from "./Header";

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer>&copy; 2020 mathdroid</footer>
  </>
);

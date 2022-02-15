import Navigation from "./Nav.js";
import Nav from "./Nav.js";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Header />
      <div className="Container">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

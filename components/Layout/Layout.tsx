import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import s from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={s.Layout}>
      <Header />
      <div className={s.content}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

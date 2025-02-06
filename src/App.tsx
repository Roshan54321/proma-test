import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Badge1 from "./components/Badge1";
import Button1 from "./components/Button1";
import Calendar1 from "./components/Calendar1";
import Table1 from "./components/Table1";
import Skeleton1 from "./components/Skeleton1";
import DropdownMenu1 from "./components/DropdownMenu1";
import DataTable1 from "./components/DataTable1";
import NavigationMenu1 from "./components/NavigationMenu1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Badge1 />} />
      <Route path="/button" element={<Button1 variant="destructive" />} />
      <Route path="/calendar" element={<Calendar1 />} />
      <Route path="/table" element={<Table1 />} />
      <Route path="/skeleton" element={<Skeleton1 />} />
      <Route path="/dropdownmenu" element={<DropdownMenu1 />} />
      <Route path="/datatable" element={<DataTable1 />} />
      <Route path="/navigationmenu" element={<NavigationMenu1 />} />
    </Routes>
  );
}
export default App;
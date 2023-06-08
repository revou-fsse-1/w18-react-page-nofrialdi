import "./App.css";
import { Header } from "./components/Header/Header";
import { ButtonJoin } from "./components/Button/ButtonJoin";
import { ListGallery } from "./components/Contents/ListGallery";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <ListGallery />
      <ButtonJoin />
    </div>
  );
}

export default App;

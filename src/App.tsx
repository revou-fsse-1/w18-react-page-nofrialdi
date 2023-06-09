import "./App.css";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { DataGalleries } from "./data/DataGalleries";
import { GalleryCard } from "./components/Contents/GalleryCard";
import JoinForm from "./components/Form/JoinForm";
import JoinNotification from "./components/Form/JoinNotification";

function App() {
  // Like
  const [galleries, setGalleries] = useState(DataGalleries);

  function LikeGallery(id: number, isLiked: boolean) {
    const newGalery = galleries.map((galleries) => {
      if (galleries.id === id) {
        galleries.isLiked = isLiked;
      }
      return galleries;
    });
    setGalleries(newGalery);
  }

  //search

  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleJoinForm = () => {
    setIsShow((isShow) => !isShow);
  };
  // console.log(search);
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div>
        <input type="search" onChange={(e) => setSearch(e.target.value)} name="search" placeholder="Search for photos..." className="my-4 w-[300px] px-2 py-2 font-semibold text-lg bg-white text-slate-700 rounded-xl" />
      </div>
      <div className="mt-4 max-w-[900px] flex flex-wrap flex-row justify-center items-center gap-4">
        {galleries
          .filter((gallery) => {
            return search === "" ? gallery : gallery.name.match(search);
          })
          .map((gallery) => (
            <GalleryCard key={gallery.id} id={gallery.id} isLiked={gallery.isLiked} name={gallery.name} imageUrl={gallery.imageUrl} LikeGallery={LikeGallery} />
          ))}
      </div>
      <button onClick={() => toggleJoinForm()} className=" mt-6 cursor-pointer border-[1px] border-grey z-0 px-6 py-1 text-md font-semibold top-[3px] right-[3px] bg-white rounded-lg hover:scale-110 duration-200">
        Join Photo Club Membership
      </button>
      {isShow ? <JoinForm setIsShow={setIsShow} setIsActive={setIsActive} /> : null}
      {isActive ? <JoinNotification setIsActive={setIsActive} isActive={isActive} /> : null}
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header/Header";
import { ButtonJoin } from "./components/Button/ButtonJoin";
import { useState } from "react";
import { DataGalleries } from "./data/DataGalleries";
import { GalleryCard } from "./components/Contents/GalleryCard";

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
      <ButtonJoin />
    </div>
  );
}

export default App;

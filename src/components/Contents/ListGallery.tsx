import { useState } from "react";
import { Galleries } from "../../data/DataGalleries";
import { GalleryCard } from "./GalleryCard";

export const ListGallery = () => {
  const [galleries, setGalleries] = useState(Galleries);

  function LikeGallery(id: number, isLiked: boolean) {
    const newGalery = galleries.map((galleries) => {
      if (galleries.id === id) {
        galleries.isLiked = isLiked;
      }
      return galleries;
    });
    setGalleries(newGalery);
  }

  return (
    <div className="mt-4 max-w-[900px] flex flex-wrap flex-row justify-center items-center gap-4">
      {galleries.map((gallery) => (
        <GalleryCard id={gallery.id} isLiked={gallery.isLiked} name={gallery.name} imageUrl={gallery.imageUrl} LikeGallery={LikeGallery} />
      ))}
    </div>
  );
};

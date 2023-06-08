import { Galleries } from "../../data/DataGalleries";
import { CountLikeGallery } from "./CountLikeGallery";
import { SearchBar } from "./SearchBar";
import { Title } from "./Title";

export const Header = () => {
  const likeGalleryCount = Galleries.filter((Galleries) => Galleries.isLiked).length;
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Title />
        <CountLikeGallery count={likeGalleryCount} />
        <h2 className="mt-4 text-xl font-semibold text-white">List of member photos</h2>
        <SearchBar />
      </div>
    </div>
  );
};

type GalleryCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  isLiked: boolean;
  LikeGallery: (id: number, isLiked: boolean) => void;
};

export const GalleryCard = (props: GalleryCardProps) => {
  return (
    <div className="w-max relative hover:scale-110 duration-500">
      {!props.isLiked ? (
        <button onClick={() => props.LikeGallery(props.id, true)} className="h-max font-bold absolute px-6 bg-white rounded-lg py-1 right-1 top-1 cursor-pointer border-grey border-[1px]">
          Like
        </button>
      ) : (
        <button onClick={() => props.LikeGallery(props.id, false)} className="h-max font-bold absolute text-white px-6 bg-green-700 rounded-lg py-1 right-1 top-1 cursor-pointer border-grey border-[1px]">
          Liked
        </button>
      )}
      <img className="h-[270px] w-[200px] rounded-lg" src={props.imageUrl} />
      <h3 className="text-white text-xl mt-[-30px] text-center font-semibold">{props.name}</h3>
    </div>
  );
};

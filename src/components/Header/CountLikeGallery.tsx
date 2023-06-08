type likeGalleryProps = {
  count: number;
};

export const CountLikeGallery = ({ count }: likeGalleryProps) => {
  return (
    <div className="fixed top-0 right-0 px-4 py-2 text-white bg-green-700 rounded-bl-2xl">
      <span className="text-white text-md">You have like {count} Photos</span>
    </div>
  );
};

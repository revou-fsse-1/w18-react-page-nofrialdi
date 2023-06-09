export default function JoinNotification(props: { isActive: boolean; setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) {
  const isActive = props.isActive;
  const toggleJoinNotification = () => {
    props.setIsActive((isActive) => !isActive);
  };

  return (
    <>
      {isActive ? (
        <span className=" bg-green-700 text-white font-bold fixed bottom-[20px] z-50 right-30 left-30 px-10 py-2 rounded-lg">
          Your Registration has been submitted successfully!
          <button className="absolute -right-2 -top-2 text-black bg-white align-middle w-6 rounded-full hover:scale-110 transition-transform" onClick={() => toggleJoinNotification()}>
            x
          </button>
        </span>
      ) : null}
    </>
  );
}

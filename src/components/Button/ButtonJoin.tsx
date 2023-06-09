import { useState } from "react";

import JoinForm from "../Form/JoinForm";
import JoinNotification from "../Form/JoinNotification";

export const ButtonJoin = () => {
  const [isShow, setIsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleJoinForm = () => {
    setIsShow((isShow) => !isShow);
  };
  return (
    <div className="mt-6">
      <button onClick={() => toggleJoinForm()} className="cursor-pointer border-[1px] border-grey z-0 px-6 py-1 text-md font-semibold top-[3px] right-[3px] bg-white rounded-lg hover:scale-110 duration-200">
        Join Photo Club Membership
      </button>
      {isShow ? <JoinForm setIsShow={setIsShow} setIsActive={setIsActive} /> : null}
      {isActive ? <JoinNotification setIsActive={setIsActive} isActive={isActive} /> : null}
    </div>
  );
};

import React, { useState } from "react";

export default function JoinForm(props: { setIsShow: React.Dispatch<React.SetStateAction<boolean>>; setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) {
  // variables
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [firstNameIsEmpty, setFirstNameIsEmpty] = useState(false);
  const [lastNameIsEmpty, setLastNameIsEmpty] = useState(false);

  // functions
  const toggleJoinForm = () => {
    props.setIsShow((isShown) => !isShown);
  };
  const toggleJoinNotification = () => {
    props.setIsActive((isActive) => !isActive);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const showEmailError = () => {
    setEmailIsEmpty((emailIsEmpty) => (emailIsEmpty = true));
  };
  const showFirstNameError = () => {
    setFirstNameIsEmpty((firstNameIsEmpty) => (firstNameIsEmpty = true));
  };
  const showLastNameError = () => {
    setLastNameIsEmpty((lastNameIsEmpty) => (lastNameIsEmpty = true));
  };
  const hideEmailError = () => {
    setEmailIsEmpty((emailIsEmpty) => (emailIsEmpty = false));
  };
  const hideFirstNameError = () => {
    setFirstNameIsEmpty((firstNameIsEmpty) => (firstNameIsEmpty = false));
  };
  const hideLastNameError = () => {
    setLastNameIsEmpty((lastNameIsEmpty) => (lastNameIsEmpty = false));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      showEmailError();
    } else if (email) {
      hideEmailError();
    }

    if (!firstName) {
      showFirstNameError();
    } else if (firstName) {
      hideFirstNameError();
    }

    if (!lastName) {
      showLastNameError();
    } else if (lastName) {
      hideLastNameError();
    }

    if (!email || !firstName || !lastName) return;

    const formData = {
      email,
      firstName,
      lastName,
    };

    console.log(`Submitted the form with value: ${JSON.stringify(formData)}}`);
    toggleJoinForm();
    toggleJoinNotification();
  };

  return (
    <div className="fixed z-50 top-0 inset-x-0 w-full h-full bg-black/70 ">
      <div className="flex justify-center items-center h-screen">
        {/* white box */}
        <div className="relative bg-white px-12 py-6 rounded-lg max-w-[600px]">
          {/* close button */}
          <button onClick={toggleJoinForm} className="absolute top-[-5px] right-2 text-gray-700 text-2xl hover:scale-150 transition-transform active:scale-110">
            x
          </button>
          {/* title */}
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl text-slate-800">Register to Photo Club Member</h1>
            <p className="text-sm text-gray-600 mb-4">Get countless benefit by joining as a member of Photo Club!</p>
          </div>

          {/* form */}
          <form onSubmit={handleFormSubmit} className="flex flex-col items-start">
            <label htmlFor="email" className="text-black text-sm">
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Insert your email" onChange={handleEmailChange} className="bg-white px-2 py-1 mb-2 border border-gray-500 rounded-lg w-full text-black placeholder:text-sm" />

            {emailIsEmpty ? <span className="text-red-600  text-sm">Invalid email</span> : null}

            <label htmlFor="fiirstName" className="text-black text-sm">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Insert your first name"
              onChange={handleFirstNameChange}
              className="bg-white px-2 py-1 mb-2 border border-gray-500 rounded-lg w-full text-black placeholder:text-sm"
            />
            {firstNameIsEmpty ? <span className="text-red-600  text-sm">Invalid first name</span> : null}
            <label htmlFor="lastName" className="text-black text-sm">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" placeholder="Insert your last name" onChange={handleLastNameChange} className="bg-white px-2 py-1 mb-2 border border-gray-500 rounded-lg w-full text-black placeholder:text-sm" />
            {lastNameIsEmpty ? <span className="text-red-600  text-sm">Invalid last name</span> : null}
            <input type="submit" value="Register Now" className="text-white font-medium w-full py-1 mt-4 rounded-lg bg-green-600 hover:cursor-pointer hover:scale-105 active:scale-100 transition-transform" />
          </form>
        </div>
      </div>
    </div>
  );
}

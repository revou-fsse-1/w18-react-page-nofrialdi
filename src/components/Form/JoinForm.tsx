import React, { useState } from "react";

// type formFields = {
//   [key: string]: string;
// };

type formFields = Record<string, string>;
type formFieldsError = Record<string, string | undefined>;

const INITIAL_FORM_STATE = {
  email: "",
  fiirstName: "",
  lastName: "",
};

const INITIAL_FORM_FIELD_ERROR = {
  email: undefined,
  fiirstName: undefined,
  lastName: undefined,
};

export default function JoinForm(props: { setIsShow: React.Dispatch<React.SetStateAction<boolean>>; setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) {
  const toggleJoinForm = () => {
    props.setIsShow((isShown) => !isShown);
  };
  const toggleJoinNotification = () => {
    props.setIsActive((isActive) => !isActive);
  };

  const [formFields, setFormFields] = useState<formFields>(INITIAL_FORM_STATE);

  const [formFieldsError, setFormFieldsError] = useState<formFieldsError>(INITIAL_FORM_FIELD_ERROR);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;

    // console.log({ field });

    setFormFields((prevFormFields) => {
      const copiedFormFields = { ...prevFormFields };
      copiedFormFields[field] = event.target.value;
      return copiedFormFields;
    });
  };

  const setFormFieldErrorByFieldKey = (fieldkey: string, errorMessage: string) => {
    setFormFieldsError((prevFormFieldsError) => {
      const copiedFormFieldsError = { ...prevFormFieldsError };
      copiedFormFieldsError[fieldkey] = errorMessage;
      return copiedFormFieldsError;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //reset form validation
    setFormFieldsError(INITIAL_FORM_FIELD_ERROR);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formFields.email) {
      setFormFieldErrorByFieldKey("email", "Email have to be filled in");
    } else if (!emailRegex.test(formFields.email)) {
      setFormFieldErrorByFieldKey("email", "Please enter a valid email address");
    }

    if (!formFields.fiirstName) {
      setFormFieldErrorByFieldKey("fiirstName", "First Name have to be filled in");
    }

    if (!formFields.lastName) {
      setFormFieldErrorByFieldKey("lastName", "Last Name have to be filled in");
    }

    // console.log("my form fields", formFields);

    if (!formFields.email || !formFields.fiirstName || !formFields.lastName) return;

    const formData = {
      formFields,
    };

    console.log("my form fields", formData);
    toggleJoinForm();
    toggleJoinNotification();
  };

  // console.log({ formFieldsError });

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
          <form onSubmit={handleSubmit} className="flex flex-col items-start">
            <label htmlFor="email" className="text-black text-sm">
              Email
            </label>
            <input
              onChange={handleInputChange}
              value={formFields.email}
              type="email"
              id="email"
              name="email"
              placeholder="Insert your email"
              className="bg-white px-2 py-1 mb-2 border border-gray-500 rounded-lg w-full text-black placeholder:text-sm"
            />
            <span style={{ color: "red" }}>{formFieldsError.email}</span>

            <label htmlFor="fiirstName" className="text-black text-sm">
              First Name
            </label>
            <input
              onChange={handleInputChange}
              value={formFields.fiirstName}
              type="text"
              id="fiirstName"
              name="fiirstName"
              placeholder="Insert your first name"
              className="bg-white px-2 py-1 mb-2 border border-gray-500 rounded-lg w-full text-black placeholder:text-sm"
            />
            <span style={{ color: "red" }}>{formFieldsError.fiirstName}</span>

            <label htmlFor="lastName" className="text-black text-sm">
              Last Name
            </label>
            <input
              onChange={handleInputChange}
              value={formFields.lastName}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Insert your last name"
              className="bg-white px-2 py-1 mb-2 border border-gray-500 rounded-lg w-full text-black placeholder:text-sm"
            />
            <span style={{ color: "red" }}>{formFieldsError.lastName}</span>

            <input type="submit" value="Register Now" className="text-white font-medium w-full py-1 mt-4 rounded-lg bg-green-600 hover:cursor-pointer hover:scale-105 active:scale-100 transition-transform" />
          </form>
        </div>
      </div>
    </div>
  );
}

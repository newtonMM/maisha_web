import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter your full name"),
  email: Yup.string().trim().email("Invalid email address"),
  message: Yup.string().trim().required("Message cannot be empty!"),
});
const data = [
  {
    icon_url: "https://image.flaticon.com/icons/png/128/684/684908.png",
    heading: "Location",
    content: "kenya, Nairobi kimathi street",
  },
  {
    icon_url: "https://image.flaticon.com/icons/png/128/684/684908.png",
    heading: "Location",
    content: "kenya, Nairobi kimathi street",
  },
];
const Contacts = () => {
  const MessageSubmit = () => {};

  const contactCards =
    data &&
    data.map((itms, index) => (
      <div key={index} className="my-5">
        <div>
          <img className="lg:h-1/4 w-1/2 " src={itms.icon_url} />
          <h1>{itms.heading}</h1>
          <p>{itms.content}</p>
        </div>
      </div>
    ));

  return (
    <div className="lg:">
      <h1 className="text-center text-4xl font-bold text-red-600">Contacts </h1>
      <div className="flex lg:mx-20">
        <div className="lg:mx-20">{contactCards}</div>
        <div>
          <Formik
            validationSchema={ContactSchema}
            initialValues={{ name: "", phone: "", email: "", message: "" }}
            onSubmit={MessageSubmit}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              errors,
              values,
            }) => (
              <>
                <form>
                  <p className="mt-10 text-semibold text-gray-400 text-3xl">
                    please leave a message{" "}
                  </p>
                  <div className="lg:h-auto flex flex-col mt-5">
                    <div className="container max-w-auto mx-auto flex-1 flex flex-col items-center justify-center px-2">
                      <div className="bg-white px-4 py-2 rounded shadow-md text-black w-full lg:ml-2">
                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="lastName"
                          placeholder="Last Name"
                        />

                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="email"
                          placeholder="Email"
                        />

                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="phone"
                          placeholder="Enter phone number"
                        />

                        <textarea
                          type="textarea"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="message"
                          placeholder="Message"
                        />

                        <button
                          type="submit"
                          className="w-1/4 text-center lg:mx-96 py-3 rounded bg-yellow-300 text-white hover:bg-yellow-500 focus:outline-none my-1"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

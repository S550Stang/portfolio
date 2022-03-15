import React from "react";

export default function ContactFormComponent() {
  return (
    <div className="mt-10 lg:mt-0">
      <form
        className="space-y-1 lg:space-y-5 flex flex-col justify-center items-center lg:ml-10 xl:ml-44 2xl:ml-72 "
        action=""
      >
        <input
          className="rounded-xl sm:w-60 lg:w-96"
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
        />
        <input
          className="rounded-xl sm:w-60 lg:w-96 "
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="rounded-xl sm:w-60 lg:w-96"
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="rounded-xl btn-bg inline-block w-44" type="submit">
          Send A Message
        </button>
      </form>
    </div>
  );
}

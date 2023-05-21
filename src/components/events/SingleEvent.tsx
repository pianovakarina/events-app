import { AllEvent } from "@/data/dataType";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEventHandler, useState } from "react";

interface ISingleEventProps {
  activity: AllEvent;
}
const SingleEvent: NextPage<ISingleEventProps> = ({ activity }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const router = useRouter();
  console.log(router);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    console.log(value);

    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId,
          email: value,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.log(error, "ERROR ");
    }

    setValue("");
  };
  return (
    <div className="event_single_page">
      <h1>{activity.title}</h1>
      <Image
        src={activity.image}
        width={800}
        height={500}
        alt={activity.city}
      />

      <p>{activity.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get registered for this event!</label>
        <input
          onChange={handlerInput}
          value={value}
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;

import { AllEvent, EventsCategory } from "@/data/dataType";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ICatEventProps {
  city: EventsCategory;
  events: AllEvent[];
}
const CatEvent: NextPage<ICatEventProps> = ({ city, events }) => {
  return (
    <div className="cat_events">
      <h1>Events in {city.id}</h1>
      <div className="content">
        {events.map((item) => {
          return (
            <Link
              className="card"
              href={`/events/${city.id}/${item.id}`}
              key={item.id}
            >
              <Image
                alt={item.city}
                width={300}
                height={300}
                src={item.image}
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CatEvent;

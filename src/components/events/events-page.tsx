import { EventsCategory } from "@/data/dataType";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface IEventPageProps {
  data: EventsCategory[];
}
const EventPage: NextPage<IEventPageProps> = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => {
        return (
          <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={400} height={400} />
            <h2 className="text-xl font-bold">{ev.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default EventPage;

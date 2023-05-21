import { EventsCategory } from "@/data/dataType";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface IHomePageProps {
  data: EventsCategory[];
}
const HomePage: NextPage<IHomePageProps> = ({ data }) => {
  return (
    <div className="home_body">
      {data.map((event) => {
        return (
          <Link
            className="card"
            href={`/events/${event.id}`}
            key={event.id}
            passHref
          >
            <div className="image">
              <Image
                width={450}
                height={300}
                src={event.image}
                alt={event.title}
              />
            </div>

            <div className="content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;

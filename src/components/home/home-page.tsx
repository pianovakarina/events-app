import { EventsCategory } from "@/data/dataType";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface IHomePageProps {
  data: EventsCategory[];
}
const HomePage: NextPage<IHomePageProps> = ({ data }) => {
  return (
    <>
      {data.map((event) => {
        return (
          <Link href={`/events/${event.id}`} key={event.id} passHref>
            <div>
              <Image
                width={200}
                height={200}
                src={event.image}
                alt={event.title}
              />
            </div>

            <h2 className="text-xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        );
      })}
    </>
  );
};

export default HomePage;

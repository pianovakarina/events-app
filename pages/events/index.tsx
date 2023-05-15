import { EventsCategory } from "@/data/dataType";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface IEventsPageProps {
  data: EventsCategory[];
}

const Events: NextPage<IEventsPageProps> = ({ data }) => {
  return (
    <div>
      <h1>Events page</h1>
      <div>
        {data.map((ev) => {
          return (
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <Image src={ev.image} alt={ev.title} width={300} height={200} />
              <h2 className="text-xl font-bold">{ev.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Events;

export const getStaticProps = async () => {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
};

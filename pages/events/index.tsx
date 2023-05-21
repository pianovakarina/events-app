import { EventsCategory } from "@/data/dataType";
import EventPage from "@/src/components/events/events-page";
import { NextPage } from "next";
interface IEventsPageProps {
  data: EventsCategory[];
}

const Events: NextPage<IEventsPageProps> = ({ data }) => {
  return <EventPage data={data} />;
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

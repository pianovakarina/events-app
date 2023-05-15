import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { EventsCategory } from "@/data/dataType";
import HomePage from "@/src/components/home/home-page";

interface IEventsProps {
  title: string;
  data: EventsCategory[];
}

const Home: NextPage<IEventsProps> = ({ title, data }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<
  IEventsProps
> = async () => {
  const { events_categories, allEvents } = await import("../data/data.json");
  console.log(events_categories);
  return {
    props: {
      title: "Hello everyone",
      data: events_categories,
    },
  };
};

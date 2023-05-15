import { AllEvent, EventsCategory } from "@/data/dataType";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface ICategoryPageProps {
  city: EventsCategory;
  events: AllEvent[];
}

const CategoryPage: NextPage<ICategoryPageProps> = ({ city, events }) => {
  return (
    <div>
      <h1>Events in {city.id}</h1>
      {events.map((item) => {
        return (
          <Link href={`/events/${city.id}/${item.id}`} key={item.id}>
            <Image alt={item.city} width={300} height={300} src={item.image} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events_categories } = await import("../../../data/data.json");
  const paths = events_categories.map((cat) => {
    return {
      params: {
        category: cat.id.toString(),
      },
    };
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  //context -  информация о стр которую посетил пользователь
  const category = context.params?.category;
  // category - информация из url о городе
  const { events_categories, allEvents } = await import(
    "../../../data/data.json"
  );
  // массив из городов
  const city = events_categories.find((item) => {
    return item.id === category;
  });
  //перебрали массив из городов и сравнили на какой странице находимся
  const cityEvents = allEvents.filter((item) => {
    return item.city.toLowerCase() === category;
  });
  return {
    props: {
      city: city,
      events: cityEvents,
    },
    //передали в пропс город
  };
};

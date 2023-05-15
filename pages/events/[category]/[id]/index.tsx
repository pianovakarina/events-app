import { AllEvent } from "@/data/dataType";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

interface IEventPageProps {
  activity: AllEvent | null;
}
const EventPage: NextPage<IEventPageProps> = ({ activity }) => {
  if (!activity) {
    return <div>Activity is not exist</div>;
  }
  return (
    <div>
      <Image
        src={activity.image}
        width={1000}
        height={500}
        alt={activity.city}
      />
      <h1>{activity.title}</h1>
      <p>{activity.description}</p>
    </div>
  );
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { allEvents } = await import("../../../../data/data.json");

  const activities = allEvents.map((act) => {
    return {
      params: {
        category: act.city.toLowerCase(),
        id: act.id,
      },
    };
  });
  //создаем массив обектов так как эта функция нужна чтобы обяснить нексту сколько страниц ему создать при билде: в парамсах я говрю какую страницу ему создать
  console.log(activities);
  return {
    paths: activities,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IEventPageProps> = async (
  context
) => {
  const activitySlug = context.params?.id;
  console.log(activitySlug);

  const { allEvents } = await import("../../../../data/data.json");

  const activity = allEvents.find((act) => {
    return act.id === activitySlug;
  });

  return {
    props: {
      activity: activity || null,
    },
    //передали в пропс город
  };
};

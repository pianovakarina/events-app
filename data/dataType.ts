export interface IEventsData {
  events_categories: EventsCategory[];
  allEvents: AllEvent[];
}

export interface EventsCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface AllEvent {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

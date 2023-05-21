import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === "POST") {
    const { eventId, email } = req.body;

    if (!eventId) {
      res.status(400).json({
        message: "EventId required",
      });
      return;
    }

    if (!email) {
      res.status(400).json({
        message: "Email is required",
      });
      return;
    }

    if (!email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address ",
      });
      return;
    }

    const { allEvents, events_categories } = await import(
      "../../data/data.json"
    );

    const event = allEvents.find((item) => {
      return item.id === eventId;
    });

    if (!event) {
      res.status(404).json({ message: `eventId ${eventId} not found` });
      return;
    }

    if (event?.emails_registered.includes(email)) {
      res
        .status(409)
        .json({ message: `This email: ${email} has already exist` });
      return;
    }

    event.emails_registered.push(email);

    const upDatedAllEvents = allEvents.map((item) => {
      if (item.id === event.id) {
        return event;
      }
      return item;
    });

    const newData = {
      events_categories,
      allEvents: upDatedAllEvents,
    };

    await fs.writeFile(
      path.join(process.cwd(), "data", "data.json"),
      JSON.stringify(newData)
    );

    res.status(200).json({
      message: `You have been registered sucsessfully with the email: ${email} for the event: ${eventId}`,
    });
  }
};

export default handler;

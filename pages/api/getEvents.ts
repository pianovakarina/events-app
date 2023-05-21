// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AllEvent } from "@/data/dataType";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AllEvent[]>
) {
  const { method, query } = req;
  if (method === "GET") {
    const { allEvents } = await import("../../data/data.json");

    let result = allEvents;

    if (query.city) {
      result = result.filter((item) => {
        return item.city === query.city;
      });
    }

    if (query.limit) {
      result = result.slice(0, Number(query.limit));
    }

    res.status(200).json(result);
  }
}

import { NextApiRequest, NextApiResponse } from "next";

export default function getVehicleByPersonId(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.json({ byId: req.query.id, message: "Get Vehicles of a person by Id is called" });
}

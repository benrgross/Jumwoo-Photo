import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const images = await prisma.image.findMany({});
      console.log(images);
      res.status(200).send(images);
    } catch (error) {
      res.status(400).send({ error: "server error" });
      console.log(error);
    }
  }
}

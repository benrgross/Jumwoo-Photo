const { PrismaClient } = require("@prisma/client");
import { images } from "./seeds/images";
const prisma = new PrismaClient();

async function main() {
  await prisma.image.createMany({
    data: images,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const images = [
  {
    url: "https://www.dropbox.com/s/scmnljzw3znnmlr/JUMWOO_realestate1.jpg?raw=1",
    alt: "terrace with a view Los Angeles",
  },

  {
    url: "https://www.dropbox.com/s/8oly5dcbkhtgse5/JUMWOO_realestate2.jpg?raw=1",
    alt: "Residential Lobby",
  },

  {
    url: "https://www.dropbox.com/s/m70fv735xxhmhgb/JUMWOO_realestate3.jpg?raw=1",
    alt: "Residential Kitchen",
  },

  {
    url: "https://www.dropbox.com/s/hwmuptznazemfdo/JUMWOO_realestate4.jpg?raw=1",
    alt: "Apartment with skyline view",
  },

  {
    url: "https://www.dropbox.com/s/qh2cf6jetdeojfe/JUMWOO_realestate5.jpg?raw=1",
    alt: "Cookbook Store Facade",
  },

  {
    url: "https://www.dropbox.com/s/xphu0ek3ny5p2v7/JUMWOO_realestate6.jpg?raw=1",
    alt: "Cookbook Store Interior",
  },

  {
    url: "https://www.dropbox.com/s/5w00p9ca2gsgmjx/JUMWOO_realestate7.jpg?raw=1",
    alt: "Cookbook Store Fruit Stand",
  },

  {
    url: "https://www.dropbox.com/s/02xxiuuerztb89w/JUMWOO_realestate9.jpg?raw=1",
    alt: "Residential Living Room",
  },

  {
    url: "https://www.dropbox.com/s/xdtuzx1l5k7w339/JUMWOO_realestate10.jpg?raw=1",
    alt: "Sunny Dining Room And Patio",
  },

  {
    url: "https://www.dropbox.com/s/banemxj8k5s2elx/JUMWOO_realestate11.jpg?raw=1",
    alt: "Residential Bedroom",
  },

  {
    url: "https://www.dropbox.com/s/9y0toy3e2qofxq7/JUMWOO_realestate15.jpg?raw=1",
    alt: "Kitchen Leading Into Bedroom",
  },

  {
    url: "https://www.dropbox.com/s/8zaxqp7ai4kzhhh/JUMWOO_realestate19.jpg?raw=1",
    alt: "Moon House Resteraunt",
  },

  {
    url: "https://www.dropbox.com/s/nj97inc5l0qsohf/JUMWOO_realestate24.jpg?raw=1",
    alt: "Facade Of Commercial Office Building",
  },

  {
    url: "https://www.dropbox.com/s/41pixtbfkuyo94b/JUMWOO_realestate26.jpg?raw=1",
    alt: "Arial image of Office Building",
  },

  {
    url: "https://www.dropbox.com/s/ddh281aoheo6tdn/JUMWOO_realestate27.jpg?raw=1",
    alt: "image of Office Building Facade",
  },

  {
    url: "https://www.dropbox.com/s/6hzj7r6db39zs28/JUMWOO_realestate30.jpg?raw=1",
    alt: "image of Commercial Building",
  },

  {
    url: "https://www.dropbox.com/s/u5fyrfimca7lye0/JUMWOO_realestate40.jpg?raw=1",
    alt: "San Diego Home",
  },

  {
    url: "https://www.dropbox.com/s/k4uk62bo9ujc4ru/JUMWOO_realestate41.jpg?raw=1",
    alt: "San Diego Home Ariel View",
  },

  {
    url: "https://www.dropbox.com/s/feo9an3ec28n89t/JUMWOO_realestate42.jpg?raw=1",
    alt: "San Diego Home Garden View",
  },

  {
    url: "https://www.dropbox.com/s/g0mduflb1yiuy9y/JUMWOO_realestate43.jpg?raw=1",
    alt: "Kitchen and Dining Room of Residential Home",
  },

  {
    url: "https://www.dropbox.com/s/steodu2hygczca5/JUMWOO_realestate44.jpg?raw=1",
    alt: "Sunlit Guest Room",
  },

  {
    url: "https://www.dropbox.com/s/cgrrey0k72vttxj/JUMWOO_realestate45.jpg?raw=1",
    alt: "Residential Front Patio",
  },

  {
    url: "https://www.dropbox.com/s/9x4k1lk5atuxyd9/JUMWOO_realestate46.jpg?raw=1",
    alt: "Residential Home With Swimming Pool",
  },

  {
    url: "https://www.dropbox.com/s/s165vy6xmo4hx9t/JUMWOO_realestate47.jpg?raw=1",
    alt: "Residential Home Arial View",
  },

  {
    url: "https://www.dropbox.com/s/hylmdkmoqixhuee/JUMWOO_realestate48.jpg?raw=1",
    alt: "Sunlit Residential Living Room",
  },

  {
    url: "https://www.dropbox.com/s/8cieiiigo7wdmc0/JUMWOO_realestate49.jpg?raw=1",
    alt: "Sunlit Residential Living Room",
  },

  {
    url: "https://www.dropbox.com/s/073pgw0mx35too0/JUMWOO_realestate50.jpg?raw=1",
    alt: "Arial View of Residential Home Roof",
  },

  {
    url: "https://www.dropbox.com/s/nxrnuk68cd6qoxq/JUMWOO_realestate51.jpg?raw=1",
    alt: "Living Room With Mountain View",
  },

  {
    url: "https://www.dropbox.com/s/0is5do5qfvdcxuc/JUMWOO_realestate52.jpg?raw=1",
    alt: "residential office",
  },

  {
    url: "https://www.dropbox.com/s/0mkh6mp9tw4um2l/JUMWOO_realestate53.jpg?raw=1",
    alt: "Kitchen",
  },

  {
    url: "https://www.dropbox.com/s/y2y1j8syt39xuka/JUMWOO_realestate54.jpg?raw=1",
    alt: "Residential Home With Lawn",
  },

  {
    url: "https://www.dropbox.com/s/cm9jr6653d9o5kh/JUMWOO_realestate57.jpg?raw=1",
    alt: "Residential Home With Lawn and Flag",
  },

  {
    url: "https://www.dropbox.com/s/azy0fanppy5dmo4/JUMWOO_realestate58.jpg?raw=1",
    alt: "Bathroom",
  },

  {
    url: "https://www.dropbox.com/s/pivoduebhwg5rij/JUMWOO_realestate59.jpg?raw=1",
    alt: "Bedroom",
  },

  {
    url: "https://www.dropbox.com/s/nenvb054lqit8q6/JUMWOO_realestate60.jpg?raw=1",
    alt: "Kitchen",
  },

  {
    url: "https://www.dropbox.com/s/vxnd8b2bef9svzv/JUMWOO_realestate61.jpg?raw=1",
    alt: "Bathroom",
  },

  {
    url: "https://www.dropbox.com/s/pm3i0rq3ae4gu3k/JUMWOO_realestate62.jpg?raw=1",
    alt: "Empty Apartment With Skyline View",
  },

  {
    url: "https://www.dropbox.com/s/x7vtwcayyibc5s8/JUMWOO_realestate63.jpg?raw=1",
    alt: "Kitchen",
  },

  {
    url: "https://www.dropbox.com/s/m8xjgujs9f1lham/JUMWOO_realestate64.jpg?raw=1",
    alt: "Empty Apartment With Skyline View",
  },

  {
    url: "https://www.dropbox.com/s/818rarbiaqj0enf/JUMWOO_realestate65.jpg?raw=1",
    alt: "Bedroom With Skyline View",
  },

  {
    url: "https://www.dropbox.com/s/ocfrkuotdlbhl09/JUMWOO_realestate66.jpg?raw=1",
    alt: "Skyline View of Apartment Building With Pool",
  },

  {
    url: "https://www.dropbox.com/s/yv26e9l6m7hcgaa/JUMWOO_realestate67.jpg?raw=1",
    alt: "Skyline View of Apartment Building",
  },

  {
    url: "https://www.dropbox.com/s/kywnganoqjhhe14/JUMWOO_realestate75.jpg?raw=1",
    alt: "freeway lights through hole in gate",
  },

  {
    url: "https://www.dropbox.com/s/sdjj5n0nubzkwmv/JUMWOO_realestate77.jpg?raw=1",
    alt: "view of skyscrapers from ground",
  },

  {
    url: "https://www.dropbox.com/s/hvhue9rxzg13who/JUMWOO_realestate76.jpg?raw=1",
    alt: "view of art gallery breezeway",
  },
  {
    url: "https://www.dropbox.com/s/fg635nyjqgh68gn/JUMWOO_realestate22.jpg?raw=1",
    alt: "image of Commercial Building Roof",
  },
  {
    url: "https://www.dropbox.com/s/eocx2053edj57b0/JUMWOO_realestate37.jpg?raw=1",
    alt: "image of Office Building Roof",
  },
  {
    url: "https://www.dropbox.com/s/6wnjkfswgtxlbsw/JUMWOO_realestate17.jpg?raw=1",
    alt: "Arial Photograph of Variety Building",
  },
  {
    url: "https://www.dropbox.com/s/ylv4t7vm55wk7tn/JUMWOO_realestate13.jpg?raw=1",
    alt: "Venice Beach Resteraunt",
  },
];

async function main() {
  await prisma.image.deleteMany();
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

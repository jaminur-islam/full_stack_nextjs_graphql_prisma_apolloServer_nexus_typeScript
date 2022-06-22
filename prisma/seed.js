const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "jaminurislam250sdfd01@gmail.com",
      admin: true,
    },
  });

  [
    {
      category: "Open Source",
      description: "Fullstack React framework",
      imagesUrl: "https://nextjs.org/static/twitter-cards/home.jpg",
      title: "Next.js",
      url: "https://nextjs.org",
    },
    {
      category: "Open Source",
      description: "Next Generation ORM for TypeScript and JavaScript",
      imagesUrl: "https://www.prisma.io/images/og-image.png",

      title: "Prisma",
      url: "https://prisma.io",
    },
    {
      category: "Open Source",
      description: "Utility-fist css framework",
      imagesUrl:
        "https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg",
      title: "TailwindCSS",
      url: "https://tailwindcss.com",
    },
    {
      category: "Open Source",
      description: "GraphQL implementation ",
      imagesUrl: "https://www.apollographql.com/apollo-home.jpg",
      title: "Apollo GraphQL",
      url: "https://apollographql.com",
    },
  ].map(async (data) => {
    await prisma.link.create({
      data,
    });
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

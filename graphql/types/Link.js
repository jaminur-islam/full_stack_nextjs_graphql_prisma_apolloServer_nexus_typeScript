import { extendType, nonNull, objectType, stringArg, arg } from "nexus";
import { User } from "./User";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("url");
    t.string("description");
    t.string("category");
    t.string("imagesUrl");
    t.string("category");
    t.string("userId");
    t.list.field("users", {
      type: "User",
      async resolve(_parent, _args, { db }) {
        return await db.link
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .User();
      },
    });
  },
});

export const linksQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("links", {
      type: "Link",
      resolve(_parent, _args, { db }) {
        return db.link.findMany();
      },
    });
  },
});

export const linksMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("links", {
      type: "Link",
      args: {
        title: nonNull(stringArg()),
        description: nonNull(stringArg()),
        userId: nonNull(stringArg()),
        url: nonNull(stringArg()),
        imagesUrl: nonNull(stringArg()),
        category: nonNull(stringArg()),
      },
      resolve(_parent, _args, { db }) {
        const link = {
          title: _args.title,
          description: _args.description,
          userId: _args.userId,
          url: _args.url,
          imagesUrl: _args.imagesUrl,
          category: _args.category,
        };
        return db.link.create({ data: link });
      },
    });
  },
});

import { extendType, objectType } from "nexus";
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

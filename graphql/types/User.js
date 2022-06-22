import { objectType, extendType, nonNull, stringArg, booleanArg } from "nexus";
import { Link } from "./Link";
export const User = objectType({
  name: "User" /* User [eta holo (_parent) r er children holo Link [_parent.id mane hole User.id r where deya hoyeche link er moddhe mane bolteche ze link er moddhe zodi user id thake oi link ke return koro ]] */,
  definition(t) {
    t.string("id");
    t.string("email");
    t.boolean("admin");
    t.list.field("link", {
      type: Link,
      async resolve(_parent, _args, { db }) {
        return db.user
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .Link();
      },
    });
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("user", {
      type: "User",
      resolve(_parent, _args, { db }) {
        return db.user.findMany();
      },
    });
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("user", {
      type: "User",
      args: {
        email: nonNull(stringArg()),
        admin: nonNull(booleanArg()),
      },
      resolve(_parent, _args, { db }) {
        console.log(_args);
        const user = {
          email: _args.email,
          admin: _args.admin,
        };

        return db.user.create({ data: user });
      },
    });
  },
});

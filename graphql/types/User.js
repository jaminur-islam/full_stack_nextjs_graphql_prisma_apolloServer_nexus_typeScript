import { objectType, extendType, nonNull, stringArg, booleanArg } from "nexus";
import { Link } from "./Link";

/* User [eta holo (_parent) r er children holo Link [_parent.id mane hole User.id r where deya hoyeche link er moddhe mane bolteche ze link er moddhe zodi user id thake oi link ke return koro ]] */

export const User = objectType({
  name: "User",
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
    t.list.field("users", {
      type: "User",
      resolve(_parent, _args, { db }) {
        return db.user.findMany();
      },
    });
  },
});

export const findOneUser = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("user", {
      type: "User",
      args: {
        id: nonNull(stringArg()),
      },
      resolve(_parent, _args, { db }) {
        const findUser = db.user.findUnique({ where: { id: _args.id } });
        return findUser;
      },
    });
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: "User",
      args: {
        email: nonNull(stringArg()),
        admin: nonNull(booleanArg()),
      },
      resolve(_parent, _args, { db }) {
        let alreadyUser = false;
        const findUser = db.user.findMany({ where: { email: _args.email } });
        findUser.then((res) => {
          if (res.length > 0) {
            alreadyUser = true;
          }
        });

        const user = {
          email: _args.email,
          admin: _args.admin,
        };

        if (alreadyUser) {
          return db.user.findMany({ where: { email: _args.email } });
        } else {
          return db.user.create({ data: user });
        }
      },
    });
  },
});

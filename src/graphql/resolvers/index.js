import dbConnect from "../../lib/database/db";
import { User } from "../../lib/models/user.model";

const resolvers = {
  Query: {
    users: async () => {
      try {
        await dbConnect();
        const userData = await User.find();

        return userData.map((u) => {
          return {
            id: u.id,
            user_name: u.user_name,
            email: u.email,
            phone: u.phone,
            linkedin_url: u.linkedin_url,
            company: u.company,
          };
        });
      } catch (error) {
        throw new Error("Something went wrong");
      }
    },
    searchUsers: async (_, { filter }) => {
      try {
        await dbConnect();
        if (!filter) {
          const userData = await User.find();

          return userData.map((u) => {
            return {
              id: u.id,
              user_name: u.user_name,
              email: u.email,
              phone: u.phone,
              linkedin_url: u.linkedin_url,
              company: u.company,
            };
          });
        }
        const filterUsers = await User.find({ $text: { $search: filter } });
        return filterUsers;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

export default resolvers;

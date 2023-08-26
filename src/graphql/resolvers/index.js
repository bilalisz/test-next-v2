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
    // searchUser: async (_, { value }) => {
    //   try {
    //     return { user_name: " bilal" };
    //     // return data.users.map((u) => {
    //     //   return {
    //     //     id: u.id,
    //     //     user_name: u.user_name,
    //     //     email: u.email,
    //     //     phone: u.phone,
    //     //     linkedin_url: u.linkedin_url,
    //     //     company: u.company,
    //     //   };
    //     // });
    //   } catch (error) {
    //     throw new Error("Something went wrong");
    //   }
    // },
  },
};

export default resolvers;

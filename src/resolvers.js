import { users } from "./db";
import { notifications } from "./db";
import { servicesUsedByUser } from "./db"
import { bills } from "./db"

const resolvers = {
    Query: {
        user: (parent, { id }, context, info) => {
            return users.find(user => user.id == id);
        },
        users: (parent, args, context, info) => {
            return users;
        },
        notifications: (parent, { first, start }, context, info) => {
            return notifications.slice(start, start + first);
        },
        servicesUsedByUser: (parent, { first, start }, context, info) => {
            //TODO: insert awards in the first index
            return servicesUsedByUser.slice(start, first + start);
        },
        bills: (parent, { filter }, context, info) => {
            if (!filter.dueBetween) {
                return bills.filter(bill => bill.status == filter.status);
            }
            return bills.filter(bill => bill.status == filter.status
                && new Date(filter.dueBetween.start) < new Date(bill.dueDate)
                && new Date(bill.dueDate) < new Date(filter.dueBetween.end));
        }
    },

    Mutation: {
        createUser: (parent, { id, name, email, age }, context, info) => {
            const newUser = { id, name, email, age };

            users.push(newUser);

            return newUser;
        },
        updateUser: (parent, { id, name, email, age }, context, info) => {
            let newUser = users.find(user => user.id == id);

            if (name != null) {
                newUser.name = name;
            }
            if (email != null) {
                newUser.email = email;
            }
            newUser.age = age;

            return newUser;
        },
        deleteUser: (parent, { id }, context, info) => {
            const userIndex = users.findIndex(user => user.id == id);

            if (userIndex === -1) throw new Error("User not found.");

            const deletedUsers = users.splice(userIndex, 1);

            return deletedUsers[0];
        }
    }
};

export default resolvers;
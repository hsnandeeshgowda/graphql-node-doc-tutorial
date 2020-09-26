const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const resolvers = {
    Query:{
        info:()=>`This is the API of a Hackernews Clone`,
        feed: async (parent, args, context) => {
            return context.prisma.link.findMany();
        },
    },
    Link : {
        id : (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    },
    Mutation:{
        post : async(parent, args, context, info) => {
        
            const newLink = context.prisma.link.create({
                data:{
                    description:args.description,
                    url:args.url
                }
            })

            return newLink;
        },
    }
}

const server = new GraphQLServer(
        { typeDefs:'./src/schema.graphql', 
          resolvers,
          context:{
              prisma,
          } 
        });

server.start(() => console.log(`Server is running on http://localhost:4000`));
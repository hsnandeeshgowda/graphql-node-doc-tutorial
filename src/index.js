const { GraphQLServer } = require('graphql-yoga');


let links = [
    {
        id:1,
        description:"testdesc",
        url:"test.com"
    },
]

let idCount = links.length

const resolvers = {
    Query:{
        info:()=>`This is the API of a Hackernews Clone`,
        feed: () => links,
    },
    Link : {
        id : (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    },
    Mutation:{
        post : (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
              }
              links.push(link)
              return link
        },
    }
}

const server = new GraphQLServer({ typeDefs:'./src/schema.graphql', resolvers });

server.start(() => console.log(`Server is running on http://localhost:4000`));
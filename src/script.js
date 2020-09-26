const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient;

const main = async() =>{

    // const newLink = await prisma.link.create({
    //     data:{
    //         description:"nandeesh godwa",
    //         url:"https://hsnandeeshgowda.github.io/"
    //     }
    // })

    const allLinks = await prisma.link.findMany();
    console.log(allLinks);
}

main().catch(
        e => {throw e 
    }).finally(
        async() =>await prisma.$disconnect()
    )
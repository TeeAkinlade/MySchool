const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Computer Science" },
                { name: "Music" },
                { name: "Filming" },
                { name: "Fitness" },
                { name: "Accounting" },
                { name: "Engineering" },
                { name: "Science" },
                { name: "Photography" },
            ]
        });
        console.log("Success in Categoring")
    } catch (error) {
        console.log("Error seeeding the database categories", error)
    } finally {
        await database.$disconnect();
    }
}

main();
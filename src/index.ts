import { Elysia } from "elysia";
import { html } from "@elysiajs/html"

const users = [ //skapa array med personer
    {
        type: "chauffeur",
        name: "John Johnsson",
        experienceyears: 22,
        clients: ["John Doe", "Jim Jom"],
        works: ["Friday", "Saturday"]
    },
    {
        type: "chauffeur2",
        name: "Senka Heimdall",
        experienceyears: 36,
        clients: ["Name Namesson", "Lauren Namesson"],
        works: ["Monday", "Tuesday", "Sunday"]
    },
    {
        type: "chauffeur3",
        name: "Isidora Tabby",
        experienceyears: 31,
        clients: ["Nacho Gonzales", "Svamp Bob"],
        works: ["Tuesday", "Saturday"]
    },
    {
        type: "chauffeur4",
        name: "Olaf Svetlana",
        experienceyears: 4,
        clients: ["Carl XVI Gustav", "Jim Jom"],
        works: ["Wednesday", "Thursday", "Saturday"]
    },
    {
        type: "chauffeur5",
        name: "Pippin Daniele",
        experienceyears: 0,
        clients: ["Patrick Stjärna", "Joseph Stjärna"],
        works: ["Tuesday", "Thursday"]
    },
]

const server = new Elysia();

server.use(html());

//skriv ut alla "användare" på localhost8080/users med html å så
/*server.get("/users", () => `
    <ul>
        ${users.map(user => `
            <li>
                <strong>Type:</strong> ${user.type}, 
                <strong>Name:</strong> ${user.name},
                <strong>Experience (in years):</strong> ${user.experienceyears}, 
                <strong>Polare:</strong>${user.clients},
            </li>`).join('')}
    </ul>
`);*/

server.get("/drivers", () => users);

server.get("/drivers/:user", (context) => {
    let foundUser = users.find((user) => user.type == context.params.user)
    return foundUser || "User not found";
})

server.listen(8080);

console.log("Server currently running on http://localhost:8080/ ..."); //det som skrivs i terminalen


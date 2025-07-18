class Server {
    constructor(name, description, discordLink, revoltLink) {
        this.name = name;
        this.description = description;
        this.discordLink = discordLink;
        if (discordLink.length < 20) {
            console.log(`(${name} constructor) discord link length: ${discordLink.length} < 20. setting discord link to "1".`);
            this.discordLink = "1";
        }
        this.revoltLink = revoltLink;
        if (revoltLink.length < 16) {
            console.log(`(${name} constructor) revolt link length: ${revoltLink.length} < 16. setting revolt link to "1".`);
            this.revoltLink = "1";
        }

    }
}

// expandable server list (like List<> from c#/Unity)
const serverList = [];


function GetByID(text) {
    return document.getElementById(text);
}



//helper function to add a card to html
function addServerCardToHTML(server) {
    if (server instanceof Server) {
        const holder = GetByID("serverCardHolder");

        const card = document.createElement("div");

        let discordHTML = server.discordLink === "1" ? "" : `
        <a href="${server.discordLink}" target="_blank" rel="noopener">
                    <img src="https://media.discordapp.net/attachments/1202681380484415540/1395585113005490266/old_discord_logo.png?ex=687afb6b&is=6879a9eb&hm=e6129124fc0ec22aa7533250d0e25ab29648e64c456fa7f8a5530fd996af1e85&=&format=webp&quality=lossless&width=289&height=330" alt="Discord Logo">
                </a>
        `;
        let revoltHTML = server.revoltLink === "1" ? "" : `
        <a href="${server.revoltLink}" target="_blank" rel="noopener">
                    <img src="https://media.discordapp.net/attachments/1202681380484415540/1395585113269600508/revolt_logo.jpg?ex=687afb6b&is=6879a9eb&hm=9f51ead38524e75d1d347fa77b727341e78b3a57ce4d637aa13f51770a1d06a1&=&format=webp&width=152&height=152" alt="Revolt Logo">
                </a>
        `;



        card.className = "serverCard";
        card.innerHTML = `
            <h2>${server.name}</h2>
            <p>${server.description}</p>
            <div class="serverLinkButtons">
                ${discordHTML}
                ${revoltHTML}
            </div>
        `;
        holder.appendChild(card);
    } else {
        console.error("card wasnt an instance of Server()");
    }
}

serverList.push(new Server(
    "compServer",
    "Complete server (has both links)",
    "https://discord.gg/9YrMJmcH",
    "https://rvlt.gg/8tAEPB5K"
));
serverList.push(new Server(
    "noDiscord",
    "incomplete discord link (discord button shouldn't appear)",
    "https://discord",
    "https://rvlt.gg/8tAEPB5K"
));
serverList.push(new Server(
    "noRevolt",
    "incomplete Revolt link",
    "https://discord.gg/9YrMJmcH",
    "https://rvlt"
));
serverList.push(new Server(
    "nothing",
    "neither link is complete",
    "https://disc",
    "https://rv"
));

for (const s of serverList) {
    addServerCardToHTML(s);
}
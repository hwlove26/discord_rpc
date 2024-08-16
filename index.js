const discordRPC = require("discord-rpc")
const fs = require("fs");
const rpc = new discordRPC.Client({transport: "ipc"})
const clinetId = fs.readFileSync("id.txt", "utf-8").split("\n")[0];

discordRPC.register(clinetId)

function set() {
    rpc.setActivity({
        state: "안녕하세요 이떠이떠입니다",
        details: "위쪽",
        startTimestamp: Date.now(),
        largeImageKey: "https://media.tenor.com/JyHMlpMxRKwAAAAM/arisbm.gif",
        largeImageText: "짜잔",
        smallImageKey: "https://media.tenor.com/BHaRmO7b-bMAAAAj/hsr-honkai-star-rail.gif",
        smallImageText: "뱅뱅",
        partySize: 1,
        partyMax: 4,
        buttons: [{
            label: "스타크래프트 립버전",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
            {
                label: "넣을거 없어서 깃헙",
                url: "https://github.com/hwlove26",
            }]
    })
}

rpc.on("ready", () => {
    set()
    setInterval(set, 99999 * 1000)
    console.log("ㅗㅗ")
})

rpc.login({clientId : clinetId})
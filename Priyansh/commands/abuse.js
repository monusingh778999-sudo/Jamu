const warnings = {};

module.exports.config = {
    name: "galiwarn",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Anurag Mishra",
    description: "Detect gali, warn then remove",
    commandCategory: "no prefix",
    usages: "auto detect",
    cooldowns: 0,
};

module.exports.handleEvent = async function ({ api, event }) {
    if (!event.body) return;
    const { threadID, senderID, body } = event;

    const abusiveWords = ["fuck","mc","bc","madarchod","behenchod","maa ki chut","chudi","lund","gaand","bhosdike","xod","chod","🖕"];
    const cleanMsg = body.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

    if (abusiveWords.some(word => cleanMsg.includes(word))) {
        if (!warnings[senderID]) warnings[senderID] = 0;
        warnings[senderID]++;

        if (warnings[senderID] === 1) {
            api.sendMessage(`⚠️ Warning [1/2]: Gali mat de warna group se nikal dunga!`, threadID);
        } 
        else if (warnings[senderID] >= 2) {
            api.sendMessage(`🚫 2nd time gali detect hui!\nUser ko group se nikal diya gaya.`, threadID, () => {
                api.removeUserFromGroup(senderID, threadID, (err) => {
                    if (err) api.sendMessage("❌ Error: Bot admin nahi hai.", threadID);
                });
            });
            warnings[senderID] = 0;
        }
    }
};

module.exports.run = async function () {};

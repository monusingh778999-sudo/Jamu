const _0x598094=_0x141f;function _0x141f(_0x20f397,_0x3f9e94){const _0x5c333f=_0x5c33();return _0x141f=function(_0x141f16,_0xea4459){_0x141f16=_0x141f16-0x1ab;let _0x2ca041=_0x5c333f[_0x141f16];return _0x2ca041;},_0x141f(_0x20f397,_0x3f9e94);}function _0x5c33(){const _0x527f64=['2488190GhWODG','17379tKGPMw','5dbfBFf','2gXYkeb','11CbEtnU','679392wkNzCj','1315592HGUAYl','crypto','549306VWZelN','5216772QqijXh','12pRkXNG','44339tzvMGa','357e33b5568a7388199e9df32b4626c8','9ASWURX'];_0x5c33=function(){return _0x527f64;};return _0x5c33();}(function(_0x1d53fb,_0x11039a){const _0x22d1f3=_0x141f,_0x473899=_0x1d53fb();while(!![]){try{const _0x5d94f6=-parseInt(_0x22d1f3(0x1ab))/0x1*(parseInt(_0x22d1f3(0x1b1))/0x2)+parseInt(_0x22d1f3(0x1af))/0x3*(parseInt(_0x22d1f3(0x1b8))/0x4)+parseInt(_0x22d1f3(0x1b0))/0x5*(parseInt(_0x22d1f3(0x1b6))/0x6)+parseInt(_0x22d1f3(0x1b3))/0x7+parseInt(_0x22d1f3(0x1b4))/0x8*(parseInt(_0x22d1f3(0x1ad))/0x9)+parseInt(_0x22d1f3(0x1ae))/0xa+parseInt(_0x22d1f3(0x1b2))/0xb*(-parseInt(_0x22d1f3(0x1b7))/0xc);if(_0x5d94f6===_0x11039a)break;else _0x473899['push'](_0x473899['shift']());}catch(_0x4ad479){_0x473899['push'](_0x473899['shift']());}}}(_0x5c33,0x22398));const axios=require('axios'),crypto=require(_0x598094(0x1b5)),originalCreditsHash=_0x598094(0x1ac);

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "SHANKAR SIR🙏",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function calculateMD5(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

const currentCreditsHash = calculateMD5(module.exports.config.credits);
if (currentCreditsHash !== originalCreditsHash) {
  console.error("Unauthorized credit modification detected!");
  throw new Error("The credits have been modified without authorization.");
}

const shayariList = [
"बिन तेरे मेरी हर खुशी अधूरी है, फिर सोच मेरे लिए तू कितनी जरूरी है", 
"कितना चाहते हैं तुमको ये कभी कह नहीं पाते, बस इतना जानते हैं, की तेरे बिना रह नहीं पाते",
"सीने से लगाकर तुमसे बस इतना ही कहना है, मुझे जिंदगी भर आपके ही साथ रहना है !",
"सीने से लगाकर तुमसे बस इतना ही कहना है, मुझे जिंदगी भर आपके ही साथ रहना है !",
"इस मोहब्बत के रिश्ते को हम शिद्दत से निभाएंगे
साथ अगर तुम दो तो हम दुख को भी हराएंगे",
"दुनिया को खुशी चाहिए, और मुझे हर खुशी में तुम",
"कुछ सोचता हूं तो तेरा ख्याल आ जाता है कुछ बोलता हूं तो तेरा नाम आ जाता है",
"कब तक छुपा के रखूं दिल की बात को तेरी हर अदा पर मुझे प्यार आ जाता है",
"कुछ लोग दिल में रहते हैं हमेशा, जिन्हें जुबां पर लाने की ज़रूरत नहीं होती",
"हमेशा उसी रास्ते पर चले हैं हम, जहां भीड़ नहीं होती, अपनी अलग पहचान होती है",
"ये मत समझना हम तुम्हारे काबिल नहीं, जो हमें पाना चाहता है, उसे हम हासिल नहीं",
"आग लगाने का हुनर हमें आता नहीं, पर अगर लोग जल जाएं हमारी सादगी से, इसमें हमारी खता नहीं",
"नाम नहीं चाहिए हमें किसी के सहारे, हमारी शोहरत खुद ब खुद आसमान को छूती है",
"तुझसे हर मुलाकात अधूरी लगती है, चाहता हूँ कि ये लम्हे कभी खत्म ना हों",
"बेवजह मुस्कुरा देता हूँ, और यूँ ही अपने आधे दुश्मनों को हरा देता हूँ",
];
const imgLinks = [
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
"https://i.ibb.co/DD84WBF9/813902034295613.jpg",
];

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `✰ 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰ 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰ 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `❁ ━━━━━ ❃ 𝐌.𝐑 𝐉𝐀𝐌𝐀𝐋 ❃ ━━━━━ ❁`;

    const threadList = await api.getThreadList(100,

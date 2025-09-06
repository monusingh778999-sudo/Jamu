const fs = global.nodemodule["fs-extra"];

module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Aman Khan", 
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event, args, Threads, Users }) {
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");

  const id = event.senderID;
  const name = await Users.getNameUser(event.senderID);

  
  var tl = [
    "KyAw Tu  ELvīīSh Bhaīīw Ke AaGe BoLeGa =]]😁🫵",
    "=((<3 😊; HyEw Maīīx SdKy JaWa Terīīw MaSo0m ShaKal Pa' MiNe BaBy  =]]😁🫵",
    "CaMerRaMaN JaLDīīw FoRCe  Karo 📸🍒↬🚧_  °»† ",
    "🍒🩷🍓-LaGDi LaHoRe Diiw aaw  <<[❤️]=🙈",
    "HaT GaNjīīw 😩🫵",
    "<(*Fb' kEw ToP GaNjīīw Haīīx Na Tu=))_+🙈🫵",
    "🥂🍬🫧╬ 0yEw KaLīīw Pa0w WaLīīw CuTiEw KyUw TaNg KaR Rhīīw h0 ╬🍫🌸",
    "⚠️</3__×TuM Wo E h0 Na j0 Fb Pa HaWaBaZīīw KaRTii h0 ×______________×//😹👍;3",
    "──Ξ⤹MaNa Tera NaMe KaLwīīw ChuRaīīL Rk DeYa <((-----(😩❤️",
    "──Ξ⤹Hnjīīw AxhAw ThEk Haīīx 0kiiEw 0kīīew Saīīw Haīīx SaMjaW GyAw ||•♥️•||•______🍭🎧",
    "ChaLa IcEw CrEaM KhaNa ChaLTa Haīīw ✨ ;))•°🥹🫵",
    "<<(🙄)>>0yEw GaNjīīw AwPka Mu'  Pa NoSe LaGīīw Haīīx 😒;-//===((😂🫵",
    "──Ξ⤹ChaLo BhaG KaR ShaDīīw KarTa Haīīx Na-(((------//×🩷🥹",
    "──Ξ⤹DIL Maīīx RhNa Ka' PaīīSa Do BaNDaRiiw ChuRaīīL ♡• || •_🖤🐧",
    "{ 🦋▒⃠❤️‍🩹MaNa Terīīw NaMe KaLīīw KuTTiw Rk DeYa 🙂❤️;3 ",
    "──Ξ⤹ Sorry MeKo AwPkEw AwaZ Nhīīw Aa Rhīīw Haīīx ZoR Sa BoLo 🙄💛-(((-🫵",
    "──Ξ⤹Maīīx TuM Sa' PaYaR Nhīīw KaRTa PlZw MuJhAw TaNg Na' Karo •||• 🥹👍⚠️",
    "||•♥️•||•Fb Ka' KaLa Keera Okat BaNa* ______🍭🎧",
    "ChaLo MuJHa I LoVe BoL Do Maīīx Aga Sa AwPk0 BhEn BoL KaR CoL BaN Ja0w Ga 🧸🔐*▬▭▬▭▬▭▬▭▬▭*❤️‍🩹🎀KaLīīw Mu WaLīīw ChuRaīīL Haīīx Tu Bajīīw ░⃝💌🧸}>🍀👀🎆",
    "──Ξ⤹MiNe GaNjīīw BiWii KaHaN Pa' Haīīx• || •👀🤍💍",
    "🎆🎀🥀-JaB DeKHo BoT BaBy BoT BaBu BoT JaNa BoT  LaGaYa HoTa Haīīx .•♡︎⎯⎯⃝🩷🌻Maīīx iTNa PayaRw KyUw Hu ♡︎⎯⎯⃝🎀❤️‍🩹",
    "──Ξ⤹i LuB Uh'2 BaBy -MiNe PkG KhTM HoNa WaLa Haīīx  0kiiEw By 🤭💛🫵",
    "──Ξ⤹Ye BaT DeLHiiw Tk JaYaGiiw 😒❤️",
    "──Ξ⤹Ye IuB Uh KyAw HoTa Haīīx 🙄💛🫴",
    "{ 🦋▒⃠❤️‍🩹TuM Wo h0 Na JiS k0 Maīīx Nhīīw JaNTa ×-(❤️)",
    "──Ξ⤹Sorry I HaVe a GiirlFriEnd 😒❤️",
    "──Ξ⤹- BeWaFa BeWaFa NiKaLiiw Re Tu I HaTe Uhw AunTiEw ♡• || •_😩💔",
    "──Ξ⤹ Mera GhRw Maīīx Koīīw Nhīīw Ha'iix Aja0w 😘🙈))>❤️",
    "──Ξ⤹DiL Na Yw' KaHa Haīīx Dil Sa' NaFraT h0 Gīīw Ha'iix TuM Sa ❤️😁-((()))__________<3_×LaLaLaLaLa 🎀❤️‍🩹",
    "Ch0r0w Naīīx Koīīw DeK LaGa PaGaL 🙈",
    "──Ξ⤹AwPNa BaBu k0 Dh0ka Do <{Daliing}> HuM k0 V; MoKa Do 😁💛",
    "BaBy Do You  LuB Me 🥹🫵🩷",
    "──Ξ⤹JiS Naiix MeKo AwaX De Haīīx Wo Fb kEw ToP KaLwīī BaXhīīw ♡• || •_❤️🙄",
    "Maīīx AwPNa BaBu Ka SaTh Ummaah Ummaah KaR RhAw Hu MeKo TaNg Na KaRo BaTaMeeZ 🥹👍",
    "Sorry Maīīx Nhīīw PaTo Gaw AwP Sa 😒❤️",
    "0 Helo Fb Ka HaWaBaZ Keera ❤️‍🩹🎀",
    "──Ξ⤹Bhaīīw DaR GyAw KyAw 😒✨ ;))•°💛",
    "──Ξ⤹TuM t0 DhOka BaZ Ho 😩",
    "──Ξ⤹ Mera Name AwPNa DiL Pa LiK Do Na BaBy 😘❤️",
    "──Ξ⤹SuNaīīw DaTa Haiix Meko BehRiiw Nhīīw Hu Ma'iix ||•♥️•||•______💛🫵",
    "──Ξ⤹BhaGo ThEw MoSt WaNtEd ThaRkīīw Aa GyAw 🥂🍬🫧╬٨ـﮩﮩ🍇ﮩـ╬🍫🌸",
    "──Ξ⤹AwPNiiw Pix SeNd KaRo Na 🥹🫵",
    "Mera DiMaG MaT KhaYa Kaaro 😈🖇🚩",
    "──Ξ⤹MaaF Kar Da 😒",
    "─⃝͎̽iCEw CrEaM La Kar DaDo BaBu 🥹💛",
    "──Ξ⤹Maīīx Nhīīw t0 KoN Be😒",
    "──Ξ⤹ChuP Kar SaTVii Fail 🙂",
    "──Ξ⤹Aow KuCh  KuCh Kwara 🤭🩷",
    "──Ξ⤹YwL TuM KiTNi OsM h0 BuT I HaTe Uhw 😒💛",
    "──Ξ⤹0yEw ThaRkīīw AuRaT=]]😁🫵",
    "AwPNa DiL Maīīx Ana Do Na Bhir ThaRkīīw LoG Haīīx Merīīw IzZaT LuT La Ga Merīīw ZiNdaGīīw KhRb Kar DaGa ⚠️🙂;3",
    "──Ξ⤹You JuSt LooKiNg LiKe A TaTiiw 😭<3",
    "──Ξ⤹Bhaīīw Mera Aga HaWaBaXīīw Na KaR MeKo DaR LaGTa Haīīx 🥺💔))>3",
    "──Ξ⤹Meko TaNg Na Karo Maīīx Susu Kar RhaW Hu 😒",
    "0kiiEw By 🙂",
    "──Ξ⤹ Maīīx KaTiiw Hu TuM Sa 🥺",
    "TuM SiNglEw Maro Ga 😒💛👍",
    "iBx AoW YaHaN Nhīīw BaTa SkTa Na🥹❤️‍🩹",
    "NaMe t0 SuNa h0Ga Mera Maīīx Fb Ka Kaalu DoN 😡⚠️😈"
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];

  if (event.body && (event.body.indexOf("Bot") === 0 || event.body.indexOf("bot") === 0)) {
    var msg = {
      body: `🔶${name}🔶,\n\n『 ${rand} 』\n\n🎀❤️‍🩹CrEdiTs: 🦋{𝗢𝗻𝗪𝗲𝗥-𝗝𝗮𝗠𝗮𝗟-𝗣𝗮𝗧𝗵𝗔𝗻}🦋 🖤 🌿😚🍒`
    };
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) { };

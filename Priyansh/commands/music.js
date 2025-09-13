const axios = require("axios");
const fs = require("fs");
const path = require("path");
const ytSearch = require("yt-search");
const ytdl = require("ytdl-core"); // New library for direct downloads

module.exports = {
  config: {
    name: "music",
    version: "1.3.1",
    author: "Ajeet",
    description: "Download YouTube song silently with reactions",
    category: "media",
    guide: { en: "{pn} [songName] [audio/video]" }
  },

  onStart: async function ({ api, event, args }) {
    let songName, type;

    // Get song name & type
    if (
      args.length > 1 &&
      (args[args.length - 1] === "audio" || args[args.length - 1] === "video")
    ) {
      type = args.pop();
      songName = args.join(" ");
    } else {
      songName = args.join(" ");
      type = "audio";
    }

    if (!songName) {
      return api.setMessageReaction("❌", event.messageID, () => {}, true);
    }

    // Initial Reaction
    api.setMessageReaction("⏳", event.messageID, () => {}, true);

    try {
      // Search YouTube
      const searchResults = await ytSearch(songName);
      if (!searchResults || !searchResults.videos.length) {
        return api.setMessageReaction("❌", event.messageID, () => {}, true);
      }

      const topResult = searchResults.videos[0];
      // Limit to 10 minutes to avoid long downloads
      if (topResult.seconds > 600) {
        return api.setMessageReaction("❌", event.messageID, () => {}, true);
      }

      const videoId = topResult.videoId;
      const downloadPath = path.join(__dirname, "cache", ${videoId}.${type === "audio" ? "mp3" : "mp4"});

      if (!fs.existsSync(path.dirname(downloadPath))) {
        fs.mkdirSync(path.dirname(downloadPath), { recursive: true });
      }

      api.setMessageReaction("⌛", event.messageID, () => {}, true);

      let stream;
      // Primary API: Direct download using ytdl-core
      try {
        console.log("Attempting primary download with ytdl-core...");
        if (type === "audio") {
          stream = ytdl(topResult.url, { filter: "audioonly", quality: "highestaudio" });
        } else {
          stream = ytdl(topResult.url, { filter: format => format.container === 'mp4' && format.hasVideo && format.hasAudio, quality: 'highest' });
        }
      } catch (err) {
        console.error("Primary download failed. Attempting fallback API...");
        // Fallback API: If ytdl-core fails, use an external API as a backup
        const fallbackApiUrl = https://aemt.me/youtube?url=${topResult.url};
        const downloadResponse = await axios.get(fallbackApiUrl);
        const downloadUrl = downloadResponse.data.url;
        const response = await axios({ url: downloadUrl, method: "GET", responseType: "stream" });
        stream = response.data;
      }
      
      const fileStream = fs.createWriteStream(downloadPath);
      stream.pipe(fileStream);

      await new Promise((resolve, reject) => {
        fileStream.on("finish", resolve);
        fileStream.on("error", reject);
      });

      // Success Reaction
      api.setMessageReaction("✅", event.messageID, () => {}, true);

      // Send File silently
      await api.sendMessage(
        { attachment: fs.createReadStream(downloadPath) },
        event.threadID,
        () => fs.unlinkSync(downloadPath),
        event.messageID
      );

    } catch (error) {
      console.error(Music command error: ${error.message});
      api.setMessageReaction("❌", event.messageID, () => {}, true);
    }
  }
};

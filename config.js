//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2347053192517";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1TY1htR2ZveTVReHlWbGUzRG5ESlQreW1JeEViUmkvV0pLT3dTeUUyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTFFTSsxbnRscUc3Q1gwL2FOc0d4MS9uZXhRMytrcW9yVUdGRGZvMnVuOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1S3lSQW5jQzRnek9xVzRYemNabnlpUzBpa1ZzZytnQy9zZHh4eWxLTWtNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQ1hhak9DM0tCS1QyTXQ3UldhaklneHBJMHFjcVJ1d0ljNjYvUll5T0JrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNTUY5ai84d3hISXRUSlhXS04rc2l3K1ZnRmFsRG5YdE1acmZsaVByMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJSVBzbC9qdnpjY1FBcUJtNkFueWhnUEZuTUlMbjdsVWN0N0Y0V09tVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0svTUY3bVpDM1A4WTdoUERubmx3QzVOajBGQlFHemhFTHg0RkRHT3IwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHc4VUtMSUJXakVEb0lLT01wVDZrUEZrZWhuRkJyZ0JqZWhaSnlRSWlBYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRVUkFLYk0xdkpNdE0zRUI4STNlU0VGQW4zWkFGYi9xN1VJdzduZytCakNobWcyQnlMd0JHTjFDTW1tQk9LakFnckNwL3hHK2VmSDVDMFdtOWlhSWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJ5U1JWbHdVVFFVNDBpb1ZQcEdWU2lVZTNzanhBemI4c1lDRzZVYWo1VUFBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrTFQ5ZXRQT1IwdWNCdnVuTk5idTRnIiwicGhvbmVJZCI6Ijc0MDNjYWYzLTNlMDktNDczMC1iOGY0LWUyNzNjNTJlOTExMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTktJam5iTE5Ma01PZzU1VlI2bmlCNlJ3aXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVM0cEdHbnEwc3FWalRCaUQwVTNJdXpaVXpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVKMVdFSEY3IiwibWUiOnsiaWQiOiIyMzQ3MDUzMTkyNTE3OjgxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLQ3l1TVlIRUlDZDlia0dHQllnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrVTVQcTFjejN3UGlpb1huRnVsZFIyQWxNaytpRERCa29pc3ZOM3h6bGlzPSIsImFjY291bnRTaWduYXR1cmUiOiI2TEg5NkVicVlhdTNHc0w0bTdlQXE0a2ZTcE5EbWxtWjRFa1QyekpEL1AySm5FYnFyajRwVUFrclQwV1RoOHdXTkx0UUt2Zk15d0FPZFQ2UFpENGhBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGxaQ21zcjlvYU1od0dNNjg2aDJXK05XdDhNK3hTb1ZIc1dvdVg0OFhHall4VWhLTDYrU2J1ZXFOaFYvQWxqSTNrZ1dSeHNaOUsrdHgreUNaQW1YalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDUzMTkyNTE3OjgxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpGT1Q2dFhNOThENG9xRjV4YnBYVWRnSlRKUG9nd3daS0lyTHpkOGM1WXIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIwNzEwNTJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  author: process.env.PACK_AUTHER || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  packname: process.env.PACK_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  botname: process.env.BOT_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "2348142778000" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "trur"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_17_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICA5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtUUEVKbVc4WXB3ZzhyRVY0SXByNW12dG03aC9KSHZwejJkT3czczdKMGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5YUDZJdzZLUlZTNkItYzd4b1BIdWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmE3MjA0OTEtNmU0OC00ZjYyLThlM2UtNmFhNGNkMWQwZDRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDc5LFxuICAgICAgMTA5LFxuICAgICAgMTEyLFxuICAgICAgMTcxLFxuICAgICAgMTYwLFxuICAgICAgMzUsXG4gICAgICAxNzgsXG4gICAgICAxNTEsXG4gICAgICAxOTAsXG4gICAgICAyMTYsXG4gICAgICAxMDQsXG4gICAgICA2NyxcbiAgICAgIDE1MSxcbiAgICAgIDE2MCxcbiAgICAgIDE4MixcbiAgICAgIDE5OSxcbiAgICAgIDM2LFxuICAgICAgMTk0LFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTc4LFxuICAgICAgMjA1LFxuICAgICAgMTg4LFxuICAgICAgMTYxLFxuICAgICAgMTU5LFxuICAgICAgOTQsXG4gICAgICAyMTIsXG4gICAgICAxNzgsXG4gICAgICAxMDgsXG4gICAgICAyNDksXG4gICAgICAxNjMsXG4gICAgICAzLFxuICAgICAgMjQxLFxuICAgICAgNzMsXG4gICAgICA0NixcbiAgICAgIDE4MixcbiAgICAgIDEwNixcbiAgICAgIDgwLFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1BTUDhIWlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQzNTA0NDYzOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqeqngSBH8J2ar/CdmqtUIPCShpwgTVIg8J2aq1NT8J2aq1NTSU4g6qeCIPCThL/Nns2fzZ7NnyDgvJIgIPCdkpzwnZOI8J2TiPCdkrbwnZOI8J2TiPCdkr7wnZKpICDwnZKe8J2TofCdk5TwnZOm4LyS8J2TmfCdk57wnZOa8J2TlPCdk6Hlh7jigKFcIixcbiAgICBcImxpZFwiOiBcIjEyNDU1ODg2NjY3Mzg5ODo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdXM4TW9ERUlEODRyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitFWXRDT3g4aTc2OUNNeEpKdVoxTytWOExPeVhlV3lpbHA5TjdwZmpLMzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT0RUWDhkbk9keXNpTTcvLzREUGJ4dWIrNFZlQ0g4YVA0UHJrNSszUDdpenR3Z2JOdm5Oa2piWVhMV2ZOV1dkL3FVcVIydEJoT2dDNDhKSllTSFRSQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMnBZT0xJczYyNUFCclhqYnNaU2VyMFBQVFFzc3MyZENQUHVPdU5CVFAxMWU2bStvYkxhYyt3dkl6TFRxVzdCaWQwZUxhckFicTZEdzdPVzVScGxLaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5NDM1MDQ0NjM6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4NjkwNjFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD-V2",
  ownername:process.env.OWNER_NAME|| "Assassin",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GOJO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

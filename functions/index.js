const functions = require("firebase-functions");
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true });
const nodemailer = require("nodemailer");

require("dotenv").config();

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.getVideos = functions
  .region("asia-east2") //region of cloud firestore
  .pubsub.schedule("0 * * * *") //run every day
  .timeZone("Asia/Kolkata")
  .onRun(async (context) => {
    const channelUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YT_API_KEY}&channelId=UCYAyEnZHbSDIenU18KsD3HQ&part=snippet,id&order=date&maxResults=20`;
    const videoURl = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.YT_API_KEY}&part=statistics&id=`;
    try {
      const res = await fetch(channelUrl);
      const json = await res.json();

      const videoId = json.items
        .filter((i) => i.id.kind !== "youtube#channel")
        .map((i) => i.id.videoId);
      const videoData = videoId.map(async (id) => {
        const r = await fetch(videoURl + id);
        const j = await r.json();
        return {
          likes: parseInt(j.items[0].statistics.likeCount),
          views: parseInt(j.items[0].statistics.viewCount),
        };
      });
      videoData.forEach(async (e, i) => {
        db.collection("videos")
          .doc(videoId[i])
          .set({
            stat: await e,
            title: json.items[i].snippet.title,
            thumbnail: json.items[i].snippet.thumbnails.high.url,
            id: videoId[i],
          });
      });
    } catch (error) {
      console.log(error);
    }
  });

exports.contactForm = functions
  .region("asia-east2")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      const time = new Date();
      const data = req.body;
      db.collection("contact").add({ ...data, time: time.toString() });

      // let transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      //   port: 465,
      //   secure: true,
      //   auth: {
      //     user: "abdulrreshamwala@gmail.com",
      //     pass: "zQJ5IO4&Q%fu",
      //   },
      // });

      // // send mail with defined transport object
      // let info = await transporter.sendMail({
      //   from: '"Nodemailer" <abdulrreshamwala@gmail.com>', // sender address
      //   to: "ar1242112@gmail.com", // list of receivers
      //   subject: `New Query`, // Subject line
      //   text: data.msg,
      //   html: `<b>New Query</b>
      //   <h3>From  :${data.email}</h3>
      //   <h3>Title : ${data.title}</h3>
      //   <p>${data.msg}</p>
      //   `, // plain text body
      // });

      // console.log("Message sent: %s", info.messageId);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.send("success");
    });
  });

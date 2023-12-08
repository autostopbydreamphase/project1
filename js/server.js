// const { Telegraf } = require("telegraf");
// const express = require("express");
// const bodyParser = require("body-parser");

// const bot = new Telegraf("6918915850:AAHiwqHMSdpBtg40Hnwni92WGftdkW-q3-k");
// const app = express();

// app.use(bodyParser.json());

// app.post("http://localhost:5500/sendToTelegram", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   const { message } = req.body;

//   // Отправка сообщения в Telegram
//   bot.telegram
//     .sendMessage("1926743292", message)
//     .then(() => {
//       res.status(200).send("Сообщение успешно отправлено в Telegram!");
//     })
//     .catch((error) => {
//       console.error("Ошибка при отправке сообщения в Telegram:", error);
//       res
//         .status(500)
//         .send("Произошла ошибка при отправке сообщения в Telegram.");
//     });
// });

// bot.launch();
// const port = process.env.PORT || 5500;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
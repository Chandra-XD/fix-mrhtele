// created by Lamzz
// saluran https://whatsapp.com/channel/0029VbBm2Z0JUM2bTyBVHi37
// teks nya ganti aja oy biar work sama lebih di sempurnakan lagi bot nya,gw kg bisa telegram jir😹

const TelegramBot = require("node-telegram-bot-api")
const nodemailer = require("nodemailer")

// ===== CONFIG =====
const TOKEN = "ISI_TOKEN"
const EMAIL = "EMAIL_MU"
const PASSWORD = "APP_PASSWORD"
const TUJUAN = "support@support.whatsapp.com"

// ===== INIT =====
const bot = new TelegramBot(TOKEN, { polling: true })

// ===== EMAIL =====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
})

// ===== START =====
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Bot aktif ✅\nKetik: /fixred 628xxx")
})

// ===== FIXRED ONLY =====
bot.onText(/\/fixred (.+)/, async (msg, match) => {
  const chatId = msg.chat.id
  const nomor = match[1]

  if (!nomor) {
    return bot.sendMessage(chatId, "Masukkan nomor!\nContoh: /fixred 628xxx")
  }

  try {
    const isi = `
السلام عليكم ورحمة الله وبركاته

اسمي Violina وأواجه مشكلة في تسجيل الدخول.

تظهر رسالة:
"Login not available now"

رقمي:
${nomor}

يرجى المساعدة.

شكراً لكم.
`

    await transporter.sendMail({
      from: EMAIL,
      to: TUJUAN,
      subject: `Login Issue - ${nomor}`,
      text: isi
    })

    bot.sendMessage(
      chatId,
      `✅ Permintaan berhasil dikirim!

Nomor: ${nomor}

⏳ Silakan tunggu beberapa saat.`
    )

  } catch (err) {
    console.log(err)
    bot.sendMessage(chatId, "❌ Gagal mengirim email")
  }
})

console.log("BOT SIMPLE RUNNING 🚀")
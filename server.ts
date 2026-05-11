import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("messages.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    companyName TEXT,
    workEmail TEXT,
    phoneNumber TEXT,
    industry TEXT,
    lookingFor TEXT,
    message TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

function printReady(port: number, isDev: boolean) {
  console.log("");
  console.log("  Qvanto AI — website");
  console.log(`  http://localhost:${port}`);
  if (isDev) {
    console.log("  Dev: keep this terminal open. “Connection refused” = server not running or wrong port.");
  }
  console.log("");
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 5173;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", (req, res) => {
    const { fullName, companyName, workEmail, phoneNumber, industry, lookingFor, message } = req.body;

    try {
      const stmt = db.prepare(`
        INSERT INTO messages (fullName, companyName, workEmail, phoneNumber, industry, lookingFor, message)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(fullName, companyName, workEmail, phoneNumber, industry, lookingFor, message);
      res.json({ success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  app.get("/api/messages", (req, res) => {
    try {
      const messages = db.prepare("SELECT * FROM messages ORDER BY createdAt DESC").all();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    // One HTTP server so Vite HMR reuses the same port (avoids stray WebSocket on 24678).
    const server = http.createServer(app);
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: { server } },
      appType: "spa",
    });
    app.use(vite.middlewares);

    server.on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        console.error(`\nPort ${PORT} is already in use. Try:\n  PORT=5174 npm run dev\n`);
      } else {
        console.error(err);
      }
      process.exit(1);
    });

    server.listen(PORT, "0.0.0.0", () => {
      printReady(PORT, true);
    });
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });

    const server = app.listen(PORT, "0.0.0.0", () => {
      printReady(PORT, false);
    });
    server.on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        console.error(`\nPort ${PORT} is already in use.\n`);
      } else {
        console.error(err);
      }
      process.exit(1);
    });
  }
}

startServer().catch((e) => {
  console.error(e);
  process.exit(1);
});

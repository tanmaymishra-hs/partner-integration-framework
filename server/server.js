import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import { getConfig } from "./fetchConfig";
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 3000;

app.use(cookieParser())
app.use("^/$", async (req, res) => {
  let config = await getConfig(req, res);
  if(config === null)
  {
    return
  }
  config = JSON.stringify(config)
  
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Some error happened");
    }

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>
      <script>
        (()=>{
          window.__APP_CONFIG__=${config}
        })()
      </script>`)
    );
  });
});
app.use("^/admin", (req, res) => {
  let config = getConfig();
  config = JSON.stringify(config)
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Some error happened");
    }

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>
      <script>
        (()=>{
          window.__APP_CONFIG__=${config}
        })()
      </script>`)
    );
  });
});
app.use("^/public", (req, res) => {
  let config = getConfig();
  config = JSON.stringify(config)
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Some error happened");
    }

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>
      <script>
        (()=>{
          window.__APP_CONFIG__=${config}
        })()
      </script>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App is launched on ${PORT}`);
});
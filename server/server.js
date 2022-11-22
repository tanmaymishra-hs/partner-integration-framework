import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import { getConfig, fetchConfig } from "./fetchConfig";
import { Singleton } from "../src/utils/configSingleton";

const app = express();
const PORT = 3005;
app.get('/getconfig', (req, res) => {
  getConfig();
  // res.json(Singleton.getInstance());
  res.json(Singleton.getInstance());
})
// app.get('/fetchconfig', (req, res) => {
//   res.json(fetchConfig());
// })

app.use("^/$", (req, res) => {
  getConfig();
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
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});
app.use("^/admin", (req, res) => {
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
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});
app.use("^/public", (req, res) => {
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
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App is launched on ${PORT}`);
});
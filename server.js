import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import dotenv from 'dotenv';
import config from './webpack.config';
/* eslint-disable no-console */

dotenv.config();

const port = process.env.PORT || 8989;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join( __dirname, "./client/index.html"));
});

app.listen(port, err =>{
    (!err) ? open(`http://localhost:${port}`) : console.log(err);
});

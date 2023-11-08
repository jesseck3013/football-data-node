import Client from "../../index.js";

// replace token with yours
const token = process.env["FOOT_BALL_TOKEN"];
const football = new Client(token);

// list all areas
football.areas().then((resp) => console.log(resp.data));

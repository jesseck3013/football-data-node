import Client from "../../index.js";

// replace token with yours
const token = process.env["FOOT_BALL_TOKEN"];
const football = new Client(token);

// given an area id, list its child areas
football.areasById(2077).then((resp) => console.log(resp.data));

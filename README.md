# football-data-node

A node.js client to [football data v4 API](https://www.football-data.org/).

For more information about the API, see
[Documentation](https://docs.football-data.org/general/v4/resources.html).

# Installation

```sh
npm install football-data-node
```

# RESTful APIs

```js
import Client from "football-data-node";
import { leagues } from "football-data-node";

const apiToken = "";
const football = new Client(apiToken);

// get standing table of Premier leauge for the 2021/2022 season
football
  .standingsOfCompetition(leagues.Premier_League, { season: 2021 })
  .then((resp) => console.log(resp));
```

Please find `examples` folder to check for more endpoints.

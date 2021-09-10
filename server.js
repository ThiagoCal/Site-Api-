const http = require("http");
const https = require("https");

function requestListener(req, res1) {
    console.log("Received request.");

    if (req.method !== "POST") {
        res1.writeHeader(404);
        res1.end("Tem que ser POST!");
        return;
    }

    req.setEncoding("utf8");
    req.on("data", body => {
        console.log("Tryind to Read body.");
        body = JSON.parse(body);
        console.log("Read body.");

        const options = {
            "method": "GET",
            "hostname": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "port": null,
            "path": `/apiservices/browsedates/v1.0/BR/BRL/pt-BR/${body.from}-sky/${body.to}-sky/${body.departure}?inboundpartialdate=${body.return}`,
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "1e104dba5fmsh447e2daa30200fep1c5075jsnff28034094ad",
                "useQueryString": true
            }
        };

        https.request(options, (res2) => {
            const chunks = [];
            res2.on("data", chunk => chunks.push(chunk));
            res2.on("end", () => {
                const body = Buffer.concat(chunks).toString();
                const headers = {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
                  };
                 res1.writeHead(200, headers);
                //res1.writeHeader(200);
                res1.end(body);
            });
        }).end();
    });
}

const server = http.createServer(requestListener);
server.listen(8080);
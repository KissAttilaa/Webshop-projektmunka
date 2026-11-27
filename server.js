const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { error } = require("node:console");
// const { url } = require("node:inspector");

const products = [

  {
    "store": "style.up",
    "currency": "HUF",
    "products": [
      {
        "id": 1,
        "name": "Oversized Puffer Jacket",
        "brand": "Nike",
        "category": "Kabát",
        "price_huf": 54990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Fekete"

      },
      {
        "id": 2,
        "name": "Therma-FIT Winter Parka",
        "brand": "Nike",
        "category": "Kabát",
        "price_huf": 79990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Olívazöld"

      },
      {
        "id": 3,
        "name": "Down Puffer Jacket",
        "brand": "Moncler",
        "category": "Kabát",
        "price_huf": 389990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Krém"

      },
      {
        "id": 4,
        "name": "Short Glossy Puffer",
        "brand": "Moncler",
        "category": "Kabát",
        "price_huf": 329990,
        "sizes": [
          36,
          38,
          40,
          42
        ],
        "color": "Fekete"

      },
      {
        "id": 5,
        "name": "Expedition Parka",
        "brand": "Canada Goose",
        "category": "Kabát",
        "price_huf": 549990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Fekete"

      },
      {
        "id": 6,
        "name": "Crofton Puffer Jacket",
        "brand": "Canada Goose",
        "category": "Kabát",
        "price_huf": 429990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Bézs"
      },
      {
        "id": 7,
        "name": "Nuptse Style Down Jacket",
        "brand": "The North Face",
        "category": "Kabát",
        "price_huf": 99990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Fekete"
      },
      {
        "id": 8,
        "name": "Long Insulated Parka",
        "brand": "The North Face",
        "category": "Kabát",
        "price_huf": 129990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Sötétzöld"
      },
      {
        "id": 9,
        "name": "Wool Blend Long Coat",
        "brand": "Hugo Boss",
        "category": "Kabát",
        "price_huf": 159990,
        "sizes": [
          36,
          38,
          40,
          42
        ],
        "color": "Szürke"
      },
      {
        "id": 10,
        "name": "Tailored Winter Coat",
        "brand": "Hugo Boss",
        "category": "Kabát",
        "price_huf": 189990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Camel"
      },
      {
        "id": 11,
        "name": "Classic Puffer Jacket",
        "brand": "Tommy Hilfiger",
        "category": "Kabát",
        "price_huf": 99990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Navy"
      },
      {
        "id": 12,
        "name": "Quilted Jacket",
        "brand": "Tommy Hilfiger",
        "category": "Dzseki",
        "price_huf": 79990,
        "sizes": [
          36,
          38,
          40,
          42
        ],
        "color": "Krém"
      },
      {
        "id": 13,
        "name": "Logo Hoodie",
        "brand": "Calvin Klein",
        "category": "Pulóver",
        "price_huf": 44990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Szürke"
      },
      {
        "id": 14,
        "name": "Ribbed Knit Sweater",
        "brand": "Calvin Klein",
        "category": "Pulóver",
        "price_huf": 49990,
        "sizes": [
          36,
          38,
          40,
          42
        ],
        "color": "Fekete"
      },
      {
        "id": 15,
        "name": "Fleece Full-Zip Jacket",
        "brand": "Columbia",
        "category": "Dzseki",
        "price_huf": 59990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Bézs"
      },
      {
        "id": 16,
        "name": "Insulated Snow Pants",
        "brand": "Columbia",
        "category": "Nadrág",
        "price_huf": 69990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Fekete"
      },
      {
        "id": 17,
        "name": "Wide Leg Jeans",
        "brand": "Calvin Klein",
        "category": "Farmer",
        "price_huf": 49990,
        "sizes": [
          26,
          27,
          28,
          29,
          30,
          31,
          32
        ],
        "color": "Kék"
      },
      {
        "id": 18,
        "name": "Relaxed Cargo Pants",
        "brand": "Nike",
        "category": "Nadrág",
        "price_huf": 39990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Olívazöld"
      },
      {
        "id": 19,
        "name": "Fleece Joggers",
        "brand": "The North Face",
        "category": "Nadrág",
        "price_huf": 44990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Szürke"
      },
      {
        "id": 20,
        "name": "Straight Fit Jeans",
        "brand": "Tommy Hilfiger",
        "category": "Farmer",
        "price_huf": 49990,
        "sizes": [
          26,
          27,
          28,
          29,
          30,
          31,
          32
        ],
        "color": "Sötétkék"
      },
      {
        "id": 21,
        "name": "Leather Look Trousers",
        "brand": "Hugo Boss",
        "category": "Nadrág",
        "price_huf": 89990,
        "sizes": [
          36,
          38,
          40,
          42
        ],
        "color": "Fekete"
      },
      {
        "id": 22,
        "name": "Classic Crewneck Sweatshirt",
        "brand": "Nike",
        "category": "Pulóver",
        "price_huf": 32990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Fehér"
      },
      {
        "id": 23,
        "name": "Cable Knit Sweater",
        "brand": "Tommy Hilfiger",
        "category": "Pulóver",
        "price_huf": 69990,
        "sizes": [
          36,
          38,
          40,
          42
        ],
        "color": "Bordó"
      },
      {
        "id": 24,
        "name": "Logo Long Sleeve Top",
        "brand": "Calvin Klein",
        "category": "Felső",
        "price_huf": 29990,
        "sizes": [
          36,
          38,
          40,
          42
        ],
        "color": "Fehér"
      },
      {
        "id": 25,
        "name": "Thermal Base Layer Top",
        "brand": "Columbia",
        "category": "Felső",
        "price_huf": 24990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Fekete"
      },
      {
        "id": 26,
        "name": "Fleece Pullover",
        "brand": "The North Face",
        "category": "Pulóver",
        "price_huf": 64990,
        "sizes": [
          36,
          38,
          40,
          42,
          44
        ],
        "color": "Bézs"
      },
      {
        "id": 27,
        "name": "Minimal Logo Beanie",
        "brand": "Calvin Klein",
        "category": "Sapka",
        "price_huf": 19990,
        "sizes": [
          1
        ],
        "color": "Fekete"
      },
      {
        "id": 28,
        "name": "Gold-Tone Hoop Earrings",
        "brand": "Hugo Boss",
        "category": "Ékszer",
        "price_huf": 24990,
        "sizes": [
          1
        ],
        "color": "Arany"
      },
      {
        "id": 29,
        "name": "Silver-Tone Chain Necklace",
        "brand": "Calvin Klein",
        "category": "Ékszer",
        "price_huf": 29990,
        "sizes": [
          1
        ],
        "color": "Ezüst"
      },
      {
        "id": 30,
        "name": "Logo Bracelet",
        "brand": "Tommy Hilfiger",
        "category": "Ékszer",
        "price_huf": 27990,
        "sizes": [
          1
        ],
        "color": "Ezüst"
      }
    ]
  }
]


const server = http.createServer((request, response) => {
  // Egyszerű CORS-beállítás: a böngésző engedélyezi a szerver válaszait.
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }


  const staticFiles = {
    "/style.css": { file: "style.css", contentType: "text/css; charset=utf-8" },
    "/app.js": { file: "app.js", contentType: "text/javascript; charset=utf-8" },
  }

  const staticFile = staticFiles[request.url];

  console.log(staticFiles)

  if (request.method === "GET" && staticFile) {
    fs.readFile(path.join(__dirname, staticFile.file), (error, content) => {
      if (error) {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("A felület fájljai most nem érhetők el.");
        return;
      }

      response.writeHead(200, { "Content-Type": staticFile.contentType });
      response.end(content);
    });
    return;
  }

  const url = new URL(request.url, "http://localhost:3000");


  if (request.method === "GET" && url.pathname === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (error, content) => {
      if (error) {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("A felület fájljai most nem érhetők el.");
        return;
      }

      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(content);
    });
    return;
  }

  response.writeHead(404, "Content-Type: charset=utf-8");
  response.end("Nincs ilyen útvonal.");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("A szerver fut: http://127.0.0.1:3000");
});
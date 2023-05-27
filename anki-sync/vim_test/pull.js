// pull vim notes from anki
const axios = require("axios");
const fs = require("fs");

// axios
//   .get("http://127.0.0.1:8765/")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log("onerror:", error);
//   });

axios
  .post("http://127.0.0.1:8765/deckNames", { action: "deckNames", version: 6 })
  .then((response) => {
    // console.log(response.data);
    const deckNames = response.data.result;

    try {
      // Write the modified JSON data to a new file
      fs.writeFile("output.json", JSON.stringify(deckNames), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("File written successfully!");
      });
    } catch (err) {
      console.error(err);
    }
  })
  .catch((error) => {
    console.log("onerror:", error);
  });

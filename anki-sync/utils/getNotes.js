const ankiReq = require("./ankiReq");
const fs = require("fs");

const getNotes = async (deckName, fileName) => {
  const noteIds = await ankiReq({
    action: "findNotes",
    version: 6,
    params: {
      query: `deck:${deckName}`,
    },
  });

  const notes = await ankiReq({
    action: "notesInfo",
    version: 6,
    params: {
      notes: noteIds,
    },
  });

  try {
    // Write the modified JSON data to a new file
    fs.writeFile(
      `./${fileName}.json`,
      JSON.stringify(notes, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("File written successfully!");
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = getNotes;

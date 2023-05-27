// 1546629072238
const ankiReq = require("./ankiReq");
const fs = require("fs");

const test = "test";

const getNote = async (noteId) => {
  const notes = await ankiReq({
    action: "notesInfo",
    version: 6,
    params: {
      notes: [1546629072238],
    },
  });

  try {
    fs.writeFile(
      `./${test}.json`,
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

getNote();

// module.exports = getNote;

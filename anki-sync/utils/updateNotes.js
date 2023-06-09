const ankiReq = require("./ankiReq");
const fs = require("fs");

const updateNotes = async (deckName, fileName) => {
  const notes = JSON.parse(fs.readFileSync(`./${fileName}.json`, "utf8"));

  const toUpdate = notes.map((note) => {
    return {
      id: note.noteId,
      fields: {
        Front: note.fields.Front.value,
        Back: note.fields.Back.value,
      },
      tags: note.tags,
    };
  });

  // forEach will break await!
  // reduced.forEach(async (note) => {
  // wait for each note to be updated before updating the next
  for (let idx = 0; idx < toUpdate.length; idx++) {
    const note = toUpdate[idx];
    try {
      await ankiReq({
        action: "updateNote",
        version: 6,
        params: {
          note: note,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = updateNotes;

const axios = require("axios");

const url = "http://127.0.0.1:8765/";

const ankiReq = async (payload) => {
  try {
    const res = await axios.post(url, payload);
    return res.data.result;
  } catch (error) {
    console.log("onerror:", error);
  }
};

module.exports = ankiReq;

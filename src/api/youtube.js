import axios from "axios";

const KEY = "AIzaSyCU-fSRPJ0Ghsqmnc-p6lJayQM4YdVnmCI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});

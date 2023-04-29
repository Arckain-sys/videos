import axios from "axios";

const KEY = "AIzaSyBNGf9wR8LI3oBz153uaq4YI3OnfSCFak4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

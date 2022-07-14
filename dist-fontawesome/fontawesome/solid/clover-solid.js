import { h } from 'vue'
export default {
  $_icon: {
    name: "Clover",
    vendor: "Fa",
    type: "Solid",
    tags: ["clover"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-clover"},
      [ 
        h(
          "path",
          {"d":"M512 302.3c0 35.29-28.99 63.91-64.28 63.91c-38.82 0-88.7-22.75-122.4-40.92c18.17 33.7 40.92 83.57 40.92 122.4c0 35.29-28.61 63.91-63.91 63.91c-18.1 0-34.45-7.52-46.09-19.63C244.6 504.3 228 512 209.7 512c-35.29 0-63.91-28.99-63.91-64.28c0-38.82 22.75-88.7 40.92-122.4c-33.7 18.17-83.57 40.92-122.4 40.92c-35.29 0-63.91-28.61-63.91-63.91c0-18.1 7.52-34.45 19.63-46.09C7.676 244.6 0 228 0 209.7c0-35.29 28.99-63.91 64.28-63.91c38.82 0 88.7 22.75 122.4 40.92C168.5 152.1 145.8 103.1 145.8 64.28c0-35.29 28.61-63.91 63.91-63.91c18.1 0 34.45 7.52 46.09 19.63C267.4 7.676 283.1 0 302.3 0c35.29 0 63.91 28.99 63.91 64.28c0 38.82-22.75 88.7-40.92 122.4c33.7-18.17 83.57-40.92 122.4-40.92c35.29 0 63.91 28.61 63.91 63.91c0 18.1-7.52 34.45-19.63 46.09C504.3 267.4 512 283.1 512 302.3z"}
        ) 
      ]
    )
  }
}
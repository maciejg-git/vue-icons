import { h } from 'vue'
export default {
  $_icon: {
    name: "GolfBallTee",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["golf","ball","tee"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M384 192c0 66.8-34.1 125.6-85.8 160H85.8C34.1 317.6 0 258.8 0 192C0 86 86 0 192 0S384 86 384 192zM242.1 256.6c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.6-1.1-13.8-3c5.3 11.6 16.9 19.7 30.5 19.7c18.5 0 33.5-15 33.5-33.5c0-13.6-8.1-25.3-19.7-30.5c1.9 4.2 3 8.9 3 13.8zm-52.3-49.3c-4.9 0-9.6-1.1-13.8-3c5.3 11.6 16.9 19.7 30.5 19.7c18.5 0 33.5-15 33.5-33.5c0-13.6-8.1-25.3-19.7-30.5c1.9 4.2 3 8.9 3 13.8c0 18.5-15 33.5-33.5 33.5zm113.5-17.5c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.6-1.1-13.8-3c5.3 11.6 16.9 19.7 30.5 19.7c18.5 0 33.5-15 33.5-33.5c0-13.6-8.1-25.3-19.7-30.5c1.9 4.2 3 8.9 3 13.8zM96 416c0-17.7 14.3-32 32-32h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H240c-8.8 0-16 7.2-16 16v16c0 17.7-14.3 32-32 32s-32-14.3-32-32V464c0-8.8-7.2-16-16-16H128c-17.7 0-32-14.3-32-32z"}
        ) 
      ]
    )
  }
}
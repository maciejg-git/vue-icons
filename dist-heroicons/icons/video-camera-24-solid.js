import { h } from 'vue'
export default {
  $_icon: {
    name: "VideoCamera",
    vendor: "H",
    type: ["24","solid"],
    tags: ["video","camera"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-video-camera"},
      [ 
        h(
          "path",
          {"d":"M4.5 4.5C2.84315 4.5 1.5 5.84315 1.5 7.5V16.5C1.5 18.1569 2.84315 19.5 4.5 19.5H12.75C14.4069 19.5 15.75 18.1569 15.75 16.5V7.5C15.75 5.84315 14.4069 4.5 12.75 4.5H4.5Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M19.9393 18.75L17.25 16.0606V7.93931L19.9393 5.24996C20.8843 4.30501 22.5 4.97427 22.5 6.31063V17.6893C22.5 19.0257 20.8843 19.6949 19.9393 18.75Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
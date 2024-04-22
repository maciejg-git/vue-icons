import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteBeamed",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["music","note","beamed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M14 11V2h1v9zM6 3v10H5V3z"}
        ),
        h(
          "path",
          {"d":"M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"}
        ) 
      ]
    )
  }
}
import { h } from 'vue'
export default {
  $_icon: {
    name: "SourceCommitStart",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["source","commit","start"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,7A5,5 0 0,1 17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}
        ) 
      ]
    )
  }
}
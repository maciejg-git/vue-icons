import { h } from 'vue'
export default {
  $_icon: {
    name: "BackwardFast",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["backward","fast"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-backward-fast"},
      [ 
        h(
          "path",
          {"d":"M0 415.1V96.03c0-17.67 14.33-31.1 31.1-31.1C49.67 64.03 64 78.36 64 96.03v131.8l171.5-156.5C256.1 54.28 288 68.66 288 96.03v131.9l171.5-156.5C480.1 54.28 512 68.66 512 96.03v319.9c0 27.37-31.88 41.74-52.5 24.62L288 285.2v130.7c0 27.37-31.88 41.74-52.5 24.62L64 285.2v130.7c0 17.67-14.33 31.1-31.1 31.1C14.33 447.1 0 433.6 0 415.1z"}
        ) 
      ]
    )
  }
}
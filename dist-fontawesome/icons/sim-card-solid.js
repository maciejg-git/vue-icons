import { h } from 'vue'
export default {
  $_icon: {
    name: "SimCard",
    vendor: "Fa",
    type: ["solid"],
    tags: ["sim","card"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-sim-card"},
      [ 
        h(
          "path",
          {"d":"M0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128l-128-128H64C28.75 0 0 28.75 0 64zM224 256H160V192h64V256zM320 256h-64V192h32c17.75 0 32 14.25 32 32V256zM256 384h64v32c0 17.75-14.25 32-32 32h-32V384zM160 384h64v64H160V384zM64 384h64v64H96c-17.75 0-32-14.25-32-32V384zM64 288h256v64H64V288zM64 224c0-17.75 14.25-32 32-32h32v64H64V224z"}
        ) 
      ]
    )
  }
}
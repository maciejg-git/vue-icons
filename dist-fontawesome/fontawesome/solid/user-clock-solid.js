import { h } from 'vue'
export default {
  $_icon: {
    name: "UserClock",
    vendor: "Fa",
    type: "Solid",
    tags: ["user","clock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","class":"v-icon","fill":"currentColor","data-name":"fa-user-clock","innerHTML":"<path d='M496 224c-79.63 0-144 64.38-144 144s64.38 144 144 144s144-64.38 144-144S575.6 224 496 224zM544 384h-54.25C484.4 384 480 379.6 480 374.3V304c0-8.836 7.164-16 16-16c8.838 0 16 7.164 16 16v48h32c8.838 0 16 7.164 16 15.1S552.8 384 544 384zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM320 368c0-19.3 3.221-37.82 8.961-55.2C311.9 307.2 293.6 304 274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512H395C349.7 480.2 320 427.6 320 368z'/>"},
    )
  }
}
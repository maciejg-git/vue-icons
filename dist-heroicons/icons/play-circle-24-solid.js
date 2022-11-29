import { h } from 'vue'
export default {
  $_icon: {
    name: "PlayCircle",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["play","circle"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM16.2742 11.0166C17.0457 11.4452 17.0457 12.5548 16.2742 12.9835L10.6713 16.0962C9.9215 16.5127 9 15.9705 9 15.1127V8.88736C9 8.02957 9.9215 7.48735 10.6713 7.90393L16.2742 11.0166Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
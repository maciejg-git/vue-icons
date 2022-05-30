import { h } from 'vue'
export default {
  $_icon: {
    name: "File",
    vendor: "Fa",
    type: "Regular",
    tags: ["file"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-file","innerHTML":"<path d='M365.3 93.38l-74.63-74.64C278.6 6.743 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.35 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM320 464H64.02c-8.836 0-15.1-7.163-16-15.1L48 64.13c-.0004-8.837 7.163-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1v288C336 456.8 328.8 464 320 464z'/>"},
    )
  }
}
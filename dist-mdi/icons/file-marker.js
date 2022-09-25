import { h } from 'vue'
export default {
  $_icon: {
    name: "FileMarker",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","marker"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-marker"},
      [ 
        h(
          "path",
          {"d":"M18.5 10C19 10 19.5 10.08 20 10.22V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H15.91C14.7 20.41 13 17.78 13 15.5C13 12.5 15.5 10 18.5 10M13 3.5L18.5 9H13V3.5M18.5 12C16.6 12 15 13.6 15 15.5C15 18.1 18.5 22 18.5 22S22 18.1 22 15.5C22 13.6 20.4 12 18.5 12M18.5 16.8C17.8 16.8 17.3 16.2 17.3 15.6C17.3 14.9 17.9 14.4 18.5 14.4S19.7 15 19.7 15.6C19.8 16.2 19.2 16.8 18.5 16.8Z"}
        ) 
      ]
    )
  }
}
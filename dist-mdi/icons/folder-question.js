import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderQuestion",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["folder","question"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-question"},
      [ 
        h(
          "path",
          {"d":"M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M16.8 18H15.3V16.5H16.8V18M16.8 15.8H15.3C15.3 13.4 17.5 13.5 17.5 12C17.5 11.2 16.8 10.5 16 10.5S14.5 11.2 14.5 12H13C13 10.3 14.3 9 16 9S19 10.3 19 12C19 13.9 16.8 14.1 16.8 15.8Z"}
        ) 
      ]
    )
  }
}
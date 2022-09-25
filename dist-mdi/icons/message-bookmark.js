import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageBookmark",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["message","bookmark"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-bookmark"},
      [ 
        h(
          "path",
          {"d":"M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M19 13L16.5 11.5L14 13V5H19V13Z"}
        ) 
      ]
    )
  }
}
import { h } from 'vue'
export default {
  $_icon: {
    name: "Tag",
    vendor: "H",
    type: ["20","solid"],
    tags: ["tag"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-tag"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.5 3C4.11929 3 3 4.11929 3 5.5V8.37868C3 9.04172 3.26339 9.67761 3.73223 10.1464L10.2322 16.6464C11.2085 17.6228 12.7915 17.6228 13.7678 16.6464L16.6464 13.7678C17.6228 12.7915 17.6228 11.2085 16.6464 10.2322L10.1464 3.73223C9.67761 3.26339 9.04172 3 8.37868 3H5.5ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
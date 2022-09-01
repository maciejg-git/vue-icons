import { h } from 'vue'
export default {
  $_icon: {
    name: "Bookmark",
    vendor: "H",
    type: ["20","solid"],
    tags: ["bookmark"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bookmark"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10 1C8.28365 1 6.5916 1.10551 4.93005 1.31046C3.80579 1.44913 3 2.41374 3 3.51661V18.25C3 18.5078 3.13239 18.7475 3.35057 18.8848C3.56875 19.0221 3.84215 19.0377 4.07455 18.9261L10 16.0819L15.9255 18.9261C16.1578 19.0377 16.4312 19.0221 16.6494 18.8848C16.8676 18.7475 17 18.5078 17 18.25V3.51661C17 2.41374 16.1942 1.44913 15.07 1.31046C13.4084 1.10551 11.7163 1 10 1Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
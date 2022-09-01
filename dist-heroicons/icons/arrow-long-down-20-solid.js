import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLongDown",
    vendor: "H",
    type: ["20","solid"],
    tags: ["arrow","long","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-long-down"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10 2C10.4142 2 10.75 2.33579 10.75 2.75V15.3401L12.7004 13.2397C12.9823 12.9361 13.4568 12.9186 13.7603 13.2004C14.0639 13.4823 14.0815 13.9568 13.7996 14.2603L10.5496 17.7603C10.4077 17.9132 10.2086 18 10 18C9.79145 18 9.59232 17.9132 9.45041 17.7603L6.20041 14.2603C5.91856 13.9568 5.93613 13.4823 6.23966 13.2004C6.5432 12.9186 7.01775 12.9361 7.2996 13.2397L9.25 15.3401V2.75C9.25 2.33579 9.58579 2 10 2Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
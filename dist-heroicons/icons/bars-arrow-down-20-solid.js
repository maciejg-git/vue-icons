import { h } from 'vue'
export default {
  $_icon: {
    name: "BarsArrowDown",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["bars","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bars-arrow-down"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 3.75C2 3.33579 2.33579 3 2.75 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16421 14.6642 4.5 14.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75ZM2 7.5C2 7.08579 2.33579 6.75 2.75 6.75H10.2582C10.6724 6.75 11.0082 7.08579 11.0082 7.5C11.0082 7.91421 10.6724 8.25 10.2582 8.25H2.75C2.33579 8.25 2 7.91421 2 7.5ZM14 7C14.4142 7 14.75 7.33579 14.75 7.75L14.75 14.3401L16.7004 12.2397C16.9823 11.9361 17.4568 11.9186 17.7603 12.2004C18.0639 12.4823 18.0814 12.9568 17.7996 13.2603L14.5496 16.7603C14.4077 16.9132 14.2085 17 14 17C13.7914 17 13.5923 16.9132 13.4504 16.7603L10.2004 13.2603C9.91855 12.9568 9.93613 12.4823 10.2397 12.2004C10.5432 11.9186 11.0177 11.9361 11.2996 12.2397L13.25 14.3401L13.25 7.75C13.25 7.33579 13.5858 7 14 7ZM2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H7.31205C7.72626 10.5 8.06205 10.8358 8.06205 11.25C8.06205 11.6642 7.72626 12 7.31205 12H2.75C2.33579 12 2 11.6642 2 11.25Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
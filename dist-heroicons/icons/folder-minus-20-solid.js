import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderMinus",
    vendor: "H",
    type: ["20","solid"],
    tags: ["folder","minus"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-folder-minus"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.75C2 3.7835 2.7835 3 3.75 3H8.58579C9.04992 3 9.49503 3.18437 9.82322 3.51256L11.2374 4.92678C11.2843 4.97366 11.3479 5 11.4142 5H16.25C17.2165 5 18 5.7835 18 6.75V15.25C18 16.2165 17.2165 17 16.25 17H3.75C2.7835 17 2 16.2165 2 15.25V4.75ZM12.25 11.75C12.6642 11.75 13 11.4142 13 11C13 10.5858 12.6642 10.25 12.25 10.25H7.75C7.33579 10.25 7 10.5858 7 11C7 11.4142 7.33579 11.75 7.75 11.75H12.25Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
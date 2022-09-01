import { h } from 'vue'
export default {
  $_icon: {
    name: "BarsArrowUp",
    vendor: "H",
    type: ["20","solid"],
    tags: ["bars","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bars-arrow-up"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 3.75C2 3.33579 2.33579 3 2.75 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16421 14.6642 4.5 14.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75ZM2 7.5C2 7.08579 2.33579 6.75 2.75 6.75H9.11474C9.52895 6.75 9.86474 7.08579 9.86474 7.5C9.86474 7.91421 9.52895 8.25 9.11474 8.25H2.75C2.33579 8.25 2 7.91421 2 7.5ZM14 7C14.2086 7 14.4077 7.08684 14.5496 7.23966L17.7996 10.7397C18.0814 11.0432 18.0639 11.5177 17.7603 11.7996C17.4568 12.0814 16.9823 12.0639 16.7004 11.7603L14.75 9.6599L14.75 16.25C14.75 16.6642 14.4142 17 14 17C13.5858 17 13.25 16.6642 13.25 16.25L13.25 9.6599L11.2996 11.7603C11.0177 12.0639 10.5432 12.0814 10.2397 11.7996C9.93613 11.5177 9.91855 11.0432 10.2004 10.7397L13.4504 7.23966C13.5923 7.08684 13.7914 7 14 7ZM2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H6.99999C7.4142 10.5 7.74999 10.8358 7.74999 11.25C7.74999 11.6642 7.4142 12 6.99999 12H2.75C2.33579 12 2 11.6642 2 11.25Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
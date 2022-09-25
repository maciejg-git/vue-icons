import { h } from 'vue'
export default {
  $_icon: {
    name: "Backspace",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["backspace"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-backspace"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.21967 3.21967C7.36032 3.07902 7.55109 3 7.75 3H16.75C17.9926 3 19 4.00736 19 5.25V14.75C19 15.9926 17.9926 17 16.75 17H7.75C7.55109 17 7.36032 16.921 7.21967 16.7803L0.96967 10.5303C0.676777 10.2374 0.676777 9.76256 0.96967 9.46967L7.21967 3.21967ZM10.2803 7.21967C9.98744 6.92678 9.51256 6.92678 9.21967 7.21967C8.92678 7.51256 8.92678 7.98744 9.21967 8.28033L10.9393 10L9.21967 11.7197C8.92678 12.0126 8.92678 12.4874 9.21967 12.7803C9.51256 13.0732 9.98744 13.0732 10.2803 12.7803L12 11.0607L13.7197 12.7803C14.0126 13.0732 14.4874 13.0732 14.7803 12.7803C15.0732 12.4874 15.0732 12.0126 14.7803 11.7197L13.0607 10L14.7803 8.28033C15.0732 7.98744 15.0732 7.51256 14.7803 7.21967C14.4874 6.92678 14.0126 6.92678 13.7197 7.21967L12 8.93934L10.2803 7.21967Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
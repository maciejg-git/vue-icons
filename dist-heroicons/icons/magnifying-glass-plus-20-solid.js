import { h } from 'vue'
export default {
  $_icon: {
    name: "MagnifyingGlassPlus",
    vendor: "H",
    type: ["20","Solid"],
    tags: ["magnifying","glass","plus"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-magnifying-glass-plus"},
      [ 
        h(
          "path",
          {"d":"M9 6C9.41421 6 9.75 6.33579 9.75 6.75V8.25H11.25C11.6642 8.25 12 8.58579 12 9C12 9.41421 11.6642 9.75 11.25 9.75L9.75 9.75V11.25C9.75 11.6642 9.41421 12 9 12C8.58579 12 8.25 11.6642 8.25 11.25V9.75L6.75 9.75C6.33579 9.75 6 9.41421 6 9C6 8.58579 6.33579 8.25 6.75 8.25H8.25V6.75C8.25 6.33579 8.58579 6 9 6Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.6625 15.4197 12.1906 14.4517 13.3911L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L13.3911 14.4517C12.1906 15.4197 10.6625 16 9 16C5.13401 16 2 12.866 2 9ZM9 3.5C5.96243 3.5 3.5 5.96243 3.5 9C3.5 12.0376 5.96243 14.5 9 14.5C10.519 14.5 11.893 13.8852 12.8891 12.8891C13.8852 11.893 14.5 10.519 14.5 9C14.5 5.96243 12.0376 3.5 9 3.5Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}
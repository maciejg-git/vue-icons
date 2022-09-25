import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderClosed",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["folder","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-folder-closed"},
      [ 
        h(
          "path",
          {"d":"M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80V160h512V144C512 117.5 490.5 96 464 96zM0 432C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48V192H0V432z"}
        ) 
      ]
    )
  }
}
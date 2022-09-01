import { h } from 'vue'
export default {
  $_icon: {
    name: "ComputerMouse",
    vendor: "Fa",
    type: ["solid"],
    tags: ["computer","mouse"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-computer-mouse"},
      [ 
        h(
          "path",
          {"d":"M0 352c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V224H0V352zM176 0H160C71.63 0 0 71.62 0 160v32h176V0zM224 0h-16v192H384V160C384 71.62 312.4 0 224 0z"}
        ) 
      ]
    )
  }
}
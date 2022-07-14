import { h } from 'vue'
export default {
  $_icon: {
    name: "KitMedical",
    vendor: "Fa",
    type: "Solid",
    tags: ["kit","medical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-kit-medical"},
      [ 
        h(
          "path",
          {"d":"M64 32h32v448H64c-35.35 0-64-28.66-64-64V96C0 60.66 28.65 32 64 32zM128 32h320v448H128V32zM176 282c0 8.835 7.164 16 16 16h53.1V352c0 8.836 7.165 16 16 16h52c8.836 0 16-7.164 16-16V298H384c8.836 0 16-7.165 16-16v-52c0-8.837-7.164-16-16-16h-54V160c0-8.836-7.164-16-16-16h-52c-8.835 0-16 7.164-16 16v54H192c-8.836 0-16 7.163-16 16V282zM512 32h-32v448h32c35.35 0 64-28.66 64-64V96C576 60.66 547.3 32 512 32z"}
        ) 
      ]
    )
  }
}
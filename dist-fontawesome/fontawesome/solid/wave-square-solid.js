import { h } from 'vue'
export default {
  name: "WaveSquare",
  vendor: "Fa",
  type: "Solid",
  tags: ["wave","square"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","class":"v-icon","fill":"currentColor","data-name":"fa-wave-square","innerHTML":"<path d='M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36z'/>"},
    )
  }
}
import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowsUpDown",
    vendor: "Fa",
    type: "Solid",
    tags: ["arrows","up","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 512","class":"v-icon","fill":"currentColor","data-name":"fa-arrows-up-down","innerHTML":"<path d='M246.6 361.4C252.9 367.6 256 375.8 256 384s-3.125 16.38-9.375 22.62l-96 96c-12.5 12.5-32.75 12.5-45.25 0l-96-96c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L96 402.8v-293.5L54.63 150.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0l96 96C252.9 111.6 256 119.8 256 128s-3.125 16.38-9.375 22.62c-12.5 12.5-32.75 12.5-45.25 0L160 109.3v293.5l41.38-41.38C213.9 348.9 234.1 348.9 246.6 361.4z'/>"},
    )
  }
}
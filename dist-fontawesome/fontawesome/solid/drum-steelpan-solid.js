import { h } from 'vue'
export default {
  $_icon: {
    name: "DrumSteelpan",
    vendor: "Fa",
    type: "Solid",
    tags: ["drum","steelpan"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","class":"v-icon","fill":"currentColor","data-name":"fa-drum-steelpan","innerHTML":"<path d='M288 32C129 32 0 89.25 0 160v192c0 70.75 129 128 288 128s288-57.25 288-128V160C576 89.25 447 32 288 32zM205 190.4c-4.5 16.62-14.5 30.5-28.25 40.5C100.2 217.5 48 190.8 48 160c0-30.12 50.12-56.38 124-69.1l25.62 44.25C207.5 151.4 210.1 171.2 205 190.4zM288 240c-21.12 0-41.38-.1-60.88-2.75C235.1 211.1 259.2 192 288 192s52.88 19.12 60.88 45.25C329.4 239 309.1 240 288 240zM352 96c0 35.25-28.75 64-64 64S224 131.2 224 96V83C244.4 81.12 265.8 80 288 80s43.63 1.125 64 3V96zM398.9 230.9c-13.75-9.875-23.88-23.88-28.38-40.5c-5.125-19.13-2.5-39 7.375-56l25.62-44.5C477.8 103.5 528 129.8 528 160C528 190.9 475.6 217.5 398.9 230.9z'/>"},
    )
  }
}
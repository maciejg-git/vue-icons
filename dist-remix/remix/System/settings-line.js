import { h } from 'vue'
export default {
  name: "SettingsLine",
  vendor: "Rx",
  type: "",
  tags: ["settings","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-settings-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/>    </g>"},
    )
  }
}
import { h } from 'vue'
export default {
  $_icon: {
    name: "HouseSignal",
    vendor: "Fa",
    type: ["solid"],
    tags: ["house","signal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-house-signal"},
      [ 
        h(
          "path",
          {"d":"M314.3 8.486C326.6-2.829 345.4-2.829 357.7 8.486L565.7 200.5C575.4 209.4 578.6 223.4 573.8 235.7C569 247.9 557.2 256 544 256H512V368C512 394.5 490.5 416 464 416H296.4C272.7 317.5 195.4 239.1 97.06 215.8C98.58 210.1 101.7 204.7 106.3 200.5L314.3 8.486zM304 192C295.2 192 287.1 199.2 287.1 208V272C287.1 280.8 295.2 288 304 288H368C376.8 288 384 280.8 384 272V208C384 199.2 376.8 192 368 192H304zM256 488C256 501.3 245.3 512 232 512C218.7 512 208 501.3 208 488C208 386.4 125.6 304 24 304C10.75 304 0 293.3 0 280C0 266.7 10.75 256 24 256C152.1 256 256 359.9 256 488zM0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480zM0 376C0 362.7 10.75 352 24 352C99.11 352 160 412.9 160 488C160 501.3 149.3 512 136 512C122.7 512 112 501.3 112 488C112 439.4 72.6 400 24 400C10.75 400 0 389.3 0 376z"}
        ) 
      ]
    )
  }
}
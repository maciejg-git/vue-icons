import { h } from 'vue'
export default {
  $_icon: {
    name: "MoneyBillWheat",
    vendor: "Fa",
    type: "Solid",
    tags: ["money","bill","wheat"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-money-bill-wheat"},
      [ 
        h(
          "path",
          {"d":"M256 80C256 88.84 248.8 96 240 96C195.8 96 160 60.18 160 16C160 7.164 167.2 0 176 0C220.2 0 256 35.82 256 80zM104 16C117.3 16 128 26.75 128 40C128 53.25 117.3 64 104 64H56C42.75 64 32 53.25 32 40C32 26.75 42.75 16 56 16H104zM136 88C149.3 88 160 98.75 160 112C160 125.3 149.3 136 136 136H24C10.75 136 0 125.3 0 112C0 98.75 10.75 88 24 88H136zM32 184C32 170.7 42.75 160 56 160H104C117.3 160 128 170.7 128 184C128 197.3 117.3 208 104 208H56C42.75 208 32 197.3 32 184zM272 16C272 7.164 279.2 0 288 0C332.2 0 368 35.82 368 80C368 88.84 360.8 96 352 96C307.8 96 272 60.18 272 16zM480 80C480 88.84 472.8 96 464 96C419.8 96 384 60.18 384 16C384 7.164 391.2 0 400 0C444.2 0 480 35.82 480 80zM400 224C391.2 224 384 216.8 384 208C384 163.8 419.8 128 464 128C472.8 128 480 135.2 480 144C480 188.2 444.2 224 400 224zM352 128C360.8 128 368 135.2 368 144C368 188.2 332.2 224 288 224C279.2 224 272 216.8 272 208C272 163.8 307.8 128 352 128zM176 224C167.2 224 160 216.8 160 208C160 163.8 195.8 128 240 128C248.8 128 256 135.2 256 144C256 188.2 220.2 224 176 224zM0 304C0 277.5 21.49 256 48 256H464C490.5 256 512 277.5 512 304V464C512 490.5 490.5 512 464 512H48C21.49 512 0 490.5 0 464V304zM48 464H96C96 437.5 74.51 416 48 416V464zM48 304V352C74.51 352 96 330.5 96 304H48zM464 416C437.5 416 416 437.5 416 464H464V416zM416 304C416 330.5 437.5 352 464 352V304H416zM256 320C220.7 320 192 348.7 192 384C192 419.3 220.7 448 256 448C291.3 448 320 419.3 320 384C320 348.7 291.3 320 256 320z"}
        ) 
      ]
    )
  }
}
import { TITLE_TEXT_STYLE, TIPS_TEXT_STYLE, SCROLL_LIST, FIND_BUTTON, SET_BUTTON, CYCLE_LIST } from './index.style'
const { messageBuilder } = getApp()._options.globalData
const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
Page({
  build() {
    logger.debug('page build invoked')
    hmUI.setScrollView(true, px(480), 3, true)
    hmUI.setScrollView()
    this.state.addButton = hmUI.createWidget(hmUI.widget.BUTTON, {
      ...FIND_BUTTON,
      click_func: () => {
        this.findCar()
      }
    })
    this.state.addButton = hmUI.createWidget(hmUI.widget.BUTTON, {
      ...SET_BUTTON,
      click_func: () => {
        this.setCar()
      }
    })

    // range over the number of pages
    const numArr = Array.from({ length: 3 }).map((_, index) => index)

    numArr.forEach((num) => {
      // make each page
      switch (num) {
        case (2):
          // set page
          const scrollList = hmUI.createWidget(hmUI.widget.SCROLL_LIST, Param)
          
        case (3):
          // current loc page
      }
    })


  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
  findCar() {
    //this.state.widget = hmUI.createWidget(hmUI.widget.SCROLL_LIST, 
    //  ...SCROLL_LIST)

  },
  setCar() {

  },
})
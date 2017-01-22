Page({
  data: {
    query: ''
  },

  onLoad(options) {
    this.setData({ query: JSON.stringify(options, null, 2) })
  }
})

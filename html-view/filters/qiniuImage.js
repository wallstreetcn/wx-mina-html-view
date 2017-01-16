// 七牛图片裁剪

module.exports = function(item) {
  if (item.tagName === 'img') {
    item.attributes.src += '?imageView2/2/w/750'
  }

  return true
}

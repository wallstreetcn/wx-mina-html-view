const himalaya = require('./himalaya')
const defaultFilter = require('./filters/default')

function filter(data, ...filters) {
  filters.forEach(f => {
    data = data.filter(f)
  })

  data.forEach(item => {
    if (item.children) item.children = filter(item.children, ...filters)
  })

  return data
}

function parseHtml(html, ...filters) {
  filters.unshift(defaultFilter)

  return filter(himalaya.parse(html), ...filters)
}

module.exports = parseHtml

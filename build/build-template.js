const depth = 10

process.chdir(__dirname + '/..')
const fs = require('fs')
const template = fs.readFileSync('./build/template.wxml', 'utf8')

let output = ''

for (let i = 0; i < depth; i++) {
  let t = template
  if (i !== 0) t = t.replace('name="html-view-nodes"', `name="html-view-nodes-${i}"`)
  t = t.replace(/is="html-view-nodes"/g, `is="html-view-nodes-${i + 1}"`)
  output += t
}

output += `<template name="html-view-nodes-${depth}"></template>`

fs.writeFileSync('./html-view/nodes.wxml', output)

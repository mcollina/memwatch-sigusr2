var memwatch = require('./')
  , leaks = []
  , count = 0

setInterval(function() {
  count++
  leaks.push('hello my leak ' + count)
}, 2)

memwatch.setup()

console.log('process pid is', process.pid)
console.log('start monitoring with: kill -sigusr2', process.pid)
console.log('build a heap diff with: kill -sigusr2', process.pid)
console.log('Check your heap diff json with: jsonlint /tmp/heap-diff-' + process.pid + '.json')

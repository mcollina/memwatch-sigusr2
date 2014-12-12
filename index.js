var memwatch  = require('memwatch')
  , self      = Object.create(memwatch)
  , fs        = require('fs')
  , path      = require('path')
  , hd        = null

function setup() {
  process.on('SIGUSR2', function() {
    if (!hd)
      return hd = new memwatch.HeapDiff()

    var diff = hd.end();

    fs.writeFile(path.join('/tmp/', 'heap-diff-' + process.pid + '.json'), JSON.stringify(diff), function(err) {
      if (err)
        return self.emit('error', err)
    })

    hd = null
  })
}

self.setup = setup

module.exports = self

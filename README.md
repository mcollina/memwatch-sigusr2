memwatch-sigusr2
================

Do a heap diff on SIGUSR2 in node.
Wraps completely [memwatch-next](http://npm.im/memwatch-next) and offers the same
API.

Install
-------

```sh
npm install memwatch-sigusr2 --save
```

Usage
-----

In your leaking app:

```js
var memwatch = require('memwatch-sigusr2')
memwatch.setup()

// to get the process PID, omit in production and use ps aux | grep node
console.log(process.pid)
```

Then to start calculating the diff, run:

```sh
kill -sigusr2 <PID>
```

To stop calculating the diff, run:

```sh
kill -sigusr2 <PID>
```

Then, you can read your diff with:

```sh
jsonlint /tmp/heap-diff-<PID>.json
```

Check [jsonlint](http://npm.im/jsonlint) for installation and usage
instructions.

Acknowledgements
----------------

This project was kindly sponsored by [nearForm](http://nearform.com).

License
-------

MIT


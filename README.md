Save time and headaches, and create a more easily maintainable [enqueuer](http://github.com/enqueuer-land/enqueuer) plugins
This canonical version can serve as a reference, or a starting point all on its own.

#### Get it

[![Greenkeeper badge](https://badges.greenkeeper.io/enqueuer-land/plugin-scaffold.svg)](https://greenkeeper.io/)

Clone this `$ git clone http://github.com/enqueuer-land/plugin-scaffold` or download as zip file.

#### Rename it
Give it a meaningful name. Such as: 
- [enqueuer-plugin-amqp](http://github.com/enqueuer-land/enqueuer-plugin-amqp) 
- [enqueuer-plugin-mqtt](http://github.com/enqueuer-land/enqueuer-plugin-mqtt) 
- [enqueuer-plugin-ws](https://github.com/williamsdevaccount/enqueuer-plugin-ws) 
- [enqueuer-plugin-html-report](http://github.com/enqueuer-land/enqueuer-plugin-html-report) 

#### Get rid of the useless stuff
Thinking about creating only a publisher? No problem, go ahead and delete all the subscription and formatter related stuff.
The same applies to every property.

#### Install it
Install it `$ npm install` and install any dependency of yours `$ npm i my-dependency`

#### GO NUTS!
Customize. It's time to do what you want. Be free.

#### Test it
A linter is setup within this project, keep using it: `$ npm run lint`.
Other than that, you can keep testing it along with enqueuer: `$ npm test`.
To make your life easier and run a bunch of tests at once: `$ npm run all`

#### Share it
It's not a mandatory thing. But be nice and help others. :)
Publish it to npm: `$ npm publish`
Don't forget to add it to the enqueuer [plugins list](http://github.com/enqueuer-land/plugins-list)




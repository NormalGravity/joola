![Joola](http://i.imgur.com/PrqIYX7.png)

[Joola][22] is a data analytics and visualization middleware designed to help you quickly build custom, embedded data analytics applications.

- **Simple**, flexible and powerful JSON to describe your data and push to Joola.
- **Intuitive query** using JSON syntax makes it easy to analyze or visualize your data in blazing speed.
- **Embed** seamlessly into existing sites, including single-sign-on and advanced features.

[![Gitter chat](https://badges.gitter.im/joola/joola.png)](https://gitter.im/joola/joola) [![Build Status][3]][4] [![Coverage Status](https://coveralls.io/repos/joola/joola/badge.svg?branch=develop)](https://coveralls.io/r/joola/joola) [![Code Climate](https://codeclimate.com/github/joola/joola/badges/gpa.svg)](https://codeclimate.com/github/joola/joola) [![Inline docs](http://inch-ci.org/github/joola/joola.svg?branch=develop)](http://inch-ci.org/github/joola/joola)

- [Introduction](http://joolajs.org/docs/intro/how-it-works.html)
- [Download & install](http://joolajs.org/docs/intro/download.html)
- [Configuration](http://joolajs.org/docs/intro/configuration.html)
- [Scaling & clustering](http://joolajs.org/docs/scale/overview.html)
- [Website integration](http://joolajs.org/docs/dev/website-integration.html)
- [REST API](http://docs.joola.apiary.io)
- [SDK documentation](http://joolajs.org/docs/dev/sdk-documentation.html)

### Main Features

- **Big-data**, supports distributed caching and processing to cope with big-data needs.
- **Real-time** data processing. Display analytics as they arrive.
- **Fast**, advanced caching algorithm. Avg. query time of less than a few seconds.
- **Embed** quickly, seamlessly integrate with your site.
- **Scalable**, run on a single machine or a node-based matrix.
- **Secure**, role-based, multi-tenant, data segregation.
- **Extend**, easy to add more data sources, authentication and cache middleware.

### Getting Started

```bash
$ npm install -g joola
```

#### Docker
Joola can be used as a [Docker container](https://registry.hub.docker.com/u/joola/joola) file to support easy playing around and testing.
Docker will pull the latest docker image and run Joola in a container for you.

```bash
$ docker run -p 8080:8080 -it joola/joola
```

#### Vagrant
We have included a [Vagrant](http://www.vagrantup.com) file to support easy playing around and testing. Running `vagrant up` will install all needed dependencies and allow you to run Joola in a sand boxed virtual environment.

```bash
# Clone this repository
$ git clone https://github.com/joola/joola
$ cd joola
# Update submodules containing chef recipes
$ git submodule init
$ git submodule update
$ npm install

$ vagrant up
# wait for the box to come online
$ vagrant ssh

# once in the box
$ cd /vagrant
$ node joola.js
```

We have configured the VM to use 2 CPUs with 2048MB of memory, but these can be configured from `Vagrantfile` if you prefer different settings.  

#### Verifying installation

Access REST API using cURL:

```bash
$ curl http://localhost:8080/system/version?APIToken=apitoken-demo

{ "version": "joola version 0.9.0" }
```

[**Learn more about getting started with Joola**](http://joolajs.org)

### Push your first event

Using cURL:

```bash
$ curl \
     --include \
     --request POST \
     --header "Content-Type: application/json" \
     --data-binary "[{
       \"article\": \"Sample Analytics\",
       \"browser\": \"Chrome\",
       \"userid\": \"demo@joo.la\",
       \"ip\": \"127.0.0.1\",
       \"referrer\": \"http://joo.la\",
       \"visits\": 1,
       \"loadtime\": 123
     }]" \
     http://localhost:8080/beacon/demo/demo?APIToken=apitoken-demo
```

[**Learn more about pushing data**](http://joolajs.org/docs/intro/pushing-events.html)

### Draw your first visualization

```html
<script src="http://localhost:8080/joola.js?APIToken=apitoken-demo"></script>
<script>
joola.on('ready', function(err) {
  if (err)
    throw err;

  var options = {
    caption: 'Visits over Time',
    query: {
      timeframe: 'last_hour',
      interval: 'minute',
      dimensions: ['timestamp'],
      metrics: ['visits'],
      collection: 'collection-demo'
    }
  }
  $('<div></div>').Timeline(options).appendTo('body');
});
</script>
```

[**Learn more about analytics and visualizations**](http://joolajs.org/docs/intro/your-first-visualization.html)

### Contributing
We would love to get your help! We have outlined a simple [Contribution Policy][18] to support a transparent and easy merging
of ideas, code, bug fixes and features.

If you've discovered a security vulnerability in Joola, we appreciate your help in disclosing it to us in a responsible manner via our [Bounty Program](https://hackerone.com/joola-io).

If you're looking for a place to start, you can always go over the list of [open issues][17], pick one and get started.
If you're feeling lost or unsure, [just let us know](#Contact).

### Contact
Contacting us is easy, ping us on one of these:

- [![Gitter chat](https://badges.gitter.im/joola/joola.png)](https://gitter.im/joola/joola)
- [@joola][19]
- [info@joo.la][20]
- You can even fill out a [form][21].

### License
Copyright (c) 2012-2015 Joola Smart Solutions. GPLv3 Licensed, see [LICENSE][24] for details.

[3]: https://travis-ci.org/joola/joola.png?branch=develop
[4]: https://travis-ci.org/joola/joola?branch=develop
[17]: https://github.com/joola/joola/issues
[18]: https://github.com/joola/joola/blob/master/CONTRIBUTING.md
[19]: http://twitter.com/joola
[20]: mailto://info@joo.la
[21]: https://joo.la/contact
[22]: http://joolajs.org
[24]: https://github.com/joola/joola/blob/master/LICENSE.md
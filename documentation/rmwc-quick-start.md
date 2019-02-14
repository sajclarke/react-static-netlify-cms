---
title: Quick Start for RMWC222
date: '2019-02-14 12:00am'
image: /images/fire_stop.png
---
# Quick Start or so they say....

```javascript
import React from 'react';
import { Button } from 'rmwc';

//all of RMWC is only around 11k, but if you only need a few components
// you can import like so
import { Button } from 'rmwc/Button';

const HelloWorld = props => <Button>Easy</Button>
```

## Project Methodology

* To create the thinnest, lightest, and spec compliant wrapper around [Google Material Design Components for the Web](https://material.io/components/web/)
* To utilize the Foundation javascript classes and expose their api for consumption
* To be as unobtrusive and sensible as possible.

```
@import 'more-or-less/less/fn/_join';
@animals: 'cat', 'tiger', 'lion';
.join(@animals, ' and ');
.animals:after {
    content: '@{string}';
}

```

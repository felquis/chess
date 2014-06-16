```
@import 'more-or-less/less/fn/_scope';
.scope({
    @a: foo;
    @b: bar;
    foo: @a;
    bar: @b;
});
```

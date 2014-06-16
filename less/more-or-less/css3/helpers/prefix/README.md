```
@import '../../helpers/_prefix';
.some-property(@values) {
    @vendorPrefixes: -webkit-, -moz-;
    @prop: some-property;
    .prefix();
}
.another-property(@values) {
    @vendorPrefixes: -webkit-, -moz-, '';
    @prop: another-property;
    .prefix();
}
```
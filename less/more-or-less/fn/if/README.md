```
@import 'more-or-less/less/fn/_if';
.if(isnumber(2), {
    .-then(){
        log {
            isnumber: true;
        }
    }
    .-else(){
        log {
            isnumber: false;
        }
    }
});

```

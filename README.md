# coding-challenges

Coding challenge demos written by me inspired by Daniel Shiffman's [coding challenge videos](https://youtu.be/17WoOqgXsRM?list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH)

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to http://[localhost:3449](http://localhost:3449).

## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```

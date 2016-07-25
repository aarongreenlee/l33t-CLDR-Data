# l33t-CLDR-Data
L33T CLDR data for FormatJS, react-intl, etc...

# Only read English? Working on i18n JavaScript projects? This might help.

Years ago, a friend taught me a simple trick you can use when working on internationalized projects to make sure you did not miss any strings in your translations:

* Translate the English resources into the L33T syntax
* Tr4nsL4t3 t3h 3ngL1sh r3s0urc3z 1nt0 t3h L33T synt4x
 
You can do this slowly, by pasting content into an [online translater like this](http://www.ioyu.com/io/javascript/l33t.asp) or you can use the following JavaScript: 

```
// Credit: http://www.jsoneliners.com/string/convert-a-string-to-leet-l33t/
function(text) {
    return text.replace(/[a-z]/g, function fn (a) {
      return '4BCD3F6H1JKLMN0PQR57'[parseInt(a, 36) - 10] || a.replace(/[a-t]/gi, fn)
    })
}
```

# Origin of this project

This locale-data was manually converted for use with React and [React-intl](https://github.com/yahoo/react-intl). The `react-intl` project uses [formatjs-extract-cldr-data](https://github.com/yahoo/formatjs-extract-cldr-data) to generate the locale-data files. Because L33T is not an official language I don't think those projects should be polluted with support L33T so I chose to share the code here.

I hope this helps you with your React i18n projects. 

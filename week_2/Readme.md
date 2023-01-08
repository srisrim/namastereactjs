Props - Arguments passed into react components.

Bundlers - It is development tool which combines all the files and makes single file which is production ready. Ex - webpack(used by React), vite, parcel, rollup

package-lock.json - specifies the exact version of the dependencies.

integrity - maintains the hash of exact version loacl and prod
package.json - holds metadata of the project and list of depedencies.

npx - excutes using npm.

npm - package manager.

Treeshaking - removing of the dead code, checks whether imported and exported files are used.

dist - holds the minified files and serves it on server, and also creates the dev build.

parcel:

- users Hot module replacement to keep track of file changes which use file watcher algorithm.
- helps in cleaning up the files.
- helps in bundling, building, minifying the files.
- helps in optimising the js and media files.
- caching during development.
- manages port number.
- it requires less configuration or zero configuration.
- compatible with older version of browser using "browserlist" in package.json

# References:
https://babeljs.io/

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.20.12&externalPlugins=&assumptions=%7B%7D

https://reactjs.org/docs/react-without-jsx.html

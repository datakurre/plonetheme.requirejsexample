all: build

build: clean theme/example/license-selector-bundle.js

clean:
	rm -f theme/example/*.js

###

.PHONY: all build clean

theme/example/license-selector-bundle.js: \
	theme/example/license-selector-pattern.js
	node_modules/.bin/r.js -o config.js
	echo 'require(["license-selector-pattern"]);' \
	  >> theme/example/license-selector-bundle.js

theme/example/license-selector-pattern.js: node_modules
	node_modules/.bin/babel \
	  --out-file theme/example/license-selector-pattern.js \
	  theme/example/license-selector-pattern.jsx

node_modules: package.json
	npm install
	touch node_modules

all: samples/bundle.js

lib:
	mkdir -p lib

lib/react-barcode.js: lib src/react-barcode.js
	./node_modules/.bin/babel src -d lib

samples/bundle.js: lib/react-barcode.js samples/demo.js
	./node_modules/.bin/browserify -t babelify samples/demo.js -o samples/bundle.js

clean:
	rm -rf lib samples/bundle.js
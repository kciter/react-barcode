all: examples/bundle.js

lib:
	mkdir -p lib

lib/react-barcode.js: lib src/react-barcode.js
	./node_modules/.bin/babel src -d lib

examples/bundle.js: lib/react-barcode.js examples/demo.js
	./node_modules/.bin/browserify -t babelify examples/demo.js -o examples/bundle.js

clean:
	rm -rf lib examples/bundle.js
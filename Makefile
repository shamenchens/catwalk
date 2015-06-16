PWD:=$(shell pwd)

ADDONSDK_VERSION?=1.17
ADDONSDK?=addon-sdk-$(ADDONSDK_VERSION)
ADDONSDK_URL?=https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/$(ADDONSDK).tar.gz

all: firefox/catwalk.xpi

firefox/catwalk.xpi: $(ADDONSDK) firefox/data/jquery-1.11.1.min.js firefox/data/catwalk.js firefox/data/catwalk.css firefox/lib/main.js
	cd $(ADDONSDK) && source bin/activate && cd $(PWD)/firefox && cfx xpi
	@echo "Firefox extension has been generated to $@"

run: firefox/data/jquery-1.11.1.min.js firefox/data/catwalk.js firefox/data/catwalk.css
	cd $(ADDONSDK) && source bin/activate && cd $(PWD)/firefox && cfx run

$(ADDONSDK):
	wget -qO- $(ADDONSDK_URL) | tar xvz

firefox/data/jquery-1.11.1.min.js:
	wget -O $@ http://code.jquery.com/jquery-1.11.1.min.js

firefox/data/catwalk.js: src/catwalk.js
	cp $? $@

firefox/data/catwalk.css: src/catwalk.css
	cp $? $@

.PHONY: chrome
chrome: chrome/jquery-1.11.1.min.js chrome/catwalk.js chrome/catwalk.css

chrome/jquery-1.11.1.min.js:
	wget -O $@ http://code.jquery.com/jquery-1.11.1.min.js

chrome/catwalk.js: src/catwalk.js
	cp $? $@

chrome/catwalk.css: src/catwalk.css
	cp $? $@

clean:
	rm -rf addon-sdk-* firefox/data/jquery-1.11.1.min.js firefox/data/catwalk* chrome/catwalk* chrome/jquery-1.11.1.min.js

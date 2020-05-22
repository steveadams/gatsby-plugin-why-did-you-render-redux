dev: node_modules
	./node_modules/.bin/gatsby develop --host=0.0.0.0
.PHONY: dev

local: export NOMINL_HOST=http://0.0.0.0:9000/
local: dev
.PHONY: local

# must match GATSBY_BUILD_TIME in gatsby-config.js, Page.tsx, publish-bucket.sh, and rollbar-deploy.sh
GATSBY_BUILD_TIME=$(shell date -u +%Y-%m-%d_%H-%M-%S)
build: export NODE_ENV=production
build:
	./node_modules/.bin/gatsby clean

	# iOS does not expect default at the top level
	# TODO: have ts-node strip the top-level default instead of sed
	./node_modules/.bin/ts-node --compiler-options '{"module": "CommonJS"}' -p -e "JSON.stringify(require('./src/config'))" > static/provider.json
	sed -i '' 's/^{"default":{/{/g' static/provider.json
	sed -i '' "s/}}$$/}/g" static/provider.json

	GATSBY_BUILD_TIME=$(GATSBY_BUILD_TIME) ./node_modules/.bin/gatsby build --prefix-paths
	GATSBY_BUILD_TIME=$(GATSBY_BUILD_TIME) bash publish-bucket.sh
	GATSBY_BUILD_TIME=$(GATSBY_BUILD_TIME) bash rollbar-deploy.sh

.PHONY: build

node_modules: package.json
	yarn install
	touch node_modules

# tools
prettier: node_modules
	./node_modules/.bin/prettier --write --parser=typescript "**/*.ts?(x)"
.PHONY: prettier

errors:
	./node_modules/.bin/tsc --noEmit --project .
.PHONY: errors

lint:
	./node_modules/.bin/tslint app/*.ts?
.PHONY: lint

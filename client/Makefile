built-dev:
	docker build -t react-app .

built-local:
	docker build \
	 -t react-app-production:local \
	 --build-arg CADDYFILE=Caddyfile.local \
	 --build-arg BASE_URL=http://localhost:5000/api \
	 -f Dockerfile.production .

built-production:
	docker build \
	-t react-app-production \
	--build-arg CADDYFILE=Caddyfile.production \
	--build-arg BASE_URL=http://137.184.62.156//api \
	-f Dockerfile.production .
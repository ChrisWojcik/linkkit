# Linkkit

Linkkit is a WIP of a reddit clone built with node.js an Vue. The local dev environment uses docker containers.

## Setup

This guide will assume that you are using a Mac and already have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.

### Docker build

Build the environment using the docker-compose.yml file for configuration. This will start the container, run `npm install`, and expose port 3000 to the host machine. NOTE: npm dependencies are installed INSIDE the app container to keep the environment consistent - the node_modules directory is not mounted. Make sure you run any future `npm install` commands INSIDE the running container (see below) OR shut down the container and run `npm install` on the host before rebuilding the container which will then pick up the updated package.json.

```bash
docker-compose up --build
```

The app should now be accessible at `http://localhost:3000`

## Some Helpful docker-compose Commands
See full `docker-compose` documentation [here](https://docs.docker.com/compose/). Run `docker-compose --help` to see available commands and use the `help` flag with specific commands to see more options e.g. `docker-compose up --help`.

Start all containers:

```bash
docker-compose up
```

Shut down all containers:

```bash
docker-compose down
```

Run a command inside the (running) app container in the project directory (e.g. npm install):

```bash
docker-compose exec app npm intall
```

Open a bash shell inside the web container:

```
docker-compose exec app bash

# type exit to exit the shell
```

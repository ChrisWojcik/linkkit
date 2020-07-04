FROM node:12.18.0

USER node

RUN mkdir /home/node/node_app
RUN mkdir /home/node/node_app/app

WORKDIR /home/node/node_app

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

ENV PATH /home/node_app/node_modules/.bin:$PATH

WORKDIR /home/node/node_app/app

COPY --chown=node:node . .

CMD ["npm", "run", "dev"]

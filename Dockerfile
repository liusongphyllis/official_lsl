### Health check 'curl /ping'
FROM reg.yunpro.cn/library/node:9.11.1
WORKDIR /app
ADD . /app/
ENV PORT=20000
ENV PROJECT_LEVEL=production
ENV MONGO_STOCK_DB='mongodb://root:h4R1FWWVcNiR@mongo-bjwjh-v4-1.localhost:1304,mongo-bjwjh-v4-2.localhost:1304,mongo-bjwjh-v4-3.localhost:1304/rmk-invoicing?replicaSet=bjwjh-v4&authSource=admin'
ENV MONGO_DB='mongodb://open:h4R1FWWVcNiR@mongo-bjwjh-v4-1.localhost:1304,mongo-bjwjh-v4-2.localhost:1304,mongo-bjwjh-v4-3.localhost:1304/rmk-open-api?replicaSet=bjwjh-v4&authSource=admin'
ENV MONGO_URI='mongodb://bjwjh-admin:c9yJ2gBFkp7U6@mongo-bjwjh-rs-1.localhost:1302,mongo-bjwjh-rs-2.localhost:1302,mongo-bjwjh-rs-3.localhost:1302/tag_urls?replicaSet=bjwjh-rs&authSource=admin'
RUN \
    rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ENV NODE_ENV='production'
EXPOSE 20000
CMD node server.js

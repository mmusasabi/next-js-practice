# 参考：https://qiita.com/reflet/items/e7c33f84ab43ab237ee4

FROM node:13.6.0-stretch-slim

# locale & timezone (Asia/Tokyo)
# https://github.com/moby/moby/issues/12084
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

# system update
RUN apt-get update && \
    apt-get install -y vim less

WORKDIR /app

# install packages.
RUN yarn install

# EXPOSE 3000
# CMD ["yarn", "run", "dev"]
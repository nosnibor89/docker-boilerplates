FROM python:3

RUN pip install scrapy

WORKDIR /app
ADD . /app

CMD ["scrapy", "runspider", "spider.py"]

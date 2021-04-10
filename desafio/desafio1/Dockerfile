FROM golang:1.14.4-alpine

ENV PORT 8000
WORKDIR /usr/app
COPY . .
RUN GOOS=linux go build main.go
ENV ADDR=0.0.0.0
EXPOSE 8000
CMD  ["./main"]
# PYCO Group Test

This repo is for PYCO Group Test which using Nodejs 

## Enviroment Requirements
- Node 12.10.0
- Postman

## Installation

Please following step by step below:
```bash
1. $ git clone https://github.com/hhhuythong1990/pyco_group_test.git
```

```bash
2. $ cd pyco_group_test
```

```bash
3. $ npm install
```

To start server API
```bash
$ npm run start:dev
```

To run unit test
```bash
$ npm run test
```

## API Document

1. Rotate picture

You can call this api by use endpoint: 

```
[POST] http://localhost:3000/rotates
```

with body

```
{
	"grid": [[0, 16, 255],[8, 128, 32],[0, 0, 0]],
	"k": 1
}
```

Api will return array

```
{
  [[0, 8, 0],[0, 128, 16],[0, 32, 255]]
}
```

2. Hotel Reservation

You can call this api by use endpoint: 

```
[POST] http://localhost:3000/hotels
```

with body

```
{
	"arrivals": [1, 3, 5],
	"departures": [2, 6, 10],
	"k": 1
}
```

Api will return 

```
{
  False. At day = 5, there are 2 guest in hotel. But we have 1 room.
}
```
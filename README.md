# Nodejs Test

This is an application use nodejs.

## Enviroment Requirements
```bash
$ node --version
```
  v12.10.0

## Installation

Please following step by step below:
```bash
1. git clone https://github.com/hhhuythong1990/pyco_group_test.git
```
2. cd pyco_group_test

3. 

3. From the root of your repository, start the development server with
   `npm start` or you can use npm script command `npm run start:dev`.

4. To run unit test, use npm script command `npm run test`

## API Route

We can use Postman app to test api: 

1. Rotate picture

Problem Description

Rotate an matrix array with k number of rotations:

 - First we get the length of array size (eg: [1, 2, 3] => we get length 3).

 - Second we loop on matrix and return item in children array with index array.

 - It will loop n x n times.

 - Because it not create new array to handle the new matrix, so it took not so much (36B based Postman size response).

You can call this api by use this: 

```
[POST] http://localhost:2023/api/rotate-picture
```

with params

```
{
	"grid": [[1,2,3],[1,2,3],[1,2,3]],
	"k":2
}
```

this will return the result 

```
{
    "result": [[3,2,1],[3,2,1],[3,2,1]]
}
```

2. Hotel Reservation

Problem Description

Find out whether there are enough rooms in the hotel to satisfy the demand.

 - We get merge arrivals and departures array into one with item format
 {type: 'arrival' or 'departure', date} and sort array increase by date property.

 - We create variable countRoom = 0 that will check enought rooms for booking.

 - We loop on the array that we created, we check each item.

 - If type of item is 'arrival' we plus 1 for countRoom and check if countRoom > the rooms hotel has, 
 we will return false and break the loop.

 - If type of item is 'departure' we minus 1 for countRoom and countinue to loop.

 - Until the loop, if no mather thing, there will return true.

 - It will loop with n times that n < array merge.

 - It took 15B based Postman response size.

You can call this api by use this: 

```
[POST] http://localhost:2023/api/hotel-booking
```

with params

```
{
	"arrivals": [1, 3, 5],
	"departures": [2, 6, 10],
	"k": 2
}
```

this will return the result 

```
{
    "result": true or false
}
```

3. Product Recommendation

You can call this api by use this: 

```
[POST] http://localhost:2023/api/product-recomment
```

with params

```
{
	"age": 18,
	"student": false,
	"income":25000
}
```

this will return the result 

```
{
    "bundle": 2 (0, 1, 2 or 3)
}
```
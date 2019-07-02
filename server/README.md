# coding-challenge-backend

## Build
```bash
$ git clone git@github.com:mehdi-alouane/dabadoc.git
$ npm install
$ npm run start
```

## API

### User routes: 

#### Register

```bash
POST /api/v1/user/register HTTP/1.1

Host: localhost:3000

Content-Type: application/json

body: {
	"email": "user@email.com",
	"password": "userpassword"
}
```

#### Login

```bash
POST /api/v1/user/login HTTP/1.1

Host: localhost:3000

Content-Type: application/json

body: {
	"email": "user@email.com",
	"password": "userpassword"
}
```
### Question routes:

#### Create a question

```bash
POST /api/v1/question/create HTTP/1.1

Host: localhost:3000

Content-Type: application/json

body: {
	"userID": "5d1b0ca89b42121acdc0cad0",
	"title": "a question#1",
	"content": "a question content",
	"location": "53.2734,-7.77832031"
}
```

#### Get Question By Distance

```bash
GET /api/v1/question/list/:coordinates HTTP/1.1

Host: localhost:3000

Content-Type: application/json

Params: {
  page: result page number 
    - example: GET /api/v1/shops/nearby/-6.75175,33.96853?page=3
    - default value: 1
    
  only: number of shops in every page 
    - example: GET /api/v1/shops/nearby/-6.75175,33.96853?page=5?only=20
    - default value: 10
}
Authorization: Bearer /TOKEN FROM THE RESPONSE OF Regester or Login/
```

### Answers routes:

#### Add an answer

```bash
POST /api/v1/answer/create HTTP/1.1

Host: localhost:3000

Content-Type: application/json

body: {
	"questionID": "5d17ffbceb300015e1c02847",
	"content": "answer to the question"
}
Authorization: Bearer /TOKEN FROM THE RESPONSE OF Regester or Login/ 
```

#### Get answers

```bash
GET /api/v1/answer/list/:questionID HTTP/1.1

Host: localhost:3000

Content-Type: application/json

Params: {
	"questionID": "5d17ffbceb300015e1c02847"
}
```

### Favourites questions routes:

#### Add to favourites

```bash
POST /api/v1/favourite/add HTTP/1.1

Host: localhost:3000

Content-Type: application/json

Authorization: Bearer /TOKEN FROM THE RESPONSE OF Regester or Login/ 

body: {
	"userID": "5d1b0ca89b42121acdc0cad0",
	"questionID": "5d1b115ec35f912530677b40"
}
```
#### Get favourites

```bash
GET /api/v1/favourite/list/:userID HTTP/1.1

Host: localhost:3000

Content-Type: application/json

Params: {
	"userID": "5d1b0ca89b42121acdc0cad0"
}
```

#### Remove from favourites
```bash
POST /api/v1/favourite/delete-question HTTP/1.1

Host: localhost:3000

Content-Type: application/json

body: {
	"userID": "5d198122cc73544b3c2862dc",
	"questionID": "5d19b15f9c3b0b22bb28fab2"
}
Authorization: Bearer /TOKEN FROM THE RESPONSE OF Regester or Login/ 

```



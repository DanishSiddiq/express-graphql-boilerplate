# express-graphql-boilerplate - In Progress
Server setup with express framework and graphql

**Features**
* Express framework
* GraphQL
* MongoDB 
* configurations are in .config.json and local configuration can be override in .config.override.json

#
**Install dependencies:**
* yarn install

#
**Build/Run application:**
* yarn start (for production environment) **/**
* yarn dev (for development environment)

#
**Application health status:**
* information about the application and its health status

**Get:**
```
http://localhost:3130/health
http://localhost:3130/keep-alive
http://localhost:3130/ping
http://localhost:3130/version
```

#
**GraphQL Student Queries:**

```
query getStudent($studentId: String, $firstName: String) {
    byId: findOne(input: { _id: $studentId }) {
    		...studentFields
  	}
  	byName: findOne(input: { firstName: $firstName }) {
    		...studentFields
    }
}

mutation createStudent($firstName: String!, $lastName: String!, $registrationNumber: Int!, $email: String!) {
  create(input: { firstName: $firstName, lastName: $lastName, registrationNumber: $registrationNumber, email: $email }) {
    ... studentFields
  }
}

mutation updateStudent($studentId: String!, $firstName: String!) {
  update(_id: $studentId, input: { firstName: $firstName }) {
    code
    msg
  }
}

mutation deleteStudent($studentId: String!) {
  delete(_id: $studentId){
    code
    msg
  }
}


fragment studentFields on Student {
  			_id
        firstName
    		lastName
    		registrationNumber
    		email
		    createdAt
    		updatedAt
}
```

#
**GraphQL Queries Variables:**
```
{
  "studentId": "5e727fa7b9f23a1c643e671f",
  "firstName": "Danish",
  "lastName": "Siddiq",
  "registrationNumber": 543678,
  "email": "danish.siddiq@gmail.com"
}
```

#
**Improvements:**

Feel free to add further features into it


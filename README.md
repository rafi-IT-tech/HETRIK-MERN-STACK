# HETRIK-MERN-STACK
This is Hetrik a Web App Project build with MERN Stack 
## API TODO DOCUMENTATION

#### Register

```http
  POST api/auth/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email |
| `username` | `string` | **Required**. username |
| `fullname` | `string` | **Required**. fullname |

| `password` | `string` | **Required**. Password |

#### Login

```http
  POST api/auth/login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. Password |

#### Create User

```http
  POST api/user/users
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | name |
| `email` | `string` | email |
| `username` | `string` | username |
| `password` | `string` | password |



| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `Token` |


#### Read All todo by userID

```http
  GET api/user/users
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `JWT Token` |


#### Read todo detail by id

```http
  GET api/user/users/${id}
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `JWT Token` |

| params | value                |
| :-------- | :------------------------- |
| `id` | `id of todo` |

#### Edit Todo By Id

```http
  PUT api/user/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo |

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `value`      | `string` | **Required**. value todo |
| `status`      | `boolean` | **Required**. status todo |

#### Delete Todo By Id

```http
  DELETE api/user/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo |

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |


#### Delete All Todo

```http
  POST api/todos/delete_all
```

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |

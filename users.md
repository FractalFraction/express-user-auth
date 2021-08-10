## Structure 

Browser <-> Server <-> ORM <-> DB

DB = POSTGRES

SERVER = EXPRESS (ROUTERS + REQUESTS) + EJS (TEMPLATE ENGINE) + VIEWS + SEQUELIZE MODELS

ORM = SEQUELIZE 

REST
CRUD (Create, Read, Update, Delete)

## Workshop
Navigate to index of application. 

Two links on index page
- Sign in
- Sign up

Need to signup before sign in is possible. 

Sign up will make a get request and then take the user to a new page ```GET '/registrations/new'```. Other naming conventions '/users' etc. possible. 

### Signup
User details
- Email
- Password
- Submit form
  
Make ```POST /'registrations'```

0. Encrypt password (Very Important!!!) with bcrypt. (Hash password)
1. Insert email, password-hash?? into users table as a new record
2. ```GET '/top-secret'```

Applications only store password hashes never plain text passwords.

A session is a scope within our express app over all routers. It persists data temporarily i.e only while the application is running or for some length of time (e.g an hour, a day etc.). 

Store the user id in the session by doing:
```js
req.session.userId = user.id
```

Then pass the user id to something else by doing:
```js
id: req.session.userId
```

### Getting Started
1. Follow setup instructions
2. Read existing code, read specs to understand objectives
3. Set up User Model, add migrations as appropriate
4. Add environment variables.

### Bcrypt Basics
Pass plain string password as a parameter to bcrypt

### Questions
- What conventions are there for naming your routes?
- Why not just GET /registrations? Is to make it explicit to whoever is reading you code?
- Where is the plain text password stored? Does it need to be stored anywhere? Or is only the hash that get stored and then decrypthed when neeeded?
- What was the third party library to encrypt passwords? bcrypt
- Draw diagrams first
- How does password hashing work in general? And bcrypt specifically? 
- How to decrypt a passwordHash? 
- Public/Private keys???
- How do we identify the user? Identify by their user id. Store the user id in the application - where? req locals, node, or a user session.
- What can user sessions control? Why not use req.app.locals? Why is creating a session better - what else can it do? 
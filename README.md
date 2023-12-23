# 🚀 Quiz Management App

## Overview

Quiz Management App is a robust application designed to facilitate the creation, management, and tracking of quizzes. Developed using Next.js, Typescript, Redux, Express, PostgreSQL, and Prisma, this app provides a seamless and engaging experience for both admins and performers.

## Features

### 🎭 User Authentication:

- Roles: Admin, Performer.
- Effortless sign-up, log-in, and account management.

### 📝 Quiz Management:

- Admins can create, edit, and delete quizzes.
- Intuitive categorization (e.g., frontend, fullstack).
- Support for both single and multiple-choice questions.

### 🎯 Quiz Taking:

- Performers select a category and answer 10 random questions.
- Instant feedback and real-time score calculation.
- Leaderboard showcasing top performers.

### 📊 Score Tracking:

- Efficient storage and display of user scores.

### 🛠️ Database:

- Utilizes PostgreSQL with Prisma ORM for optimal data handling.

### 🚨 Error Handling:

- Robust mechanisms ensure a smooth user experience.

### 🌐 User-Friendly Interface:

- Next.js and Redux contribute to a clean and intuitive UI.

# Entity-Relationship Diagram (ERD)

```

+---------------------+      +------------------------+      +----------------------+
|        User         |      |        Profile         |      |         Quiz         |
+---------------------+      +------------------------+      +----------------------+
| id                  |      | id                     |      | id                   |
| email               |      | userId          -----> |      | title                |
| password            |      | username        <---- |      | category             |
| needsPasswordChange |      | firstName              |      | creatorId            |
| role                |      | lastName               |      | createdAt            |
| createdAt           |      | dateOfBirth            |      | updatedAt            |
| updatedAt           |      | phoneNumber            |      |                      |
|                     |      | address                |      |                      |
|                     |      | bio                    |      |                      |
|                     |      | profileImage           |      |                      |
|                     |      | createdAt              |      |                      |
|                     |      | updatedAt              |      |                      |
|                     |      |                        |      |                      |
|                     |      |                        |      |                      |
|                     |      |                        |      |                      |
|                     |      |                        |      |                      |
+---------------------+      +------------------------+      +----------------------+
        |                       |
        |                       |
        V                       V
+---------------------+      +---------------------+      +---------------------+
|       Question      |      |        Answer       |      |        Score        |
+---------------------+      +---------------------+      +---------------------+
| id                  |      | id                  |      | id                  |
| content             |      | content             |      | score               |
| correctOptionId     |      | isCorrect           |      | userId              |
| quizId        -----> |      | questionId   -----> |      | quizId        -----> |
|                     |      |                     |      | createdAt           |
|                     |      |                     |      | updatedAt           |
|                     |      |                     |      |                     |
|                     |      |                     |      |                     |
|                     |      |                     |      |                     |
|                     |      |                     |      |                     |
+---------------------+      +---------------------+      +---------------------+


```

**Main Routes**
- **POST /api/v1/:** Root route to include all sub-routes.

**Auth Routes**
- **POST /api/v1/auth/register:** Register a new user.
- **POST /api/v1/auth/login:** Log in a user.
- **POST /api/v1/auth/refresh-token:** Refresh the authentication token.
- **POST /api/v1/auth/change-password:** Change the password of a user.

**Profile Routes**
- **GET /api/v1/profiles/all-profile:** Get all profiles.
- **GET /api/v1/profiles/specific-profile/:userId:** Get a specific profile by userId.
- **PATCH /api/v1/profiles/update-profile/:userId:** Update a profile by userId.
- **DELETE /api/v1/profiles/delete-profile/:userId:** Delete a profile by userId.

**Quiz Management Routes**
- **POST /api/v1/quizzes/:** Create a new quiz.
- **PUT /api/v1/quizzes/:id:** Edit a quiz by ID.
- **DELETE /api/v1/quizzes/:id:** Delete a quiz by ID.

**Score Routes**
- **GET /api/v1/scores/:userId:** View scores for a user.
- **GET /api/v1/scores/leaderboard/:category:** Get the leaderboard for a specific category.

**Quiz Tracking Routes**
- **GET /api/v1/quizzesTack/:id/start:** Start a quiz by ID.
- **POST /api/v1/quizzesTack/:id/submit:** Submit answers for a quiz by ID.

**User Routes**
- **GET /api/v1/users/all-users:** Get all users.
- **GET /api/v1/users/:id:** Get a user by ID.
- **PUT /api/v1/users/:id:** Update a user by ID.
- **DELETE /api/v1/users/:id:** Delete a user by ID.


# API ENDPOINTS & DATA

### Auth Routes
#### `POST /api/v1/auth/register`
- Register a new user.

Request Body:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### `POST /api/v1/auth/login`
- Log in a user.

Request Body:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### `POST /api/v1/auth/refresh-token`
- Refresh the authentication token.

Request Body:
```json
{
  "refreshToken": "your_refresh_token"
}
```

#### `POST /api/v1/auth/change-password`
- Change the password of a user.

Request Body:
```json
{
  "oldPassword": "old_securepassword",
  "newPassword": "new_securepassword"
}
```

### Profile Routes
#### `GET /api/v1/profiles/all-profile`
- Get all profiles.

#### `GET /api/v1/profiles/specific-profile/:userId`
- Get a specific profile by userId.

#### `PATCH /api/v1/profiles/update-profile/:userId`
- Update a profile by userId.

Request Body:
```json
{
  "username": "new_username",
  "firstName": "new_firstname",
  "lastName": "new_lastname",
  "dateOfBirth": "new_dateOfBirth",
  "phoneNumber": "new_phoneNumber",
  "address": "new_address",
  "bio": "new_bio",
  "profileImage": "new_profileImage"
}
```

#### `DELETE /api/v1/profiles/delete-profile/:userId`
- Delete a profile by userId.

### Quiz Management Routes
#### `POST /api/v1/quizzes/`
- Create a new quiz.

Request Body:
```json
{
  "title": "New Quiz",
  "category": "Science",
  "questions": [
    {
      "content": "Question 1",
      "options": [
        {"content": "Option A", "isCorrect": true},
        {"content": "Option B", "isCorrect": false}
      ],
      "correctOptionId": 1
    }
  ]
}
```

#### `PUT /api/v1/quizzes/:id`
- Edit a quiz by ID.

Request Body:
```json
{
  "title": "Updated Quiz Title",
  "category": "Updated Science",
  "questions": [
    {
      "content": "Updated Question 1",
      "options": [
        {"content": "Updated Option A", "isCorrect": true},
        {"content": "Updated Option B", "isCorrect": false}
      ],
      "correctOptionId": 1
    }
  ]
}
```

#### `DELETE /api/v1/quizzes/:id`
- Delete a quiz by ID.

### Score Routes
#### `GET /api/v1/scores/:userId`
- View scores for a user.

#### `GET /api/v1/scores/leaderboard/:category`
- Get the leaderboard for a specific category.

### Quiz Tracking Routes
#### `GET /api/v1/quizzesTack/:id/start`
- Start a quiz by ID.

#### `POST /api/v1/quizzesTack/:id/submit`
- Submit answers for a quiz by ID.

Request Body:
```json
{
  "answers": [
    {"questionId": "question_id_1", "selectedOptionId": 1},
    {"questionId": "question_id_2", "selectedOptionId": 2}
  ]
}
```

### User Routes
#### `GET /api/v1/users/all-users`
- Get all users.

#### `GET /api/v1/users/:id`
- Get a user by ID.

#### `PUT /api/v1/users/:id`
- Update a user by ID.

Request Body:
```json
{
  "email": "new_email@example.com",
  "password": "new_securepassword",
  "role": "admin"
}
```

View the API documentation on Postman [here](https://documenter.getpostman.com/view/20661145/2s9YkrcLFx).



## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Hamed-Hasan/Quiz-management-frontend.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure PostgreSQL and Prisma:**
   - Set up a PostgreSQL database.
   - Configure the connection details in the Prisma configuration file (`prisma/schema.prisma`).

4. **Run the app seamlessly:**
   ```bash
   npm start
   ```

## Usage

- Admins log in to effortlessly manage quizzes.
- Performers sign up or log in for a seamless quiz-taking experience.
- Create, manage, and partake in quizzes with ease.

## Contributing

1. Fork the repository.
2. Develop your feature in a dedicated branch.
3. Submit a pull request for seamless integration.

## License

MIT License - [Details](link-to-license)

Feel free to open issues for feedback or contribute to enhancing the quiz experience. Happy quizzing! 🧠✨
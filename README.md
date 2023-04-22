# Fitness App

Given two files `app.js` and a database file `fitnessApp.db` consisting of two tables `fitness_details` and `exercises_details`.

Written APIs to perform operations on the tables `fitness_details` and `exercises_details` containing the following columns,

** Fitness Details Table **


| Column    | Type    |
| ---------- | ------- |
| program_id   | INTEGER |
| program_name | TEXT    |


** Exercises Details Table **

| Column    | Type    |
| ---------- | ------- |
| exercise_id   | INTEGER |
| exercise_name | TEXT    |
| exercise_length_in_minutes | INTEGER |



### API 1

#### Path: `/create-fitness/`

#### Method: `POST`

#### Description:

Creates a new fitness program in the fitness_details table.

#### Request

```
{
    "programId":2,
    "programName":"Power Hour"
}
```

#### Response

```
Fitness Program Created Successfully!
```


### API 2

#### Path: `/edit-fitness/:programId/`

#### Method: `PUT`

#### Description:

Edits the details of a specific program based on the program ID

#### Request

```
{
    "programName":"Fit&Fun"
}
```

#### Response

```
Fitness Program Edited!
```


### API 3

#### Path: `/delete-fitness/:programId/`

#### Method: `DELETE`

#### Description:

Deletes the details of a specific program based on the program ID


#### Response

```
Fitness Program Removed!
```


### API 4

#### Path: `/create-exercise/`

#### Method: `POST`

#### Description:

Creates a new exercise details in the exercises_details table.

#### Request

```
{
    "exerciseId":2,
    "exerciseName":"Push-ups",
    "exerciseLengthInMinutes":15
}
```

#### Response

```
Exercise Details Created Successfully!
```


### API 5

#### Path: `/delete-exercise/:exerciseId/`

#### Method: `DELETE`

#### Description:

Deletes the details of a specific exercise based on the exercise ID


#### Response

```
Exercise Removed!
```
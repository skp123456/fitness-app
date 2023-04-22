const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "fitnessApp.db");

let db = null;

//Initializing Database and Server

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running at http://localhost:3000");
    });
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

//Create fitness program API

app.post("/create-fitness/", async (request, response) => {
  const programDetails = request.body;
  const { programId, programName } = programDetails;
  const createFitnessProgramQuery = `
    INSERT INTO fitness_details
    (program_id,program_name)

    VALUES
    (
        ${programId},
        '${programName}'
    );
  `;
  await db.run(createFitnessProgramQuery);
  response.send("Fitness Program Created Successfully!");
});

//Edit fitness program API

app.put("/edit-fitness/:programId/", async (request, response) => {
  const { programId } = request.params;
  const programDetails = request.body;
  const { programName } = programDetails;

  const editFitnessProgramQuery = `
    UPDATE fitness_details
    SET
    program_name = '${programName}'
    WHERE
    program_id = ${programId};
  `;
  await db.run(editFitnessProgramQuery);
  response.send("Fitness Program Edited!");
});

//Delete fitness program API

app.delete("/delete-fitness/:programId/", async (request, response) => {
  const { programId } = request.params;
  const deleteFitnessProgramQuery = `
        DELETE 
        FROM fitness_details
        WHERE
        program_id = ${programId};
    `;
  await db.run(deleteFitnessProgramQuery);
  response.send("Fitness Program Removed!");
});

//Create exercises API

app.post("/create-exercise/", async (request, response) => {
  const exerciseDetails = request.body;
  const { exerciseId, exerciseName, exerciseLengthInMinutes } = exerciseDetails;
  const createExerciseQuery = `
    INSERT INTO exercises_details
    (exercise_id, exercise_name, exercise_length_in_minutes)
    
    VALUES
    (
        ${exerciseId},
        '${exerciseName}',
        ${exerciseLengthInMinutes}
    );

  `;
  await db.run(createExerciseQuery);
  response.send("Exercise Details Created Successfully!");
});

//Delete exercise API

app.delete("/delete-exercise/:exerciseId/", async (request, response) => {
  const { exerciseId } = request.params;
  const deleteExerciseQuery = `
        DELETE 
        FROM exercises_details
        WHERE
        exercise_id = ${exerciseId};
    `;
  await db.run(deleteExerciseQuery);
  response.send("Exercise Removed!");
});

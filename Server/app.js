const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

//  //Make sure to put in this order: bodyParser.json() first.
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(2000, (err) => {
  console.log("runing on port 301");
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // or 127.0.0.1
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:  process.env.DB_DATABASE,
});

connection.connect(function(err) {
  if (err) {
    console.error('Database cannot be connected' + err.stack);
    return;
  }
  console.log('Database Connected successfully ');
});



//create schemas controler
app.get("/install",(req,res)=>{

    // let productTable='CREATE TABLE Persons (  Personid int NOT NULL AUTO_INCREMENT, LastName varchar(255) NOT NULL,   FirstName varchar(255),   Age int,  PRIMARY KEY (Personid)); ';
    // mysqlcon.query(productTable,(err,results,field)=>{
    //     if(err)console.log(err)
    //         else console.log("table created successfully")
    // })

    let VacancyTable='CREATE TABLE IF NOT EXISTS Jobs(JOB_ID int NOT NULL AUTO_INCREMENT,JOB_TITLE varchar(35) NOT NULL, COMPANY varchar(10) NOT NULL,LOCATION varchar(10) NOT NULL, DESCRIPTION varchar(10), SALARY decimal(6,0),PRIMARY KEY (JOB_ID));'

    connection.query(VacancyTable,(err,result)=>{
        if(err)console.log(err)
            else console.log("table created successfully")
    })

})



//loading jobs controlor
app.get("/", (req, res) => {
  let JobsTable = "SELECT * FROM jobs ORDER BY JOB_TITLE ASC ";
  connection.query(JobsTable, (err, rows, fields) => {
    console.log(rows);
    let data = { Jobs: [] };
    data.Jobs = rows;
    let result = JSON.stringify(data);

    if (!err) {
      res.end(result);
    } else {
        return res
          .status(500)
          .json({
            message: `no data found here ${err.sqlMessage || err.message
            }`,
          });
    }
  });
});


//post a job controler
//http://localhost:2000/ManageJobs/PostJob
app.post("/ManageJobs/PostJob", (req, res) => {
  const reqBody = req.body;

  const sql =
    "INSERT INTO jobs (COMPANY, DESCRIPTION, JOB_TITLE, LOCATION, SALARY) VALUES (?, ?, ?, ?, ?)";

  connection.query(
    sql,
    [
      reqBody.Company,
      reqBody.Description,
      reqBody.Jtitle,
      reqBody.Location,
      reqBody.Salary,
    ],
    (err, result) => {
      if (err) {
        // Log the error and send it in the response (for debugging purposes)
        console.error("Database Insertion Error:", err);

        // Include more details in the response for debugging
        return res
          .status(500)
          .json({
            message: `Error during registration for ${req.body.Company}: ${r.sqlMessage || err.message
            }`,
          });
      } else {
        // Log the insert ID for debugging (optional)
        console.log("Insert ID:", result.insertId);

        // Return success response with affected rows
        return res
          .status(200)
          .json({
            message: "Job posted successfully",
            affectedRows: result.affectedRows,
          });
      }
    }
  );
});




//update job controller
//http://localhost:2000/jobs/${selectedJob.JOB_ID}

// Update job controller
// http://localhost:2000/ManageJobs/:jobID



app.put("/ManageJobs/UpdateJob/:jobID", (req, res) => {
  const jobId = req.params.jobID;
  const updatedJob = req.body;
  console.log(jobId)
  const sql =
    "UPDATE jobs SET COMPANY = ?, DESCRIPTION = ?, JOB_TITLE = ?, LOCATION = ?, SALARY = ? WHERE JOB_ID = ?";

  connection.query(
    sql,
    [
      updatedJob.Company,
      updatedJob.Description,
      updatedJob.Jtitle,
      updatedJob.Location,
      updatedJob.Salary,
      jobId, // jobId to update the specific job
    ],
    (err, result) => {
      if (err) {
        console.error("Database Update Error:", err);
        return res.status(500).json({
          message: "Error updating job",
          error: err.message, // For debugging
        });
      } else {
        return res.status(200).json({
          message: "Job updated successfully",
          affectedRows: result.affectedRows,
        });
      }
    }
  );
});


//delete job controler
app.delete("/ManageJobs/DeleteJob/:jobID", (req, res) => {
  const jobId = req.params.jobID;
 
  console.log(jobId)
  const sql =
    "DELETE FROM JOBS WHERE JOB_ID = ?";

  connection.query(
    sql,
    [
      jobId, // jobId to DELETE the specific job
    ],
    (err, result) => {
      if (err) {
        console.error("JOB delete Error:", err);
        return res.status(500).json({
          message: "Error deleting job",
          error: err.message, // For debugging
        });
      } else {
        return res.status(200).json({
          message: "Job deleted successfully",
          affectedRows: result.affectedRows,
        });
      }
    }
  );
});


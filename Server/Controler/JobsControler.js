const dbcon = require("../DBconfig/Dbconfig");

async function GetAllJobs(req, res) {
    let JobsTable = "SELECT * FROM jobs ORDER BY JOB_ID DESC";
    
    try {
        const rows = await dbcon.query(JobsTable);
        let data = { Jobs: rows };
        let result = JSON.stringify(data);
        
        res.end(result);
    } catch (err) {
        return res.status(500).json({
            message: `No data found here: ${err.sqlMessage || err.message}`,
        });
    }
}
async function PostJob(req,res) {
  try{
   const { Company,Description,Jtitle,Location,Salary}=req.body;
   const sql ="INSERT INTO jobs (COMPANY, DESCRIPTION, JOB_TITLE, LOCATION, SALARY) VALUES (?, ?, ?, ?, ?)";
   await   dbcon.query(sql,[Company,Description,Jtitle,Location,Salary])
      return res
                .status(200)
                .json({
                  message: "Job posted successfully"
                 
                });
  }catch(err){
    console.log(err.message)
  }
  // console.log("posted job")
  
}
async function UpdateJob(req,res) {
  const {jobID}=req.params;
  const sql ="UPDATE jobs SET COMPANY = ?, DESCRIPTION = ?, JOB_TITLE = ?, LOCATION = ?, SALARY = ? WHERE JOB_ID = ?";
  const {Company,Description,Jtitle,Location,Salary}  =req.body
  dbcon.query(sql,[Company,Description,Jtitle,Location,Salary, jobID])
  return res
  .status(200)
  .json({
    message: "Job updated successfully"
   
  }); 
}
async function DeleteJob(req,res) {
    const {jobID} = req.params; 
  const sql ="DELETE FROM JOBS WHERE JOB_ID = ?";

  dbcon.query(sql,[jobID])
  return res
  .status(200)
  .json({
    message: "Job deleted successfully"
   
  });
  
}
module.exports = { GetAllJobs,PostJob,UpdateJob,DeleteJob };

const dbcon = require("../DBconfig/Dbconfig");
const { StatusCodes } = require("http-status-codes");

 // Fetch documents
 const fetchDocument = async (req, res) => {
    const sql = "SELECT * FROM documents;";
  
    try {
      // Assuming dbcon.query returns a promise
      const [rows] = await dbcon.query(sql); // Use await for async query
      const data = { Documents: rows };
  
      // Send response as JSON
      res.status(200).json(data);
    } catch (err) {
      console.error("Database query error:", err);
      res.status(500).json({ error: "Database error" }); // Handle errors appropriately
    }
  };
  // Upload document
  const uploadDocument = async (req, res) => {


    try{
        const { description } = req.body;
      
        if (!req.file) {
          return res.status(400).json({ error: "No file uploaded." });
        }
      
        const doc = req.file.filename;
        console.log(req.file)
      
        const sql = "INSERT INTO documents(description, document) VALUES(?, ?)";
        dbcon.query(sql, [description, doc]);
        return res.status(StatusCodes.OK).json({msg:"uploaded successfully"})

    }
    catch(err){
        console.log(err.message)
    }
  }
  
  // Delete document
  const deleteDocument = async (req, res) => {
  try{
    const { id } = req.params;
  
    const sql = "DELETE FROM documents WHERE id = ?";
    
    dbcon.query(sql, [id]);
    return res.status(StatusCodes.OK).json({msg:"Deleted successfully"})
  }catch(err){
    console.log(err.message)
}
  };
  
  module.exports = {
    fetchDocument,
    uploadDocument,
    deleteDocument
  };
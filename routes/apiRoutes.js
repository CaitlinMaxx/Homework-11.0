// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on note-data, waitinglist, etc.
// ===============================================================================

var noteData = require("../data/noteData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  
  app.post("/api/notes", function(req, res) {
    
    
      noteData.push(req.body);
      res.json(true);
    
  });


  app.post("/api/delete", function(req, res) {
    noteData = req.body;

    res.json({ ok: true });
  });
};

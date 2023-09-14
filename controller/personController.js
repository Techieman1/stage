const Person = require("../model/Person")


exports.getAllPersons = async (req,res)=>{
    try {
        let persons = await Person.find()
        if(persons.length ===0)
        return res.status(404).json({
            message: "no persons found"
        })
        res.status(200).json({
            message: "persons Found",
            persons
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })
    }
}



//get single user



exports.getPerson = async (req,res)=>{
    try {
        let id ={_id: req.params.id}
        let person = await Person.findOne(id)
        if(!person)
        return res.status(404).json({
            message: "person not found"
        })
        res.status(200).json({
            message: "person Found",
            person
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })
    }
}

//create a user

exports.createPerson = async (req,res)=>{
    try {
        let person = await req.body
        let created = await Person.create(person)
        if(!created)
        return res.status(400).json({
            message: "creation failed"
        })
        res.status(200).json({
            message: "persons created",
            person: created
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })
    }
}
exports.deletePerson = async (req,res)=>{
    try {
        let id ={_id: req.params.id}
        let deleted = await Person.findOneAndRemove(id)
        if(!deleted)
        return res.status(404).json({
            message: "person not deleted"
        })
        res.status(200).json({
            message: "person deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })   
    }
}

exports.updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, gender, age } = req.body;
    
        const updatedPerson = await Person.findByIdAndUpdate(
          id,
          {  name, gender, age },
          { new: true }
        );
    
        if (!updatedPerson) {
          return res.status(404).json({ error: 'Person not found' });
        }
    
        res.json(updatedPerson);
      } catch (error) {
        console.error('Error updating Person:', error);
        res.status(500).json({ error: 'An error occurred while updating the Person' });
      }
  
  };
  
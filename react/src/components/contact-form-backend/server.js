const express= require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();


const app=express();

app.use(cors()); //middleware i used to connect the app to the database
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI) //we connect  to mongodb
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.error('mongodb connection error:',err));

const ContactsSchema= new mongoose.Schema({ //schema and model where we define a contact model to represent form data
    name: String,
    email: String,
    message:String,
});
const Contact=mongoose.model("contact", ContactsSchema);

app.post("/api/contact", async (req,res) => { //create a post to save data
    try{
        const newContact=new Contact(req.body);
        await newContact.save();
        res.status(201).json({message:"Contact saves successefully!"});
    }
    catch(error){
        res.status(500).json({error:"Failed to save contact"});
    }
});

const PORT=process.env.PORT || 3001 ;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));






const Event =require("../models/event")

exports.createEvent=async(req,res)=>{
    try {
        const {title,description, location,date}=req.body
        const event =await Event.create({
            title,
            description,
            location,
            date,
            createdBy:req.user.id
        })
        res.status(201).json(event)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.getEvents =async (req,res)=>{
    try {
        const events =await Event.find().populate("createdBy", "name email")
        res.status(200).json(events)

    } catch(error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.updateEvent =async(req,res)=>{
    try{
        const updatedEvent =await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(updatedEvent)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

exports.deleteEvent=async (req,res)=>{
    try {
        await Event.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"Event Deleted"
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
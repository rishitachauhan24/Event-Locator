const express = require("express")
const router = express.Router()

const {createEvent, getEvents,updateEvent, deleteEvent} =require("../controllers/eventController")
const authMiddleware=require("../middleware/authMiddleware")

router.post("/create", authMiddleware, createEvent)
router.get("/all", getEvents)
router.post("/update/:id", authMiddleware, updateEvent)
router.delete("/delete/:id", authMiddleware, deleteEvent)

module.exports=router
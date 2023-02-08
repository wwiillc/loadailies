const Character = require('../models/charModel')
const mongoose = require('mongoose')

//get all dailies for all characters
const getCharacters = async (req,res) => {
    const characters = await Character.find({}).sort({createdAt: -1})

    res.status(200).json(characters)
}

//get a single char
const getChar = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such character'})
    }

    const character = await Character.findById(id)

    if (!character) {
        return res.status(404).json({error: 'No such character'})
    }

    res.status(200).json(character)
}

//create a new char
const createCharacter = async (req,res) => {
    const {name, una, chaos, guardian} = req.body

    //add doc to db
    try {
        const char = await Character.create({name, una, chaos, guardian})
        res.status(200).json(char)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a char
const deleteCharacter = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such character'})
    }

    const character = await Character.findOneAndDelete({_id})

    if (!character) {
        return res.status(404).json({error: 'No such character'})
    }

    res.status(200).json(character)
}

//update a char
const updateCharacter = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such character'})
    }

    const character = await Character.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!character) {
        return res.status(404).json({error: 'No such character'})
    }

    res.status(200).json(character)
}

module.exports = {
    getCharacters,
    getChar,
    createCharacter,
    deleteCharacter,
    updateCharacter
}
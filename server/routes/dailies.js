const express = require('express')
const {
    getCharacters,
    getChar,
    createCharacter,
    deleteCharacter,
    updateCharacter
} = require('../controllers/charController')

const router = express.Router()

//GET all dailies for all characters
router.get('/', getCharacters)

//GET a single character's dailies
router.get('/:id', getChar)

//POST a new character
router.post('/', createCharacter)

//DELETE a new character
router.delete('/:id', deleteCharacter)

//UPDATE a character
router.patch('/:id', updateCharacter)

module.exports = router
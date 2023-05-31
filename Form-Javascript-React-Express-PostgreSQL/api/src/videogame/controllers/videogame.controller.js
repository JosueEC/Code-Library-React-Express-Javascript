require('dotenv').config()
const { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_CREATED, HTTP_FOUND } = process.env

const { httpError } = require('../../helpers/helperError')

const { createVideogame } = require('../services/database/createVideogame.service')

const saveVideogame = async (req, res) => {
  try {
    const { name, description, image, released, platforms, genres } = req.body

    const newVideogame = await createVideogame({ name, description, image, released, platforms, genres })

    res.status(HTTP_BAD_REQUEST).send({
      code: Number(HTTP_CREATED),
      data: newVideogame
    })
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

// TODO: create the findAllVideogames service for this handler
const findVideogames = async (req, res) => {
  try {
    res.status(HTTP_FOUND).send({
      code: Number(HTTP_FOUND),
      data: 'found games in databaase handler'
    })
  } catch (error) {
    res.status(HTTP_NOT_FOUND).send({
      code: Number(HTTP_NOT_FOUND),
      error: 'Not Found'
    })
  }
}

module.exports = {
  saveVideogame,
  findVideogames
}

const { BadRequestError } = require('../errors')
const User = require('../models/User')

const { StatusCodes } = require('http-status-codes')

const getAllUsers = async (req, res) => {}
const updateUser = async (req, res) => {}
const findUserById = async (req, res) => {}

module.exports = { getAllUsers, updateUser, findUserById }

import express from "express";
const app = express()

/**
 * @module API
 */

/**
 * Index Route
 * 
 * @name index
 * @path {GET} /
 * 
 */
app.get('/', (req, res) => res.send('Welcome'))

/**
 * Userss Route
 * 
 * @name users
 * @path {POST} /users
 * 
 */
app.post('/users', (req, res) => res.send('Welcome'))
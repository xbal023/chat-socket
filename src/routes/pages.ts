import { Router } from 'express'
import Controller from '../controllers/pages'

const app = Router();

app.get('/login', Controller.login);
app.get('/register', Controller.register);
app.get('/', Controller.dashboard);

export default app;
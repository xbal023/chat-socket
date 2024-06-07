import 'dotenv/config'
import express, { Express, Request, Response } from 'express';
import path from 'path';


/** Importing all routes */
import pages from './routes/pages';

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use('/', express.static(path.join(process.cwd(), 'public')))
app.use('/', pages)
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello World")
})

app.listen(PORT, () => console.log("hello world"))
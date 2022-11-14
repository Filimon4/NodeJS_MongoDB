import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload"

const PORT = 5000
const URL_DB = "mongodb+srv://user:123@cluster0.pn8tzsx.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(URL_DB, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => {console.log(`SERVER IS LISTENING ${PORT}`)})
  } catch(e) {
    console.log(e)
  }
}

startApp()

//mongoDB 연결 부분.
import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleError = (error) => console.log("DB error", error);
const handleOpen = () => console.log("✅ connected to DB");
db.on("error", handleError);
db.once("open", handleOpen);

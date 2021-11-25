import { Express } from "express";
import bodyParser from "body-parser";
import { Mongoose } from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = // créer une sécurité pour cacher le pseudo et mdp
  "mongodb+srv://WaynePlanchenault:Wark-vadas1@freecluster.nz1xu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

Mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => app.listen);

// https://www.mongodb.com/cloud/atlas   (heberge la DB sur leur cloud)

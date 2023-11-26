const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const { allRouter } = require("./router");


const db = require("./models/");

db.mongoose
  .connect(db.url, {  }).then(()=> {
    // result 
    console.log("Database sudah Terhubung ");
  }).catch((err)=> {
    console.error("Tidak Dapat Terhubung di Database Dikarenakan  ", err);
    
    process.exit;
  });


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// apply global middleware
app.use(cors());
app.use(express.json());

app.use('/api',allRouter);


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

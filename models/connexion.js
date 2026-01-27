const mongoose =require('mongoose');


const connectionString ='mongodb+srv://christophallan77120_db_user:Cyw576wMa72f0XbB@allan77.beblfcr.mongodb.net/ticketHackBackend';    

mongoose.connect(connectionString, {connectTimeoutMS:2000 })
  .then(() =>console.log('✅ Database connected'))
  .catch(err =>console.error('❌ Database error:', err));
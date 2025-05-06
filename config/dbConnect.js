const {Sequelize}=require('sequelize');
 const sequelize= new Sequelize('banksystem','root','sag#0927@',{
    host:'localhost',
    port:3306,
    dialect:'mysql'
 });
 const dbConnection=async()=>{
    try{
        await sequelize.authenticate();
        console.log('Db connected')
    }catch(error){
        console.log('Unable to connect db',error)
    }
 };
 module.exports={dbConnection,sequelize}
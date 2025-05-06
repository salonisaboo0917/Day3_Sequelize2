const {DataTypes}=require("sequelize");
const{sequelize}=require("../config/dbConnect");

const UserModel=sequelize.define('user',{
    //firstName:DataTypes.STRING,
    name:{
        type:DataTypes.STRING,
        get(){
            const rawValue=this.getDataValue('name');
            return rawValue?"Mr. "+rawValue.toUpperCase():null;
        }
    },
    age:{
        type:DataTypes.VIRTUAL,
        get(){
            return rawValue?"age is"+rawValue:null;
        },
        set(value){
            throw new Error("Don not try to set the`age` value!");
        },
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
    },//Validation and Constraints
    //password:{
    //type:DataTypes.STRING(64),
    //validate:{
    //is:/^[0-9a-f]{64}$/i},
    
    {
        freezeTableName:true
    }
)

module.exports={UserModel};
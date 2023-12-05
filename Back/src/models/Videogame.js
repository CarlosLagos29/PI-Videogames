const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('Videogames',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue : DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        plataforms:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:true
        },
        released:{
            type:DataTypes.DATEONLY,
            allowNull:true
        },
        rating:{
            type:DataTypes.DECIMAL(3,2),
            allowNull:false,
            validate:{
                min: 0,
                max: 5
            }
        }
    },{timestamps: false})
}
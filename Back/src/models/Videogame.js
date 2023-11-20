const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('videogame',{
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
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
            type: DataTypes.ENUM("Xbox","PlayStation","PC","Nintendo"),
            allowNull: false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        },
        releaseDate:{
            type:DataTypes.DATE,
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
    })
}
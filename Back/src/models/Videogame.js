const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('Videogames',{
        // id: {
        //     type: DataTypes.UUID,
        //     allowNull: false,
        //     primaryKey: true, 
        // },
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
            allowNull:false
        },
        release:{
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
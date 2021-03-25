

module.exports=(sequelize,DataTypes)=>{
    const Item=sequelize.define("Item",{
       stock_keeping_unit:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        max_price:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        discount:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        sold:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true
        },
        available:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true
        },
        defective:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true
        }
    },

    {
        freezeTableName:true,
        timestamps:false
    },

    );
    return Item;


}
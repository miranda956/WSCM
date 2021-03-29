

module.exports=(sequelize,DataTypes)=>{
    const Product=sequelize.define("Product",{
        Title:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        summary:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        Type:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        Date_Recieved:{
            type:DataTypes.DATE,
            allowNull:false,
            required:true
        },
        Date_sold:{
            type:DataTypes.DATE,
            allowNull:false,
            required:true
        },
        availabilty:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true,
            

        }
        
    },

    {
        freezeTableName:true,
        timestamps:false
    },

    );
    return Product;


}


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
    },

    {
        freezeTableName:true,
        timestamps:false
    },

    );
    return Product;


}
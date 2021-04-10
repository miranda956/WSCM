

module.exports=(sequelize,DataTypes)=>{
    const Stock=sequelize.define("Stock",{

        name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        
    },

    {
        freezeTableName:true,
        timestamps:false
    },

    );
    Stock.associate=(models)=>{
        Stock.belongsTo(models.Products,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    
    
    return Stock;
 
}


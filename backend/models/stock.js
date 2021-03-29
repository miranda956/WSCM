

module.exports=(sequelize,DataTypes)=>{
    const Stock=sequelize.define("Stock",{
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
     
    
    return Stock;

}



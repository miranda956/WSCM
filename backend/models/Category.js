

module.exports=(sequelize,DataTypes)=>{
    const Category=sequelize.define("Category",{
        name:{
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
    Category.associate=(models)=>{
        Category.belongsTo(models.Products,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    
    
    return Category;
 
}


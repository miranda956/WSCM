

module.exports=(sequelize,DataTypes)=>{
    const Products=sequelize.define("Products",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        barcode:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },

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
        available:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true,
            
        },
        purchasePrice:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            required:true

        },
        sellPrice:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            required:true
        }
        
    },

    {
        freezeTableName:true,
        timestamps:false
    },

    );
    Products.associate=(models)=>{
        Products.belongsToMany(models.Supplier,{
            through:'Supplying'
        });
        
    }
    return Products;

} 
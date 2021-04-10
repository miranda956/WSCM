

module.exports=(sequelize,DataTypes)=>{
    const Order=sequelize.define("Order",{
       ItemPrice:{
           type:DataTypes.DECIMAL,
           allowNull:false,
           required:true
       },
       ItemDiscount:{
           type:DataTypes.DECIMAL,
           allowNull:false,
           required:true
       },
       quantity:{
           type:DataTypes.INTEGER,
           allowNull:false,
           required:true
       },
       OrderTotal:{
           type:DataTypes.DECIMAL,
           allowNull:false,
           required:true
       },
       Status:{
           type:DataTypes.STRING,
           allowNull:false,
           required:true
       }



    },

    {
        freezeTableName:true,
        timestamps:false
    },

    );
    Order.associate=(models)=>{
        Order.belongsTo(models.Customer,{
            foreignkey:{
                allowNull:false
            }
        });
        Order.hasMany(models.Products,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Order;


}
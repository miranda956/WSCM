

module.exports=(sequelize,DataTypes)=>{
    const Order=sequelize.define("Order",{
       type:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        Order_total_price:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        item_Discount:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true
        },
        Tax:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true
        },
        Total:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true
        },

    grandTotal:{
        type:DataTypes.STRING,
        
        allowNull:false,
        required:true
    },
    shipping:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
        required:true
    }
    },

    {
        freezeTableName:true,
        timestamps:false
    },

    );
    return Order;


}
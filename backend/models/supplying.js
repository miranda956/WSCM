

module.exports=(sequelize,DataTypes)=>{
    const   Supplying=sequelize.define("Supplying",{
        arrived:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        arrived_at:{
            type:DataTypes.DATE,
            allowNull:false,
            required:true
        },

    },
    {
        freezeTableName:true,
        timestamps:false
    },

    );
    return Supplying;


}



module.exports=(sequelize,DataTypes)=>{
    const   Customer=sequelize.define("Customer",{
        f_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        l_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        contact:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true,
            validate:{
                len:[10]
            }
           
        },

        address:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
    
    
        pwd:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        }

    },

    {
        freezeTableName:true,
        timestamps:false
    },
    {
        instanceMethods:{
            genereteHash(pwd){
                // @ts-ignore
                return bcrypt.hashSync(pwd,bcrpt.genSaltSync(8));
            },
            validpassword(pwd){
                // @ts-ignore
                return bcrypt.compare(pwd,this.pwd)
            }
        }    
        },


    );
    Customer.associate=(models)=>{
        Customer.hasMany(models.Order,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Customer;


}
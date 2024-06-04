module.exports = (sequelize, DataTypes) => {
    const user = asyncSequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        phoneNumber: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },

        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })

    user.association = model => {
        user.hasMany(model.currencyWallet);

        user.hasMany(model.userSetting);

    }
    return user
}

// class User extends Model {
//     checkPassword(loginPw) {
//         return bcrypt.compareSync(loginPw, this.password);
//     }
// }

// constructor(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [6],
//             },
//         },
//     },
//     {
//         hooks: {
//             async beforeCreate(newUserData) {
//                 newUserData.password = await bcrypt.hash(newUserData.password, 10);
//                 return newUserData;
//             },
//             async beforeUpdate(updatedUserData) {
//                 updatedUserData.password = await bcrypt.hash(
//                     updatedUserData.password,
//                     10
//                 );
//                 return updatedUserData;
//             },
//         },
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'user',
//     }
// );

// module.exports = User;

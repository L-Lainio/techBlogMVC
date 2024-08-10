const { Model, DataTypes } = require('../../config/connections');
const bcrypt = require('bcrypt');

'use strict';

class User extends Model {
  // method to validate password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
// initialize the User model
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    active_ind: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData, options) {
        if (updatedUserData.changed('password')) {
          const hashedPassword = await bcrypt.hash(updatedUserData.password, 10); // Hashing the updated password with bcrypt
          updatedUserData.password = hashedPassword;
        }
        return updatedUserData;
      },
    },

    // Configuring Sequelize settings for the model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

// Exporting the User model for use in other parts of the application
module.exports = User;

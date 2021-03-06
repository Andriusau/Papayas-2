'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sports: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Chicago Bulls'
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });
  return User;
};
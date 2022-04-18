module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  //   Users.associate = (models) => {
  //     Users.hasMany(models.Posts, {
  //       onDelete: "cascade"
  //     })
  //   }
  return Users
}

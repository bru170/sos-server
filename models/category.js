module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })

  return Categories
}

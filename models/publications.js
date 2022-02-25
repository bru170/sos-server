module.exports = (sequelize, DataTypes) => {
  const Publications = sequelize.define("Publications", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    publicationFile: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Publications
}

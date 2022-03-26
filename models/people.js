module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define("People", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    workPlace: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bioText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    altText: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  return People
}

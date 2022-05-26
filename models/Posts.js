module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    featureImage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    featureImageAltText: {
      type: DataTypes.STRING(1234),
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    imageAltText: {
      type: DataTypes.STRING(1234),
      allowNull: true
    }
  })

  Posts.associate = (models) => {
    Posts.hasMany(models.Tags, {
      onDelete: "cascade"
    })
  }

  Posts.associate = (models) => {
    Posts.hasMany(models.Categories, {
      onDelete: "cascade"
    })
  }

  return Posts
}

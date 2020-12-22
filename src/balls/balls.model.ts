import { DataType, Model } from "sequelize-typescript"
import sequelize from "./../database/sequelize"

export interface BallProps {
    name: string;
    number: number;
    popularity: number
}

class BallModel extends Model { }

BallModel.init({
    id: {
        type: DataType.INTEGER,
        field: 'id',
        primaryKey: true, // 主键
        autoIncrement: true, // 自增
        unique: false, // 是否可以重复
    },
    name: { // 球的名称
        type: DataType.STRING,
        allowNull: false
    },
    number: { // 球的参与人数
        type: DataType.INTEGER,
        allowNull: false
    },
    popularity: {
        type: DataType.INTEGER, // 欢迎程度
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'balls',
    tableName: 'balls',
    freezeTableName: true,
})

BallModel.sync({})

export default BallModel;



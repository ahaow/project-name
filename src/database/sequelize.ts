import { Sequelize } from "sequelize-typescript"
import { MysqlConfig } from "./../config/db"

const sequelize = new Sequelize(MysqlConfig.database, MysqlConfig.user, MysqlConfig.password, {
    dialect: 'mysql',
    host: MysqlConfig.host,
    port: MysqlConfig.port,
    pool: {
        max: MysqlConfig.connectionLimit, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        acquire: 30000,
        idle: 10000, // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    },
    timezone: '+08:00', // 东八时区
    // logging: (...msg) => console.log(msg),
})

// 测试数据库链接
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err: any) => {
    // 数据库连接失败时打印输出
    console.error(err);
    throw err;
  });

export default sequelize
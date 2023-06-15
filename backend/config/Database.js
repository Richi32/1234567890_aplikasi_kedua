import { Sequelize } from "sequelize";

const db = new Sequelize('yukimaga_db2','49157','49157',{
    host: "db-49157",
    port: 3306,    
    dialect: "mysql"
});

export default db;

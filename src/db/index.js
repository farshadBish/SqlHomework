import {Sequelize} from "sequelize"

const {PGPORT, PGUSER , PGDATABASE , PGPASSWORD , PGHOST} = process.env

const sequelize = new Sequelize(PGDATABASE,PGUSER,PGPASSWORD,{
    port:PGPORT,
    host:PGHOST,
    dialect:"postgres"
})

export const connectDB = async() => {
    try {
        await sequelize.authenticate()
        console.log("db is authenticated!");
    } catch (error) {
        console.log(error);
    }
}
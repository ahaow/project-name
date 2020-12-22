import { Injectable } from '@nestjs/common';
import * as Sequelize from "sequelize"
import sequelize from "./../database/sequelize"

@Injectable()
export class UsersService {

    async findOne(id: any): Promise<any | undefined> {
        const sql = `
            SELECT 
                id, username, age, gender
            FROM 
                users
            WHERE
                id = ${id}
        `

        try {
            const res = await sequelize.query(sql, {
                type: Sequelize.QueryTypes.SELECT,
                raw: true,
                logging: true,
            })
            const user = res[0]
            if (user) {
                return {
                    code: 200,
                    success: true,
                    msg: '查找成功',
                    data: {
                        user
                    }
                }
            } else {
                return {
                    code: 500,
                    success: false,
                    msg: '查找失败',
                    data: null
                }
            }

        } catch (error) {
            return {
                code: 503,
                msg: `Service error: ${error}`,
            };
        }
    }

}

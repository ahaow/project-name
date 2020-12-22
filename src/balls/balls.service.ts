import { Injectable } from '@nestjs/common';
import BallModel from './balls.model'
import { BallProps } from './balls.model'
import { result, resultSuccessFn, resultFailFn } from './../config/response.data'

@Injectable()
export class BallsService {
    async createBall(params: BallProps): Promise<result> {
        const { name, number, popularity } = params
        try {
            const createInfo = await BallModel.create({
                name,
                number,
                popularity,
            })
            if (createInfo) {
                return resultSuccessFn('创建成功', 'ok')
            }
        } catch (error) {
            return resultFailFn(500, '创建失败')
        }
    }

    async selectOneBall(ball_id) {
        try {
            const ball = await BallModel.findAll({
                attributes: ['name', 'number', 'popularity', 'createdAt'],
                where: {
                    id: ball_id,
                }
            })
            if (ball && ball.length > 0) {
                return resultSuccessFn('查询成功', ball[0].toJSON())
            } else {
                return resultFailFn(500, '没有查找到相关数据')
            }
        } catch (error) {
            return resultFailFn(500, '查询失败')
        }
    }

    async selectAllBall() {
        try {
            const ball = await BallModel.findAll({
                attributes: ['name', 'number', 'popularity', 'createdAt'],
            })
            if (ball && ball.length > 0) {
                return resultSuccessFn('查询成功', ball)
            } else {
                return resultFailFn(500, '没有查找到相关数据')
            }
        } catch (error) {
            return resultFailFn(500, '查询失败')
        }
    }


}

import type { NextApiRequest, NextApiResponse } from 'next'

import { IdentifyRequest, signJWT } from 'lib/jwt'
import prisma from 'lib/prisma'
import Auth from 'middlewares/Auth'

export default Auth(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = await IdentifyRequest({ req })

        const { isEmailSubscribed } = JSON.parse(req.body)

        const user = await prisma.user.update({
            where: {
                id,
            },
            data: {
                isEmailSubscribed,
            },
        })

        return res.status(200).json({
            user,
        })
    } catch (error) {
        const message = error.message
        return res.status(400).json({ error, message })
    }
})
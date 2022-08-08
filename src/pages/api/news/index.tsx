import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    games: Array<object>
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ games: [] })
}

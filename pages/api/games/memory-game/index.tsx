import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    games: Array<object>,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: 'Memory Game', games: [] })
}

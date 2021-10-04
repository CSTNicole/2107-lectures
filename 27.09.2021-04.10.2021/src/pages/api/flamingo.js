// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createFlamingo, getFlamingos } from '../../backend/database';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { name, age, colour } = data; // destructuring

        await createFlamingo(name, age, colour);
        res.status(200).json(
            {
                success : true
            }
        );
        return;
    }
    const data = await getFlamingos();
    res.status(200).json(data);
}
  
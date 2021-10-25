// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCheetah, getCheetahs } from '../../backend/database';

// step 3, the API
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { name, pattern, speed, country } = data; // destructuring

        // step 4, connect to db & create cheetah
        await createCheetah(name, pattern, speed, country);
        res.status(200).json(
            {
                success : true
            }
        );
        return;
    }

    const data = await getCheetahs();

    res.status(200).json(data);
}
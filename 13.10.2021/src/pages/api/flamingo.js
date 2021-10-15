// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createFlamingo, getFlamingos } from '../../backend/database';

// step 3, the API
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { name, hairColour, favouriteFood } = data; // destructuring

        // step 4, connect to db & create flamingo
        await createFlamingo(name, hairColour, favouriteFood);
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
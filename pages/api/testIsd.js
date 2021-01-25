// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../db';

let testFormData = db;
export default async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        if (req.method === 'GET') {
            return await GET(req, res);
        }
        if (req.method === 'POST') {
            return await POST(req, res);
        }
    } catch (err) {
        console.error(err);
        res.status(500);
    }
    res.statusCode = 200;
    res.json({ name: 'John Doe' });
};

async function GET(req, res) {
    res.statusCode = 200;
    return res.json(testFormData);
}

async function POST(req, res) {
    testFormData = req.body;
    res.statusCode = 201;
    return res.json(testFormData);
}

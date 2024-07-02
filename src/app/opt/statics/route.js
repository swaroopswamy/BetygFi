import fs from 'fs';
import path from 'path';

export async function GET(req, res) {
    const dirRelativeToPublicFolder = '';

    const dir = path.resolve(process.env?.STATIC_FILE_PATH ?? 'C:\\opt\\statics', dirRelativeToPublicFolder);

    const filenames = fs.readdirSync(dir);

    const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name));

    res.statusCode = 200;
    return Response.json(images);
}
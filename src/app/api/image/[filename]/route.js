
// app/api/images/[filename].js
import { join } from 'path';
import { existsSync, createReadStream } from 'fs';

export async function GET(req, { params }) {
    const { filename } = params;
    const imagePath = join(process.env.STATIC_FILE_PATH ?? "C:\\opt\\statics", filename);

    if (!existsSync(imagePath)) {
        return new Response('Image not found', { status: 404 });
    }

    const stream = createReadStream(imagePath);
    return new Response(stream);
}


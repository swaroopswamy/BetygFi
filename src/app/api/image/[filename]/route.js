/* 
import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = ['jpg', 'png', 'gif'];

export async function GET(_req, q) {
    const { slug } = q.params;
    const dirpath = path.join("C:\\opt\\statics", slug);

    const res = await Promise.any(
        IMAGE_EXTENSIONS.map(async (ext) => {
            const filepath = path.join(dirpath, `${slug}.${ext}`);
            const stat = await fs.promises.stat(filepath);
            const stream = fs.createReadStream(filepath);
            const buffer = fs.readFileSync(filepath);
            return { buffer, filepath, stat, stream };
        }),
    );

    return new NextResponse(res.buffer, {
        headers: {
            'Content-Type': 'image/*',
            'Content-Disposition': 'inline',
            'Content-Length': res.stat.size.toString(),
        },
    });

} */


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



// app/api/images/[filename].js
import { join } from 'path';
import { existsSync, createReadStream } from 'fs';
import { getEnv, getImageFilePath } from '@util/utility';
import { headers } from 'next/headers';

export async function GET(req, { params }) {
    const { filename } = params;
    const headersList = headers();
    const host = getEnv(headersList.get('host'));
    const imagePath = join(getImageFilePath(host), filename);
    console.log(headersList.get('host'),host,getImageFilePath(host),'routes')
    if (!existsSync(imagePath)) {
        return new Response('Image not found', { status: 404 });
    }

    const stream = createReadStream(imagePath);
    return new Response(stream);
}


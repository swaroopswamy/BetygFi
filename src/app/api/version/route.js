import meta from '../../../../meta/meta.json';

export async function GET(/* req */) {
    return Response.json(meta);
}
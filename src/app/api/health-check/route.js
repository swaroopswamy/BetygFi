import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const GET = () => {
    const headersInstance = headers();
    const authorization = headersInstance.get('authorization');
    const authorizationList = ['betygfi-server'];
    if (authorization) {
        const splittedAuthorization = authorization.split(" ")[1];
        if (authorizationList.includes(splittedAuthorization)) {
            // return NextResponse.json({ message: 'OK' }, { status: 200 })
            return NextResponse.json('OK');
        } else {
            // return NextResponse.json({ message: 'Not Authorized' }, { status: 403 })
            return NextResponse.json('Not Authorized Machine');
        }
    } else {
        // return NextResponse.json({ message: 'Not Authorized' }, { status: 403 })
        return NextResponse.json('Not Authorized');
    }
};
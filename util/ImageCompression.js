import imageCompression from 'browser-image-compression';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const getImageAsBlob = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return blob;
}

const compressBlobImage = async (blob) => {
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    };
    const compressedFile = await imageCompression(blob, options);
    return compressedFile;
}

const CompressedImg = ({ imageUrl, unoptimized = false, height = 48, width = 48, ...rest }) => {
    const [compressedImage, setCompressedImage] = useState(null);
    useEffect(() => {
        let blobUrl = null;
        const processImage = async () => {
            try {
                const blob = await getImageAsBlob(imageUrl);
                const compressedFile = await compressBlobImage(blob);
                blobUrl = URL.createObjectURL(compressedFile);
                setCompressedImage(blobUrl);
            } catch (err) {
                console.log(`Image processing failed `, err);
            }
        };

        processImage();

        return () => {
            if (blobUrl) {
                URL.revokeObjectURL(blobUrl);
            }
        };
    }, [imageUrl]);

    return (
        <Image
            unoptimized={unoptimized}
            src={compressedImage}
            alt={'img'}
            width={width}
            height={height}
            style={{ borderRadius: '50%', width: width + 'px', height: height + 'px', objectFit: "cover" }}
            {...rest}
        />
    );
};

export default CompressedImg;

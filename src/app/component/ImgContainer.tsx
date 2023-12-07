import type { Photo } from "@/Models/Images";
import Image from "next/image"
import Link from "next/link";

type Props = {
    photo: Photo
}

export default function ImgContainer({ photo }: Props) {

    const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1

    return (
        <div className="w-[250px] justify-self-center" style={{gridRow: `span ${photoSpans}`}}>
            <Link href={photo.url} target="_blank" className="grid place-content-center">
            <div className="rounded-xl overflow-hidden group">
                <Image
                    src={photo.src.large}
                    width={250}
                    height={galleryHeight}
                    alt={photo.alt}
                    sizes="250px"
                    placeholder="blur"
                    blurDataURL={photo.blurredDataUrl}
                    className="object-cover group-hover:opacity-75"
                />
            </div>
            </Link>
        </div>
    )
}


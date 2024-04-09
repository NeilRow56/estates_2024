import Image from 'next/image'

export type SingleImageProps = {
  href: string
  imgSrc: string
  Alt: string
}

export default function Brands() {
  return (
    <section className="bg-slate-100 py-24  dark:bg-slate-600 lg:py-[40px]">
      <h2 className="pb-6 text-center text-primary">Trusted By:</h2>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SingleImage = ({ href, imgSrc, Alt }: SingleImageProps) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <Image
          width="50"
          height="100"
          sizes="100vw"
          src={imgSrc}
          alt={Alt}
          className="h-10 w-full"
        />
      </a>
    </>
  )
}

import Image from "next/image";
import Link from "next/link";const ButtonsNav = () => {
  return (
    <div className="bottom-0 rounded-t-xl left-1/2 -translate-x-2/4 w-full fixed flex justify-around  bg-gradient-to-t from-gray-50 to-gray-200">
            <Link href="/products">
              <Image
              alt="home"
              className="m-2"
              src="/images/heroicons-solid_home.svg"
              width={20}
              height={20}
              />
            </Link>
            <Link href="/products">
              <Image
                alt="heart"
                className="m-2"
                src="/images/heart.svg"
                width={20}
                height={20}
                />
            </Link>
            <Link href="/products">
              <Image
                alt="user"
                className="m-2"
                src="/images/user.svg"
                width={20}
                height={20}
                />
            </Link>
            <Link href="/products">
              <Image
                alt="history"
                className="m-2"
                src="/images/ic_sharp-history.svg"
                width={20}
                height={20}
              />
            </Link>
            
          
        </div>
  )
}

export default ButtonsNav
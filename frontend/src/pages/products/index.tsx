import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { IconHeart } from '../../assets/icons';

export default function Products({ productData }: { productData: any }) {
  return (
    <section className=" bg-gray-50 border-t">
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-start max-w-[1440px] mx-auto">
        <div className="container__filter w-1/4 mr-3">Filter</div>
        <div className="container__product">
          <ul className="flex flex-wrap mx-auto my-0 max-w-100">
            {productData?.products?.map((item: any) => (
              <li
                key={item.id}
                className="rounded-md bg-white flex flex-col justify-center mx-4 my-2.5 lg:w-[calc(22%)] md:w-[calc(33%_-_1.25rem)] shadow-md"
              >
                <Link href={`products/${item?.slug}`} className="w-full">
                  <div className="mx-auto my-0 max-w-[260px] p-2 min-h-[260px]">
                    <Image src={item.coverImage} priority alt={item.name} className="w-full" width={260} height={260} />
                  </div>
                </Link>
                <div className="flex flex-col justify-between pt-3 pr-4 pb-4 pl-4 border-t-2 border-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center justify-center">
                        <p className="mr-2 text-dark text-base">
                          {item.isPriceRange.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </p>
                        <span className="line-through text-gray-400 text-sm">
                          {item.wasPriceRange.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </span>
                      </div>
                      <div>{item.rating}</div>
                    </div>
                    <div>
                      <button className="shadow-md border rounded-md p-1.5 flex-auto items-center justify-center">
                        <span className="sr-only"> Favorite </span>
                        <IconHeart />
                      </button>
                    </div>
                  </div>
                  <div className="line-clamp-2	min-h-[40px] pt-2.5">
                    <p className="text-[#606060] text-sm font-light">
                      {item.title} {item?.name}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://mern-ecommerce-backend-ten.vercel.app/api/products?page=0`);
  const data = await response.json();
  return {
    props: {
      productData: data,
    },
  };
}

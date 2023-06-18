import Link from 'next/link';
import { useGlobalContext } from '../context/globalCtx';

const Favorites = () => {
  const { state } = useGlobalContext();

  const favorites = state.profile?.favorites || [];
  return (
    <div className="container mx-auto w-full">
      <h1>Favorites</h1>
      {favorites.map(product => {
        return (
          <Link href={`/productDetail/${product._id}`}>
            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src={product.image?.imageUrl} alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">{product.name}</h3>
                <p className="mt-4 text-lg font-thin">$ {product.listings[0].price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Favorites;

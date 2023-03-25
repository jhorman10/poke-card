import Image from 'next/image';
import pika from '../../../Fpub_vUWYAE8Y5b.jpeg';

export default function Card({
  img = pika,
  name = 'Pikachu',
  weight = '2KG',
  powers = ['Thunder', 'IronTail'],
}) {
  return (
    <div class="p-6">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div class="overflow-hidden rounded-2xl bg-gray-50">
          <div class="relative flex items-stretch h-[180px] overflow-hidden">
            <Image
              src={img}
              alt={name}
              width={400}
              height={400}
              className="z-0"
            />
            {weight && (
              <div class="absolute w-max right-2 bottom-2">
                <span class="z-10 mt-2 rounded-full bg-green-500 p-1 pr-4 pl-4 font-medium text-white">
                  Peso: {weight}{' '}
                </span>
              </div>
            )}
          </div>
          <div class="p-6">
            <div class="flex-col">
              <h1 class="font-extrabold mt-2 text-start text-3xl text-green-900">
                {name}
              </h1>
              <br />
              {powers && (
                <p class="inline-flex items-center">
                  {powers.map((power) => (
                    <span key={power} class="text-green-900">
                      #{power}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

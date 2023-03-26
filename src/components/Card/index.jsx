import Image from 'next/image';
import pika from '../../../Fpub_vUWYAE8Y5b.jpeg';

export default function Card({ img = pika, name, weight, powers }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="relative flex items-stretch h-[180px] overflow-hidden">
        <Image src={img} alt={name} width={400} height={400} className="z-0" />
        {weight && (
          <div className="absolute w-max right-2 bottom-2">
            <span className="z-10 mt-2 rounded-full bg-green-500 p-1 pr-4 pl-4 font-medium text-white">
              Peso: {weight}{' '}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex-col">
          <h1 className="font-extrabold mt-2 text-start text-3xl text-green-900">
            {name}
          </h1>
          <br />
          {powers && (
            <p className="inline-flex items-center">
              {powers.map((power) => (
                <span key={power} className="text-green-900">
                  #{power}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

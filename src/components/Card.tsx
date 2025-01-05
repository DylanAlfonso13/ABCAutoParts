import { IconType } from "react-icons";

interface CardProps {
  icon?: IconType; // Make icon optional to handle cases where it's not provided
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  target: string;
  address?: string; // Optional address field
}

export default function Card({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
  target,
  address,
}: NewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
      <div className="flex flex-col items-start">
        {Icon && <Icon className="text-primary text-4xl mb-4" />}
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        {address && (
          <a
            href={buttonLink}
            target={target}
            className="mt-2 text-lg font-bold text-gray-700 hover:underline"
          >
            {address}
          </a>
        )}
        <p className="mt-4 text-lg text-gray-600">{description}</p>
        <div className="mt-6">
          <a
            href={buttonLink}
            target={target}
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

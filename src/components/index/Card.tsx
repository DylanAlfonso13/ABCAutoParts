interface CardProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    target: string;
  }
  
  export default function Card({ title, description, buttonText, buttonLink, target }: CardProps) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
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
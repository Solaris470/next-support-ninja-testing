import { LP_GRID_ITEMS } from "../libs/data";

export default function Content() {
  return (
    <div className="justify-center space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3">
      {LP_GRID_ITEMS.map((items: any) => (
        <div
          key={items.title}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="bg-blue-100 dark:bg-blue-900 mb-4 flex items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
            {items.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            {items.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {items.description}
          </p>
        </div>
      ))}
    </div>
  );
}

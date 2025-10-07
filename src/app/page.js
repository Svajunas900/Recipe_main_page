import { Young_Serif, Outfit } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#f3e6d8ff] flex justify-center items-center sm:pt-24 sm:pb-24 ">
        <div className="w-3xl bg-white sm:rounded-2xl overflow-hidden">
          <div className="sm:p-10 sm:pb-0">
            <img
              src="/assets/images/image-omelette.jpeg"
              alt="Omelette"
              className="w-full sm:rounded-2xl"
            />
          </div>
          <div className="p-10 pt-4">
            <h1
              className={`${youngSerif.className} text-[32px] font-bold mt-4 mb-4`}
            >
              Simple Omelette Recipe
            </h1>
            <p className={`${outfit.className} font-normal mb-8`}>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="p-6 rounded-2xl bg-[#fff5faff]">
              <h2
                className={`${outfit.className} font-bold text-[#7b284fff] pb-2 text-[18px]`}
              >
                Preparation time
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li
                  className={`${outfit.className} ml-2 marker:text-[#7b284fff]`}
                >
                  <span className={`${outfit.className} font-bold ml-4`}>
                    Total:{" "}
                  </span>
                  Approximately 10 minutes
                </li>
                <li
                  className={`${outfit.className} ml-2 marker:text-[#7b284fff]`}
                >
                  <span className={`${outfit.className} font-bold ml-4`}>
                    Preparation:{" "}
                  </span>
                  5 minutes
                </li>
                <li
                  className={`${outfit.className} ml-2 marker:text-[#7b284fff]`}
                >
                  <span className={`${outfit.className} font-bold ml-4`}>
                    Cooking:{" "}
                  </span>
                  5 minutes
                </li>
              </ul>
            </div>
            <h1
              className={`${youngSerif.className} text-[32px] text-[#7b284fff] pt-4 pb-4`}
            >
              Ingredients
            </h1>
            <ul className="list-disc list-outside pl-6 space-y-1">
              <li
                className={`${outfit.className} pl-4 marker:text-[#7b284fff]`}
              >
                2-3 large eggs
              </li>
              <li
                className={`${outfit.className} pl-4  marker:text-[#7b284fff]`}
              >
                Salt, to taste
              </li>
              <li
                className={`${outfit.className} pl-4  marker:text-[#7b284fff]`}
              >
                Pepper, to taste
              </li>
              <li
                className={`${outfit.className} pl-4 marker:text-[#7b284fff]`}
              >
                1 tablespoon of butter or oil
              </li>
              <li
                className={`${outfit.className} pl-4 marker:text-[#7b284fff]`}
              >
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>

            <hr className="h-px bg-gray-300 border-0 mt-10 mb-4"></hr>
            <h1
              className={`${youngSerif.className} text-[32px] text-[#7b284fff] pt-4 pb-4`}
            >
              Instructions
            </h1>

            <ol
              className={`${outfit.className} list-decimal list-outside pl-6 marker:text-[#7b284fff] font-bold`}
            >
              <li className="pl-2 pb-2">
                Beat the eggs:{" "}
                <span className="font-normal">
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </li>
              <li className="pl-2 pb-2">
                Heat the pan:{" "}
                <span className="font-normal">
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </span>
              </li>
              <li className="pl-2 pb-2">
                Cook the omelette:{" "}
                <span className="font-normal">
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>
              </li>
              <li className="pl-2 pb-2">
                Add fillings (optional):{" "}
                <span className="font-normal">
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </span>
              </li>
              <li className="pl-2 pb-2">
                Fold and serve:{" "}
                <span className="font-normal">
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </span>
              </li>
              <li className="pl-2 pb-2">
                Enjoy:{" "}
                <span className="font-normal">
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ol>
            <hr className="h-px bg-gray-300 border-0 mt-4 "></hr>
            <h1
              className={`${youngSerif.className} text-[32px] text-[#7b284fff] pt-4 pb-4`}
            >
              Nutrition
            </h1>
            <p className={`${outfit.className} font-normal mb-4`}>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className={`${outfit.className} w-full h-46`}>
              <tbody>
                <tr className="border-b border-[#e4ded8ff]">
                  <td className="w-1/2 text-semibold pl-8 py-1">Calories</td>
                  <td className={`w-1/2 text-[#7b284fff] font-bold py-1`}>
                    277kcal
                  </td>
                </tr>
                <tr className="border-b border-[#e4ded8ff]">
                  <td className="w-1/2 text-semibold pl-8 py-1">Carbs</td>
                  <td className={`w-1/2 text-[#7b284fff] font-bold py-1`}>
                    0g
                  </td>
                </tr>
                <tr className="border-b border-[#e4ded8ff]">
                  <td className="w-1/2 text-semibold pl-8 py-1">Protein</td>
                  <td className={`w-1/2 text-[#7b284fff] font-bold py-1`}>
                    20g
                  </td>
                </tr>
                <tr className="">
                  <td className="w-1/2 text-semibold pl-8 py-1">Fat</td>
                  <td className={`w-1/2 text-[#7b284fff] font-bold py-1`}>
                    22g
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

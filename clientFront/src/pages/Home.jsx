import React from "react";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 pt-20 ">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <img
            src="https://wallpapercave.com/wp/wp7478747.jpg"
            className="w-full rounded-full object-cover "
          />
          <img
            src="https://www.progearvisionlab.com/wordpress/wp-content/uploads/2016/06/satisfaction-priority1.png"
            className="w-full rounded-full object-cover "
          />
          <img
            src="https://media.istockphoto.com/id/1314546760/vector/vector-neon-sign-car-wash-glowing-alphabet-letters-and-numbers-set.jpg?s=612x612&w=0&k=20&c=S_R9foYQb8m3ec2_uVVaWZxEzDDQGHRCGE51EdXQ6WM="
            className="w-full rounded-full object-cover "
          />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 mt-24 px-4">
          <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/7857/media/img/cache/900x0/2001945_900x0.png"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Basic Exterior Wash</h2>
              <h3 className="text-l font-bold mb-2">
                Using premium quality soap
              </h3>
            </div>
            <button className="mt-auto py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
              Description/Details
            </button>
          </div>
          <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgy9l5ZA6xuQU-l1ZZT8dhPZS-OCSeW0p3lQ&s"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Complete Exterior Detail
              </h2>
              <h3 className="text-l font-bold mb-2">
                hand wash using premium quality soap and dry using non scratch
                drying towels
              </h3>
            </div>
            <button className="mt-auto py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
              Description/Details
            </button>
          </div>
          <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/57/93/11/1000_F_457931129_U3aF91492XzrYbEoNXnnq8gPnhbZfula.jpg"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Rims Cleaner </h2>
              <h3 className="text-l font-bold mb-2">
                Professional rim cleaning service using premium soaps and
                brushes for optimal results
              </h3>
            </div>
            <button className="mb-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
              Description/Details
            </button>
          </div>
          <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://media.diy.com/is/image/KingfisherDigital/nilfisk-buddy-ii-12-car-cleaner-wet-dry-vacuum-cleaner~5715492232536_06c_MP?$MOB_PREV$&$width=618&$height=618"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Basic Interior Clean</h2>
              <h3 className="text-l font-bold mb-2">Vacuum Interior</h3>
            </div>
            <button className=" mb-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
              Description/Details
            </button>
          </div>
          <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/carwash-service-male-worker-gloves-removing-dust-dirt-with-steam-cleaner_266732-7458.jpg"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Intensive Interior Detail
              </h2>
              <h3 className="text-l font-bold mb-2">
                Intensive Interior Detail for moderate to heavily soiled
                interiors
              </h3>
            </div>
            <button className="mb-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
              Description/Details
            </button>
          </div>
          <div className="bg-white bg-opacity-30 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://img.grouponcdn.com/metro_draft_service/2oheV1Hho378ZT9mHyyyFnnEdWsX/2o-1024x768/v1/c870x524.jpg"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Complete Interior/Exterior Detail
              </h2>
              <h3 className="text-l font-bold mb-2">
                Complete Interior & Exterior Detail
              </h3>
            </div>
            <button className="mb-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
              Description/Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

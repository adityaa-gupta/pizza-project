import CreatUser from '../features/users/CreateUser';
function Home() {
  return (
    <div className="my-10 bg-gray-100 px-4 text-center sm:my-16 ">
      <h1 className="mb-8  text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreatUser />
    </div>
  );
}

export default Home;

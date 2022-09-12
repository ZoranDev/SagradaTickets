const Navbar = () => {
  return (
    <div className="w-full border-b-2 px-20 py-2 bg-white flex items-center justify-between overflow-hidden">
      {/* Logo */}
      <div className="text-3xl cursor-pointer">Sagrada Familia</div>
      {/* Links and get tiquets btn */}

      {/* Links */}
      <div className="flex items-center justify-center">
        <div className="mr-4 text-lg uppercase cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-500 hover:text-red-500">
          Tiquets
        </div>
        <div className="mr-4 text-lg uppercase cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-500 hover:text-red-500">
          Oppening hours
        </div>
        <div className="mr-4 text-lg uppercase cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-500 hover:text-red-500">
          About Sagrada Familia
        </div>
        <div className="mr-4 text-lg uppercase cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-red-500 hover:text-red-500">
          Faq
        </div>
      </div>

      {/* Sign-up and Log in */}
      <div className="flex items-center justify-center ">
        <button className="w-32 mr-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 active:scale-95">
          Log In
        </button>
        <button className="w-32 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 active:scale-95">
          Sign-Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const NavBar = () =>{
  return (
    <nav className="flex items-center px-4 mb-2 md:px-6 2xl:px-64">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">Start Bootstrap</div>
      </div>
      <ul className="ml-auto text-16 font-semibold">
        <button className="bg-blue-500 px-3 py-3 rounded-lg hover:bg-blue-600 text-white" >Sign Up</button>
      </ul>
    </nav>
  );
}
export default NavBar;
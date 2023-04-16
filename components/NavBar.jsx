const NavBar = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-white-950">National Techo Cultural Fiesta of ICET</h1>
      <div className="flex flex-row gap-4">
        <p>Home</p>
        <p>Events</p>
        <p>Competitions</p>
      </div>
    </div>
  );
};

export default NavBar;

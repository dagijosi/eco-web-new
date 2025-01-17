const Home = () => {
  return (
    <div className="mt-10 text-center">
      <h1 className="mb-6 font-bold text-4xl text-gold">Welcome to Eco-Web Car Rentals!</h1>
      <p className="mb-6 text-black text-lg">Find the best rental cars at affordable prices.</p>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img src="/car1.jpg" alt="Car 1" className="rounded-t-lg w-full h-48 object-cover" />
          <h2 className="mt-4 font-bold text-2xl text-black">Luxury Sedan</h2>
          <p className="mt-2 text-black">Experience the ultimate comfort and style.</p>
          <button className="bg-gold hover:bg-black mt-4 px-4 py-2 rounded font-bold text-white">Rent Now</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img src="/car2.jpg" alt="Car 2" className="rounded-t-lg w-full h-48 object-cover" />
          <h2 className="mt-4 font-bold text-2xl text-black">SUV</h2>
          <p className="mt-2 text-black">Perfect for family trips and off-road adventures.</p>
          <button className="bg-gold hover:bg-black mt-4 px-4 py-2 rounded font-bold text-white">Rent Now</button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img src="/car3.jpg" alt="Car 3" className="rounded-t-lg w-full h-48 object-cover" />
          <h2 className="mt-4 font-bold text-2xl text-black">Convertible</h2>
          <p className="mt-2 text-black">Feel the wind in your hair with our stylish convertibles.</p>
          <button className="bg-gold hover:bg-black mt-4 px-4 py-2 rounded font-bold text-white">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
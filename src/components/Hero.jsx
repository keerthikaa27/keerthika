export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-10">
      
      {/* Left: Text */}
      <div className="md:w-2/3 px-6">
        <h1 className="text-4xl font-bold text-white">Nimmagadda Keerthika</h1>
        <h2 className="text-xl text-gray-300 mt-2">
          CSE Undergrad at VIT AP University
        </h2>
        <p className="mt-4 text-gray-400">
          B.Tech CSE Undergrad (2022–2026), passionate about building clean web apps 
          and data-driven solutions. Interested in Software Development, Web Technologies, 
          Full-stack Development, and Data Analytics.
        </p>
      </div>

      {/* Right: Profile Image */}
      <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
        <img 
          src="/profile.jpg.jpg" 
          alt="Keerthika" 
          className="w-48 h-48 rounded-full shadow-lg border-4 border-white object-cover"
        />
      </div>
    </section>
  );
}

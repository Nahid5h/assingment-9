

const AboutUs = () => {
  return (
    <div className="">
        <h1 className="text-3xl font-bold text-center text-amber-400 my-8">About Us</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="flex-1">
          <img className="rounded-2xl w-full"
            src="https://i.ibb.co/9qfVpgm/pexels-pixabay-256381.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <p>
            Welcome to Industrial States, your definitive guide to the dynamic
            landscape of manufacturing across America. At Industrial States, we
            are passionate about highlighting the vital role that states play in
            driving the nation industrial sector forward. Our platform is
            dedicated to showcasing the diverse industries, innovative
            companies, and skilled workforce that define these industrial
            powerhouses. Whether it exploring the automotive hubs of Michigan,
            the aerospace advancements in California, or the technology
            innovations in Texas, we provide insights into the unique
            contributions of each state to the manufacturing ecosystem. Join us
            as we celebrate the ingenuity, resilience, and economic impact of
            industrial states, and discover the stories behind the products that
            shape our world
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

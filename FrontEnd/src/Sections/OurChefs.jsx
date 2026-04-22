import React from "react";

const OurChefs = () => {
  const chefs = [
    {
      name: "Chef John Doe",
      image: "https://i.pinimg.com/736x/c3/59/94/c3599469bc5b54a2a70477761d77d42b.jpg",
    },
    {
      name: "Chef Jane Smith",
      image: "https://i.pinimg.com/originals/43/db/67/43db6754aeaf9819d76d8d8b9b3f1aed.jpg",
    },
    {
      name: "Chef Mike Brown",
      image: "https://i.pinimg.com/originals/d7/d0/34/d7d03488b0377b5dedb81cfec61a405c.jpg",
    },
    {
      name: "Chef Emily Davis",
      image: "https://i.pinimg.com/videos/thumbnails/originals/d6/f9/c4/d6f9c4f7f46f1e33e073770bf60c1a43.0000000.jpg",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-start  py-10 px-5 md:px-10">
      <h1 className="text-left text-4xl">Meet Our Chefs</h1>
      <div className="flex flex-wrap  w-full  justify-center items-center mt-10">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mx-5"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-80 h-150 rounded-[20px] object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{chef.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChefs;

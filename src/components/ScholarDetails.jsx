import React from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../data/scholarsData";

function ScholarDetails() {
  const { id } = useParams();
  const scholar = Object.values(categories).flatMap(c => c.scholars).find(s => s.id === Number(id));

  if (!scholar) return <div className="text-center text-red-500">لم يتم العثور على هذه الشخصية</div>;

  return (
    <div className="container mx-auto p-6">
      <img src={scholar.image} alt={scholar.name} className="w-full max-w-lg mx-auto rounded-lg shadow-md" />
      <h1 className="text-3xl font-bold mt-4 text-center text-emerald-800">{scholar.name}</h1>
      <p className="text-center text-gray-600">📍 {scholar.city} - 🎓 {scholar.specialty}</p>
      <p className="mt-4 text-gray-700 leading-relaxed">{scholar.details}</p>
      <h2 className="text-xl font-semibold mt-6">📺 فيديوهات ذات صلة:</h2>
      
      <ul className="list-disc pl-6 mt-2">
        {scholar.videos.map((video, index) => (
          <li key={index}>
            <iframe width="420" height="315"
            src={video} allowFullScreen>
            </iframe>
            
          </li>
        ))}
      </ul>
      <Link to="/scholars" className="mt-6 inline-block text-white bg-emerald-600 px-4 py-2 rounded-lg shadow-md hover:bg-emerald-700">عودة</Link>
    </div>
  );
}

export default ScholarDetails;

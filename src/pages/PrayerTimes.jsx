import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const PrayerTimes = () => {
  const [times, setTimes] = useState({});
  const [loading, setLoading] = useState(true);

  // قائمة المدن المغربية
  const cities = [
    "Casablanca", "Rabat", "Marrakech", "Fes",
    "Tangier", "Meknes", "Agadir", "Oujda",
    "Kenitra", "Tetouan"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = {};
        
        await Promise.all(cities.map(async (city) => {
          const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Morocco&method=2`
          );
          const data = await response.json();
          results[city] = data.data.timings;
        }));

        setTimes(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="bg-emerald-100 p-2 text-center">
      جاري تحديث أوقات الصلاة...
    </div>
  );

  return (
    <Marquee 
      speed={50}
      pauseOnHover={true}
      className="bg-emerald-800 text-white py-3 text-sm font-arabic"
    >
      {Object.entries(times).map(([city, timings]) => (
        <div key={city} className="flex items-center mx-6">
          <span className="ml-2 font-bold">🌙 {city}:</span>
          <span className="mx-3">الفجر: {timings.Fajr}</span>
          <span className="mx-3">الظهر: {timings.Dhuhr}</span>
          <span className="mx-3">العصر: {timings.Asr}</span>
          <span className="mx-3">المغرب: {timings.Maghrib}</span>
          <span className="mx-3">العشاء: {timings.Isha}</span>
        </div>
      ))}
    </Marquee>
  );
};

export default PrayerTimes;
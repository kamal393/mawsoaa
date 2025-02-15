import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrayTimes from 'praytimes';

// بيانات الأذكار
const adhkar = [
  {
    text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ: اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ",
    reference: "البقرة: 255"
  },
  {
    text: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
    reference: "حديث نبوي"
  },
  {
    text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    reference: "تسبيح يومي"
  },
  {
    text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    reference: "صلاة على النبي"
  }
];

function Home() {
  return (
    <div className="space-y-12">
      {/* القسم الرئيسي */}
      <section className="relative text-center py-24 bg-[url('src/assets/images/hassan-II.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            موسوعة العلماء والقراء المغاربة
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed">
            اكتشف تراث المغرب العلمي والديني عبر العصور، وتعرف على علمائنا الأجلاء وقرائنا المتميزين
          </p>
          <DateTime />
          <div className="flex justify-center space-x-4 space-x-reverse mt-8">
            <Link
              to="/scholars"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 inline-block"
            >
              تصفح العلماء
            </Link>
            <Link
              to="/library"
              className="bg-white text-emerald-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              المكتبة الصوتية
            </Link>
          </div>
        </div>
      </section>

      {/* الأذكار اليومية */}
      <DailyAdhkar />

      {/* أوقات الصلاة */}
      <PrayerTimes />

      {/* الإحصائيات */}
      <div className="bg-white py-12 shadow-md">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-800">إحصائيات الموسوعة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="500+" text="عالم وقارئ" />
            <StatItem number="1000+" text="مقال علمي" />
            <StatItem number="2000+" text="تسجيل صوتي" />
            <StatItem number="100+" text="مدينة مغربية" />
          </div>
        </div>
      </div>

      {/* الأقسام المميزة */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">استكشف الموسوعة</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedSection
            title="أحدث التلاوات"
            description="استمع إلى أحدث التلاوات القرآنية من كبار القراء المغاربة"
            link="/library"
            icon="🎧"
          />
          <FeaturedSection
            title="المقالات العلمية"
            description="اقرأ أحدث المقالات والدروس في مختلف العلوم الشرعية"
            link="/articles"
            icon="📚"
          />
          <FeaturedSection
            title="الفتاوى"
            description="تصفح الأسئلة والأجوبة الفقهية من علماء المغرب"
            link="/qa"
            icon="⚖️"
          />
        </div>
      </div>
    </div>
  );
}

// باقي المكونات بدون تغيير (DateTime, PrayerTimes, DailyAdhkar, الدوال المساعدة، والمكونات الصغيرة)...

// مكون التاريخ والوقت
function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const arabicDate = date.toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8 border border-white/20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
        <div className="text-center md:text-right">
          <div className="text-2xl font-semibold">{arabicDate}</div>
          <div className="text-sm text-gray-200">التاريخ الهجري: {getHijriDate(date)}</div>
        </div>
        <div className="text-4xl font-bold text-emerald-300 animate-pulse">
          {formattedTime}
        </div>
      </div>
    </div>
  );
}

// مكون أوقات الصلاة
function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Casablanca");
  const [coordinates, setCoordinates] = useState({ lat: 33.5731, lng: -7.5898 });

  const cities = [
    { name: "الدار البيضاء", value: "Casablanca", coords: [33.5731, -7.5898] },
    { name: "الرباط", value: "Rabat", coords: [34.0209, -6.8416] },
    { name: "فاس", value: "Fes", coords: [34.0181, -5.0078] },
    { name: "مراكش", value: "Marrakech", coords: [31.6295, -8.0087] },
    { name: "طنجة", value: "Tangier", coords: [35.7595, -5.8340] },
    { name: "أكادير", value: "Agadir", coords: [30.4278, -9.5981] },
    { name: "وجدة", value: "Oujda", coords: [34.6816, -1.9077] },
    { name: "تطوان", value: "Tetouan", coords: [35.5769, -5.3686] }
  ];

  useEffect(() => {
    const calculatePrayerTimes = () => {
      const prayTimes = new PrayTimes('MWL');
      prayTimes.adjust({ asr: 'Hanafi' });

      const date = new Date();
      const times = prayTimes.getTimes(
        date,
        [coordinates.lat, coordinates.lng],
        0,
        'GMT+1',
        '24h'
      );

      setPrayerTimes({
        Fajr: times.fajr,
        Sunrise: times.sunrise,
        Dhuhr: times.dhuhr,
        Asr: times.asr,
        Maghrib: times.maghrib,
        Isha: times.isha
      });
    };

    calculatePrayerTimes();
    const interval = setInterval(calculatePrayerTimes, 60000);
    return () => clearInterval(interval);
  }, [coordinates]);

  const handleCityChange = (e) => {
    const city = cities.find(c => c.value === e.target.value);
    setSelectedCity(city.value);
    setCoordinates({ lat: city.coords[0], lng: city.coords[1] });
  };

  const formatPrayerTime = (time) => {
    const [hours, minutes] = time.split(':');
    let adjustedHours = (parseInt(hours) - 1 + 24) % 24;
    const date = new Date();
    date.setHours(adjustedHours, parseInt(minutes));
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-emerald-100 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">أوقات الصلاة</h2>
        
        <div className="flex flex-col items-center gap-6">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="px-6 py-3 rounded-xl border-2 border-emerald-200 bg-white text-emerald-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.name}
              </option>
            ))}
          </select>

          {prayerTimes && (
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(prayerTimes).map(([name, time]) => (
                  <div 
                    key={name} 
                    className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-emerald-800">
                          {getPrayerName(name)}
                        </div>
                        <div className="text-sm text-emerald-600">
                          {name === 'Sunrise' ? 'شروق الشمس' : 'وقت الصلاة'}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-emerald-700">
                        {formatPrayerTime(time)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// مكون الأذكار اليومية
function DailyAdhkar() {
  const [currentDhikr, setCurrentDhikr] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDhikr((prev) => (prev + 1) % adhkar.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-emerald-50/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-emerald-100 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">الأذكار اليومية</h2>
        
        <div className="relative min-h-[200px]">
          {adhkar.map((dhikr, index) => (
            <div
              key={index}
              className={`absolute inset-0 p-6 transition-opacity duration-500 ${
                index === currentDhikr ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
                <p className="text-2xl text-emerald-800 leading-relaxed text-center mb-4">
                  {dhikr.text}
                </p>
                <div className="text-sm text-emerald-600 text-center">
                  {dhikr.reference}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {adhkar.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDhikr(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentDhikr ? 'bg-emerald-600' : 'bg-emerald-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// الدوال المساعدة
const getHijriDate = (date) => {
  return new Intl.DateTimeFormat('ar-EG-u-ca-islamic', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date).replace('هـ', 'هـ');
};

const getPrayerName = (name) => {
  const names = {
    Fajr: "الفجر",
    Sunrise: "الشروق",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء"
  };
  return names[name];
};

// المكونات الصغيرة
function StatItem({ number, text }) {
  return (
    <div className="p-4">
      <div className="text-4xl font-bold text-emerald-800 mb-2">{number}</div>
      <div className="text-gray-600">{text}</div>
    </div>
  );
}

function FeaturedSection({ title, description, link, icon }) {
  return (
    <Link to={link} className="block">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-emerald-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

export default Home;
import React from "react";

function Mosques() {
  const mosques = [
    {
      id: 1,
      name: "مسجد الحسن الثاني",
      city: "الدار البيضاء",
      image: "/src/assets/images/hassan2.jpg",
      description: "أكبر مسجد في المغرب وثاني أكبر مسجد في أفريقيا، يتميز بمئذنته الشاهقة التي ترتفع 210 أمتار.",
      builtYear: 1993,
      capacity: "105,000 مصل"
    },
    {
      id: 2,
      name: "جامع القرويين",
      city: "فاس",
      image: "/src/assets/images/quarawiyine.jpg",
      description: "أقدم جامعة في العالم لا تزال تعمل حتى اليوم، تأسست عام 859 م على يد فاطمة الفهرية.",
      builtYear: 859,
      capacity: "22,000 مصل"
    },
    {
      id: 3,
      name: "مسجد الكتبية",
      city: "مراكش",
      image: "/src/assets/images/koutoubia.jpg",
      description: "أحد أشهر معالم مراكش، يتميز بمئذنته التي يبلغ ارتفاعها 77 مترًا والتي كانت نموذجًا لبناء صومعة الخيرالدا في إشبيلية.",
      builtYear: 1158,
      capacity: "25,000 مصل"
    },
    {
      id: 4,
      name: "مسجد محمد الخامس",
      city: "الرباط",
      image: "/src/assets/images/mohammed5.jpg",
      description: "يقع في قلب العاصمة الرباط، يتميز بتصميمه المعماري الفريد الذي يجمع بين الطراز المغربي التقليدي والحديث.",
      builtYear: 1969,
      capacity: "15,000 مصل"
    },
    {
      id: 5,
      name: "مسجد مولاي إسماعيل",
      city: "مكناس",
      image: "/src/assets/images/moulayismail.jpg",
      description: "بني في عهد السلطان مولاي إسماعيل، يتميز بفنائه الواسع ومئذنته المزخرفة بشكل فريد.",
      builtYear: 1672,
      capacity: "10,000 مصل"
    },
    {
      id: 6,
      name: "مسجد الأندلس",
      city: "فاس",
      image: "/src/assets/images/andalus.jpg",
      description: "يتميز بزخارفه الأندلسية الفريدة، بني في القرن العاشر الميلادي.",
      builtYear: 956,
      capacity: "8,000 مصل"
    }
  ];

  return (
    <div className="container mx-auto px-4 min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/assets/images/mosque-bg.jpg')] bg-cover bg-fixed opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center text-emerald-800 pt-6">مساجد المملكة المغربية</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {mosques.map((mosque) => (
          <div 
            key={mosque.id} 
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-emerald-50"
          >
            <div className="relative">
              <img 
                src={mosque.image} 
                alt={mosque.name} 
                className="w-full h-56 object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">{mosque.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-100/80 text-emerald-800 rounded-full text-sm backdrop-blur-sm">
                  📍 {mosque.city}
                </span>
                <span className="px-3 py-1 bg-amber-100/80 text-amber-800 rounded-full text-sm backdrop-blur-sm">
                  🏗️ {mosque.builtYear}
                </span>
                <span className="px-3 py-1 bg-blue-100/80 text-blue-800 rounded-full text-sm backdrop-blur-sm">
                  🕌 {mosque.capacity}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{mosque.description}</p>
              <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                <span>اقرأ المزيد</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168a1 1 0 00-1.111 1.631l1.805 1.304H6a1 1 0 100 2h4.249l-1.805 1.304a1 1 0 001.11 1.631l3.197-2.312a1 1 0 000-1.631L9.555 7.168z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mosques;

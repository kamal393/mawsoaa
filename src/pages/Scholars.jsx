import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Scholars() {
  // تقسيم العلماء حسب العصور
  const eras = {
    andalusian: {
      name: "العصر الأندلسي",
      scholars: [
        { id: 1, name: "القاضي عياض", city: "سبتة", specialty: "الفقه والحديث", image: "/src/assets/images/qadi-iyad.jpg", description: "من كبار علماء الحديث والفقه المالكي، صاحب كتاب الشفا." },
        { id: 2, name: "ابن رشد الجد", city: "قرطبة", specialty: "الفقه المالكي", image: "/src/assets/images/ibn-rushd-jad.jpg", description: "فقيه وقاضٍ مغربي، جد الفيلسوف ابن رشد الحفيد." },
        { id: 3, name: "ابن عبد البر", city: "قرطبة", specialty: "الحديث والفقه المالكي", image: "/src/assets/images/ibn-abdilbarr.jpg", description: "صاحب كتاب الاستيعاب في معرفة الأصحاب." },
        { id: 4, name: "ابن العربي المعافري", city: "إشبيلية", specialty: "التفسير والفقه", image: "/src/assets/images/ibn-arabi.jpg", description: "مؤلف كتاب أحكام القرآن والعواصم من القواصم." }
      ]
    },
    marinid: {
      name: "العصر المريني",
      scholars: [
        { id: 5, name: "الونشريسي", city: "تلمسان", specialty: "الفقه المالكي", image: "/src/assets/images/wancharisi.jpg", description: "صاحب المعيار المعرب في الفقه المالكي." },
        { id: 6, name: "ابن الحاج العبدري", city: "فاس", specialty: "الفقه المالكي", image: "/src/assets/images/ibn-hajj.jpg", description: "مؤلف كتاب المدخل الذي تناول فيه بعض البدع المنتشرة." }
      ]
    },
    alaouite: {
      name: "العصر العلوي",
      scholars: [
        { id: 7, name: "ابن عاشر", city: "فاس", specialty: "الفقه والتصوف", image: "/src/assets/images/ibn-ashir.jpg", description: "صاحب متن المرشد المعين الذي يدرّس في الفقه المالكي." }
      ]

    },
    modern: {
      name: "العصر الحديث",
      scholars: [
        { id: 8, name: "الشيخ سعيد الكملي", city: "الرباط", specialty: "الحديث وعلومه", image: "/src/assets/images/said.jpg", description: "فقيه ومحدث مغربي معاصر." },
        { id: 9, name: "الدكتور أحمد الريسوني", city: "القنيطرة", specialty: "المقاصد الشرعية", image: "/src/assets/images/raisouni.jpg", description: "من كبار المتخصصين في مقاصد الشريعة، ورئيس سابق للاتحاد العالمي لعلماء المسلمين." },
        { id: 10, name: "الدكتور مصطفى بنحمزة", city: "وجدة", specialty: "الفقه المالكي", image: "/src/assets/images/benhamza.jpg", description: "رئيس المجلس العلمي المحلي بوجدة، وعالم في الفقه المالكي." },
        { id: 11, name: "الدكتور عبد الله بلمدني", city: "الراشيدية", specialty: "الحديث وعلومه", image: "/src/assets/images/belmadani.jpg", description: "محدث مغربي بارز ومهتم بتدريس علوم الحديث." },
        { id: 12, name: "الشيخ عبد الهادي حميتو", city: "طنجة", specialty: "علوم القرآن", image: "/src/assets/images/hamito2.jpg", description: "من أبرز علماء القراءات في المغرب المعاصر." }
      ]
    },
    quran_readers: {
      name: "قراء القرآن",
      scholars: [
        { id: 13, name: "القارئ عبد الرحمن الكتاني", city: "فاس", specialty: "القراءات والتجويد", image: "/src/assets/images/katani.jpg", description: "أحد أشهر قراء المغرب وأستاذ القراءات." },
        { id: 14, name: "القارئ عمر القزابري", city: "الدار البيضاء", specialty: "الإمامة والقراءات", image: "/src/assets/images/qazabri.jpg", description: "إمام مسجد الحسن الثاني وأحد أبرز القراء المغاربة." },
        { id: 15, name: "القارئ عبد الكبير الحديدي", city: "مراكش", specialty: "التجويد والقراءات", image: "/src/assets/images/hedidi.jpg", description: "قارئ متميز بصوته العذب وأسلوبه الفريد في التلاوة." },
        { id: 16, name: "القارئ عبد الرحيم النابلسي", city: "مراكش", specialty: "القراءات والتجويد", image: "/src/assets/images/nabulsi.jpg", description: "شيخ القراءات في المغرب وأحد كبار المقرئين." },
        { id: 17, name: "القارئ رشيد بن عبد الله", city: "الرباط", specialty: "التجويد والقراءات", image: "/src/assets/images/rashid.jpg", description: "أحد قراء المغرب المتميزين في فن التلاوة." }
      ]
    },
    mosques: {
      name: "المساجد المغربية",
      scholars: [
        { 
          id: 18, 
          name: "مسجد الحسن الثاني", 
          city: "الدار البيضاء", 
          specialty: "العمارة المغربية الحديثة", 
          image: "/src/assets/images/hassan-II.jpg", 
          description: "أكبر مسجد في المغرب وثاني أكبر مسجد في أفريقيا، يتميز بمئذنته الشاهقة وقاعة الصلاة الفسيحة." 
        },
        { 
          id: 19, 
          name: "جامع القرويين", 
          city: "فاس", 
          specialty: "العمارة المرينية", 
          image: "/src/assets/images/karaouine.jpg", 
          description: "أقدم جامعة في العالم仍在运作،由فاطمة الفهرية于859年创立，مركز علمي وروحي مهم." 
        },
        { 
          id: 20, 
          name: "مسجد الكتبية", 
          city: "مراكش", 
          specialty: "العمارة الموحدية", 
          image: "/src/assets/images/koutoubia.jpg", 
          description: "أشهر معالم مراكش، بني في القرن الثاني عشر، يتميز بمئذنته الحمراء التي تعد نموذجًا للفن المغربي." 
        },
        { 
          id: 21, 
          name: "مسجد آيت بنحدو", 
          city: "ورزازات", 
          specialty: "العمارة الجنوبية", 
          image: "/src/assets/images/ait-benhaddou.jpg", 
          description: "مسجد تاريخي ضمن قرية آيت بنحدو المصنفة تراثًا عالميًا من طرف اليونسكو." 
        },
        { 
          id: 22, 
          name: "مسجد محمد السادس", 
          city: "الدار البيضاء", 
          specialty: "عمارة معاصرة", 
          image: "/src/assets/images/mohammed6.jpg", 
          description: "تحفة معمارية حديثة تتسع لأكثر من 100 ألف مصلٍّ، مزود بتقنيات ذكية وصديقة للبيئة." 
        }
      ]
    }
    
  };

  const [selectedEra, setSelectedEra] = useState(null);
  const [expandedScholarId, setExpandedScholarId] = useState(null); // Nouvel état pour gérer l'expansion

  const getScholars = () => {
    if (!selectedEra) return Object.values(eras).flatMap(e => e.scholars);
    return eras[selectedEra].scholars;
  };

  const toggleDetails = (id) => {
    //setExpandedScholarId(prevId => prevId === id ? null : id);
    
  };

  return (
    <div className="container mx-auto px-4 min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/assets/imageszellige-bg.jpg')] bg-cover bg-fixed opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center text-emerald-800 pt-6">العلماء عبر العصور</h1>
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <button
          onClick={() => setSelectedEra(null)}
          className={`px-4 py-2 rounded-lg border-2 transition-all ${
            !selectedEra 
              ? "bg-emerald-600 border-emerald-700 text-white shadow-lg" 
              : "bg-white border-emerald-200 hover:border-emerald-300 text-emerald-700"
          }`}
        >
          جميع العصور
        </button>
        {Object.entries(eras).map(([key, era]) => (
          <button
            key={key}
            onClick={() => setSelectedEra(key)}
            className={`px-4 py-2 rounded-lg border-2 transition-all ${
              selectedEra === key 
                ? "bg-emerald-600 border-emerald-700 text-white shadow-lg" 
                : "bg-white border-emerald-200 hover:border-emerald-300 text-emerald-700"
            }`}
          >
            {era.name}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {getScholars().map((scholar) => (
          <div 
            key={scholar.id} 
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-emerald-50"
          >
            <div className="relative">
              <img 
                src={scholar.image} 
                alt={scholar.name} 
                className="w-full h-56 object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">{scholar.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-100/80 text-emerald-800 rounded-full text-sm backdrop-blur-sm">
                  📍 {scholar.city}
                </span>
                <span className="px-3 py-1 bg-amber-100/80 text-amber-800 rounded-full text-sm backdrop-blur-sm">
                  🎓 {scholar.specialty}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{scholar.description}</p>
            
              <Link 
                to={`/scholar/${scholar.id}`} 
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>اقرأ المزيد</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168a1 1 0 00-1.111 1.631l1.805 1.304H6a1 1 0 100 2h4.249l-1.805 1.304a1 1 0 001.11 1.631l3.197-2.312a1 1 0 000-1.631L9.555 7.168z" clipRule="evenodd" />
                </svg>
              </Link>
              {expandedScholarId === scholar.id && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">معلومات إضافية:</h4>
                  <p className="text-gray-700 leading-relaxed">{scholar.description}</p>
                  {/* Vous pouvez ajouter plus d'informations ici si nécessaire */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scholars;
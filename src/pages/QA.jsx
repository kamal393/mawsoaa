import React, { useState } from "react";

function QA() {
  // تصنيف الأسئلة حسب المجالات
  const categories = {
    faith: {
      name: "العقيدة والإيمان",
      questions: [
        { question: "ما هي أركان الإيمان؟", answer: "الإيمان بالله، ملائكته، كتبه، رسله، اليوم الآخر، والقدر خيره وشره." },
        { question: "ما هي أنواع التوحيد؟", answer: "توحيد الربوبية، الألوهية، الأسماء والصفات." },
        { question: "ما هي السبع الموبقات؟", answer: "الشرك، السحر، قتل النفس، أكل الربا، أكل مال اليتيم، التولي يوم الزحف، قذف المحصنات." },
        { question: "ما هو أول ما خلق الله؟", answer: "القلم." },
        { question: "ما هي أعلى مراتب الدين؟", answer: "الإحسان." },
      ]
    },
    fiqh: {
      name: "الفقه وأحكام الشرع",
      questions: [
        { question: "ما هي شروط الصلاة؟", answer: "الطهارة، استقبال القبلة، ستر العورة، دخول الوقت." },
        { question: "ما حكم الأضحية؟", answer: "سنة مؤكدة على القادر." },
        { question: "ما هي أحكام الطهارة؟", answer: "الوضوء للصلاة، والغسل من الجنابة، والتيمم عند العجز." },
        { question: "ما هي أركان الحج؟", answer: "الإحرام، الوقوف بعرفة، طواف الإفاضة، السعي بين الصفا والمروة." },
        { question: "ما هو حكم صلاة الجمعة؟", answer: "فرض عين على الذكور البالغين." },
      ]
    },
    seera: {
      name: "السيرة النبوية",
      questions: [
        { question: "من هو أول سفير في الإسلام؟", answer: "مصعب بن عمير." },
        { question: "ما اسم غزوة الخندق؟", answer: "غزوة الأحزاب." },
        { question: "من هو الصحابي الذي نام في فراش النبي ليلة الهجرة؟", answer: "علي بن أبي طالب." },
        { question: "من هو الصحابي الذي لقب بسيف الله المسلول؟", answer: "خالد بن الوليد." },
        { question: "ما هو اسم ناقة النبي؟", answer: "القصواء." },
      ]
    },
    quran: {
      name: "علوم القرآن",
      questions: [
        { question: "ما هي أطول سورة في القرآن؟", answer: "سورة البقرة." },
        { question: "ما السورة التي تسمى قلب القرآن؟", answer: "سورة يس." },
        { question: "كم عدد سور القرآن الكريم؟", answer: "114 سورة." },
        { question: "ما هي السورة التي تعدل ثلث القرآن؟", answer: "سورة الإخلاص." },
        { question: "ما هي أعظم آية في القرآن؟", answer: "آية الكرسي (البقرة:255)." },
      ]
    },
    general: {
      name: "أسئلة عامة",
      questions: [
        { question: "ما هو عدد الأنبياء المذكورين في القرآن؟", answer: "25 نبيًا." },
        { question: "من هو النبي الذي أطلق عليه 'ذو النون'؟", answer: "يونس عليه السلام." },
        { question: "ما هو الطواف الذي لا يعقبه سعي؟", answer: "طواف الوداع." },
        { question: "ما هي الأشهر الحرم؟", answer: "ذو القعدة، ذو الحجة، محرم، ورجب." },
        { question: "ما هي مدة العدة للمرأة المتوفى زوجها؟", answer: "أربعة أشهر وعشرة أيام." },
      ]
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(null);

  // دالة لإنشاء قائمة الأسئلة حسب التصنيف
  const getQuestions = () => {
    if (!selectedCategory) return Object.values(categories).flatMap(c => c.questions);
    return categories[selectedCategory].questions;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">الموسوعة الإسلامية المصنفة</h1>
      
      {/* أزرار التصنيفات */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg ${
            !selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          كل الأسئلة
        </button>
        
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === key ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* قائمة الأسئلة */}
      <div className="space-y-4">
        {getQuestions().map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => setVisibleIndex(visibleIndex === index ? null : index)}
            >
              {item.question}
            </div>
            {visibleIndex === index && (
              <div className="mt-2 text-gray-700">
                {item.answer}
                {selectedCategory && (
                  <span className="block mt-2 text-sm text-green-600">
                    التصنيف: {categories[selectedCategory].name}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QA;

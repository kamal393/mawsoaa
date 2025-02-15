// src/pages/Articles.js
import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

function Articles() {
  const navigate = useNavigate();

  // Liste des articles
  const articles = [
    {
      id: 1,
      title: "أركان الإسلام الخمسة",
      description: "شرح مفصل للأركان الأساسية التي بni عليها الإسلام",
      content: `بني الإسلام على خمسة أركان عظيمة تُشكّل الأسس الرئيسية لهذا الدين القويم:
      1. الشهادتان
      2. إقامة الصلاة
      3. إيتاء الزكاة
      4. صوم رمضان
      5. حج البيت لمن استطاع إليه سبيلاً.`,
    },
    {
      id: 2,
      title: "مبادئ الفقه الإسلامي",
      description: "مقدمة حول أصول ومبادئ الفقه الإسلامي.",
      content: "هذا هو النص الكامل الذي يشرح مبادئ الفقه الإسلامي بالتفصيل.",
    },
    {
      id: 3,
      title: "دروس في تفسير القرآن الكريم",
      description: "شرح موجز لبعض الآيات القرآنية.",
      content: "هذا النص يحتوي على شرح مفصل لبعض الآيات القرآنية المهمة.",
    },
    {
      id: 4,
      title: "الإيمان وأركانه",
      description: "شرح مفهوم الإيمان وأركانه الستة.",
      content: `الأركان الستة للإيمان هي:
      1. الإيمان بالله
      2. الإيمان بالملائكة
      3. الإيمان بالكتب السماوية
      4. الإيمان بالأنبياء
      5. الإيمان بيوم القيامة
      6. الإيمان بالقدر خيره وشره`,
    },
    {
      id: 5,
      title: "فضل الصلاة",
      description: "أهمية الصلاة في حياة المسلم.",
      content: "الصلاة ركن أساسي من أركان الإسلام، وهي عمود الدين. فهي تربط العبد بربه وتمنحه السكينة والطمأنينة.",
    },
    {
      id: 6,
      title: "زكاة المال",
      description: "شروط وأحكام زكاة المال.",
      content: "زكاة المال فريضة على كل مسلم capable مالاً زائداً عن الحاجة لمدة سنة كاملة. نسبتها هي 2.5% من القيمة الإجمالية.",
    },
    {
      id: 7,
      title: "فوائد صيام رمضان",
      description: "الفوائد الروحية والجسدية لصيام رمضان.",
      content: "صيام رمضان يساعد على تنقية النفس، تعزيز التقوى، وتحسين الصحة الجسدية والعقلية.",
    },
    {
      id: 8,
      title: "حج بيت الله الحرام",
      description: "كيفية أداء فريضة الحج.",
      content: "الحج هو رحلة دينية إلى مكة المكرمة، ويجب على كل مسلم قادر أداؤها مرة واحدة في حياته.",
    },
    {
      id: 9,
      title: "العبادات في الإسلام",
      description: "أنواع العبادات وأهميتها.",
      content: "العبادات في الإسلام تشمل الصلاة، الزكاة، الصيام، الحج، وقراءة القرآن الكريم.",
    },
    {
      id: 10,
      title: "التوحيد وأقسامه",
      description: "شرح مفهوم التوحيد وأقسامه الثلاثة.",
      content: `أقسام التوحيد هي:
      1. توحيد الربوبية
      2. توحيد الألوهية
      3. توحيد الأسماء والصفات`,
    },
    {
      id: 11,
      title: "النبوة والرسالة",
      description: "مفهوم النبوة والرسالة في الإسلام.",
      content: "النبي هو الشخص الذي يبلغ رسالة الله للبشرية، بينما الرسول هو النبي الذي يأتي بشرع جديد.",
    },
    {
      id: 12,
      title: "القرآن الكريم",
      description: "خصائص القرآن الكريم وفضائله.",
      content: "القرآن الكريم هو كلام الله المنزل على النبي محمد صلى الله عليه وسلم، وهو معجزة خالدة.",
    },
    {
      id: 13,
      title: "السنة النبوية",
      description: "أهمية السنة النبوية في التشريع الإسلامي.",
      content: "السنة النبوية هي قول النبي صلى الله عليه وسلم، فعله، وتقريره، وهي المصدر الثاني للتشريع بعد القرآن الكريم.",
    },
    {
      id: 14,
      title: "الإحسان",
      description: "مفهوم الإحسان وأهميته في الإسلام.",
      content: "الإحسان هو أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك.",
    },
    {
      id: 15,
      title: "الجهاد في الإسلام",
      description: "تعريف الجهاد وأنواعه.",
      content: `أنواع الجهاد هي:
      1. جهاد النفس
      2. جهاد اللسان
      3. جهاد المال
      4. جهاد السيف`,
    },
    {
      id: 16,
      title: "الصدقة وفضلها",
      description: "أهمية الصدقة وأثرها في المجتمع.",
      content: "الصدقة تطهر المال وتزيد من البركة فيه، كما أنها تقوي الروابط الاجتماعية.",
    },
    {
      id: 17,
      title: "العمرة",
      description: "كيفية أداء العمرة وأهميتها.",
      content: "العمرة عبادة مشابهة للحج، ويمكن أداؤها في أي وقت من السنة.",
    },
    {
      id: 18,
      title: "الوضوء وأهميته",
      description: "خطوات وأحكام الوضوء.",
      content: "الوضوء هو طهارة الجسم قبل الصلاة، ويشمل غسل الوجه، اليدين، المазورتين، والرأس.",
    },
    {
      id: 19,
      title: "الصلاة على النبي",
      description: "فضل الصلاة على النبي صلى الله عليه وسلم.",
      content: "الصلاة على النبي تمحو الذنوب، وتعزز العلاقة بين العبد وربه.",
    },
    {
      id: 20,
      title: "التسبيح والتحميد",
      description: "أهمية تسبيح الله وحمده.",
      content: "التسبيح والتحميد هما عبادة قلبية تعبر عن تعظيم الله تعالى وشكره على نعمه.",
    },
    {
      id: 21,
      title: "الدعاء وأثره",
      description: "أهمية الدعاء في حياة المسلم.",
      content: "الدعاء هو مخ العبادة، وهو وسيلة مباشرة للتواصل مع الله تعالى.",
    },
    {
      id: 22,
      title: "الصبر في الإسلام",
      description: "مفهوم الصبر وأهميته.",
      content: "الصبر هو ثبات النفس عند المصائب، واحتساب الأجر عند البلاء.",
    },
    {
      id: 23,
      title: "الصلاة على الأرواح",
      description: "كيفية الصلاة على الأموات.",
      content: "الصلاة على الأموات تشمل الدعاء لهم بالمغفرة والرحمة، وهي عبادة جماعية.",
    },
    {
      id: 24,
      title: "الزكاة وفوائدها",
      description: "أهمية زكاة المال وأثرها الاجتماعي.",
      content: "زكاة المال تطهر النفوس، وتقلل الفقر، وتعزز التكافل الاجتماعي.",
    },
    {
      id: 25,
      title: "العبادة في شهر رمضان",
      description: "أنواع العبادات الخاصة بشهر رمضان.",
      content: "شهر رمضان يتضمن الصيام، قراءة القرآن، صلاة التراويح، والإكثار من الدعاء.",
    },
    {
      id: 26,
      title: "العمرة في رمضان",
      description: "فضل العمرة في شهر رمضان.",
      content: "العمرة في رمضان لها فضل عظيم، حيث تعدل حجة مع النبي صلى الله عليه وسلم.",
    },
    {
      id: 27,
      title: "الصيام التطوعي",
      description: "أنواع الصيام التطوعي وأهميته.",
      content: "من أفضل الأيام للصيام التطوعي يوم الاثنين والخميس، وثلاثة أيام من كل شهر قمري.",
    },
    {
      id: 28,
      title: "الحج المبرور",
      description: "شروط قبول الحج المبرور.",
      content: "الحج المبرور هو الذي يؤديه pilgrim بنيّة خالصة لله، ويتجنب فيه المعاصي.",
    },
    {
      id: 29,
      title: "الصلاة في الجماعة",
      description: "فضل الصلاة في الجماعة.",
      content: "الصلاة في الجماعة تحظى بأجر أكبر من الصلاة الفردية، وهي سنة مؤكدة.",
    },
    {
      id: 30,
      title: "العلم في الإسلام",
      description: "أهمية العلم والتعليم في الإسلام.",
      content: "الإسلام حث على طلب العلم، حيث قال النبي صلى الله عليه وسلم: 'طلب العلم فريضة على كل مسلم ومسلمة'.",
    },
  ];
  // Fonction pour télécharger un fichier PDF
  const downloadPDF = (article) => {
    // Créer un élément temporaire pour le contenu de l'article
    const articleContent = `
      <div style="font-family: 'Amiri', serif; direction: rtl; text-align: right; padding: 10px;">
        <h1 style="font-size: 18px;">${article.title}</h1>
        <p style="font-size: 12px;">${article.description}</p>
        <p style="font-size: 12px;">${article.content}</p>
      </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = articleContent;
    document.body.appendChild(div);

    // Capturer l'élément HTML avec html2canvas
    html2canvas(div).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      // Dimensions de l'image
      const imgWidth = 200; // Largeur de l'image dans le PDF
      const pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let height = 0;
      let position = 0;

      // Ajouter l'image au PDF
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      height += imgHeight;

      // Gérer les pages supplémentaires si nécessaire
      while (height > pageHeight) {
        position = height - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        height -= pageHeight;
      }

      // Enregistrer le fichier PDF
      pdf.save(`${article.title}.pdf`);

      // Supprimer l'élément temporaire
      document.body.removeChild(div);
    });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Titre de la page */}
      <h1 className="text-3xl font-bold mb-8 text-center">المقالات والدروس</h1>

      {/* Liste des articles */}
      <div className="space-y-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Titre de l'article */}
            <h2 className="text-xl font-semibold">{article.title}</h2>

            {/* Description de l'article */}
            <p className="text-gray-700">{article.description}</p>

            {/* Boutons d'action */}
            <div className="flex justify-between mt-4">
              {/* Bouton pour télécharger le PDF */}
              <button
                onClick={() => downloadPDF(article)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                تحميل كملف PDF
              </button>

              {/* Bouton pour lire plus de détails */}
              <button
                onClick={() => navigate(`/article/${article.id}`)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                قراءة المزيد
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
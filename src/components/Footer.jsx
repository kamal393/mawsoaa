import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">عن الموسوعة</h3>
            <p className="text-emerald-100 leading-relaxed">
              موسوعة شاملة تجمع تراث علماء وقراء المغرب عبر العصور، حفظاً للتراث ونشراً للعلم
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/scholars" className="text-emerald-100 hover:text-white">العلماء والقراء</Link></li>
              <li><Link to="/library" className="text-emerald-100 hover:text-white">المكتبة</Link></li>
              <li><Link to="/articles" className="text-emerald-100 hover:text-white">المقالات</Link></li>
              <li><Link to="/qa" className="text-emerald-100 hover:text-white">الأسئلة والأجوبة</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-emerald-100">البريد الإلكتروني: kamalkamal393@gmail.com</li>
              <li className="text-emerald-100">الهاتف: 212660260883+</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookSquare size={32} />
              </a>
              <a 
                href="#" 
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitterSquare size={32} />
              </a>
              <a 
                href="#" 
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutubeSquare size={32} />
              </a>
              <a 
                href="#" 
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagramSquare size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-800 pt-8 text-center">
          <p className="text-emerald-100">جميع الحقوق محفوظة © {currentYear} موسوعة العلماء والقراء المغاربة</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
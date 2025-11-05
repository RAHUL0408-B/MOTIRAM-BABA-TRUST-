import React from "react";
import {Calendar, Clock, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Temple: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* ✅ Background Image */}
        <div className="relative h-96 flex items-center justify-center">
          <img
            src={new URL("/src/assets/Bhu.png", import.meta.url).href}
            alt="Temple Background"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* ✅ Overlay */}
          

          {/* ✅ Title and Subtitle */}
          <div className="relative text-center text-yellow z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("temple.title")}
            </h1>
            <p className="text-xl text-white-12500">
              भुगाव, लाखणी, भंडारा, महाराष्ट्र
            </p>
          </div>
        </div>

        {/* ✅ Content Section */}
        <div className="p-8 md:p-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t("temple.description")}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t("temple.history")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("temple.historyText")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-blue-600" />
                  {t("temple.visitInfo")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("temple.visitText")}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 my-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-green-600" />
                स्थान माहिती / Location Information
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="font-semibold w-32">गाव / Village:</span>
                  <span>भुगाव</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold w-32">तालुका / Taluka:</span>
                  <span>लाखणी</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold w-32">जिल्हा / District:</span>
                  <span>भंडारा</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold w-32">राज्य / State:</span>
                  <span>महाराष्ट्र</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white my-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                विशेष कार्यक्रम / Special Events
              </h2>
              
               
              
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  वार्षिक उत्सव / Annual festival
                </li>
              
            </div>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl">
              <p className="text-xl font-semibold text-gray-800 mb-2">
               || श्री संत विदेही मोतीराम बाबा ||
              </p>
              <p className="text-gray-700">
               || Shri Sant Videhi Motiram Baba ||
              </p>
            </div>
          </div>
        </div>
      </div>
  
  );
};

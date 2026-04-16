import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface Certificate {
  code: string;
  label: string;
  image: string;
}

interface EuroProgram {
  code: string;
  label: string;
  image: string;
  description: string;
}

const certificateCodes = ["ISO 3834-2", "ISO 1090-2", "ISO 9001"];
const certificateImages = [
  "../images/3834-2CERT.png",
  "../images/1090-2CERT.png",
  "../images/9001CERT.png",
];

export const Certificates: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedEuroProgram, setSelectedEuroProgram] = useState<EuroProgram | null>(null);

  const certificates: Certificate[] = certificateCodes.map((code, idx) => ({
    code,
    label: t.certificates.certLabel,
    image: certificateImages[idx],
  }));

  const euroPrograms: EuroProgram[] = t.certificates.euroPrograms.map((prog) => ({
    code: prog.code,
    label: t.certificates.euroLabel,
    image: "../images/euro-flag.png",
    description: prog.description,
  }));

  const openCertificate = (cert: Certificate) => setSelectedCertificate(cert);
  const closeCertificate = () => setSelectedCertificate(null);
  const openEuroProgram = (prog: EuroProgram) => setSelectedEuroProgram(prog);
  const closeEuroProgram = () => setSelectedEuroProgram(null);

  return (
    <section id="certificates" className="py-16 sm:py-24 bg-white" aria-label={language === 'en' ? 'ISO Certificates and European programs - Metalstroi' : 'ISO Сертификати и Европейски програми – Металстрой'}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">{t.certificates.sectionLabel}</h2>
          <p className="text-3xl sm:text-4xl font-serif text-corporate-dark">{t.certificates.sectionTitle}</p>
          <div className="section-header-divider"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => openCertificate(cert)}
              className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="w-16 h-16 bg-[#001fd2] rounded-2xl flex items-center justify-center text-corporate-dark overflow-hidden">
                  <img src="../images/TUV.png" alt="TUV certification - Металстрой" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">{cert.label}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-corporate-dark">{cert.code}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
          {euroPrograms.map((prog, idx) => (
            <div
              key={idx}
              onClick={() => openEuroProgram(prog)}
              className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="w-16 h-16 bg-[#003399] rounded-2xl flex items-center justify-center text-corporate-dark overflow-hidden">
                  <img src="../images/euro-flag.png" alt="European Program - Металстрой Стоянов и Георгиев" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">{prog.label}</p>
                <h3 className="text-sm sm:text-base font-bold text-corporate-dark leading-snug">{prog.code}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeCertificate}
        >
          <div className="relative max-w-[95%] sm:max-w-4xl max-h-[90vh] w-full flex justify-center items-center">
            <button
              onClick={closeCertificate}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors bg-black/50 sm:bg-transparent rounded-full p-2 sm:p-0 z-[60]"
            >
              <X size={32} />
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.code}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Euro Program Modal */}
      {selectedEuroProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 z-[60]"
          onClick={closeEuroProgram}
        >
          <div className="relative max-w-[95%] sm:max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] bg-white rounded-lg shadow-2xl p-6 sm:p-8 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeEuroProgram}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 transition-colors bg-gray-100 rounded-full p-1"
            >
              <X size={24} />
            </button>
            <h3 className="text-lg sm:text-xl pr-6 font-bold text-corporate-dark mb-4 leading-snug">{selectedEuroProgram.code}</h3>
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {selectedEuroProgram.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

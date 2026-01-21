import React, { useState } from 'react';
import { FileText, X } from 'lucide-react';

interface Certificate {
    code: string;
    label: string;
    image: string;
}

const certificates: Certificate[] = [
    {
        code: "ISO 3834-2",
        label: "СЕРТИФИКАТ",
        image: "../images/3834-2CERT.png"
    },
    {
        code: "ISO 14001-BG",
        label: "СЕРТИФИКАТ",
        image: "../images/14001CERT.png"
    },
    {
        code: "ISO 1090-2",
        label: "СЕРТИФИКАТ",
        image: "../images/1090-2CERT.png"
    },
    {
        code: "ISO 45001-BG",
        label: "СЕРТИФИКАТ",
        image: "../images/45001CERT.png"
    },
    {
        code: "ISO 9001",
        label: "СЕРТИФИКАТ",
        image: "../images/9001CERT.png"
    },
];

export const Certificates: React.FC = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    const openCertificate = (cert: Certificate) => {
        setSelectedCertificate(cert);
    };

    const closeCertificate = () => {
        setSelectedCertificate(null);
    };

    return (
        <section id="certificates" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">СЕРТИФИКАТИ</h2>
                    <span className="text-4xl font-serif text-corporate-dark">Сигурност и качество</span>
                    <div className="section-header-divider"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certificates.map((cert, idx) => (
                        <div
                            key={idx}
                            onClick={() => openCertificate(cert)}
                            className="bg-white rounded-2xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
                        >
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-16 h-16 bg-[#001fd2] rounded-2xl flex items-center justify-center text-corporate-dark overflow-hidden">
                                    <img src="../images/TUV.png" alt="TUV" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">{cert.label}</p>
                                <h3 className="text-2xl font-bold text-corporate-dark">{cert.code}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={closeCertificate}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full flex justify-center items-center">
                        <button
                            onClick={closeCertificate}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
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
        </section>
    );
};

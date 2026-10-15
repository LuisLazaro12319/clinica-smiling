import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLINIC, SOCIALS } from '../data/clinicData';
import { ICONOS_REDES } from './redes';

/** Invitación a seguir las redes de la clínica para enterarse de promos, descuentos y sorteos. */
export const SocialSection: React.FC = () => (
  <section
    id="redes"
    className="py-14 md:py-20 bg-gradient-to-b from-indigo-50 to-white border-b border-indigo-100"
  >
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-500 bg-clip-text text-transparent">
          Seguinos en nuestras redes
        </span>
      </h2>
      <div className="mx-auto mt-4 mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-9">
        Enterate primero de las promos, los descuentos y los sorteos de {CLINIC.name}.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SOCIALS.map((s) => {
          const { Icono, fondo } = ICONOS_REDES[s.id];
          return (
            <li key={s.id}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white border border-indigo-100 shadow-md shadow-indigo-900/5 px-5 py-4 text-left hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <span className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${fondo}`}>
                  <Icono className="w-6 h-6" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-extrabold text-slate-900">{s.label}</span>
                  <span className="block text-sm text-slate-500 truncate">{s.handle}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-indigo-400 group-hover:text-indigo-700 transition-colors" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

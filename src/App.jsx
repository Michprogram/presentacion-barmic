import React, { useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Colores dinámicos dependiendo del tema
  const theme = {
    bg: isDark ? 'bg-slate-950' : 'bg-slate-50',
    text: isDark ? 'text-slate-300' : 'text-slate-600',
    title: isDark ? 'text-white' : 'text-slate-900',
    card: isDark ? 'bg-slate-900' : 'bg-white',
    border: isDark ? 'border-slate-800' : 'border-slate-200',
    hoverBorder: isDark ? 'hover:border-red-500' : 'hover:border-red-600',
    shadow: isDark ? 'hover:shadow-[0_0_25px_rgba(220,38,38,0.15)]' : 'hover:shadow-[0_10px_25px_rgba(220,38,38,0.1)]',
    accent: isDark ? 'text-red-500' : 'text-red-700',
    badgeBg: isDark ? 'bg-red-950/30' : 'bg-red-100',
  };

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen font-sans transition-colors duration-500 selection:bg-red-500/30`}>
      
      {/* HEADER / NAV FIJO */}
      <header className={`fixed top-0 w-full z-50 p-4 flex justify-between items-center backdrop-blur-md border-b ${theme.border} ${isDark ? 'bg-slate-950/80' : 'bg-white/80'}`}>
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className={theme.accent}>INACAP</span>
          <span className={`hidden sm:inline ${theme.title}`}>| Análisis Ciber-Legal</span>
        </div>
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full border ${theme.border} transition-transform hover:scale-110 flex items-center justify-center`}
          title="Cambiar Modo"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          ) : (
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          )}
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* 1. PORTADA */}
        <section className="min-h-[70vh] flex flex-col justify-center items-start relative animate-[fadeIn_1s_ease-out]">
          <div className={`text-sm font-bold tracking-widest uppercase mb-4 ${theme.accent}`}>Proyecto de Ciberseguridad</div>
          <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight ${theme.title}`}>
            Filtración Masiva <br/>
            <span className={theme.accent}>Twitch (2021)</span>
          </h1>
          <p className="text-xl max-w-2xl mb-12 leading-relaxed">
            Evaluación técnica y jurídica del incidente de 125 GB bajo el marco normativo nacional e internacional de protección de datos.
          </p>
          <div className={`p-6 border-l-4 border-red-500 ${theme.card} w-full max-w-lg rounded-r-lg shadow-lg`}>
            <ul className="space-y-2 text-sm">
              <li><strong className={theme.title}>Estudiante:</strong> Michele Andrea Barriga Carrasco</li>
              <li><strong className={theme.title}>Carrera:</strong> Analista Programador</li>
              <li><strong className={theme.title}>Institución:</strong> INACAP Valparaíso</li>
              <li><strong className={theme.title}>Fecha:</strong> 28 de Mayo de 2026</li>
            </ul>
          </div>
        </section>

        {/* 2. EL INCIDENTE */}
        <section className="scroll-mt-24">
          <h2 className={`text-3xl font-bold mb-8 ${theme.title}`}>01. El Incidente</h2>
          <div className={`p-8 rounded-2xl border ${theme.border} ${theme.card} transition-all duration-500 transform hover:-translate-y-2 ${theme.hoverBorder} ${theme.shadow}`}>
            <p className="mb-4">El 6 de octubre de 2021, un atacante anónimo publicó en 4chan un enlace torrent con <strong>125 GB</strong> de datos altamente confidenciales de Twitch (AWS).</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className={`p-4 rounded-lg border ${theme.border} ${theme.badgeBg}`}>
                <h4 className={`font-bold mb-2 ${theme.title}`}>Privacidad</h4>
                <p className="text-sm">Exposición del historial financiero y pagos brutos a creadores desde 2019.</p>
              </div>
              <div className={`p-4 rounded-lg border ${theme.border} ${theme.badgeBg}`}>
                <h4 className={`font-bold mb-2 ${theme.title}`}>Propiedad Intelectual</h4>
                <p className="text-sm">Extracción de la totalidad del código fuente y proyectos secretos ("Vapor").</p>
              </div>
              <div className={`p-4 rounded-lg border ${theme.border} ${theme.badgeBg}`}>
                <h4 className={`font-bold mb-2 ${theme.title}`}>Seguridad Técnica</h4>
                <p className="text-sm">Filtración de herramientas internas de ciberseguridad (Red Teaming).</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MARCO LEGAL Y ESTÁNDARES */}
        <section className="scroll-mt-24">
          <h2 className={`text-3xl font-bold mb-8 ${theme.title}`}>02. Marco Regulatorio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: "Ley 21.459 (Chile)", desc: "Normas sobre Delitos Informáticos. Tipifica el acceso ilícito y la distribución de datos robados." },
              { id: "Ley 19.628 (Chile)", desc: "Protección de la Vida Privada. Exige el debido cuidado y regula los Derechos ARCO de los streamers afectados." },
              { id: "GDPR (Unión Europea)", desc: "Estándar global. Obliga a notificar brechas en un plazo máximo de 72 horas." },
              { id: "PCI-DSS", desc: "Normativa de pagos. Exige micro-segmentación estricta de la red para proteger datos financieros." },
              { id: "ISO/IEC 27001", desc: "Estándar SGSI. Evidencia la falta de auditorías en los cambios de configuración de los servidores AWS." }
            ].map((item, index) => (
              <div key={index} className={`p-6 rounded-xl border ${theme.border} ${theme.card} transition-all duration-300 hover:scale-[1.02] ${theme.hoverBorder} ${theme.shadow} flex flex-col justify-center`}>
                <h3 className={`font-bold text-lg mb-2 ${theme.accent}`}>{item.id}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. ACTORES Y RESPONSABILIDADES */}
        <section className="scroll-mt-24">
          <h2 className={`text-3xl font-bold mb-8 ${theme.title}`}>03. Actores Involucrados</h2>
          <div className="space-y-6">
            {[
              { actor: "Hacker Anónimo", rol: "Atacante Directo", penal: "Imputado principal (Art. 2, 3 y 6 Ley 21.459).", civil: "Obligado a indemnizar perjuicios a la empresa y afectados." },
              { actor: "Twitch Interactive", rol: "Responsable de los Datos", penal: "Ninguna (Víctima).", civil: "Demanda civil por negligencia en custodia de datos (Art. 23 Ley 19.628)." },
              { actor: "Amazon (AWS)", rol: "Matriz y Proveedor Cloud", penal: "Ninguna.", civil: "Posible responsabilidad solidaria (Art. 2320 Código Civil) por arquitectura defectuosa." },
              { actor: "4chan", rol: "Foro de Difusión", penal: "Posible complicidad si hay negativa dolosa a eliminar el torrent.", civil: "Demanda por omisión ante requerimientos Notice and Takedown." }
            ].map((actor, index) => (
              <div key={index} className={`p-6 rounded-xl border-l-4 border ${theme.border} border-l-red-500 ${theme.card} transition-all duration-300 hover:ml-4 hover:shadow-lg`}>
                <div className="flex justify-between items-end mb-4 border-b pb-2 border-slate-700/30">
                  <h3 className={`font-bold text-xl ${theme.title}`}>{actor.actor}</h3>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${theme.badgeBg} ${theme.accent}`}>{actor.rol}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong className={theme.title}>Penal:</strong> {actor.penal}</div>
                  <div><strong className={theme.title}>Civil/Admin:</strong> {actor.civil}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DERECHOS ARCO */}
        <section className="scroll-mt-24">
          <h2 className={`text-3xl font-bold mb-8 ${theme.title}`}>04. Derechos ARCO vulnerados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Acceso", "Rectificación", "Cancelación", "Oposición"].map((derecho, idx) => (
              <div key={idx} className={`p-6 text-center rounded-xl border ${theme.border} ${theme.card} transition-all duration-500 hover:-translate-y-3 ${theme.hoverBorder} hover:bg-red-500/5 group`}>
                <div className={`text-4xl font-black mb-3 ${theme.title} group-hover:text-red-500 transition-colors`}>{derecho.charAt(0)}</div>
                <h4 className="font-bold text-sm mb-2">{derecho}</h4>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-center italic opacity-80">
            Facultados por el Artículo 12 de la Ley 19.628 de Chile tras la exposición de bases de datos que permitían el perfilamiento sensible de usuarios.
          </p>
        </section>

        {/* 6. CONCLUSIÓN Y CIERRE */}
        <section className={`p-10 rounded-3xl border-2 ${theme.border} bg-gradient-to-br ${isDark ? 'from-slate-900 to-slate-950' : 'from-white to-slate-100'} relative overflow-hidden scroll-mt-24`}>
          <div className="relative z-10">
            <h2 className={`text-3xl font-bold mb-6 ${theme.title}`}>Reflexión Final</h2>
            <p className="mb-6 leading-relaxed">
              El incidente evidencia que la ciberseguridad exige un enfoque holístico. Las medidas organizativas (<strong>ISO 27001</strong>) y la segmentación estricta de red (<strong>PCI-DSS</strong>) deben operar en conjunto. 
              En el contexto chileno, la <strong>Ley 21.459</strong> actualiza la persecución penal, pero se requiere urgencia para adaptar la <strong>Ley 19.628</strong> a estándares internacionales como el <strong>GDPR</strong>, haciendo obligatoria la notificación de brechas en plazos críticos (72 hrs).
            </p>
            
            {/* BOTÓN GITHUB */}
            <div className="mt-12 flex justify-center">
              <a 
                href="https://github.com/Michprogram" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)]`}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Repositorio en GitHub
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Diseño decorativo de fondo */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>

      </main>
    </div>
  );
}
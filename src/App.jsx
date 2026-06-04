import React, { useState, useEffect } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeActor, setActiveActor] = useState(0);
  const [arcoUnlocked, setArcoUnlocked] = useState({ A: false, R: false, C: false, O: false });
  const [sysTime, setSysTime] = useState(new Date());

  const totalSlides = 8; 

  useEffect(() => {
    const timer = setInterval(() => {
      setSysTime(new Date()); 
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? prev : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));

  // TEMA: Modo "Hacker" vs Modo "Forense"
  const theme = {
    bg: isDark ? 'bg-black text-red-500' : 'bg-slate-200 text-slate-900',
    grid: isDark ? 'bg-[linear-gradient(to_right,#80000033_1px,transparent_1px),linear-gradient(to_bottom,#80000033_1px,transparent_1px)] bg-[size:40px_40px]' : 'bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px]',
    textBase: isDark ? 'text-red-50' : 'text-slate-800',
    title: isDark ? 'text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]' : 'text-red-700',
    card: isDark ? 'bg-black border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)]' : 'bg-white border-slate-400 shadow-xl',
    hoverCard: isDark ? 'hover:bg-red-950/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:border-red-400' : 'hover:bg-slate-50 hover:border-red-500',
    accent: isDark ? 'text-white bg-red-600' : 'text-white bg-slate-900',
    warning: isDark ? 'text-yellow-500' : 'text-amber-600'
  };

  const actores = [
    { nombre: "HACKER ANÓNIMO", rol: "SYS.BREACHER", penal: "Arts. 2, 3 y 6 Ley 21.459.", civil: "Arts. 2314/2329 CC (Daños).", icono: "☠️" },
    { nombre: "TWITCH INTERACTIVE", rol: "DATA.CUSTODIAN", penal: "Ninguna (Víctima).", civil: "Art. 23 Ley 19.628 y GDPR Art. 83.", icono: "👁️" },
    { nombre: "AMAZON (AWS)", rol: "CLOUD.HOST", penal: "Ninguna.", civil: "Art. 2320 CC (Arquit. defectuosa).", icono: "☁️" },
    { nombre: "4CHAN", rol: "NODE.DISTRIBUTOR", penal: "Complicidad por no borrar torrent.", civil: "Omisión (Notice and Takedown).", icono: "🌐" }
  ];

  return (
    <div className={`h-screen w-full overflow-hidden flex flex-col font-mono transition-colors duration-500 ${theme.bg} relative`}>
      {/* FONDO GRID */}
      <div className={`absolute inset-0 ${theme.grid} opacity-50 z-0`}></div>

      {/* HEADER TIPO TERMINAL */}
      <header className={`relative z-50 flex justify-between items-center px-8 py-4 border-b-2 ${isDark ? 'border-red-600 bg-black/90' : 'border-slate-800 bg-white/90'} backdrop-blur-md`}>
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_red]"></div>
          <div>
            <h1 className={`font-black text-xl tracking-widest ${theme.title}`}>INACAP_VALPARAISO <span className="animate-pulse">_</span></h1>
            <span className={`text-xs font-bold tracking-widest ${theme.warning}`}>// SYS.DEFENSE.PROJECT</span>
          </div>
        </div>
        
        <button onClick={() => setIsDark(!isDark)} className="p-2 border border-red-600 hover:bg-red-600 hover:text-white transition-all">
          {isDark ? 'SWITCH_TO_LIGHT_MODE' : 'SWITCH_TO_DARK_MODE'}
        </button>

        <div className="absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-300" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <main className="flex-1 relative w-full overflow-hidden z-10">
        <div className="h-full flex transition-transform duration-700 ease-[cubic-bezier(0.87,_0,_0.13,_1)]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          
          {/* DIAPOSITIVA 1: PORTADA */}
          <div className="w-full h-full flex-shrink-0 flex items-center justify-center p-12">
            <div className={`max-w-4xl w-full p-1 border-2 ${theme.card} relative group`}>
              <div className={`absolute -inset-1 bg-gradient-to-r from-red-600 to-black blur opacity-30 group-hover:opacity-70 transition duration-1000`}></div>
              <div className={`p-12 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
                <div className={`inline-block px-4 py-1 text-xs font-bold tracking-widest mb-6 border border-red-600 ${isDark ? 'text-red-500' : 'text-red-700'} uppercase animate-pulse`}>
                  &gt; Acceso Autorizado
                </div>
                <h2 className={`text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter ${theme.title}`}>
                  Filtración Masiva <br />
                  <span className={isDark ? 'text-white' : 'text-slate-900'}>[TWITCH_2021]</span>
                </h2>
                <p className={`text-xl max-w-2xl mb-12 ${theme.textBase}`}>
                  Análisis técnico y jurídico de la exposición de 125 GB bajo normativa nacional (Chile) e internacional.
                </p>
                <div className={`border-t-2 border-dashed ${isDark ? 'border-red-900' : 'border-slate-300'} pt-8 grid grid-cols-3 gap-4 font-mono text-sm`}>
                  <div><span className="opacity-50 block mb-1">USER_ID:</span> <strong className={theme.textBase}>Michele Andrea Barriga Carrasco</strong></div>
                  <div><span className="opacity-50 block mb-1">ROLE:</span> <strong className={theme.textBase}>Analista Programador</strong></div>
                  <div>
  <span className="opacity-50 block mb-1">SYS.TIMESTAMP:</span> 
  <strong className={`flex items-center gap-2 ${theme.textBase}`}>
    
    {/* A. Muestra la fecha (Año-Mes-Día) extrayéndola de sysTime */}
    <span>{sysTime.toISOString().split('T')[0]}</span>
    
    {/* B. Muestra la hora corriendo en rojo (Horas:Minutos:Segundos:Milisegundos) */}
    <span className="text-red-500 bg-red-950/30 px-2 py-0.5 border border-red-900">
      {String(sysTime.getHours()).padStart(2, '0')}:
      {String(sysTime.getMinutes()).padStart(2, '0')}:
      {String(sysTime.getSeconds()).padStart(2, '0')}:
      <span className="text-xs opacity-70">{String(sysTime.getMilliseconds()).padStart(3, '0')}</span>
    </span>
    
  </strong>
</div>
                </div>
              </div>
            </div>
          </div>

          {/* DIAPOSITIVA 2: EL INCIDENTE */}
          <div className="w-full h-full flex-shrink-0 p-12 flex flex-col justify-center">
            <h2 className={`text-4xl font-black mb-10 border-l-8 border-red-600 pl-6 uppercase ${theme.title}`}>01. ALERTA: BRECHA DETECTADA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
              <div className={`p-8 border-2 ${theme.card} ${theme.hoverCard} transition-all`}>
                <h3 className="text-2xl font-bold mb-4 font-sans text-red-500 animate-pulse">CARGA ÚTIL: 125 GB</h3>
                <p className={`text-lg leading-relaxed ${theme.textBase}`}>El 6 de octubre de 2021, el foro 4chan fue el vector de publicación de un enlace torrent conteniendo la totalidad de los secretos comerciales de Twitch. El origen: un error de configuración en servidores AWS.</p>
              </div>
              <div className="flex flex-col gap-4">
                {['PRIVACIDAD: Pagos a streamers desde 2019.', 'CÓDIGO FUENTE: Proyecto VAPOR expuesto.', 'SEGURIDAD: Herramientas Red Teaming filtradas.'].map((item, i) => (
                  <div key={i} className={`p-6 border-l-4 border-red-600 ${isDark ? 'bg-red-950/20' : 'bg-slate-100'} hover:translate-x-4 transition-transform`}>
                    <p className={`font-bold ${theme.textBase}`}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DIAPOSITIVA 3: MARCO REGULATORIO */}
          <div className="w-full h-full flex-shrink-0 p-12 flex flex-col justify-center">
            <h2 className={`text-4xl font-black mb-10 border-l-8 border-red-600 pl-6 uppercase ${theme.title}`}>02. MATRIZ REGULATORIA</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
              {[
                { l: "LEY 21.459", t: "CHILE", d: "Delitos Informáticos. Acceso ilícito." },
                { l: "LEY 19.628", t: "CHILE", d: "Datos Privados. Negligencia de custodia." },
                { l: "GDPR", t: "EUROPA", d: "Reglamento. 72hrs para notificar." },
                { l: "CFAA", t: "EE.UU", d: "Fraude. Acceso no autorizado AWS." },
                { l: "PCI-DSS", t: "PAGOS", d: "Falla de micro-segmentación." },
                { l: "ISO 27001", t: "SGSI", d: "Falla en gestión de configuración." }
              ].map((norma, i) => (
                <div key={i} className={`p-6 border-2 ${theme.card} ${theme.hoverCard} group cursor-crosshair`}>
                  <div className={`text-xs font-bold px-2 py-1 inline-block mb-4 ${theme.accent}`}>{norma.t}</div>
                  <h3 className={`text-2xl font-black mb-2 ${theme.textBase}`}>{norma.l}</h3>
                  <p className="text-sm opacity-80">{norma.d}</p>
                  <div className="h-1 w-0 bg-red-500 group-hover:w-full transition-all duration-500 mt-4"></div>
                </div>
              ))}
            </div>
          </div>

          {/* DIAPOSITIVA 4: DELITOS (LEY 21.459) */}
          <div className="w-full h-full flex-shrink-0 p-12 flex flex-col justify-center">
            <h2 className={`text-4xl font-black mb-10 border-l-8 border-red-600 pl-6 uppercase ${theme.title}`}>03. TIPIFICACIÓN PENAL</h2>
            <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
              {[
                { a: "ART. 2°", t: "ACCESO ILÍCITO", text: "Vulneración del perímetro de seguridad sin credenciales. Agravado por el ánimo de lucro (apropiación de 125 GB)." },
                { a: "ART. 3°", t: "INTERCEPTACIÓN", text: "Captura indebida de las bases de datos de pagos en reposo dentro de la red AWS." },
                { a: "ART. 6°", t: "RECEPTACIÓN", text: "Publicación consciente del archivo torrent en 4chan para su distribución global masiva." }
              ].map((delito, i) => (
                <div key={i} className={`p-6 border-2 flex items-center gap-8 ${theme.card} hover:-skew-x-2 transition-transform`}>
                  <div className="text-5xl font-black text-red-600 drop-shadow-[0_0_10px_red]">{delito.a}</div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 ${theme.textBase}`}>{delito.t}</h4>
                    <p className="opacity-80">{delito.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DIAPOSITIVA 5: ACTORES */}
          <div className="w-full h-full flex-shrink-0 p-12 flex flex-col justify-center">
            <h2 className={`text-4xl font-black mb-10 border-l-8 border-red-600 pl-6 uppercase ${theme.title}`}>04. ANÁLISIS DE ACTORES</h2>
            <div className="flex h-[400px] gap-8 max-w-6xl mx-auto w-full">
              <div className="flex flex-col gap-4 w-1/3">
                {actores.map((actor, idx) => (
                  <button 
                    key={idx} 
                    onMouseEnter={() => setActiveActor(idx)}
                    className={`p-4 text-left border-2 font-bold uppercase tracking-wider transition-all flex items-center justify-between ${activeActor === idx ? `${isDark ? 'bg-red-600 text-white' : 'bg-red-700 text-white'} scale-105 border-red-500 shadow-[0_0_15px_red]` : `${theme.card} ${theme.textBase} hover:border-red-500`}`}
                  >
                    <span>{actor.nombre}</span>
                    <span className="text-2xl">{actor.icono}</span>
                  </button>
                ))}
              </div>
              <div className={`flex-1 p-10 border-2 ${theme.card} relative overflow-hidden flex flex-col justify-center`}>
                <div className={`text-sm font-bold tracking-widest mb-2 ${theme.warning}`}>&gt; ROL: {actores[activeActor].rol}</div>
                <h3 className={`text-4xl font-black mb-8 ${theme.textBase}`}>{actores[activeActor].nombre}</h3>
                <div className="space-y-6 border-l-2 border-red-600 pl-6">
                  <div>
                    <h4 className="text-red-500 font-bold mb-1">PENAL:</h4>
                    <p className={`text-lg font-sans ${theme.textBase}`}>{actores[activeActor].penal}</p>
                  </div>
                  <div>
                    <h4 className="text-red-500 font-bold mb-1">CIVIL/ADMIN:</h4>
                    <p className={`text-lg font-sans ${theme.textBase}`}>{actores[activeActor].civil}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIAPOSITIVA 6: TRATAMIENTO DE DATOS */}
          <div className="w-full h-full flex-shrink-0 p-12 flex flex-col justify-center">
            <h2 className={`text-4xl font-black mb-10 border-l-8 border-red-600 pl-6 uppercase ${theme.title}`}>05. DATOS EXPUESTOS (LEY 19.628)</h2>
            <div className="max-w-5xl mx-auto w-full">
              <div className={`p-10 border-2 ${theme.card} relative group`}>
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 font-bold text-sm uppercase">Análisis Legal Crítico</div>
                <h3 className={`text-3xl font-black mb-6 mt-4 ${theme.textBase}`}>PERSONALES VS. SENSIBLES</h3>
                <p className={`text-xl leading-relaxed mb-6 ${theme.textBase} font-sans`}>
                  El historial detallado de pagos de Twitch es, por definición, un <strong className="text-red-500">dato personal económico</strong>. 
                </p>
                <div className={`p-6 border border-dashed border-red-500 ${isDark ? 'bg-red-950/30' : 'bg-red-50'}`}>
                  <p className={`text-lg font-mono ${theme.textBase}`}>
                    <strong>&gt; LA VULNERABILIDAD:</strong> Al cruzar los pagos con historiales de visualización y chats, un atacante puede perfilar ideologías políticas u orientación sexual. Esta inferencia muta la base de datos completa hacia la categoría de <strong className="text-red-600 animate-pulse uppercase">Datos Altamente Sensibles</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DIAPOSITIVA 7: DERECHOS ARCO INTERACTIVOS */}
          <div className="w-full h-full flex-shrink-0 p-12 flex flex-col justify-center">
            <h2 className={`text-4xl font-black mb-10 border-l-8 border-red-600 pl-6 uppercase ${theme.title}`}>06. DERECHOS A.R.C.O. VULNERADOS</h2>
            <p className={`mb-8 text-lg ${theme.textBase}`}>&gt; Pasa el cursor sobre los nodos para desencriptar el derecho correspondiente (Art. 12).</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
              {[
                { id: 'A', nom: "ACCESO", txt: "¿Mis ganancias están en los 125GB de 4chan?" },
                { id: 'R', nom: "RECTIFICACIÓN", txt: "Corregir montos y perfiles inexactos." },
                { id: 'C', nom: "CANCELACIÓN", txt: "Eliminar cuenta y tarjeta bancaria." },
                { id: 'O', nom: "OPOSICIÓN", txt: "Bloquear uso futuro por falta de seguridad." }
              ].map((der, i) => (
                <div 
                  key={i} 
                  onMouseEnter={() => setArcoUnlocked(prev => ({...prev, [der.id]: true}))}
                  onMouseLeave={() => setArcoUnlocked(prev => ({...prev, [der.id]: false}))}
                  className={`p-8 border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 min-h-[250px] ${arcoUnlocked[der.id] ? `bg-red-600 border-red-500 shadow-[0_0_25px_red] scale-105` : `${theme.card}`}`}
                >
                  <div className={`text-7xl font-black mb-4 transition-colors ${arcoUnlocked[der.id] ? 'text-white drop-shadow-md' : 'text-red-600'}`}>{der.id}</div>
                  <h4 className={`font-bold text-xl uppercase tracking-widest mb-4 ${arcoUnlocked[der.id] ? 'text-white' : theme.textBase}`}>{der.nom}</h4>
                  
                  {arcoUnlocked[der.id] ? (
                    <p className="text-sm text-center text-white font-sans animate-pulse">{der.txt}</p>
                  ) : (
                    <p className="text-xs text-center opacity-40 font-mono">[ENCRYPTED_NODE]</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DIAPOSITIVA 8: REFLEXIÓN FINAL (CLÍMAX) */}
          <div className="w-full h-full flex-shrink-0 relative flex items-center justify-center p-12 overflow-hidden group">
            {/* EFECTO DE LUZ DE ALARMA PALPITANTE */}
            <div className="absolute inset-0 bg-red-600/20 animate-[pulse_2s_ease-in-out_infinite] mix-blend-color-burn z-0 pointer-events-none"></div>
            <div className={`absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent ${isDark ? 'opacity-100' : 'opacity-30'} z-0 pointer-events-none`}></div>
            
            <div className={`relative z-10 max-w-4xl w-full p-12 border-4 border-red-600 ${isDark ? 'bg-black/90' : 'bg-white/90'} shadow-[0_0_50px_rgba(220,38,38,0.6)] backdrop-blur-sm transform transition-all duration-700 hover:scale-[1.02]`}>
              <div className="text-red-500 font-bold tracking-widest mb-2 animate-pulse flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span> CRITICAL_ANALYSIS // FINAL_REPORT
              </div>
              
              <h2 className={`text-5xl font-black mb-8 uppercase ${theme.title}`}>Reflexión Definitiva</h2>
              
              <div className={`space-y-6 text-xl font-sans mb-12 ${theme.textBase} leading-relaxed`}>
                <p>
                  La ciberseguridad ya no es solo un desafío de TI, es una obligación legal. La falta de micro-segmentación (<strong>PCI-DSS</strong>) y la ausencia de controles en la infraestructura (<strong>ISO 27001</strong>) destruyeron la confianza digital de millones.
                </p>
                <p className="border-l-4 border-red-600 pl-6">
                  Nuestra **Ley 21.459** persigue penalmente al atacante, pero la **Ley 19.628** es insuficiente. Chile necesita urgentemente homologar su legislación al <strong>GDPR europeo</strong>, haciendo <strong className="text-red-500 underline">obligatoria</strong> la notificación de brechas en plazos críticos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-8 border-t border-red-900/50">
                {/* BOTÓN IMPRIMIR */}
                <button 
                  onClick={() => window.print()}
                  className="flex-1 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold uppercase tracking-widest py-4 px-6 transition-all flex justify-center items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                  Imprimir Reporte
                </button>
                
                {/* BOTÓN GITHUB (CON NOMBRE) */}
                <a 
                  href="https://github.com/Michprogram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 font-bold uppercase py-4 px-6 transition-all flex flex-col justify-center items-center shadow-[0_0_15px_red]"
                >
                  <span className="text-xs opacity-80 tracking-widest mb-1">GITHUB REPOSITORY</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Michele Andrea Barriga
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER NAVEGACIÓN */}
      <footer className={`flex justify-between items-center px-12 py-6 border-t-2 ${isDark ? 'border-red-600 bg-black/90' : 'border-slate-800 bg-white/90'} z-50`}>
        <button onClick={prevSlide} disabled={currentSlide === 0} className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all border ${currentSlide === 0 ? 'opacity-30 border-slate-600 cursor-not-allowed' : 'border-red-600 text-red-500 hover:bg-red-600 hover:text-white'}`}>
          &lt; RETROCEDER
        </button>
        
        <div className="flex gap-3">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 border transition-all duration-300 ${currentSlide === idx ? 'bg-red-600 border-red-500 shadow-[0_0_8px_red] scale-150' : 'border-red-900 bg-transparent hover:bg-red-900/50'}`} />
          ))}
        </div>

        <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all border ${currentSlide === totalSlides - 1 ? 'opacity-30 border-slate-600 cursor-not-allowed' : 'border-red-600 text-red-500 hover:bg-red-600 hover:text-white shadow-[0_0_10px_rgba(220,38,38,0.3)]'}`}>
          AVANZAR &gt;
        </button>
      </footer>
    </div>
  );
}
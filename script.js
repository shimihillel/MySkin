
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const days = [
  { id: 0, name: 'ראשון', short: 'א׳', type: 'רטינואיד', subtitle:'Ret-A + Retinol Boost+' },
  { id: 1, name: 'שני', short: 'ב׳', type: 'פפטידים מלא', subtitle:'APIS + Matrixyl + Argireline + Copper' },
  { id: 2, name: 'שלישי', short: 'ג׳', type: 'רטינואיד', subtitle:'Ret-A + Retinol Boost+' },
  { id: 3, name: 'רביעי', short: 'ד׳', type: 'פפטידים + מסכת VT', subtitle:'מסכת VT + שלישיית פפטידים' },
  { id: 4, name: 'חמישי', short: 'ה׳', type: 'רטינואיד', subtitle:'Ret-A + Retinol Boost+' },
  { id: 5, name: 'שישי', short: 'ו׳', type: 'לילה מפנק', subtitle:'פפטידים + Night Wrapping Mask' },
  { id: 6, name: 'שבת', short: 'ש׳', type: 'פפטידים מלא', subtitle:'APIS + Matrixyl + Argireline + Copper' },
];

const morningRoutine = [
  { name: 'סרום ויטמין C', product:'Timeless 20% Vitamin C', target:'פנים + צוואר', icon:'☀️' },
  { name: 'סרום אורז', product:'Anua 7 Rice Ceramide', target:'פנים + צוואר', icon:'🌾' },
  { name: 'קרם הגנה SPF 50+', product:'Anthelios UVMune 400', target:'פנים + צוואר', icon:'🧴' },
];

const eveningRoutines = {
  retinoid: [
    { name:'Crystal Retinal Eye 3', product:'קרם עיניים', target:'עיניים', icon:'👁️' },
    { name:'Ret-A 0.025%', product:'טרטינואין', target:'פנים בלבד', icon:'🌙' },
    { name:'Retinol Boost+', product:'רטינול עדין', target:'צוואר בלבד', icon:'✨' },
    { name:'Purcell Glow Barrier', product:'מחסום העור', target:'פנים + צוואר', icon:'🫧' },
    { name:'CeraVe PM Lotion', product:'קרם לחות', target:'פנים', icon:'🤍' },
    { name:'Lierac Neck & Décolleté', product:'קרם צוואר', target:'צוואר', icon:'🪞' },
  ],
  peptide: [
    { name:'Crystal Retinal Eye 3', product:'קרם עיניים', target:'עיניים', icon:'👁️' },
    { name:'APIS Hyaluron 4D', product:'לחות + SNAP-8', target:'פנים + צוואר', icon:'💧' },
    { name:'Matrixyl 10% + HA', product:'פפטיד מבני', target:'פנים', icon:'🧬' },
    { name:'Argireline 10%', product:'קמטי הבעה', target:'פנים + צוואר', icon:'〰️' },
    { name:'Copper Peptides', product:'פפטידי נחושת', target:'פנים + צוואר', icon:'🧪' },
    { name:'Purcell Glow Barrier', product:'מחסום העור', target:'פנים + צוואר', icon:'🫧' },
    { name:'CeraVe PM Lotion', product:'קרם לחות', target:'פנים', icon:'🤍' },
    { name:'Lierac Neck & Décolleté', product:'קרם צוואר', target:'צוואר', icon:'🪞' },
  ],
  mask: [
    { name:'Crystal Retinal Eye 3', product:'קרם עיניים', target:'עיניים', icon:'👁️' },
    { name:'מסכת VT Cica', product:'15–20 דקות', target:'פנים', icon:'🧖‍♀️' },
    { name:'APIS Hyaluron 4D', product:'לחות + SNAP-8', target:'פנים + צוואר', icon:'💧' },
    { name:'Matrixyl 10% + HA', product:'פפטיד מבני', target:'פנים', icon:'🧬' },
    { name:'Argireline 10%', product:'קמטי הבעה', target:'פנים + צוואר', icon:'〰️' },
    { name:'Copper Peptides', product:'פפטידי נחושת', target:'פנים + צוואר', icon:'🧪' },
    { name:'Purcell Glow Barrier', product:'מחסום העור', target:'פנים + צוואר', icon:'🫧' },
    { name:'CeraVe PM Lotion', product:'קרם לחות', target:'פנים', icon:'🤍' },
    { name:'Lierac Neck & Décolleté', product:'קרם צוואר', target:'צוואר', icon:'🪞' },
  ],
  indulgent: [
    { name:'Crystal Retinal Eye 3', product:'קרם עיניים', target:'עיניים', icon:'👁️' },
    { name:'APIS Hyaluron 4D', product:'לחות + SNAP-8', target:'פנים + צוואר', icon:'💧' },
    { name:'Matrixyl 10% + HA', product:'פפטיד מבני', target:'פנים', icon:'🧬' },
    { name:'Argireline 10%', product:'קמטי הבעה', target:'פנים', icon:'〰️' },
    { name:'Copper Peptides', product:'פפטידי נחושת', target:'פנים + צוואר', icon:'🧪' },
    { name:'Purcell Glow Barrier', product:'מחסום העור', target:'פנים + צוואר', icon:'🫧' },
    { name:'Night Wrapping Mask', product:'מסכת לילה', target:'פנים', icon:'🌙' },
    { name:'Lierac Neck & Décolleté', product:'קרם צוואר', target:'צוואר', icon:'🪞' },
  ]
};

const products = [
  { name:'Timeless 20% Vitamin C + E + Ferulic', category:'סרומים', desc:'ויטמין C 20% + E + פרולית. נוגד חמצון לבוקר, הארה והגנה.', icon:'🟠', tags:['בוקר','נוגד חמצון','פנים+צוואר'] },
  { name:'Anua 7 Rice Ceramide Barrier Serum', category:'סרומים', desc:'סרום אורז וקרמידים לחיזוק מחסום העור והארה עדינה.', icon:'🌾', tags:['בוקר','מחסום','הארה'] },
  { name:'Crystal Retinal Eye 3', category:'קרמים', desc:'קרם עיניים עם רטינל עדין לשגרת ערב.', icon:'👁️', tags:['ערב','עיניים','רטינל'] },
  { name:'Ret-A 0.025%', category:'רטינואידים', desc:'טרטינואין לפנים בלבד בלילות רטינואיד.', icon:'🌙', tags:['ערב','רטינואיד','פנים'] },
  { name:'Retinol Boost+', category:'רטינואידים', desc:'רטינול עדין יותר לצוואר בלילות רטינואיד.', icon:'✨', tags:['ערב','צוואר','רטינול'] },
  { name:'APIS Hyaluron 4D', category:'סרומים', desc:'לחות עמוקה + SNAP-8 לשגרת פפטידים.', icon:'💧', tags:['ערב','לחות','פפטידים'] },
  { name:'Matrixyl 10% + HA', category:'סרומים', desc:'פפטיד מבני לתמיכה באלסטיות ומראה העור.', icon:'🧬', tags:['ערב','פפטידים','קולגן'] },
  { name:'Argireline 10%', category:'סרומים', desc:'סרום לקמטי הבעה באזורים דינמיים.', icon:'〰️', tags:['ערב','הבעה','פפטידים'] },
  { name:'Multi-Peptide + Copper Peptides 1%', category:'סרומים', desc:'פפטידי נחושת לתמיכה בשיקום ומראה עור חיוני.', icon:'🧪', tags:['ערב','נחושת','שיקום'] },
  { name:'Purcell Pixcell Biom Glow Barrier', category:'מחסום', desc:'סרום מחסום עם גלואו, לחות והרגעה.', icon:'🫧', tags:['ערב','מחסום','גלואו'] },
  { name:'VT Cica Collagen Mask', category:'מסכות', desc:'מסכת Cica להרגעה ולחות פעם בשבוע.', icon:'🧖‍♀️', tags:['מסכה','רביעי','הרגעה'] },
  { name:'Medicube Night Wrapping Mask', category:'מסכות', desc:'מסכת לילה עוטפת ומפנקת לערב שישי.', icon:'🌙', tags:['מסכה','שישי','לילה'] },
  { name:'CeraVe PM Facial Lotion', category:'קרמים', desc:'קרם לחות ערב עם קרמידים וניאצינאמיד.', icon:'🤍', tags:['ערב','לחות','קרמידים'] },
  { name:'Lierac Lift Integral Neck & Décolleté', category:'קרמים', desc:'קרם ייעודי לצוואר ודקולטה.', icon:'🪞', tags:['ערב','צוואר','קרם'] },
  { name:'SPF 50+ Anthelios UVMune 400', category:'הגנה', desc:'הגנה יומית רחבת טווח לשגרת בוקר.', icon:'🧴', tags:['בוקר','SPF','כל יום'] },
];

let state = {
  view:'homeView',
  routineType:'morning',
  theme:'auto',
  displayName: localStorage.getItem('sr-name') || 'שימי',
  selectedDay: currentDay(),
  completed: loadCompleted()
};

function loadCompleted(){
  try{
    const raw = localStorage.getItem('sr-completed');
    const parsed = raw ? JSON.parse(raw) : {};
    if(parsed.date === new Date().toDateString()) return parsed.items || {};
  }catch(e){}
  return {};
}
function saveCompleted(){
  localStorage.setItem('sr-completed', JSON.stringify({date:new Date().toDateString(), items:state.completed}));
}
function currentDay(){ return new Date().getDay(); }
function currentHour(){ return new Date().getHours(); }
function dayPlan(){ return eveningPlanForDay(currentDay()); }
function routineSteps(type=state.routineType, dayId=currentDay()){
  return type === 'morning' ? morningStepsForDay(dayId) : eveningStepsForDay(dayId);
}
function morningStepsForDay(dayId=currentDay()){
  return dayId === 6 ? [{ name:'מסיכת שבת', product:'מסיכת כיף מתחלפת', target:'לפני רוטינת הבוקר', icon:'🧖‍♀️', special:true }, ...morningRoutine] : [...morningRoutine];
}
function eveningPlanForDay(dayId=currentDay()){
  if(dayId===0 || dayId===2 || dayId===4) return 'retinoid';
  if(dayId===3) return 'mask';
  if(dayId===5) return 'indulgent';
  return 'peptide';
}
function eveningStepsForDay(dayId=currentDay()){
  return eveningRoutines[eveningPlanForDay(dayId)];
}
function completionKey(type, index){ return `${new Date().toDateString()}-${type}-${index}`; }

function init(){
  $('#displayNameInput').value = state.displayName;
  $('#autoThemeToggle').checked = (localStorage.getItem('sr-auto-theme') ?? 'true') === 'true';
  applyTheme();
  renderAll();
  bind();
  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
  }
}
function bind(){
  $$('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const view = btn.dataset.view;
    if(view==='routineView'){
      state.routineType = btn.dataset.routine==='auto' ? (currentHour()<18?'morning':'evening') : state.routineType;
    }
    showView(view);
  }));
  $$('[data-go]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.go)));
  $('#startMorningBtn').addEventListener('click',()=>{state.routineType='morning'; showView('routineView');});
  $('#startEveningBtn').addEventListener('click',()=>{state.routineType='evening'; showView('routineView');});
  $('#todayMorningMini').addEventListener('click',()=>{state.routineType='morning'; showView('routineView');});
  $('#todayEveningMini').addEventListener('click',()=>{state.routineType='evening'; showView('routineView');});
  $('#completeRoutineBtn').addEventListener('click',()=>{
    routineSteps().forEach((_,i)=>state.completed[completionKey(state.routineType,i)] = true);
    saveCompleted(); renderAll(); toast('השגרה הושלמה. זוהרת ושולטת ✨');
    if(state.routineType === 'evening' && currentDay() === 5){
      setTimeout(()=>$('#maskReminderDialog').showModal(), 350);
    }
  });
  $('#resetTodayBtn').addEventListener('click',()=>{
    if(confirm('לאפס את סימוני היום?')){
      state.completed = {}; saveCompleted(); renderAll(); toast('איפסתי את היום');
    }
  });
  $('#themeBtn').addEventListener('click',()=>{
    const cur = document.body.classList.contains('night');
    localStorage.setItem('sr-manual-theme', cur ? 'day' : 'night');
    applyTheme(); renderHome();
  });
  $('#productSearch').addEventListener('input',renderProducts);
  $('#clearSearchBtn').addEventListener('click',()=>{$('#productSearch').value=''; renderProducts();});
  $('#closeProductDialog').addEventListener('click',()=>$('#productDialog').close());
  $('#dialogCloseCta').addEventListener('click',()=>$('#productDialog').close());
  $('#closeMaskReminder').addEventListener('click',()=>$('#maskReminderDialog').close());
  $('#maskReminderOk').addEventListener('click',()=>$('#maskReminderDialog').close());
  $('#saveProfileBtn').addEventListener('click',()=>{
    state.displayName = $('#displayNameInput').value.trim() || 'שימי';
    localStorage.setItem('sr-name', state.displayName);
    localStorage.setItem('sr-auto-theme', $('#autoThemeToggle').checked);
    applyTheme(); renderAll(); toast('נשמר. שימי ריטואל מעודכנת ♡');
  });
}
function applyTheme(){
  const auto = (localStorage.getItem('sr-auto-theme') ?? 'true') === 'true';
  const manual = localStorage.getItem('sr-manual-theme');
  const night = auto ? currentHour()>=18 : manual === 'night';
  document.body.classList.toggle('night', night);
  $('#themeBtn').textContent = night ? '☾' : '☀︎';
}
function showView(view){
  state.view=view;
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===view));
  $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view || (view==='routineView' && b.dataset.view==='routineView')));
  if(view==='routineView') renderRoutine();
  if(view==='productsView') renderProducts();
  if(view==='calendarView') renderCalendar();
  if(view==='dayDetailView') renderDayDetail();
  window.scrollTo({top:0,behavior:'smooth'});
}
function renderAll(){
  renderHome(); renderRoutine(); renderProducts(); renderCalendar(); renderDayDetail();
}
function renderHome(){
  const isNight = document.body.classList.contains('night');
  const name = state.displayName;
  const today = days[currentDay()];
  const morningSteps = morningStepsForDay(currentDay());
  const eveningSteps = eveningStepsForDay(currentDay());
  const allSteps = [...morningSteps.map((s,i)=>({ ...s, type:'morning', i })), ...eveningSteps.map((s,i)=>({ ...s, type:'evening', i }))];
  const doneTotal = allSteps.filter(s=>state.completed[completionKey(s.type,s.i)]).length;
  const total = allSteps.length;
  const pct = total ? Math.round(doneTotal/total*100) : 0;

  $('#homeOverline').textContent = isNight ? `GOOD EVENING, ${name.toUpperCase()} ✧` : `TODAY’S RITUAL ✧`;
  $('#greetingTitle').textContent = `היום שלך, ${name}`;
  $('#greetingSub').textContent = `${today.name} · בוקר ${morningSteps.length} שלבים · ערב ${today.type}`;

  $('#todayMorningText').textContent = `${morningSteps.length} שלבים`;
  $('#todayEveningText').textContent = today.type;

  $('#progressIcon').textContent = isNight ? '☾' : '☀︎';
  $('#morningCount').textContent = `${morningSteps.length} שלבים`;
  $('#eveningCount').textContent = `${eveningSteps.length} שלבים`;
  $('#progressPercent').textContent = `${pct}%`;
  $('#progressRing').style.background = `conic-gradient(var(--rose) ${pct*3.6}deg,#f1dfd5 0deg)`;
  $('#progressBar').style.width = `${pct}%`;
  $('#progressDoneText').textContent = `${doneTotal} מתוך ${total} שלבים הושלמו`;
  $('#progressHint').textContent = pct===100 ? 'היום שלך מסומן ומושלם.' : 'התקדמות יומית של בוקר + ערב.';

  const preferredType = isNight ? 'evening' : 'morning';
  let nextType = preferredType;
  let steps = routineSteps(nextType);
  let nextIndex = steps.findIndex((_,i)=>!state.completed[completionKey(nextType,i)]);
  if(nextIndex < 0){
    nextType = preferredType === 'morning' ? 'evening' : 'morning';
    steps = routineSteps(nextType);
    nextIndex = steps.findIndex((_,i)=>!state.completed[completionKey(nextType,i)]);
  }
  const next = nextIndex >= 0 ? steps[nextIndex] : null;
  $('#todayNextIcon').textContent = next ? next.icon : '♡';
  $('#todayNextName').textContent = next ? next.name : 'השגרה הושלמה';
  $('#todayNextSub').textContent = next ? `${nextType === 'morning' ? 'בוקר' : 'ערב'} · ${next.product}` : 'אפשר לנוח. עשית את זה יפה.';

  const existingMask = document.querySelector('.saturday-mask-card');
  if(existingMask) existingMask.remove();
  if(currentDay() === 6 && !isNight){
    const maskKey = completionKey('morning',0);
    const card = document.createElement('section');
    card.className = 'glass-card saturday-mask-card';
    card.innerHTML = `
      <div class="mask-icon">🧖‍♀️</div>
      <div>
        <h3>${state.completed[maskKey] ? 'מסיכת שבת סומנה' : 'מסיכת שבת לפני הרוטינה'}</h3>
        <p>${state.completed[maskKey] ? 'איזה כיף. עכשיו ממשיכים לבוקר הרגיל.' : 'היום מתחילים בפינוק קטן לפני ויטמין C.'}</p>
      </div>
    `;
    card.addEventListener('click',()=>{
      state.routineType = 'morning';
      showView('routineView');
    });
    document.querySelector('.progress-card').before(card);
  }

  $('#nextStepCard').innerHTML = `
    <div class="mini-art">${next ? next.icon : '♡'}</div>
    <div>
      <h3>${next ? 'השלב הבא שלך' : 'השגרה הושלמה'}</h3>
      <p>${next ? `${next.name} · ${next.product}` : 'אפשר לנוח. עשית את זה יפה.'}</p>
    </div>
  `;
}
function renderRoutine(){
  const type = state.routineType;
  const steps = routineSteps(type);
  const done = steps.filter((_,i)=>state.completed[completionKey(type,i)]).length;
  const pct = steps.length ? Math.round(done/steps.length*100) : 0;
  $('#routineTitle').textContent = type==='morning' ? 'שגרת בוקר' : 'שגרת ערב';
  $('#routineSub').textContent = `${steps.length} שלבים לעור זוהר ומוגן`;
  $('#routineSymbol').textContent = type==='morning' ? '☀︎' : '☾';
  $('#routineProgressText').textContent = `${done} מתוך ${steps.length} שלבים`;
  $('#routineProgressBar').style.width = `${pct}%`;
  $('#routineList').innerHTML = '';
  steps.forEach((step,i)=>{
    const key = completionKey(type,i);
    const card = document.createElement('article');
    card.className = `step-card ${state.completed[key]?'done':''}`;
    card.innerHTML = `
      <div class="step-num">${i+1}</div>
      <div class="step-info">
        <h3>${step.name}</h3>
        <p>${step.product} · ${step.target}</p>
      </div>
      <button class="step-check" aria-label="סימון שלב">${state.completed[key]?'✓':''}</button>
    `;
    card.addEventListener('click',()=>{
      state.completed[key] = !state.completed[key];
      if(!state.completed[key]) delete state.completed[key];
      saveCompleted(); renderAll();
    });
    $('#routineList').appendChild(card);
  });
}
let activeFilter = 'הכל';
function renderProducts(){
  const cats = ['הכל',...new Set(products.map(p=>p.category))];
  $('#productFilters').innerHTML = cats.map(c=>`<button class="filter-pill ${c===activeFilter?'active':''}" data-cat="${c}">${c}</button>`).join('');
  $$('.filter-pill').forEach(btn=>btn.onclick=()=>{activeFilter=btn.dataset.cat; renderProducts();});
  const q = $('#productSearch')?.value?.trim() || '';
  const filtered = products.filter(p=>(activeFilter==='הכל'||p.category===activeFilter) && (!q || (p.name+p.desc+p.category+p.tags.join(' ')).toLowerCase().includes(q.toLowerCase())));
  $('#productsGrid').innerHTML = filtered.map((p,i)=>`
    <article class="product-card" data-name="${escapeHtml(p.name)}">
      <span class="heart">♡</span>
      <div class="product-art">${p.icon}</div>
      <div>
        <h3>${p.name}</h3>
        <p>${p.category} · ${p.tags[0]}</p>
      </div>
    </article>
  `).join('');
  $$('.product-card').forEach(card=>card.onclick=()=>openProduct(card.dataset.name));
}
function openProduct(name){
  const p = products.find(x=>x.name===name);
  if(!p) return;
  $('#dialogProductArt').textContent = p.icon;
  $('#dialogProductCategory').textContent = p.category;
  $('#dialogProductName').textContent = p.name;
  $('#dialogProductDesc').textContent = p.desc;
  $('#dialogProductTags').innerHTML = p.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  $('#productDialog').showModal();
}
function renderCalendar(){
  $('#weekTimeline').innerHTML = days.map(d=>{
    const plan = eveningStepsForDay(d.id);
    const morning = morningStepsForDay(d.id);
    const today = d.id===currentDay();
    const maskNote = d.id===6 ? ' · כולל מסיכת שבת בבוקר' : '';
    return `<article class="day-card ${today?'today':''}" data-day="${d.id}">
      <div class="day-num">${d.short}</div>
      <div>
        <h3>${d.name}${today?' · היום':''}</h3>
        <p>בוקר ${morning.length} שלבים · ערב ${d.type}${maskNote}</p>
      </div>
    </article>`;
  }).join('');
  $$('.day-card').forEach(card=>card.onclick=()=>{
    state.selectedDay = Number(card.dataset.day);
    showView('dayDetailView');
  });
}

function renderDayDetail(){
  const dayId = state.selectedDay ?? currentDay();
  const d = days[dayId];
  const morning = morningStepsForDay(dayId);
  const evening = eveningStepsForDay(dayId);
  $('#dayDetailTitle').textContent = d.name + (dayId===currentDay() ? ' · היום' : '');
  $('#dayDetailSub').textContent = `בוקר ${morning.length} שלבים · ערב ${d.type}`;
  $('#dayDetailIcon').textContent = dayId===6 ? '🧖‍♀️' : '✧';
  const section = (title, items, type) => `
    <section class="detail-section">
      <h3>${title}</h3>
      ${items.map((s,i)=>`<div class="detail-step">
        <div class="detail-step-num">${i+1}</div>
        <div>
          <strong>${s.icon || '✧'} ${s.name}</strong>
          <small>${s.product} · ${s.target}</small>
        </div>
      </div>`).join('')}
    </section>`;
  $('#dayDetailContent').innerHTML = section(dayId===6 ? 'בוקר · מסיכה לפני הרוטינה' : 'בוקר', morning, 'morning') + section(`ערב · ${d.type}`, evening, 'evening');
}
function toast(msg){
  const t=$('#toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t.timer); t.timer=setTimeout(()=>t.classList.remove('show'),2200);
}
function escapeHtml(str){return str.replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' }[m]));}
init();

'use strict';
// Same static, local-only app as v30. Treatment is fixed, never escalated by time.
const dayNames = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
const $ = id => document.getElementById(id);
const svg = {
  cleanser:'<rect x="8" y="14" width="18" height="29" rx="4"/><path d="M13 14V8h9v6M17 8V4h12v4M12 26h10m-10 4h7"/>',
  serum:'<rect x="8" y="19" width="18" height="25" rx="4"/><path d="M12 19v-5h10v5M14 14V5a3 3 0 0 1 6 0v9M12 30h10m-10 4h7"/>',
  cream:'<rect x="7" y="14" width="20" height="30" rx="3"/><path d="M12 14V9h10v5M16 9V4h12v4M11 28h12m-12 4h8"/>',
  tube:'<path d="M6 6h22l-3 32H9Z"/><rect x="10" y="38" width="14" height="6" rx="1"/><path d="M7 10h20M12 23h10m-10 4h7"/>'
};
const products = {
  cleanAM:{id:'clean-am',name:'ניקוי עדין',brand:'מים או תכשיר ניקוי עדין',hebrew:true,sub:'לפי הצורך, בלי לקרצף',icon:'cleanser',tip:'שטיפה במים פושרים או בתכשיר ניקוי עדין שמתאים לך. אם העור מרגיש מתוח אחרי הניקוי, כדאי לבדוק את התכשיר.'},
  cleanPM:{id:'clean-pm',name:'מורידות את היום',brand:'The Inkey List · Oat Cleansing Balm',sub:'מסירות SPF ואיפור',icon:'cleanser',tip:'הבאלם על עור יבש, ואז להרטיב ולשטוף היטב. ניקוי נוסף בתכשיר עדין על בסיס מים לפי הצורך, למשל אם נשארות שאריות איפור או באלם. מים בלבד אינם תכשיר ניקוי שני.'},
  vitaminC:{id:'vitamin-c',name:'ויטמין C',brand:'Timeless · C + E + Ferulic 20%',optional:true,icon:'serum',tone:'vitc',tip:'שכבה דקה על עור נקי ויבש, לפי הוראות האריזה, לפני הלחות וההגנה. אם מופיע גירוי — לדלג. לשמור לפי הוראות היצרן; גוון כתום כהה או חום יכול להעיד על חמצון.'},
  rice:{id:'rice',name:'לחות קלילה',brand:'Anua · Rice Ceramide 7',sub:'אם צריך עוד לחות',optional:true,icon:'serum',tip:'כמה טיפות לפנים ולצוואר. אפשר לדלג אם קרם ההגנה נותן מספיק לחות. אם הסרום לא מספיק, אפשר קרם לחות שאת סובלת היטב לפני ה־SPF.'},
  spf:{id:'spf',name:'הגנה מהשמש',brand:'La Roche-Posay · UVMune 400 SPF 50+',sub:'פנים, צוואר וכל אזור חשוף',icon:'tube',tone:'spf',tip:'למרוח בנדיבות ובהתאם להוראות האריזה לפני היציאה. בחוץ לחדש בערך כל שעתיים, וגם אחרי שחייה, הזעה או ניגוב. הגנה מהשמש כוללת גם צל וכובע.'},
  azelaic:{id:'azelaic',name:'אזלאית',brand:'Anua · Azelaic Acid 10 + Hyaluron',sub:'רק אם יש צורך בכתמים או פצעונים',optional:true,icon:'serum',tip:'שישי בבוקר, כפי שכבר השתמשת. כמות קטנה לפי הוראות האריזה לפני הלחות. אין צורך להעלות תדירות למטרת אנטיאייג׳ינג בלבד. בבוקר הזה ויטמין C הושמט לצורך פישוט, לא בגלל איסור מוחלט לשלב.'},
  tret:{id:'tret-0025',name:'רטאויט 0.025%',brand:'Ret-Avit · Tretinoin 0.025%',sub:'כמות בגודל אפונה לכל הפנים',icon:'tube',tone:'tret',tip:'לפי המרשם שלך, בערב ועל עור יבש לחלוטין. להימנע מעפעפיים, זוויות האף והשפתיים. אין העלאת מינון אוטומטית. מריחה בצוואר או שינוי בתדירות ובריכוז — רק לפי הנחיית רופא/ת העור.'},
  numbuzin:{id:'numbuzin',name:'סרום פפטידים',brand:'numbuzin · No.9+ NAD+ Essence',sub:'שכבה דקה, אם בא לך',optional:true,icon:'serum',tip:'שכבה דקה לפני קרם הלחות, בתדירות המצומצמת שכבר קיימת. זהו מוצר לבחירה, לא שלב חיוני ולא תחליף לרטאויט או להגנה מהשמש. אין צורך לצרף גם Matrixyl ו־Copper באותו ערב.'},
  moisturizer:{id:'moisturizer',name:'לחות וסיימנו',brand:'CeraVe · PM Facial Lotion',sub:'פנים וצוואר',icon:'cream',tip:'למרוח כמות שמרגישה נוחה. לצוואר אפשר להשתמש בקרם הלחות או ב־Lierac שאת כבר אוהבת. אם קרם קליל לא מספיק לאזורים יבשים, אפשר להתאים את הלחות לפי הצורך.'}
};
function localDate(d=new Date()) {return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function clockPeriod() {return new Date().getHours() < 18 ? 'am' : 'pm';}
let today = localDate();
let selectedDay = new Date().getDay();
let selectedPeriod = null;
let fallback = {};
let storageWorks = true;
function period() {return selectedPeriod || clockPeriod();}
function dateForDay(day) {const d=new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate()-d.getDay()+day); return d;}
function routine(p=period(),d=selectedDay) {
  if(p==='am') return [products.cleanAM,d===5?products.azelaic:products.vitaminC,products.rice,products.spf];
  const treatment=[0,2,4].includes(d)?products.tret:[1,6].includes(d)?products.numbuzin:null;
  return [products.cleanPM,...(treatment?[treatment]:[]),products.moisturizer];
}
function checkKey(){return `shimi-v31:${localDate(dateForDay(selectedDay))}:${period()}`;}
function checks(){
  const key=checkKey();
  if(!storageWorks)return fallback[key]||{};
  try{const v=JSON.parse(localStorage.getItem(key)||'{}'); return v&&typeof v==='object'&&!Array.isArray(v)?v:{};}
  catch{storageWorks=false;return fallback[key]||{};}
}
function save(value){
  const key=checkKey(); fallback[key]=value;
  try{localStorage.setItem(key,JSON.stringify(value));}catch{storageWorks=false;}
  $('storageNote').hidden=storageWorks;
}
function renderWeek(){
  $('week').innerHTML=dayNames.map((name,i)=>{
    const d=dateForDay(i),isToday=localDate(d)===localDate();
    return `<button class="day ${isToday?'today':''}" data-day="${i}" aria-pressed="${i===selectedDay}" ${isToday?'aria-current="date"':''} aria-label="${name}, ${d.getDate()} בחודש${isToday?', היום':''}"><span>${name}</span><strong>${d.getDate()}</strong></button>`;
  }).join('');
}
function renderSteps(){
  const c=checks(),items=routine();
  $('steps').innerHTML=items.map((x,i)=>`<li class="step ${c[x.id]?'done':''}" data-step="${x.id}"><button class="check" data-check="${x.id}" aria-pressed="${!!c[x.id]}" aria-label="${x.name} — ${c[x.id]?'סומן, לחצי לביטול':'סימון שבוצע'}">${c[x.id]?'✓':String(i+1).padStart(2,'0')}</button><details class="step-details"><summary class="step-main" aria-label="${x.name} — פרטי שימוש"><div class="step-copy"><div class="step-top"><h3 class="step-name">${x.name}</h3>${x.optional?'<span class="optional">לבחירה</span>':''}</div><span class="product-name ${x.hebrew?'hebrew':''}">${x.brand}</span>${x.sub?`<p class="step-sub">${x.sub}</p>`:''}</div><span class="bottle ${x.tone||''}" aria-hidden="true"><svg viewBox="0 0 34 48">${svg[x.icon]}</svg><span class="more">+</span></span></summary><p>${x.tip}</p></details></li>`).join('');
  updateProgress();
}
function updateProgress(){
  const c=checks(),items=routine(),done=items.filter(x=>c[x.id]).length;
  const complete=items.filter(x=>!x.optional).every(x=>c[x.id]);
  $('progressText').textContent=complete?'הבסיס הושלם. כל השאר לבחירה.':`${done} מתוך ${items.length} שלבים סומנו`;
  $('reset').hidden=done===0;
  $('finish').disabled=complete;
  $('finish').innerHTML=complete?'סיימת, זמן לעצמך <span aria-hidden="true">✓</span>':'סיימתי את השגרה <span aria-hidden="true">✓</span>';
  $('storageNote').hidden=storageWorks;
}
function renderHome(){
  const p=period(),isAM=p==='am',d=dateForDay(selectedDay);
  $('dateText').textContent=(localDate(d)===localDate()?'היום · ':'')+d.toLocaleDateString('he-IL',{weekday:'long',day:'numeric',month:'long'});
  $('pageTitle').textContent=isAM?'הבוקר שלך.':'הערב שלך.';
  $('introSub').textContent=isAM?'להתחיל ברכות. לצאת מוגנת.':'להוריד את היום. לתת לעור לנוח.';
  $('segAm').setAttribute('aria-pressed',String(isAM));$('segPm').setAttribute('aria-pressed',String(!isAM));
  const hasTret=routine().some(x=>x.id==='tret-0025');
  $('routineLabel').textContent=isAM?'בוקר · בסדר הזה':hasTret?'ערב רטאויט · בסדר הזה':'ערב לחות · בסדר הזה';
  $('routineTitle').textContent=isAM?'קצת טיפוח, ואז SPF.':hasTret?'הערב מתמקדות ברטאויט.':'ניקוי, לחות, ולילה טוב.';
  $('stepCount').textContent=`${routine().length} שלבים`;
  $('routineNote').textContent=isAM?'ה־SPF הוא השלב האחרון. בחוץ מחדשות כל שעתיים.':hasTret?'רטאויט על עור יבש, לפי המרשם. בלי פילינג הערב.':'גם ערב של ניקוי ולחות בלבד הוא שגרה טובה.';
  renderWeek();renderSteps();
}
let toastTimer;
function toast(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').classList.add('show');toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2200);}
document.querySelector('.periods').addEventListener('click',e=>{const b=e.target.closest('[data-period]');if(!b)return;selectedPeriod=b.dataset.period;renderHome();});
$('week').addEventListener('click',e=>{const b=e.target.closest('[data-day]');if(!b)return;selectedDay=Number(b.dataset.day);renderHome();$('week').querySelector(`[data-day="${selectedDay}"]`).focus({preventScroll:true});});
$('steps').addEventListener('click',e=>{
  const b=e.target.closest('[data-check]');if(!b)return;
  const c=checks(),id=b.dataset.check;c[id]=!c[id];save(c);
  const row=b.closest('.step'),item=routine().find(x=>x.id===id),index=routine().indexOf(item);
  row.classList.toggle('done',c[id]);b.setAttribute('aria-pressed',String(c[id]));b.setAttribute('aria-label',`${item.name} — ${c[id]?'סומן, לחצי לביטול':'סימון שבוצע'}`);b.textContent=c[id]?'✓':String(index+1).padStart(2,'0');updateProgress();
});
$('finish').addEventListener('click',()=>{const c=checks();routine().filter(x=>!x.optional).forEach(x=>c[x.id]=true);save(c);renderSteps();toast('הבסיס הושלם. התוספות לבחירתך.');});
$('reset').addEventListener('click',()=>{save({});renderSteps();toast('הסימונים אופסו');});
let lastPeriod=clockPeriod();
function refreshDate(){const now=localDate(),p=clockPeriod();if(now!==today){today=now;selectedDay=new Date().getDay();selectedPeriod=null;renderHome();}else if(p!==lastPeriod&&!selectedPeriod){renderHome();}lastPeriod=p;}
setInterval(refreshDate,30000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshDate();});
window.addEventListener('storage',e=>{if(e.key===checkKey())renderSteps();});
renderHome();

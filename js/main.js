let data = [
  // Quiz 1 Trem GIT
  ["Gastro Intistainal tract"],
  // Quiz 2 The digestive system Gabed jld Parts of the digestive system 2 Parts
  ["elemeuntery tract GIT",
  "Salivary Glands"],
  // Quiz 3 The Stages
  ["Mouth",
  "Pharynx",
  "Larynx",
  "Os Pharynx",
  "Stomach",
  "Small Intistainal",
  "Larg Intistainal",
  "Anal Canal"],
  // Quiz 4 functionof (G I T)
  ["digestion",
  "Absorption",
  "Predction aguinst infection",
  "motility help defecation"],
  // Quiz 5 It Consist of?
  ["Two kidneys",
  "Two ureters",
  "The bladdex",
  "The urethra"],
  // Quiz 6 Fanction of kidney?
  ["Erecration of urine",
  "Hemostasis fluid bulans",
  "Regulation of acid-base bal ance",
  "Regulation of Blood pressure",
  "Regulation of erythropoiesis",
  "Detoxification of tixins",
  "Cndo crine",],
  // Quiz 7 Function cndo crine?
  ["Seenetiun of ery thropoloting",
  "Formetion of Vitamin D"],
  // Quiz 8 Function unit of kidney?
  ["Nephron"],// —> consist two parts
  // Quiz 9 Nephron consist of two parts?
  ["Glomerulus",
  "Tubulces"],
  // Quiz 10 Nephron Found In?
  ["Bomans Cupsole",
  "Proximal convoluted tubule",
  "Distal convoluted tubule",
  "Lop of henre",
  "Collecting duct",
  "Urineflowsintorenal",
  "Vein",
  "Artery",
  "Cortex",
  "medula"],
  
  
  // Quiz 11 respiratory system Consist of?
  ["Respiratory tract",
  "Lungs",
  "Thoracic cage",
  "Respiratory muscles",
  "Respiratory Centers",
  "Peripheral nerves"],
  
  // Quiz 12 Why there is many branches inbrouchioles?
  ["Volecity of air Rispiratory",
  "Surface area",
  "Provide More Time for gas exchange"],
  // Quiz 13 alveoli?
  ["300 Million",
  "Sit of gas exchange",
  "It's lined by epithelial eells caller Pneumocyte",
  "pneumocyte secroets surface"], // --> ملاحظة مهمه],
  // Quiz 14 Stages of Respiratian?
  ["External vespiration",
  "Pulmonary ventilation",
  "Insperation,experatien"],
  // Quiz 15 types of bronchiols a the Zone?
  ["Canduction Zone",
  "Transtinal zone",
  "Respiratory zone"],
  // Quiz 16 Canduction Zone?
  ["From Nose to terminal hronchi",
  "Has No alvenli and No Gas Exchange"],
  // Quiz 17 Transtinal zone?
  ["Cansist of respiratory bronchiols",
  "It has afew amount of alveoli",
  "There is littergas exchange in this Area"],
  // Quiz 18 respiratory zone?
  ["It consist of alveolar Ducttalveoli",
  "It is the main zone for gas exchange"],
  // Quiz 19 pulmonary gas exchange?
  ["Transport O2 to Pulmonary cuplaris",
  "uptake CO2 from blood to air"],
  // Quiz 20 Defination Transport stag?
  ["Transport O2 from Lung to tissus"],
  // Quiz 21 Internal respiration?
  ["Uptace of O2 from blood to tissues",
  "Transport CO2 to blood from tissues"],
  // Quiz 22 function of ach (r.s) respiratory system?
  ["Provide O2 to produce energy",
  "Venous return",
  "Regution of body Temperture",
  "Regution of Acide and bas ebalance",
  "Secrtion of surfactant",
  "Secrtion оf heparin",
  "Contains fibroulytic system that Degrades thrombie"],
  // Quiz 23 O2 tissues Term?
  ["Hypoxia"],
  // Quiz 24 O2 in blood Term?
  ["Hypoxiemia"],
  // Quiz 25 Classification of hypoxia?
  ["Hypoxic hypoxic",
  "Anemic-hypoxia",
  "Stagnant hypaxia",
  "His to toxic hypoxia"],
  // Quiz 26 move ments of Intestines?
  ["Mixing movement",
  "Pro Pulsive movement"],
  // Quiz 27 Mixing moveiment?
  ["Mix food with Juice",
  "Aeх Роsure food to mucosa"],
  // Quiz 28 Pro Pulsive move ment (peristalsis)?
  ["pushes the food to ward Larg Intestings"],
  // Quiz 29 mesentery?
  ["Blood capply",
  "Lenf node"],
  // Quiz 30
  ["Sympathic",
  "Para Sympathic"],
  // Quiz 31 enteric Nervoas System?
  ["VC","BVS",
  "Matility of GIT",
  "Contraction of sphincteris",
  "Inhibit gland secretion",
  ],
  // Quiz 32 Para Symapathic?
  ["VD",
  "Innibit gland secretion",
  "Relaxatian",
  "stimulate"],
  // Quiz 33 Plexues?
  ["Sub muocosal Plexuex",
  "My Netric Plexuex"],
  // Quiz 34 Function Mouth?
  ["Mustecation",
  "Sulevary Glands"],
  // Quiz 35 Mustecation Steps?
  ["Mauth",
  "Pharyngeal",
  "Os Pharyngeal"],
  // Quiz 36 sulevary Glands.(Paired)?
  ["Parotid Gland",
  "Sub mandibul",
  "Sub mucosal"],
  // Quiz 37 function of saliva?
  ["help Digstion",
  "help swallowing",
  "help tasting",
  "nutrolais HCL of Stomach",
  "netrolaise irrtant",
  "execrtion of urea",
  "water balance"],
]




let inputs = document.querySelector(".quiz").querySelectorAll("textarea");
let items = document.querySelectorAll(".item");
var h_index=0;
var index=0;

items.forEach(item=>{
  var details = item.querySelector("details")
  details.innerHTML+=item.querySelector(".answors").innerHTML
  details.querySelectorAll("li").forEach(correct=>{
    var corr = correct.querySelector("textarea")
    corr.value=data[h_index][index];
    corr.disabled=true;
    correct.querySelector("p").innerHTML="✔";
    index++;
  })
  h_index++;
  index=0;
})
for (var x = 0; x < data.length; x++) {
  for (var c = 0; c < data[x].length; c++) {
    data[x][c] = data[x][c].trim().toLowerCase()
  }
}

function QuizStatus(){
  var h_index = 0;
  var index = 0;
  var state=[];
  items.forEach(item=>{
    var inputs = item.querySelector(".answors").querySelectorAll("textarea");
    let ids = item.querySelector(".answors").querySelectorAll("p");
    inputs.forEach(input=>{
      if (input.value.trim()){
        value=input.value.trim().toLowerCase()
        if (!state.includes(value) && data[h_index].includes(value)){
          ids[index].innerHTML="✔";
          input.style="color: #111"
          state+=value
        }else{
          input.style="color: darkred"
        }
      }
      index++;
    })
    h_index++;
    index=0;
  })
}

console.log("Start Quiz")

const courses = {
  "Ciclo 1": [
    "Atención integral",
    "Desarrollo humano",
    "English I",
    "Fundamentos de la promoción de salud",
    "Integración de estructura y función del organismo humano",
    "Lenguaje I"
  ],
  "Ciclo 2": [
    { name: "English II", requires: ["English I"] },
    { name: "Integración morfofuncional del sistema nervioso", requires: ["Integración de estructura y función del organismo humano"] },
    { name: "Lenguaje II", requires: ["Lenguaje I"] },
    "Pensamiento matemático",
    { name: "Procesos químico-biológicos y nutrición", requires: ["Atención integral"] },
    "Práctica y profesionalismo médico I"
  ],
  "Ciclo 3": [
    { name: "Bioestadística", requires: ["Pensamiento matemático"] },
    { name: "Bioquímica y biología molecular", requires: ["Procesos químico-biológicos y nutrición"] },
    { name: "English III", requires: ["English II"] },
    { name: "Integración morfofuncional del sistema cardio-circulatorio", requires: ["Integración morfofuncional del sistema nervioso"] },
    { name: "Integración morfofuncional del sistema respiratorio", requires: ["Integración morfofuncional del sistema nervioso"] },
    { name: "Nutrición y estilos de vida saludable", requires: ["Procesos químico-biológicos y nutrición"] },
    { name: "Práctica y profesionalismo médico II", requires: ["Práctica y profesionalismo médico I"] }
  ],
  "Ciclo 4": [
    { name: "English IV", requires: ["English III"] },
    { name: "Genética y Enfermedad", requires: ["Integración de estructura y función del organismo humano"] },
    { name: "Integración morfofuncional del sistema digestivo", requires: ["Integración de estructura y función del organismo humano"] },
    { name: "Integración morfofuncional del sistema excretor", requires: ["Integración de estructura y función del organismo humano"] },
    { name: "Mecanismos de infección y defensa", requires: ["Integración de estructura y función del organismo humano"] },
    { name: "Metodología de la investigación científica", requires: ["Bioestadística"] },
    { name: "Práctica y profesionalismo médico III", requires: ["Práctica y profesionalismo médico II"] }
  ],
  "Ciclo 5": [
    { name: "English V", requires: ["English IV"] },
    { name: "Epidemiología", requires: ["Metodología de la investigación científica"] },
    { name: "Integración morfofuncional del sistema endocrino y reproductor", requires: ["Integración de estructura y función del organismo humano"] },
    { name: "Integración morfofuncional del sistema hematopoyético", requires: ["Integración de estructura y función del organismo humano"] },
    { name: "Microbiología y parasitología", requires: ["Mecanismos de infección y defensa"] },
    { name: "Métodos estadísticos en biociencias", requires: ["Metodología de la investigación científica"] },
    { name: "Práctica y profesionalismo medico IV", requires: ["Práctica y profesionalismo médico III"] }
  ],
  "Ciclo 6": [
    { name: "English VI: RREL", requires: ["English V"] },
    { name: "Farmacología", requires: ["Integración morfofuncional del sistema respiratorio, Integración morfofuncional del sistema excretor, Integración morfofuncional del sistema digestivo, Integración morfofuncional del sistema endocrino y reproductor, Integración morfofuncional del sistema hematopoyético, Microbiología y parasitología"] },
    { name: "Integración fisiopatológica", requires: ["Integración morfofuncional del sistema respiratorio, Integración morfofuncional del sistema excretor, Integración morfofuncional del sistema digestivo, Integración morfofuncional del sistema endocrino y reproductor, Integración morfofuncional del sistema hematopoyético, Microbiología y parasitología"] },
    "Introducción a la clínica e interpretación de exámenes auxiliares",
    { name: "Salud pública", requires: ["Epidemiología"] },
    "Ética y ciudadanía"
  ],
  "Ciclo 7": [
    { name: "Diagnóstico comunitario", requires: ["Introducción a la clínica e interpretación de exámenes auxiliares, Salud pública"] },
    { name: "Especialidades I", requires: ["Farmacología, Introducción a la clínica e interpretación de exámenes auxiliares, Integración fisiopatológica, English VI: RREL"] },
    "Fundamentos de educación en salud",
    { name: "Principios de nutrición clínica y funcional", requires: ["Nutrición y estilos de vida saludable"] },
    { name: "Principios e introducción a la medicina P4", requires: ["Introducción a la clínica e interpretación de exámenes auxiliares, Nutrición y estilos de vida saludable"] },
    "Realidad nacional y globalización",
    { name: "Terapéutica integrada", requires: ["Farmacología, Introducción a la clínica e interpretación de exámenes auxiliares, Integración fisiopatológica, English VI: RREL"] }
  ],
  "Ciclo 8": [
    { name: "Especialidades II", requires: ["English VI: RREL, Especialidades I, Terapéutica integrada"] },
    { name: "Geriatría", requires: ["English VI: RREL, Especialidades I, Terapéutica integrada"] },
    { name: "Inglés médico", requires: ["English IV: RREL", "Liderazgo gerencial y valores"] },
    { name: "Medicina física y del deporte", requires: ["English VI: RREL, Especialidades I, Terapéutica integrada"] },
    { name: "Nutrición funcional aplicada en especialidades clínicas y sistemas", requires: ["Principios de nutrición clínica y funcional, Principios e introducción a la medicina P4"] },
    { name: "Salud mental y psiquiatría", requires: ["Farmacología, Introducción a la clínica e interpretación de exámenes auxiliares, Integración fisiopatológica, English VI: RREL"] }
  ],
  "Ciclo 9": [
    { name: "Aplicación clínica de la medicina P4", requires: ["Nutrición funcional aplicada en especialidades clínicas y sistemas"] },
    { name: "Cirugía y traumatología", requires: ["Salud mental y psiquiatría, Geriatría, Especialidades II, Medicina física del deporte"] },
    { name: "Gestión en salud", requires: ["Salud pública, Especialidades II"] },
    { name: "Oncología médica", requires: ["Salud mental y psiquiatría, Geriatría, Especialidades II, Medicina física y del deporte"] },
    "Salud global y sistemas de salud",
    "Tesis I"
  ],
  "Ciclo 10": [
    { name: "Aspectos legales de la práctica médica y patología forense", requires: ["Cirugía y traumatología, Oncología médica"] },
    { name: "Emergencias y desastres", requires: ["Cirugía y traumatología, Oncología médica"] },
    { name: "Ginecología y obstetricia", requires: ["Cirugía y traumatología, Oncología médica"] },
    "Introducción a la salud y actividad física",
    { name: "Liderazgo, innovación y emprendimiento en salud", requires: ["Salud global y sistemas de salud, Gestión en salud"] },
    { name: "Pediatría", requires: ["Cirugía y traumatología", "Oncología médica"] },
    "Ultrasonido point of care"
  ],
  "Ciclo 11": [
    "Externado en cirugía y traumatología",
    "Externado en medicina",
    "Externado rotatorio 1",
    "Externado rotatorio 2",
    { name: "Tesis II", requires: ["Tesis I"] }
  ],
  "Ciclo 12": [
    { name: "Bioética", requires: ["Tesis I"] }
    "Externado en gineco-obstetricia",
    "Externado en pediatría"
  ],
  "Ciclo 13": [
    "Internado en medicina",
    "Internado en pediatría"
  ],
  "Ciclo 14": [
    "Internado en cirugía",
    "Internado en ginecología y obstetricia
  ],
};

// Estado actual
let state = JSON.parse(localStorage.getItem("malla-state")) || {};

function saveState() {
  localStorage.setItem("malla-state", JSON.stringify(state));
}

function resetState() {
  state = {};
  saveState();
  location.reload();
}

// Renderizar malla
const container = document.getElementById("malla");

for (const [cycle, courseList] of Object.entries(courses)) {
  const cycleDiv = document.createElement("div");
  cycleDiv.className = "cycle";

  const title = document.createElement("h2");
  title.textContent = cycle;
  cycleDiv.appendChild(title);

  courseList.forEach(course => {
    const courseName = typeof course === "string" ? course : course.name;
    const requirements = typeof course === "string" ? [] : course.requires;

    const courseDiv = document.createElement("div");
    courseDiv.className = "course";
    courseDiv.textContent = courseName;
    courseDiv.dataset.name = courseName;
    courseDiv.dataset.requires = JSON.stringify(requirements);

    if (state[courseName] === "taken") {
      courseDiv.classList.add("taken");
    } else if (areRequirementsMet(requirements)) {
      courseDiv.classList.add("unlocked");
    } else {
      courseDiv.classList.add("locked");
    }

    courseDiv.addEventListener("click", () => handleClick(courseDiv));

    cycleDiv.appendChild(courseDiv);
  });

  container.appendChild(cycleDiv);
}

function areRequirementsMet(requires) {
  return requires.every(req => state[req] === "taken");
}

function handleClick(div) {
  const name = div.dataset.name;
  const requires = JSON.parse(div.dataset.requires);

  if (div.classList.contains("locked")) return;

  if (!state[name]) {
    // Primer toque: cursado
    state[name] = "taken";
    div.classList.remove("unlocked");
    div.classList.add("taken");
    updateUnlocked();
  } else {
    // Segundo toque: restablecer
    delete state[name];
    div.classList.remove("taken");
    updateUnlocked();
  }

  saveState();
}

function updateUnlocked() {
  document.querySelectorAll(".course").forEach(div => {
    const name = div.dataset.name;
    const requires = JSON.parse(div.dataset.requires);

    if (state[name] === "taken") return;

    if (areRequirementsMet(requires)) {
      div.classList.remove("locked");
      div.classList.add("unlocked");
    } else {
      div.classList.remove("unlocked");
      div.classList.add("locked");
    }
  });
}

document.getElementById("reset").addEventListener("click", resetState);

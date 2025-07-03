const displayCourses = async () => {
  console.log("load");

  await fetch("./cursos.json")
    .then((res) => res.json())
    .then((courses) => {
      const container = document.querySelector("#courseContainer");

      courses.forEach((course) => {
        const card = document.createElement("div");

        const commingSoon = `
          <div class="absolute bottom-3 right-3 bg-pink-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg">
              Em Breve
          </div>
`;

        const content = `
        <a  href="" target="_blank">
          <h3 class="flex text-xl font-semibold mb-2">
            ${course.title} 
            <i class="text-4xl ${course.icon}"></i>
          </h3>
          <p class="text-slate-300 mb-4">
            ${course.description}
          </p>
          <button class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">
            ${course.buttonText}
          </button>
        </a>
`;

        card.classList =
          "relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl p-6 shadow-lg hover:shadow-pink-500/40 transition";

        card.innerHTML = content;

        if (course.isCommingSoon) {
          card.innerHTML += commingSoon;
        }

        container.appendChild(card);
      });
    });
};

document.addEventListener("DOMContentLoaded", displayCourses);

document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector("#bg3d");
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  bg.style.transform = `scale(1.05) rotateX(${y}deg) rotateY(${-x}deg)`;
});

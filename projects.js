/* ===========================
   jackdesigns.tech — Project Data
   =========================== */

const projects = [
    {
        title: "Fiber-Coupled Photo Sensors for TPCs",
        summary: "Engineered a Power-over-Fiber experimental platform for Silicon Photomultiplier and Time Projection Chamber feasibility analysis at SLAC National Accelerator Laboratory. Co-author on published arXiv paper.",
        tags: ["Research", "SLAC", "Particle Physics", "Hardware"],
        year: "2025",
        link: "#publications",
        featured: true
    },
    {
        title: "CubeSat Mission — High Altitude Balloon",
        summary: "Led design, build, and launch of College of the Desert's first CubeSat mission. Designed UHF/VHF communication system and custom ground station. Successfully tracked and retrieved after flight at 103,000 feet.",
        tags: ["Space", "CAD", "Embedded", "Communication"],
        year: "2022",
        link: "posts.html#cubesat",
        featured: true
    },
    {
        title: "Mars Regolith Penetrolyzer — NASA MSTAR",
        summary: "Systems engineering lead for NASA-funded project developing a penetrolyzer to extract oxygen and hydrogen from Martian brines. Mentored 20+ students in circuit design, Fusion 360, and Python.",
        tags: ["NASA", "CAD", "Research", "Leadership"],
        year: "2022–2025",
        link: "#publications",
        featured: true
    },
    {
        title: "Environmental Chamber — Python/KivyMD Automation",
        summary: "Led a team of interns to automate a 2-ton environmental simulation chamber (–200°C to 500°C) using Raspberry Pi, custom circuits, and a Python KivyMD GUI with dark/light mode.",
        tags: ["Python", "CAD", "Automation", "Lab Equipment"],
        year: "2023",
        link: "posts.html#chamber-python",
        featured: false
    },
    {
        title: "Environmental Chamber — LabVIEW Thermal Cycling",
        summary: "Automated thermal cycling testing (-60°C to 130°C) for Exquadrum aerospace (NASA/DARPA contractor) using LabVIEW and serial communication with a Synergy Nano 2 chamber controller.",
        tags: ["LabVIEW", "Automation", "Aerospace", "Python"],
        year: "2023",
        link: "posts.html#chamber-labview",
        featured: false
    },
    {
        title: "Open Sesame — Gate Code Manager",
        summary: "Cross-platform utility app for delivery drivers managing gated community access codes. Published on both Google Play and Apple App Store ecosystems.",
        tags: ["Mobile", "Python", "Published"],
        year: "2025",
        link: "#",
        featured: false
    }
];

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(p => `
        <a href="${p.link}" class="project-card">
            <div class="project-tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            <div class="project-meta">${p.year}</div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);

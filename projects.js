/* ===========================
   jackdesigns.tech — Project Data
   =========================== */

const projects = [
    {
        title: "Fiber-Coupled Photo Sensors for TPCs",
        summary: "Engineered a Power-over-Fiber experimental platform for Silicon Photomultiplier and Time Projection Chamber feasibility analysis at SLAC National Accelerator Laboratory.",
        tags: ["Research", "SLAC", "Particle Physics", "Hardware"],
        year: "2025",
        link: "#",
        featured: true
    },
    {
        title: "CubeSat Mission — High Altitude Balloon",
        summary: "Led the design, build, and launch of College of the Desert's first CubeSat mission. Designed the UHF/VHF communication system and custom ground station. Successfully tracked and retrieved after flight.",
        tags: ["Space", "CAD", "Embedded", "Communication"],
        year: "2022",
        link: "#",
        featured: true
    },
    {
        title: "Mars Regolith Penetrolyzer — NASA MSTAR",
        summary: "Systems engineering lead for a NASA-funded project developing a penetrolyzer to extract oxygen and hydrogen from Martian brines. Mentored 20+ students in circuit design, Fusion 360, and Python.",
        tags: ["NASA", "CAD", "Research", "Leadership"],
        year: "2022–2025",
        link: "#",
        featured: true
    },
    {
        title: "Open Sesame — Gate Code Manager",
        summary: "Cross-platform utility app for delivery drivers to manage gated community access codes. Published on both Google Play and Apple App Store ecosystems.",
        tags: ["Mobile", "Python", "Published"],
        year: "2025",
        link: "#",
        featured: false
    },
    {
        title: "Electrolysis Testing Apparatus",
        summary: "Designed and built custom testing rigs for the MSTAR electrolysis research program. Created full CAD assemblies and animation replications of lab setups using Fusion 360.",
        tags: ["CAD", "Fusion 360", "Lab Equipment", "Animation"],
        year: "2023–2024",
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

// nav.js — To add a new project, add one line to the links array below.
// The dropdown already contains static fallback links in the HTML, so the
// site works perfectly even without this script. This script just keeps all
// dropdowns in sync automatically when it does run.

(function () {
    var links = [
        { href: "dual-mode-robotics.html",  label: "Dual-Mode Robotic Systems" },
        { href: "elbow-exo.html",            label: "Elbow Exoskeleton" },
        { href: "hand-exo.html",             label: "Hand Exoskeleton" },
        { href: "tubular-composites.html",   label: "Tubular Braided Composites" },
        { href: "covid-vaccine-box.html",    label: "COVID-19 Vaccine Cold Box" },
        { href: "meam6200-quadrotor.html",   label: "Quadrotor SLAM" },
        { href: "edison-phonograph.html",    label: "Edison Phonograph" },
        { href: "robox-chess.html",          label: "Robox Chess Set" },
        { href: "boids-analysis.html",       label: "Boids Algorithm Analysis" },
        { href: "autonomous-robot.html",     label: "Autonomous Competition Robot" },
        { href: "pick-place-robot.html",     label: "Pick-and-Place Robot" },
        { href: "amr-platform.html",         label: "AMR Platform Design" },
        { href: "transmission-design.html",  label: "Transmission Design" },
    ];

    function updateDropdowns() {
        var html = links.map(function(l) {
            return '<a href="' + l.href + '">' + l.label + '</a>';
        }).join('');
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(d) { d.innerHTML = html; });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateDropdowns);
    } else {
        updateDropdowns();
    }
})();

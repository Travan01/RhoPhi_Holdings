/* ═══════════════════════════════════════════
   RHOPHI HOLDINGS — MAIN JS
   ═══════════════════════════════════════════ */

let plChartInstance = null;
let growthChartInstance = null;

window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("nav--scrolled", window.scrollY > 60);
});

function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");
  grid.innerHTML = "";
  RHOPHI_PORTFOLIO.forEach((co, i) => {
    const trend = co.performanceTrend === "up" ? "▲" : co.performanceTrend === "down" ? "▼" : "▬";
    const trendClass = co.performanceTrend;
    const card = document.createElement("div");
    card.className = "port-card";
    card.style.setProperty("--accent", co.accentColor);
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="port-card__top">
        <div class="port-card__logo-wrap">
          <img class="port-card__logo" src="${co.logo}" alt="${co.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
          <div class="port-card__logo-fb" style="display:none">${co.name.slice(0,2).toUpperCase()}</div>
        </div>
        <div class="port-card__meta">
          <span class="port-card__sector">${co.sector}</span>
          <span class="port-card__jurisdiction">${co.jurisdiction}</span>
        </div>
      </div>
      <h3 class="port-card__name">${co.name}</h3>
      <p class="port-card__desc">${co.description.substring(0, 120)}…</p>
      <div class="port-card__perf">
        <div class="port-card__index-bar-wrap">
          <div class="port-card__index-bar" style="width:${co.performanceIndex}%"></div>
        </div>
        <div class="port-card__index-row">
          <span class="port-card__index-label">Performance Index</span>
          <span class="port-card__index-val ${trendClass}">${trend} ${co.performanceIndex}</span>
        </div>
      </div>
      <div class="port-card__footer">
        <div class="port-card__val">
          <span class="port-card__val-label">Valuation</span>
          <span class="port-card__val-num">${co.valuation}</span>
        </div>
        <button class="port-card__btn" onclick="openModal('${co.id}')">View Details →</button>
      </div>`;
    grid.appendChild(card);
  });
}

function openModal(id) {
  const co = RHOPHI_PORTFOLIO.find(c => c.id === id);
  if (!co) return;
  document.getElementById("modalName").textContent = co.name;
  document.getElementById("modalSector").textContent = co.sector;
  document.getElementById("modalJurisdiction").textContent = co.jurisdiction;
  document.getElementById("modalDesc").textContent = co.description;
  document.getElementById("modalVal").textContent = co.valuation;
  document.getElementById("modalShares").textContent = co.sharesAvailable;
  document.getElementById("modalGrowth").textContent = co.projectedGrowth;
  document.getElementById("modalIndex").textContent = co.performanceIndex + " / 100";
  const logoEl = document.getElementById("modalLogo");
  const logoFb = document.getElementById("modalLogoFb");
  logoEl.src = co.logo; logoEl.style.display = "block";
  logoFb.style.display = "none"; logoFb.textContent = co.name.slice(0,2).toUpperCase();
  const badge = document.getElementById("modalPerfBadge");
  const arrow = co.performanceTrend === "up" ? "▲" : co.performanceTrend === "down" ? "▼" : "▬";
  badge.textContent = `${arrow} ${co.performanceTrend.toUpperCase()}`;
  badge.className = "modal__perf-badge " + co.performanceTrend;
  document.getElementById("modal").style.setProperty("--accent", co.accentColor);

  if (plChartInstance) { plChartInstance.destroy(); plChartInstance = null; }
  if (growthChartInstance) { growthChartInstance.destroy(); growthChartInstance = null; }

  const plCtx = document.getElementById("plChart").getContext("2d");
  plChartInstance = new Chart(plCtx, {
    type: "bar",
    data: {
      labels: co.plData.labels,
      datasets: [{ label: "P/L (£M)", data: co.plData.data,
        backgroundColor: co.plData.data.map(v => v >= 0 ? co.accentColor + "cc" : "#FF6B6Bcc"),
        borderRadius: 5, borderSkipped: false }]
    },
    options: { responsive: true, plugins: { legend: { display: false },
      tooltip: { callbacks: { label: ctx => ` £${ctx.parsed.y.toFixed(1)}M` } } },
      scales: { x: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#aaa", font: { family: "DM Mono" } } },
        y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#aaa", font: { family: "DM Mono" }, callback: v => `£${v}M` } } } }
  });

  const gCtx = document.getElementById("growthChart").getContext("2d");
  const grad = gCtx.createLinearGradient(0, 0, 0, 200);
  grad.addColorStop(0, co.accentColor + "66"); grad.addColorStop(1, co.accentColor + "00");
  growthChartInstance = new Chart(gCtx, {
    type: "line",
    data: {
      labels: co.growthData.labels,
      datasets: [{ label: "Growth (%)", data: co.growthData.data,
        borderColor: co.accentColor, backgroundColor: grad,
        borderWidth: 2.5, pointBackgroundColor: co.accentColor, pointRadius: 4, fill: true, tension: 0.4 }]
    },
    options: { responsive: true, plugins: { legend: { display: false },
      tooltip: { callbacks: { label: ctx => ` +${ctx.parsed.y}%` } } },
      scales: { x: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#aaa", font: { family: "DM Mono" } } },
        y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#aaa", font: { family: "DM Mono" }, callback: v => `${v}%` } } } }
  });

  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function initScrollReveal() {
  const els = document.querySelectorAll(".struct__wrap, .trust__card, .trust__people, .sec-head, .struct__note");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => { el.classList.add("reveal"); obs.observe(el); });
}

document.addEventListener("DOMContentLoaded", () => { renderPortfolio(); initScrollReveal(); });

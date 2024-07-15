function updateTooltips() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
    const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' });

    // Fügt einen Event-Listener hinzu, um den Tooltip auszublenden, wenn das Element den Fokus verliert
    tooltipTriggerEl.addEventListener('blur', () => {
      tooltip.hide();
    });

    // Optional: Tooltip auch ausblenden, wenn das Element angeklickt wird
    tooltipTriggerEl.addEventListener('click', () => {
      tooltip.hide();
    });

    return tooltip;
  })
}

document.querySelectorAll('button').forEach(bt => { if (!bt.classList.contains('login-button')) { bt.setAttribute('disabled', 'true'); } });

const depot_plan_A1 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.1</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
      data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
      data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)"/>


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.1</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.1</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.1</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.1</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.1</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.1</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.1</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.1</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.1</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="760" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G6.1</text>
  <rect x="760" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.1</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.1</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.1</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.1</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.1</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX6.1</text>
  <rect x="760" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.1</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.1</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.1</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.1</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.1</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />
</svg>`;
const depot_plan_A2 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.2</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
      data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
      data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)"/>


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.2</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.2</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.2</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.2</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.2</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.2</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.2</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.2</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.2</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="760" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G6.2</text>
  <rect x="760" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.2</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.2</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.2</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.2</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.2</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX6.2</text>
  <rect x="760" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.2</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.2</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.2</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.2</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.2</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />
</svg>`;
const depot_plan_A3 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.3</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
      data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
      data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)"/>


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.3</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.3</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.3</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.3</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.3</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.3</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.3</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.3</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.3</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="760" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G6.3</text>
  <rect x="760" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.3</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.3</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.3</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.3</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.3</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX6.3</text>
  <rect x="760" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.3</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.3</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.3</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.3</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.3</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />
</svg>`;
const depot_plan_B1 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.1</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
      data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
      data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)"/>


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.1</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.1</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.1</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.1</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

      <text x="760" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K6.1</text>
  <rect x="760" y="70" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.1</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.1</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.1</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.1</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.1</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.1</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.1</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.1</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.1</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.1</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.1</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.1</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.1</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.1</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.1</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

      <text x="760" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM6.1</text>
      <rect x="760" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
          data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />
</svg>`;
const depot_plan_B2 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.2</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
      data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
      data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)"/>


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.2</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.2</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.2</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.2</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

      <text x="760" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K6.2</text>
  <rect x="760" y="70" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.2</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.2</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.2</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.2</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.2</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.2</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.2</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.2</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.2</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.2</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.2</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.2</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.2</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.2</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.2</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

      <text x="760" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM6.2</text>
      <rect x="760" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
          data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />
</svg>`;
const depot_plan_B3 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.3</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
      data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
      data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)"/>


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.3</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.3</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.3</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.3</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

      <text x="760" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K6.3</text>
  <rect x="760" y="70" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.3</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.3</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.3</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.3</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.3</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.3</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.3</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.3</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.3</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.3</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.3</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.3</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.3</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.3</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.3</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
      data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

      <text x="760" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM6.3</text>
      <rect x="760" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
          data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />
</svg>`;
const depot_plan_C1 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.1</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
    data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
    data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.1</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.1</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.1</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.1</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K6.1</text>
  <rect x="760" y="70" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.1</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.1</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.1</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.1</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.1</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.1</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.1</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.1</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.1</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.1</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX6.1</text>
  <rect x="760" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.1</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.1</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.1</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.1</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.1</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

</svg>`;
const depot_plan_C2 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.2</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
    data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
    data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.2</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.2</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.2</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.2</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K6.2</text>
  <rect x="760" y="70" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.2</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.2</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.2</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.2</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.2</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.2</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.2</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.2</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.2</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.2</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX6.2</text>
  <rect x="760" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.2</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.2</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.2</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.2</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.2</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

</svg>`;
const depot_plan_C3 = `<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Hintergrund -->
  <!-- <rect width="100%" height="100%" fill="#d7d7d7" /> -->

  <!-- Bereich: Gekühlte Waren fill="#ADD8E6"-->
  <rect x="10" y="10" width="980" height="160" fill="#fff" stroke="#000" id="kalt" />
  <!-- <text x="460" y="40" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Kühl</text> -->

  <!-- Bereich: Giftige Waren fill="#FF6347"-->
  <rect x="10" y="180" width="980" height="160" fill="#fff" stroke="#000" id="gift" />
  <!-- <text x="460" y="220" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Giftig</text> -->

  <!-- Bereich: Explosionsgeschützt fill="#FFD700"-->
  <rect x="10" y="350" width="980" height="160" fill="#fff" stroke="#000" id="explosiv" />
  <!-- <text x="460" y="400" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Explosiv</text> -->

  <!-- Bereich: Betäubungsmittel fill="#98FB98"-->
  <rect x="10" y="520" width="980" height="160" fill="#fff" stroke="#000" id="btm" />
  <!-- <text x="460" y="580" font-family="Arial" font-size="16" fill="#000"
  text-anchor="middle">Betäubungsmittel</text> -->

  <!-- Lagerplätze für Gekühlte Waren -->
  <text x="60" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K1.3</text>
  <rect class="lagerplatz" x="60" y="70" width="120" height="50" fill="#FFF" stroke="#000"
    data-bs-toggle="tooltip" data-bs-placement="bottom" dat-bs-html="true"
    data-bs-custom-class="custom-tooltip" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />


  <text x="200" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K2.3</text>
  <rect x="200" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K3.3</text>
  <rect x="340" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K4.3</text>
  <rect x="480" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K5.3</text>
  <rect x="620" y="70" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 -20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="60" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: K6.3</text>
  <rect x="760" y="70" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Giftige Waren -->
  <text x="60" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G1.3</text>
  <rect x="60" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="200" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G2.3</text>
  <rect x="200" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="340" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G3.3</text>
  <rect x="340" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="480" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G4.3</text>
  <rect x="480" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <text x="620" y="230" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: G5.3</text>
  <rect x="620" y="240" width="120" height="50" fill="green" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Frei" onclick="freeSlot(this)" />

  <!-- Lagerplätze für Explosionsgeschützt -->
  <text x="60" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX1.3</text>
  <rect x="60" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX2.3</text>
  <rect x="200" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX3.3</text>
  <rect x="340" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX4.3</text>
  <rect x="480" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX5.3</text>
  <rect x="620" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="760" y="400" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: EX6.3</text>
  <rect x="760" y="410" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Bezeichnung 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <!-- Lagerplätze für Betäubungsmittel -->
  <text x="60" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM1.3</text>
  <rect x="60" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="200" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM2.3</text>
  <rect x="200" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="340" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM3.3</text>
  <rect x="340" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="480" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM4.3</text>
  <rect x="480" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

  <text x="620" y="570" font-family="Arial" font-size="12" fill="#000">Lagerplatz-ID: BTM5.3</text>
  <rect x="620" y="580" width="120" height="50" fill="#FFF" stroke="#000" data-bs-toggle="tooltip"
    data-bs-placement="bottom" data-bs-title="Betäubungsmittel 12345 10 2024-07-11 20°C" onclick="occupiedSlot(this)" />

</svg>`;

function displayTypesOfGoods(checkbox) {
  var plan = document.getElementById("depot-plan");
  var area;
  var fill;
  switch (checkbox.id.split(' ')[1]) {
    case 'kalt':
      area = plan.querySelector("#kalt");
      fill = "#ADD8E6";
      break;
    case 'gift':
      area = plan.querySelector("#gift");
      fill = "#FF6347";
      break;
    case 'explosiv':
      area = plan.querySelector("#explosiv");
      fill = "#FFD700";
      break;
    case 'btm':
      area = plan.querySelector("#btm");
      fill = "#98FB98";
      break;
    default:
      break;
  }

  if (checkbox.checked == true) {
    area.setAttribute("fill", fill);
  } else {
    area.setAttribute("fill", "white");
  }
}

function changeDropdownWerk(element) {
  var dropdownButton = document.getElementById('dropdown-werk');
  dropdownButton.textContent = element.textContent;
}

function changeDropdownLager(element) {
  var dropdownButton = document.getElementById('dropdown-lager');
  dropdownButton.textContent = element.textContent;
  var plan = document.getElementById('depot-plan');

  switch (element.textContent) {
    case 'Lager A':
      plan.innerHTML = depot_plan_A1;
      break;
    case 'Lager B':
      plan.innerHTML = depot_plan_B1;
      break;
    case 'Lager C':
      plan.innerHTML = depot_plan_C1;
      break;
  }
  document.querySelectorAll('[type="checkbox"]').forEach(checkbox => displayTypesOfGoods(checkbox));
  updateTooltips();
}

function changeDepotPlanLevel(element) {
  var plan = document.getElementById('depot-plan');
  var lager = document.getElementById('dropdown-lager').textContent.split(' ')[1];
  const plans = [[depot_plan_A1, depot_plan_A2, depot_plan_A3], [depot_plan_B1, depot_plan_B2, depot_plan_B3], [depot_plan_C1, depot_plan_C2, depot_plan_C3]];

  var tmp;

  switch (lager) {
    case 'A':
      tmp = plans[0];
      break;
    case 'B':
      tmp = plans[1];
      break;
    case 'C':
      tmp = plans[2];
      break;
  }

  switch (element.id) {
    case 'level-1':
      plan.innerHTML = tmp[0];
      break;
    case 'level-2':
      plan.innerHTML = tmp[1];
      break;
    case 'level-3':
      plan.innerHTML = tmp[2];
      break;
  }
  document.querySelectorAll('[type="checkbox"]').forEach(checkbox => displayTypesOfGoods(checkbox));
  updateTooltips();
}

function changeAccountMode() {
  var accountIcon = document.getElementById('account-icon');
  if (accountIcon.getAttribute('src').includes('logout_bold.svg')) {
    var baseUrl = accountIcon.getAttribute('data-base-url');
    accountIcon.setAttribute('src', `${baseUrl}account_bold.svg`);
    accountIcon.setAttribute('alt', 'Login');
    document.getElementById('account-button').setAttribute('data-bs-title', 'Login');
    document.querySelectorAll('button').forEach(bt => { if (!bt.classList.contains('login-button') && bt.id != 'account-button') { bt.setAttribute('disabled', 'true'); } });
  } else {
    var login = document.querySelector('.login');
    login.style.display = (login.style.display === 'none' || login.style.display === '') ? 'flex' : 'none';
  }
}

function login() {
  var email = document.getElementById('floatingEmail');
  var password = document.getElementById('floatingPassword');
  if (email.value == 'a' && password.value == 'a') {
    var accountIcon = document.getElementById('account-icon');
    var baseUrl = accountIcon.getAttribute('data-base-url');
    accountIcon.setAttribute('src', `${baseUrl}logout_bold.svg`);
    accountIcon.setAttribute('alt', 'Logout');
    document.getElementById('account-button').setAttribute('data-bs-title', 'Logout');
    var login = document.querySelector('.login');
    login.style.display = 'none';
    document.querySelectorAll('button').forEach(bt => { if (!bt.classList.contains('login-button')) { bt.removeAttribute('disabled'); } });
    updateTooltips();
  }
  email.value = '';
  password.value = '';
}

document.getElementById('floatingPassword').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    login();
  }
});

function closeLogin() {
  document.querySelector('.login').style.display = 'none';
}

function displayDeliveryForm(type) {
  var delivery_form = document.querySelector('.add-delivery');
  delivery_form.id = type;
  delivery_form.style.display = (delivery_form.style.display === 'none' || delivery_form.style.display === '') ? 'flex' : 'none';
}

function closeDeliveryForm() {
  document.querySelector('.add-delivery').style.display = 'none';
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

document.getElementById('floatingDatum').min = getTodayDate();

function createDelivery(button) {
  var title = document.getElementById('floatingTitle');
  var charge = document.getElementById('floatingCharge');
  var paletes = document.getElementById('floatingPaletten');
  var date = document.getElementById('floatingDatum');
  var temp = document.getElementById('floatingTemp');

  var content = (button.parentElement.id == "receipt") ? document.getElementById('collapseReceiptContent') : document.getElementById('collapseSendContent');
  content.innerHTML += `<div class="card card-body">
                          <div class="header">
                              <h6 class="card-title">${title.value}</h6>
                              <h6 class="card-title">Charge-Nr.: ${charge.value}</h6>
                          </div>
                          <div class="content">
                              <p>Paletten: ${paletes.value}</p>
                              <p>Datum: ${date.value}</p>
                              <p>Temp.: ${temp.value} °C</p>
                          </div>
                          <button class="btn btn-primary" type="button" onclick="lieferscheinInNewTab('./static/Lieferschein.pdf')">Lieferschein</button>
                        </div>`;
  closeDeliveryForm();
}

function lieferscheinInNewTab(pdfUrl) {
  if (pdfUrl && typeof pdfUrl === 'string') {
    window.open(pdfUrl, '_blank');
  } else {
    console.error('Ungültige PDF-URL');
  }
}

var freeClicked = false;
var freeSlotClicked;


function freeSlot(slot) {
  freeSlotClicked = slot;
  if (!freeClicked) {
    document.querySelector('#collapseReceiptContent').querySelectorAll('button').forEach(bt => {
      bt.innerHTML = 'Einlagern';
      bt.setAttribute('onclick', 'einlagern(this)');
      bt.setAttribute('data-bs-title', 'Einlagern der Lieferung in den freien Lagerplatz');
    });
    updateTooltips();
    freeClicked = true;
  } else {
    document.querySelector('#collapseReceiptContent').querySelectorAll('button').forEach(bt => {
      bt.innerHTML = 'Lieferschein';
      bt.setAttribute('onclick', "lieferscheinInNewTab('.static/Lieferschein.pdf')");
    });
    freeClicked = false;
  }
}


function einlagern(button) {
  var delivery = button.parentElement;
  delivery.style.display = "none";

  let values = [];
  delivery.querySelectorAll('h6').forEach(h => {
    values.push(h.innerHTML);
  });

  delivery.querySelectorAll('p').forEach(p => {
    values.push(p.innerHTML.split(' ')[1]);
  });

  freeSlotClicked.setAttribute('fill', 'green');
  freeSlotClicked.setAttribute('data-bs-title', values.join(' '));
  freeSlotClicked.setAttribute('onclick', 'occupiedSlot(this)');

  document.querySelector('#collapseReceiptContent').querySelectorAll('button').forEach(bt => {
    bt.innerHTML = 'Lieferschein';
    bt.setAttribute('onclick', "lieferscheinInNewTab('.static/Lieferschein.pdf')");
  });
  freeClicked = false;

  updateTooltips();
}

var occupiedClicked = false;
var occupiedSlotClicked;

function occupiedSlot(slot) {
  occupiedSlotClicked = slot;
  if (!occupiedClicked) {
    document.getElementById('auslagern-button').style.display = 'flex';
    occupiedClicked = true;
  } else {
    document.getElementById('auslagern-button').style.display = 'none';
    occupiedClicked = false;
  }
}

function auslagern(button) {
  occupiedSlotClicked.setAttribute('data-bs-title', 'Frei');
  occupiedSlotClicked.setAttribute('onclick', 'freeSlot(this)');
  occupiedSlotClicked.setAttribute('fill', 'green');

  updateTooltips();
  button.style.display = 'none';
}

const leftParams = document.querySelector('.left_params');
const handle = document.querySelector('.handle');

let isResizing = false;

handle.addEventListener('mousedown', function (e) {
  isResizing = true;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

});

function onMouseMove(e) {
  if (!isResizing) return;

  const newWidth = e.clientX;
  if (newWidth <= 100 || newWidth >= window.innerWidth * 0.5) return;

  leftParams.style.width = `${newWidth}px`;
  handle.style.left = `${newWidth}px`;
}

function onMouseUp() {
  isResizing = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}
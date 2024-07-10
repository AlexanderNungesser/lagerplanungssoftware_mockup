from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, 'Lieferschein - Pharmaunternehmen', 0, 1, 'C')
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Seite {self.page_no()}', 0, 0, 'C')

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, title, 0, 1, 'L')
        self.ln(5)

    def chapter_body(self, body):
        self.set_font('Arial', '', 12)
        self.multi_cell(0, 10, body)
        self.ln()

pdf = PDF()
pdf.add_page()

# Example data for the delivery note
data = {
    "Produktinformationen": {
        "Produktname": "Paracetamol 500mg",
        "Chargennummer": "A12345",
        "Verfallsdatum": "12/2025",
        "Dosierung": "500mg Tabletten"
    },
    "Logistische Informationen": {
        "Lieferdatum": "08.07.2024",
        "Lieferadresse": "Hauptstraße 123, 10115 Berlin, Deutschland",
        "Versandunternehmen": "DHL",
        "Tracking-Nummer": "1234567890"
    },
    "Konditionsanforderungen": {
        "Temperaturanforderungen": "Gekühlt (2-8°C)",
        "Feuchtigkeitskontrolle": "Ja",
        "Lichtschutz": "Ja"
    },
    "Regulatorische Informationen": {
        "Zertifikate": "GMP, GDP",
        "Zulassungsnummer": "DE1234567",
        "Sicherheitsdatenblätter": "Vorhanden"
    },
    "Verpackungsinformationen": {
        "Verpackungstyp": "Blisterpackungen",
        "Verpackungsgröße": "100 Tabletten pro Packung",
        "Sekundärverpackung": "Karton"
    },
    "Transportbedingungen": {
        "Transportart": "Lkw",
        "Transportdauer": "2 Tage",
        "Besonderer Umgang": "Keine Schüttelbewegungen"
    },
    "Qualitätskontrolle": {
        "Inspektionsberichte": "Vorhanden",
        "Qualitätszertifikate": "Vorhanden",
        "Prüfprotokolle": "Vorhanden"
    },
    "Sicherheitsanforderungen": {
        "Sicherheitsplomben": "Vorhanden",
        "Authentifizierungsmerkmale": "Hologramme",
        "Risikobewertung": "Durchgeführt"
    },
    "Empfängerinformationen": {
        "Kontaktperson": "Dr. Hans Müller",
        "Empfängerunternehmen": "Apotheke Müller",
        "Empfangsbestätigung": "Vorhanden"
    },
    "Dokumentation": {
        "Lieferschein": "Vorhanden",
        "Rechnungsdokumente": "Vorhanden",
        "Zolldokumente": "Nicht erforderlich"
    }
}

# Add content to the PDF
for section, attributes in data.items():
    pdf.chapter_title(section)
    body = "\n".join([f"{key}: {value}" for key, value in attributes.items()])
    pdf.chapter_body(body)

# Save the PDF to a file
file_path = "./Lieferschein.pdf"
pdf.output(file_path)

file_path

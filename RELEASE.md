<!--- RELEASE file. La cura di questo file è in carico ai dev.
 Qui vanno inserite tutte le novità e bugfix, spiegati in un linguaggio comprensibile anche ai non dev.
 Se ci sono delle migliorie/novità per cui è stato aggiunto qualcosa nel manuale, linkarlo come nell'esempio sotto.
 -->

<!--- -----------------------------------------------------------------
  Esempio:
  ---------------------------------------------------------------------

## Versione 7.10.9 (12/09/2023)

### Migliorie

- Fissato il layout di stampa per pagine con Accordion

### Novità

- Nuovo blocco "Informazioni" [`Istruzioni`](https://docs.google.com/document/d/1SThuxa_ah0BuNXukWs564kKPfprK41WLQE8Mome-0xg/edit#heading=h.7ty110jumgmd)

### Fix

- il numero di telefono dentro card ufficio adesso è visibile anche senza indirizzo
-->

<!--- -----------------------------------------------------------------
 TEMPLATE PER RELEASE
 ----------------------------------------------------------------------

## Versione X.X.X (dd/mm/yyyy)

### Migliorie

- ...

### Novità

- ...

### Fix

- ...
 -->

## Versione 2.26.0 (22/04/2026)

### Fix

- Aggiunta la sezione Documenti correlati in ComeFarePer CT
- Mostrare contenuto correlato in evidenza nella Pagina

## Versione 2.25.0 (21/04/2026)

### Fix

- Aggiunta la visualizzazione dell'icona nell'header delle pagine che hanno un campo icona (es. Cartella FAQ).
- Sistemata l'altezza del blocco Video quando è allineato a destra o sinistra: il video non si riduce più in altezza quando viene riprodotto.
- Rimossa la scritta "Servizio disponibile e prenotabile" dalla vista dettaglio del Servizio.
- Creato componente dedicato per il badge di stato del Servizio, riutilizzato in tutte le viste (dettaglio, card, listing).
- Rimosso il link dal titolo della card del Punto di contatto nei CT. Il titolo ora non è più cliccabile.
- Mostrare il testo della descrizione del Punto di contatto all'interno della card Contatti
- Modifica icona Struttura in Folder Content
- Sistemata la visualizzazione dell'etichetta "Programmato" accanto al titolo dei contenuti in Folder Content: ora viene mostrata come badge ben distinguibile dal titolo.

## Versione 2.24.0 (10/04/2026)

### Fix

- Sistemata l'etichetta relativa allo stato del Servizio nelle card. Ora mostra correttamente "Attivo" o "Non attivo" a seconda dello stato del servizio, invece di mostrare sempre "Servizio Online".

### Novità

- Aggiunta la possibilità di inserire il blocco Video all'interno del blocco Griglia.

## Versione 2.23.2 (20/03/2026)

### Fix

- Sistemata l'altezza del blocco "Alert" in visualizzaizone.
- Sistemata la visualizzazione dei nomi dei file che in alcuni casi contenevano caratteri speciali.
-

## Versione 2.23.0 (19/03/2026)

### Novità

- Ora è possibile nascondere il titolo del sito nell'header.

## Versione 2.21.6 (03/10/2025)

### Fix

- Mostrati i contatti nell'header dei sottositi.

## Versione 2.21.0 (19/09/2025)

### Novità

- Aggiunta la possibilità di inserire un titolo custom nelle collonne del template 'Tabella' del blocco elenco

## Versione 2.20.6 (19/09/2025)

### Fix

- Sistemato l'header sticky in cms-ui.

## Versione 2.20.5 (16/09/2025)

### Fix

- Sistemato header sticky durante lo scroll della pagina ora è più fluido.
- Rimossa barra di scorrimento orizzontale che compariva saltuariamente nel sito durante la navigazione.

## Versione 2.16.4 (12/06/2025)

### Migliorie

- Migliorato la vista delle Strutture con il campo dedicato al personale correlato, opzione attivabile dalla configurazione del tema

## Versione 2.16.1 (27/05/2025)

### Fix

- Sistemata la vista del control panel Utenti

## Versione 2.15.0 (20/05/2025)

### Novità

- Implementato lo Schema.org per i tipi di contenuti Struttura, Servizio ed Evento

### Migliorie

- Migliorato lo Schema.org della Homepage

## Versione 2.14.0 (19/05/2025)

### Novità

- Implementato lo Schema.org per i tipi di contenuti Notizia, Persona e ComeFarePer

## Versione 2.11.1 (31/03/2025)

### Fix

- sistemato un problema di perdita di dati durante il caricamento di una nuova immagine nel form di inseriemento dati di un ct con i campi a blocchi.
- sistemata la visualizzazione delle tassonomie nel template 'Tabella' del blocco elenco
- sistemata l'accessibilità per il blocco Tabella
- rimosso il flag di configurazione 'Mostra la form di iscrizione' nel footer.

## Versione 2.11.0 (25/03/2025)

### Novità

- Aggiunto il template 'tabella' del blocco elenco in cui è possibile selezionare quali colonne dei content-type mostrare

## Versione 2.10.0 (24/03/2025)

### Novità

- Migliorato il blocco accordion. Ora sono disponibili diverse opzioni per personalizzarne lo stile e il funzionamento, ed è possibile inserire nel corpo dell'accordion qualsiasi tipo di blocco gia aggiungibile nel resto del sito.

## Versione 2.8.0 (19/03/2025)

### Novità

- Aggiunta variazione del blocco listing Allegati

## Versione 2.6.0 (11/03/2025)

### Novità

- ora nel blocco Cerca, è possibile selezionare tutte le variazioni del blocco elenco come aspetto dei risultati.

## Versione 2.5.0 (05/03/2025)

### Novità

- implementato lo Schema.org per la homepage del sito

## Versione 2.4.2 (04/03/2025)

### Fix

- sistemato lo scroll del menu laterale nelle viste dei content-type

## Versione 2.3.3 (26/02/2025)

### Fix

- a11y - Sistemata l'accessibilità del template del blocco elenco 'Link completi'

## Versione 2.3.2 (26/02/2025)

### Fix

- a11y - Sistemata l'accessibilità dei blocchi di tipo 'cerca'

## Versione 2.3.0 (24/02/2025)

### Novità

- aggiunto il template 'Carousel' per il blocco elenco, con il quale è possibile realizzare sia caroselli, sia gallery con immagini che si aprono in popup

## Versione 2.2.1 (12/02/2025)

### Migliorie

- a11y - migliorata l'accessibilità del sito per quanto riguarda le icone
- a11y - migliorato il contrasto del focus sugli elementi con la navigazione da tastiera
- aggiunto il tag <lin rel="canonical"> per tutte le pagine, come suggerito da consulente SEO
- aggiunta la barra di loading nella parte alta della pagina quando si sta caricando un contenuto

## Versione 2.2.0 (06/02/2025)

### Migliorie

- Ordinate le date del bando in ordine cronologico

## Versione 2.1.0 (05/02/2025)

### Novità

- Aggiunta sezione Novità Ultimi Rilasci nel pannello di controllo.
- Aggiornato piattaforma a Volto 18.4.0

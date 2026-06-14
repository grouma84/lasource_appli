/* --------------------- 0. CONFIGURATION DE LA CARTE --------------------------- */

// Initialisation (centrée sur Carpentras)
const map = L.map('map').setView([44.0563, 5.0495], 16);

// Fond de carte
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors, © CARTO',
    maxZoom: 19,
}).addTo(map);


/* -------------------- 1. LOGIQUE ZONE client-centre-ancien -------------------- */

// 'clients centre ancien' est fourni par index.html (inlining)
const zone1Layer = L.layerGroup();

clients.forEach(client => {
    L.circleMarker([client.lat, client.lng], {
        // Options de style pour le marqueur
        radius: 5,
        fillColor: "#f20d0dff", // Orange
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone1Layer); // Ajoute au conteneur Zone 1
});

// Afficher la Zone 1 par défaut
zone1Layer.addTo(map);


/* -------------------- 2. LOGIQUE ZONE client-centre-ancien -------------------- */

// 'clientsZone2' est fourni par index.html (inlining)
const zone2Layer = L.layerGroup();

clientsZone2.forEach(client => {
    L.circleMarker([client.lat, client.lng], {
        // Options de style pour le marqueur
        radius: 5,
        fillColor: "#f20d0dff", // Bleu
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone2Layer); // Ajoute au conteneur Zone 2
});

// Afficher la Zone 2 par défaut
zone2Layer.addTo(map);


/* --- 4. CONNEXION DES BOUTONS (DÉCLENCHEURS) --- */

// Bouton Zone 1
const toggleButton1 = document.getElementById('toggleZone1Button');
toggleButton1.addEventListener('click', () => {
    if (map.hasLayer(zone1Layer)) {
        map.removeLayer(zone1Layer);
    } else {
        map.addLayer(zone1Layer);
    }
});

// Bouton Zone 2
const toggleButton2 = document.getElementById('toggleZone2Button');
toggleButton2.addEventListener('click', () => {
    if (map.hasLayer(zone2Layer)) {
        map.removeLayer(zone2Layer);
    } else {
        map.addLayer(zone2Layer);
    }
});


/* -------------------- 3. LOGIQUE ZONE client-centre-ancien -------------------- */

// 'clientsZone3' est fourni par index.html
const zone3Layer = L.layerGroup();

clientsZone3.forEach(client => {
    L.circleMarker([client.lat, client.lng], {
        // Options de style pour le marqueur Zone 3
        radius: 5,
        fillColor: "#f20d0dff", // Vert (pour différencier)
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone3Layer);
});

// Afficher la Zone 3 par défaut
zone3Layer.addTo(map);

// Bouton Zone 3
const toggleButton3 = document.getElementById('toggleZone3Button');
toggleButton3.addEventListener('click', () => {
    if (map.hasLayer(zone3Layer)) {
        map.removeLayer(zone3Layer);
    } else {
        map.addLayer(zone3Layer);
    }
});

/* -------------------- 4. LOGIQUE ZONE client-centre-ancien -------------------- */

// 'clientsZone4' est fourni par index.html
const zone4Layer = L.layerGroup();

clientsZone4.forEach(client => {
    L.circleMarker([client.lat, client.lng], {
        // Options de style pour le marqueur Zone 3
        radius: 5,
        fillColor: "#f20d0dff", // Vert (pour différencier)
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone4Layer);
});

// Afficher la Zone 4 par défaut
zone4Layer.addTo(map);

// Bouton Zone 4
const toggleButton4 = document.getElementById('toggleZone4Button');
toggleButton4.addEventListener('click', () => {
    if (map.hasLayer(zone4Layer)) {
        map.removeLayer(zone4Layer);
    } else {
        map.addLayer(zone4Layer);
    }
});

/* -------------------- 5. LOGIQUE ZONE client-centre-ville -------------------- */

// 'clientsZone5' est fourni par index.html
const zone5Layer = L.layerGroup();

clientsZone5.forEach(client => {
    L.circleMarker([client.lat, client.lng], {
        // Options de style pour le marqueur Zone 3
        radius: 5,
        fillColor: "#f20d0dff", // Vert (pour différencier)
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone5Layer);
});

// Afficher la Zone 5 par défaut
zone5Layer.addTo(map);

// Bouton Zone 5
const toggleButton5 = document.getElementById('toggleZone5Button');
toggleButton5.addEventListener('click', () => {
    if (map.hasLayer(zone5Layer)) {
        map.removeLayer(zone5Layer);
    } else {
        map.addLayer(zone5Layer);
    }
});

/* -------------------------- 6. LOGIQUE ZONE CENTRE ANCIEN café -------------------------- */

// 'clientsZone6' est fourni par index.html
const zone6Layer = L.layerGroup();

clientsZone6.forEach(client => {
    L.circleMarker([client.lat, client.lng], {
        // Options de style pour le marqueur Zone 6
        radius: 5,
        fillColor: "#080908ff", // Vert (pour différencier)
        color: "#000",
        weight: 15,
        opacity: 1,
        fillOpacity: 0.8
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone6Layer);
});

// Afficher la Zone 6 par défaut
zone6Layer.addTo(map);

// Bouton Zone 6
const toggleButton6 = document.getElementById('toggleZone6Button');
toggleButton6.addEventListener('click', () => {
    if (map.hasLayer(zone6Layer)) {
        map.removeLayer(zone6Layer);
    } else {
        map.addLayer(zone6Layer);
    }
});

/* -------------------------- 7. LOGIQUE ZONE CENTRE VILLE café -------------------------- */

const zone6BisLayer = L.layerGroup();

clientsZone6Bis.forEach(client => {
    L.circleMarker([client.lat, client.lng], {
        // Options de style
        radius: 5,
        fillColor: "#080908ff",
        color: "#000",
        weight: 10,
        opacity: 1,
        fillOpacity: 0.8,
        className: 'blinking-marker' // <--- AJOUT ICI : ON LUI DONNE L'UNIFORME CLIGNOTANT
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone6BisLayer);
});

// Afficher la Zone 6Bis par défaut
zone6BisLayer.addTo(map);

// Bouton Zone 6Bis
const toggleButton6Bis = document.getElementById('toggleZone6BisButton');
toggleButton6Bis.addEventListener('click', () => {
    if (map.hasLayer(zone6BisLayer)) {
        map.removeLayer(zone6BisLayer);
    } else {
        map.addLayer(zone6BisLayer);
    }
});

/* --------------------- 7. LOGIQUE LAVERIE ---------------------------- */

// 'clientsZone7' est fourni par index.html
const zone7Layer = L.layerGroup();

clientsZone7.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '回',               // LE HUBLOT
            className: 'emoji-icon',  // Ton CSS avec color: #ADFF2F;
            iconSize: [25, 25],
            iconAnchor: [12.5, 12.5]  // Centré parfaitement
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone7Layer);
});

// Afficher la Zone 7 par défaut
zone7Layer.addTo(map);

// Bouton Zone 7
const toggleButton7 = document.getElementById('toggleZone7Button');
toggleButton7.addEventListener('click', () => {
    if (map.hasLayer(zone7Layer)) {
        map.removeLayer(zone7Layer);
    } else {
        map.addLayer(zone7Layer);
    }
});

/* ------------------------ 8. LOGIQUE PROJET ----------------------------------- */

// 'clientsZone8' est fourni par index.html
const zone8Layer = L.layerGroup();

clientsZone8.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '回',                // LE SYMBOLE : Maison / Local
            className: 'emoji-icon-asso',   // On garde ton uniforme habituel
            iconSize: [25, 25],
            iconAnchor: [12.5, 12.5]   // Centré
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone8Layer);
});

// Afficher la Zone 8 par défaut
zone8Layer.addTo(map);

// Bouton Zone 8
const toggleButton8 = document.getElementById('toggleZone8Button');
toggleButton8.addEventListener('click', () => {
    if (map.hasLayer(zone8Layer)) {
        map.removeLayer(zone8Layer);
    } else {
        map.addLayer(zone8Layer);
    }
});

/* ---------------------- 9. LOGIQUE LOGEMENT ASSO ------------------------ */

// 'clientsZone8' est fourni par index.html
const zone9Layer = L.layerGroup();

clientsZone9.forEach(client => {
    // ON CHANGE L'ARME : marker avec icône bâtiment
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '🏢',               // LE SYMBOLE : Bâtiment
            className: 'emoji-icon',  // L'uniforme standard (avec bordures épaisses si tu les as gardées)
            iconSize: [35, 35],
            iconAnchor: [12.5, 12.5]  // Centré
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone9Layer);
});

// Afficher la Zone LOGEMENT ASSO par défaut
zone9Layer.addTo(map);

// Bouton Zone 9
const toggleButton9 = document.getElementById('toggleZone9Button');
toggleButton9.addEventListener('click', () => {
    if (map.hasLayer(zone9Layer)) {
        map.removeLayer(zone9Layer);
    } else {
        map.addLayer(zone9Layer);
    }
});

/* ---------------------- 10. LOGIQUE CONCURRENTS ------------------------ */

// 'clientsZone10' est fourni par concurrents.js
const zone10Layer = L.layerGroup();

clientsZone10.forEach(client => {
    // ON CHANGE L'ARME : marker avec icône bâtiment
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '回',               // LE SYMBOLE : Laverie (concurrent)
            className: 'emoji-icon',  // Uniforme standard
            iconSize: [35, 35],
            iconAnchor: [12.5, 12.5]  // Centré
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(zone10Layer); // <--- CORRECTION ICI : C'est bien zone10Layer, pas zone9Layer
});

// Afficher la Zone concurrent par défaut
zone10Layer.addTo(map); // <--- CORRECTION ICI : On affiche la zone 10, pas la 9

// Bouton Zone 10
const toggleButton10 = document.getElementById('toggleZone10Button');
toggleButton10.addEventListener('click', () => {
    if (map.hasLayer(zone10Layer)) {
        map.removeLayer(zone10Layer);
    } else {
        map.addLayer(zone10Layer);
    }
});




/* ---------------------- 11. LOGIQUE EPICERIE ------------------------ */
const epicerieLayer = L.layerGroup();
clientsEpicerie.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '🛒',
            className: 'emoji-epicerie',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(epicerieLayer);
});
epicerieLayer.addTo(map);
const toggleEpicerieButton = document.getElementById('toggleEpicerieButton');
toggleEpicerieButton.addEventListener('click', () => {
    if (map.hasLayer(epicerieLayer)) {
        map.removeLayer(epicerieLayer);
    } else {
        map.addLayer(epicerieLayer);
    }
});

/* ---------------------- 12. LOGIQUE COIFFEUR ------------------------ */
const coiffeurLayer = L.layerGroup();
clientsCoiffeur.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '💇',
            className: 'emoji-coiffeur',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(coiffeurLayer);
});
coiffeurLayer.addTo(map);
const toggleCoiffeurButton = document.getElementById('toggleCoiffeurButton');
toggleCoiffeurButton.addEventListener('click', () => {
    if (map.hasLayer(coiffeurLayer)) {
        map.removeLayer(coiffeurLayer);
    } else {
        map.addLayer(coiffeurLayer);
    }
});

/* ---------------------- 13. LOGIQUE TAXIPHONE ------------------------ */
const taxiphoneLayer = L.layerGroup();
clientsTaxiphone.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '📞',
            className: 'emoji-taxiphone',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(taxiphoneLayer);
});
taxiphoneLayer.addTo(map);
const toggleTaxiphoneButton = document.getElementById('toggleTaxiphoneButton');
toggleTaxiphoneButton.addEventListener('click', () => {
    if (map.hasLayer(taxiphoneLayer)) {
        map.removeLayer(taxiphoneLayer);
    } else {
        map.addLayer(taxiphoneLayer);
    }
});

/* ---------------------- 14. LOGIQUE SNACK ------------------------ */
const snackLayer = L.layerGroup();
clientsSnack.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '🍔',
            className: 'emoji-snack',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(snackLayer);
});
snackLayer.addTo(map);
const toggleSnackButton = document.getElementById('toggleSnackButton');
toggleSnackButton.addEventListener('click', () => {
    if (map.hasLayer(snackLayer)) {
        map.removeLayer(snackLayer);
    } else {
        map.addLayer(snackLayer);
    }
});

/* ---------------------- 15. LOGIQUE BOUCHERIE ------------------------ */
const boucherieLayer = L.layerGroup();
clientsBoucherie.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '🥩',
            className: 'emoji-boucherie',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(boucherieLayer);
});
boucherieLayer.addTo(map);
const toggleBoucherieButton = document.getElementById('toggleBoucherieButton');
toggleBoucherieButton.addEventListener('click', () => {
    if (map.hasLayer(boucherieLayer)) {
        map.removeLayer(boucherieLayer);
    } else {
        map.addLayer(boucherieLayer);
    }
});

/* ---------------------- 16. LOGIQUE BOULANGER ------------------------ */
const boulangerLayer = L.layerGroup();
clientsBoulanger.forEach(client => {
    L.marker([client.lat, client.lng], {
        icon: L.divIcon({
            html: '🥖',
            className: 'emoji-boulanger',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    })
        .bindPopup(`<b>${client.adresse}</b><br>Titre: ${client.titre}`)
        .addTo(boulangerLayer);
});
boulangerLayer.addTo(map);
const toggleBoulangerButton = document.getElementById('toggleBoulangerButton');
toggleBoulangerButton.addEventListener('click', () => {
    if (map.hasLayer(boulangerLayer)) {
        map.removeLayer(boulangerLayer);
    } else {
        map.addLayer(boulangerLayer);
    }
});

/* ---------------------- 17. LOGIQUE SYSTEMIC FLAW ------------------------ */
const targetLayer = L.layerGroup();

L.marker([44.05563277002423, 5.047622656002057], {
    icon: L.divIcon({
        html: '<div style="font-size: 30px;">🎯</div>',
        className: 'emoji-target',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    })
})
    .bindPopup("<b>ZONE D'IMPLANTATION</b><br>Hub : Taxiphone + Boucherie<br>Concurrent le plus proche : 156m")
    .addTo(targetLayer);

targetLayer.addTo(map);

const REACTIONS = {
    "like": {
        "id": 1,
        "name": "Like",
        "cssId": "_3j7l",
        "touchBlingSelector": ".sp_Jnt3vJul-6Q.sx_2ec001, .sp_Jnt3vJul-6Q_2x.sx_a1809d",
        "offsetBling": "0 -48px",
        "offsetButton": "0 -144px",
        "offsetPercent": "0 43%"
    },
    "love": {
        "id": 2,
        "name": "Love",
        "cssId": "_3j7m",
        "touchBlingSelector": ".sp_Jnt3vJul-6Q.sx_424b71, .sp_Jnt3vJul-6Q_2x.sx_d23e65",
        "offsetBling": "0 -64px",
        "offsetButton": "0 -192px",
        "offsetPercent": "0 58%"
    },
    "haha": {
        "id": 4,
        "name": "Haha",
        "cssId": "_3j7o",
        "touchBlingSelector": ".sp_Jnt3vJul-6Q.sx_fd2881, .sp_Jnt3vJul-6Q_2x.sx_b9c7aa",
        "offsetBling": "0 -32px",
        "offsetButton": "0 -96px",
        "offsetPercent": "0 29%"
    },
    "wow": {
        "id": 3,
        "name": "Wow",
        "cssId": "_3j7n",
        "touchBlingSelector": ".sp_Jnt3vJul-6Q.sx_ae4a5e, .sp_Jnt3vJul-6Q_2x.sx_aaf450",
        "offsetBling": "0 -96px",
        "offsetButton": "0 -288px",
        "offsetPercent": "0 86%"
    },
    "sorry": {
        "id": 7,
        "name": "Sad",
        "cssId": "_3j7r",
        "touchBlingSelector": ".sp_Jnt3vJul-6Q.sx_608018, .sp_Jnt3vJul-6Q_2x.sx_369a07",
        "offsetBling": "0 -80px",
        "offsetButton": "0 -240px",
        "offsetPercent": "0 72%"
    },
    "anger": {
        "id": 8,
        "name": "Angry",
        "cssId": "_3j7q",
        "touchBlingSelector": ".sp_Jnt3vJul-6Q.sx_95ad2a, .sp_Jnt3vJul-6Q_2x.sx_5dc616",
        "offsetBling": "0 0",
        "offsetButton": "0 0",
        "offsetPercent": "0 0"
    }
};

function buildStylesheet() {
    return Array.prototype.reduce.call(Object.keys(REACTIONS), (sum, label) => {
        const reaction = REACTIONS[label];
        return sum + `
        /**
         * ${reaction.name}
         */
        ._2p7a.${reaction.cssId}, ._9--.${reaction.cssId}, /* www bling */
        ${reaction.touchBlingSelector} { /* touch bling */ 
            background-image: url(https://s33.postimg.cc/qqyzbumbv/pack32.png) !important;
            background-size: 16px 128px !important;
            background-position: ${reaction.offsetBling} !important;
        }
        ._2jry ._9-_.${reaction.cssId} { /* www buttons */
            background-position: ${reaction.offsetButton} !important;
        }
        ._4g34[data-store="{\\"reaction\\":${reaction.id}}"] ._uah ._2p78 { /* touch buttons */
            background-position: ${reaction.offsetPercent} !important;
        }
        `;
    }, "") +
    `
    ._iuz ._2p78 { /* www button image, non-HiDPI */
        background-image: url(https://s33.postimg.cc/uncb7uf17/pack48.png) !important;
    }
    ._iuw ._2p78 { /* www button image, HiDPI */
        background-image: url(https://s33.postimg.cc/hj6qv5up7/pack96.png) !important;
        background-size: 48px 384px !important;
    }
    ._uah ._2p78 { /* touch toolbar */
        background-size: 100% 800% !important;
    }
    `;
}

function createRpStyleElement() {
    const styleElem = document.createElement('style');
    styleElem.id = 'plane-reacc-only';
    styleElem.type = 'text/css';
    document.documentElement.appendChild(styleElem);
    return styleElem;
}

function setPageStyle(sheet) {
    const styleElem = document.getElementById('plane-reacc-only') || createRpStyleElement();
    styleElem.textContent = sheet;
}

const stylesheet = buildStylesheet();
setPageStyle(stylesheet);

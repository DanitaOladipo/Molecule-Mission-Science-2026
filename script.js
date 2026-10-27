    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const temperatureOutput = document.getElementById("temperature");
    const stateLabel = document.getElementById("stateLabel");
    const statePill = document.getElementById("statePill");
    const scaleMarker = document.getElementById("scaleMarker");
    const missionCount = document.getElementById("missionCount");
    const missionTitle = document.getElementById("missionTitle");
    const missionCopy = document.getElementById("missionCopy");
    const phaseNote = document.getElementById("phaseNote");
    const particleCaption = document.getElementById("particleCaption");
    const feedback = document.getElementById("feedback");
    const submitButton = document.getElementById("submitButton");
    const restartButton = document.getElementById("restartButton");
    const coolButton = document.getElementById("coolButton");
    const heatButton = document.getElementById("heatButton");
    const characterCreator = document.getElementById("characterCreator");
    const characterForm = document.getElementById("characterForm");
    const characterNameInput = document.getElementById("characterName");
    const creatorPreviewAvatar = document.getElementById("creatorPreviewAvatar");
    const creatorPreviewHint = document.getElementById("creatorPreviewHint");
    const gameScreen = document.getElementById("gameScreen");
    const playerAvatar = document.getElementById("playerAvatar");
    const playerName = document.getElementById("playerName");
    const playerSpecialty = document.getElementById("playerSpecialty");
    const startMenu = document.getElementById("startMenu");
    const newGameButton = document.getElementById("newGameButton");
    const continueButton = document.getElementById("continueButton");
    const quizModeButton = document.getElementById("quizModeButton");
    const temperatureModeButton = document.getElementById("temperatureModeButton");
    const matchingModeButton = document.getElementById("matchingModeButton");
    const miniGameScreen = document.getElementById("miniGameScreen");
    const miniGameTitle = document.getElementById("miniGameTitle");
    const quizGame = document.getElementById("quizGame");
    const quizProgress = document.getElementById("quizProgress");
    const quizPrompt = document.getElementById("quizPrompt");
    const quizOptions = document.getElementById("quizOptions");
    const quizFeedback = document.getElementById("quizFeedback");
    const quizNextButton = document.getElementById("quizNextButton");
    const temperatureGame = document.getElementById("temperatureGame");
    const temperatureChallengeProgress = document.getElementById("temperatureChallengeProgress");
    const temperatureChallengePrompt = document.getElementById("temperatureChallengePrompt");
    const challengeTemperature = document.getElementById("challengeTemperature");
    const challengeState = document.getElementById("challengeState");
    const challengeCoolButton = document.getElementById("challengeCoolButton");
    const challengeHeatButton = document.getElementById("challengeHeatButton");
    const temperatureChallengeFeedback = document.getElementById("temperatureChallengeFeedback");
    const checkTemperatureButton = document.getElementById("checkTemperatureButton");
    const matchingGame = document.getElementById("matchingGame");
    const matchingProgress = document.getElementById("matchingProgress");
    const matchingCards = document.getElementById("matchingCards");
    const matchingFeedback = document.getElementById("matchingFeedback");
    const miniGameMenuButton = document.getElementById("miniGameMenuButton");
    const saveNote = document.getElementById("saveNote");
    const musicToggle = document.getElementById("musicToggle");
    const musicStatus = document.getElementById("musicStatus");
    const creatorBackButton = document.getElementById("creatorBackButton");
    const mainMenuButton = document.getElementById("mainMenuButton");
    const narratorSubtitle = document.getElementById("narratorSubtitle");
    const narratorVoiceToggle = document.getElementById("narratorVoiceToggle");
    const narratorVoiceChoice = document.getElementById("narratorVoiceChoice");
    const narratorVoiceStatus = document.getElementById("narratorVoiceStatus");
    const narratorCharacter = document.getElementById("narratorCharacter");
    const worldNarrator = document.getElementById("worldNarrator");
    const worldPlayer = document.getElementById("labPlayer");
    const worldPlayerName = document.getElementById("worldPlayerName");
    const labWorld = document.getElementById("labWorld");
    const labCoordinate = document.getElementById("labCoordinate");
    const labInteractionHint = document.getElementById("labInteractionHint");
    const labStation = document.getElementById("labStation");
    const lab3dCanvas = document.getElementById("lab3dScene");
    const lab3dStatus = document.getElementById("lab3dStatus");
    const worldPlayerAvatar = document.getElementById("worldPlayerAvatar");
    const worldNarratorAvatar = document.getElementById("worldNarratorAvatar");
    const missionTemperatureStep = document.getElementById("missionTemperatureStep");
    const missionScanStep = document.getElementById("missionScanStep");
    const missionLockStep = document.getElementById("missionLockStep");
    const missionProgress = document.getElementById("missionProgress");
    const missionProgressBar = document.getElementById("missionProgressBar");
    const explorerAvatar = document.getElementById("explorerAvatar");
    const explorerName = document.getElementById("explorerName");
    const explorerSpecialty = document.getElementById("explorerSpecialty");
    const inventoryCount = document.getElementById("inventoryCount");
    const inventoryCopy = document.getElementById("inventoryCopy");
    const inventoryItems = document.getElementById("inventoryItems");
    const characterStoreButton = document.getElementById("characterStoreButton");
    const storeDialog = document.getElementById("storeDialog");
    const storeCloseButton = document.getElementById("storeCloseButton");
    const storeCharacterPreview = document.getElementById("storeCharacterPreview");
    const storeCharacterName = document.getElementById("storeCharacterName");
    const storeCharacterCopy = document.getElementById("storeCharacterCopy");
    const storeBalance = document.getElementById("storeBalance");
    const storeItems = document.getElementById("storeItems");
    const storeStatus = document.getElementById("storeStatus");
    const shareQrButton = document.getElementById("shareQrButton");
    const qrDialog = document.getElementById("qrDialog");
    const qrImage = document.getElementById("qrImage");
    const qrStatus = document.getElementById("qrStatus");
    const qrCloseButton = document.getElementById("qrCloseButton");

    const missions = [
      {
        state: "solid",
        title: "Mission 1 · Chill it and freeze!",
        copy: "Chill the water to 0°C or below, then inspect how its molecules lock into a solid.",
        narration: "First up, chill the sample to 0°C or below! Then inspect how the molecules lock into a solid that holds its shape.",
        scanGoal: 1,
        calibratedTemperature: 0
      },
      {
        state: "liquid",
        title: "Mission 2 · Warm it up and map!",
        copy: "Warm the ice above 0°C but below 100°C, then map the molecules as they slide around.",
        narration: "Next, warm the ice until it melts! Map the molecules as they slide around in liquid water—above 0°C and below 100°C.",
        scanGoal: 3,
        calibratedTemperature: 50
      },
      {
        state: "gas",
        title: "Mission 3 · Heat it up and zoom!",
        copy: "Heat the water to 100°C or above, then explore the speedy molecules spreading through the gas.",
        narration: "Final mission—heat the water to 100°C or above! Explore the speedy gas molecules and zoom across the finish line.",
        scanGoal: 5,
        calibratedTemperature: 100
      }
    ];
    const quizQuestions = [
      {
        question: "What happens to water molecules when liquid water freezes?",
        answers: ["They vibrate in fixed positions", "They disappear", "They spread out to fill the room"],
        correct: 0
      },
      {
        question: "Which state of matter spreads out to fill its container?",
        answers: ["Solid", "Liquid", "Gas"],
        correct: 2
      },
      {
        question: "How do molecules move in liquid water?",
        answers: ["They stay in fixed positions", "They slide past one another", "They stop moving"],
        correct: 1
      },
      {
        question: "At what temperature does water freeze?",
        answers: ["0°C", "50°C", "100°C"],
        correct: 0
      },
      {
        question: "What happens to water at 100°C at normal air pressure?",
        answers: ["It freezes into a solid", "It changes into a gas", "It becomes colder"],
        correct: 1
      },
      {
        question: "Which state keeps its own shape?",
        answers: ["Solid", "Liquid", "Gas"],
        correct: 0
      }
    ];
    const moleculePairs = [
      { id: "solid", state: "Solid", behavior: "Vibrate in fixed positions" },
      { id: "liquid", state: "Liquid", behavior: "Slide past one another" },
      { id: "gas", state: "Gas", behavior: "Spread out and move freely" }
    ];
    const miniGameRoundCount = 5;
    const wardrobeItems = [
      { id: "mission-suit", name: "Mission suit", emoji: "🧥", slot: "outfit", rewardMission: 0 },
      { id: "safety-goggles", name: "Safety goggles", emoji: "🥽", slot: "accessory", rewardMission: 1 },
      { id: "lab-coat", name: "Lab coat", emoji: "🥼", slot: "outfit", rewardMission: 2 },
      { id: "jetpack", name: "Jetpack", emoji: "🚀", slot: "accessory", rewardMission: 3 },
      { id: "nebula-cape", name: "Nebula cape", emoji: "🦸", slot: "outfit", price: 30 },
      { id: "star-badge", name: "Star badge", emoji: "🌟", slot: "accessory", price: 20 }
    ];
    const colors = {
      solid: { particle: "#8278d8", glow: "rgba(130, 120, 216, 0.27)", pill: "#8278d8", caption: "Molecules vibrate in fixed positions" },
      liquid: { particle: "#36b9a9", glow: "rgba(54, 185, 169, 0.27)", pill: "#36b9a9", caption: "Molecules slide past one another" },
      gas: { particle: "#f181ad", glow: "rgba(241, 129, 173, 0.27)", pill: "#f181ad", caption: "Molecules spread out and zip around" }
    };
    const temperatureLimits = { min: -40, max: 140 };
    const saveKey = "moleculeMissionSave";
    const legacyAvatarChoices = ["🧑‍🔬", "🤖", "👽", "🐙"];
    const skinTones = {
      light: "#f5c9a5",
      warm: "#d99a70",
      deep: "#a76643",
      rich: "#70432f"
    };
    const hairStyles = ["curls", "waves", "short", "bun"];
    const outfitColors = {
      ocean: "#5b7fc5",
      coral: "#d87875",
      leaf: "#4e9a79"
    };
    const specialtyChoices = ["Matter Mapper", "Heat Tracker", "Mission Explorer"];
    const narratorProfile = {
      name: "Nova",
      skinTone: "warm",
      hairStyle: "bun",
      outfitColor: "leaf",
      equippedOutfit: "lab-coat",
      equippedAccessory: "safety-goggles"
    };
    const playerPosition = { x: 36, y: 13 };
    let narratorAnimationTimer = null;
    let threeLab = null;
    let threePreview = null;
    let previewDrag = null;
    let temperature = 22;
    let missionIndex = 0;
    let complete = false;
    let gameStarted = false;
    let currentCharacter = null;
    let scienceCredits = 0;
    let narratorVoiceGender = "woman";
    let audioContext = null;
    let musicTimer = null;
    let musicEnabled = false;
    let musicPreferenceSet = false;
    let melodyOscillator = null;
    let melodyGain = null;
    let bassOscillator = null;
    let bassGain = null;
    let particles = [];
    let selectedParticleIndex = 0;
    let scannedParticles = new Set();
    let narratorVoiceEnabled = false;
    let activeMiniGame = null;
    let quizRound = [];
    let quizQuestionIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;
    let quizFinished = false;
    let temperatureChallengeTargets = [];
    let temperatureChallengeRound = 0;
    let challengeTemperatureValue = 22;
    let selectedMatchCard = null;
    let pendingMismatchCards = [];
    let mismatchTimeout = null;
    let matchedPairCount = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    function readSavedGame() {
      try {
        const rawSave = window.localStorage.getItem(saveKey);
        if (!rawSave) return null;
        const save = JSON.parse(rawSave);
        if (!save || typeof save !== "object") {
          saveNote.textContent = "Your saved game could not be read. Start a new game to begin again.";
          return null;
        }
        const validCharacter =
          save.character &&
          typeof save.character === "object" &&
          typeof save.character.name === "string" &&
          save.character.name.trim() &&
          (save.character.avatar === "human" || legacyAvatarChoices.includes(save.character.avatar)) &&
          (!save.character.skinTone || Object.hasOwn(skinTones, save.character.skinTone)) &&
          (!save.character.hairStyle || hairStyles.includes(save.character.hairStyle)) &&
          (!save.character.outfitColor || Object.hasOwn(outfitColors, save.character.outfitColor)) &&
          specialtyChoices.includes(save.character.specialty);
        const validProgress =
          Number.isInteger(save.missionIndex) &&
          save.missionIndex >= 0 &&
          save.missionIndex <= missions.length &&
          Number.isFinite(save.temperature) &&
          save.temperature >= temperatureLimits.min &&
          save.temperature <= temperatureLimits.max &&
          (save.scienceCredits === undefined ||
            (Number.isInteger(save.scienceCredits) && save.scienceCredits >= 0));
        if (!validCharacter || !validProgress) {
          saveNote.textContent = "Your saved game could not be read. Start a new game to begin again.";
          return null;
        }
        const availableItemIds = new Set(wardrobeItems.map(item => item.id));
        const earnedThroughProgress = wardrobeItems
          .filter(item => item.price === undefined && (item.rewardMission === 0 || item.rewardMission <= save.missionIndex))
          .map(item => item.id);
        const unlockedItems = Array.isArray(save.character.unlockedItems)
          ? [...new Set(save.character.unlockedItems.filter(id => availableItemIds.has(id)))]
          : earnedThroughProgress;
        if (!unlockedItems.includes("mission-suit")) unlockedItems.unshift("mission-suit");
        const equippedOutfit = wardrobeItems.find(item =>
          item.id === save.character.equippedOutfit &&
          item.slot === "outfit" &&
          unlockedItems.includes(item.id)
        )?.id || "mission-suit";
        const equippedAccessory = wardrobeItems.find(item =>
          item.id === save.character.equippedAccessory &&
          item.slot === "accessory" &&
          unlockedItems.includes(item.id)
        )?.id || "";
        const validScans = Array.isArray(save.scannedParticles)
          ? save.scannedParticles.filter(index => Number.isInteger(index) && index >= 0 && index < 46)
          : [];
        return {
          character: {
            ...save.character,
            avatar: "human",
            skinTone: Object.hasOwn(skinTones, save.character.skinTone) ? save.character.skinTone : "light",
            hairStyle: hairStyles.includes(save.character.hairStyle) ? save.character.hairStyle : "curls",
            outfitColor: Object.hasOwn(outfitColors, save.character.outfitColor) ? save.character.outfitColor : "ocean",
            unlockedItems,
            equippedOutfit,
            equippedAccessory,
            narratorVoiceGender: save.character.narratorVoiceGender === "man" ? "man" : "woman"
          },
          missionIndex: save.missionIndex,
          temperature: save.temperature,
          scienceCredits: save.scienceCredits ?? save.missionIndex * 20,
          scannedParticles: validScans,
          playerPosition: save.playerPosition &&
            Number.isFinite(save.playerPosition.x) &&
            Number.isFinite(save.playerPosition.y) &&
            save.playerPosition.x >= 5 && save.playerPosition.x <= 95 &&
            save.playerPosition.y >= 9 && save.playerPosition.y <= 65
            ? save.playerPosition
            : null
        };
      } catch (error) {
        saveNote.textContent = "Saved game access failed. Check your browser storage settings.";
        return null;
      }
    }

    function updateLabAvatarFallbacks() {
      if (threeLab) return;
      const fallbackCharacter = currentCharacter || {
        skinTone: "light",
        hairStyle: "curls",
        outfitColor: "ocean",
        equippedOutfit: "mission-suit",
        equippedAccessory: ""
      };
      renderCharacterAvatar(worldPlayerAvatar, fallbackCharacter);
      renderCharacterAvatar(worldNarratorAvatar, narratorProfile);
      worldPlayerAvatar.classList.add("is-visible");
      worldNarratorAvatar.classList.add("is-visible");
    }

    function saveGame() {
      if (!currentCharacter) return;
      try {
        window.localStorage.setItem(saveKey, JSON.stringify({
          character: currentCharacter,
          missionIndex,
          temperature,
          scienceCredits,
          scannedParticles: [...scannedParticles],
          playerPosition
        }));
        saveNote.textContent = "Your mission progress is saved on this device.";
        continueButton.disabled = false;
      } catch (error) {
        saveNote.textContent = "Could not save your game. Check your browser storage settings.";
        if (gameStarted) feedback.textContent = saveNote.textContent;
      }
    }

    function createHumanAvatar(character, portrait = false) {
      const avatar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      avatar.setAttribute("viewBox", portrait ? "18 0 84 105" : "0 0 120 180");
      avatar.setAttribute("class", "human-avatar");
      avatar.setAttribute("aria-hidden", "true");
      avatar.style.setProperty("--skin-tone", skinTones[character.skinTone] || skinTones.light);
      avatar.style.setProperty("--outfit-color", outfitColors[character.outfitColor] || outfitColors.ocean);
      avatar.dataset.hair = hairStyles.includes(character.hairStyle) ? character.hairStyle : "curls";
      avatar.dataset.coat = character.equippedOutfit === "lab-coat" ? "true" : "false";
      avatar.dataset.goggles = character.equippedAccessory === "safety-goggles" ? "true" : "false";
      avatar.dataset.jetpack = character.equippedAccessory === "jetpack" ? "true" : "false";
      avatar.dataset.cape = character.equippedOutfit === "nebula-cape" ? "true" : "false";
      avatar.dataset.badge = character.equippedAccessory === "star-badge" ? "true" : "false";
      avatar.innerHTML = `
        <ellipse class="avatar-shadow" cx="60" cy="169" rx="31" ry="7"/>
        <path class="avatar-cape" d="m43 70 17-5 17 5 12 57H31z"/>
        <g class="avatar-jetpack"><rect x="18" y="81" width="19" height="43" rx="7"/><path d="M23 124h9l-3 13h-6z"/></g>
        <path class="avatar-pants" d="M43 111h34l-3 41H59l-3-25-5 25H36z"/>
        <path class="avatar-shoes" d="M37 149h16l-1 9H31q0-6 6-9m24 0h13l7 9H61z"/>
        <path class="avatar-neck" d="M52 59h16v21H52z"/>
        <path class="avatar-arm" d="M42 74 33 81l-8 29q-1 6 5 7 5 1 7-5l12-24zm36 0 9 7 8 29q1 6-5 7-5 1-7-5L71 88z"/>
        <path class="avatar-sleeve" d="m42 72 18-5 18 5 9 42-27 9-27-9z"/>
        <path class="avatar-shirt" d="M49 72h22l7 39-18 8-18-8z"/>
        <path class="avatar-coat" d="m42 72 10-5 8 11 8-11 10 5 9 42-19 7-8-28-8 28-19-7z"/>
        <path class="avatar-coat-detail" d="m52 68 8 10-5 11-8-15zm16 0-8 10 5 11 8-15z"/>
        <path class="avatar-pocket" d="M69 98h9v10h-9z"/>
        <path class="avatar-face" d="M60 17c-15 0-23 11-23 27 0 17 11 28 23 28s23-11 23-28C83 28 75 17 60 17z"/>
        <path class="avatar-ear" d="M38 39q-8-3-7 6 1 7 8 7m43-13q8-3 7 6-1 7-8 7"/>
        <path class="avatar-hair hair-shape hair-curls" d="M37 42q-8-20 7-29 2-10 14-8 10-7 19 2 13 4 10 21l-5 13-5-17q-17 7-35 2z"/>
        <path class="avatar-hair hair-shape hair-waves" d="M37 42q-5-20 10-28 14-12 27 0 13 6 7 28l-5-14q-10 5-18 0-8 8-17 3z"/>
        <path class="avatar-hair hair-shape hair-short" d="M37 41q-5-19 10-27 15-10 28 2 9 7 4 24l-6-13q-14 6-31 1z"/>
        <path class="avatar-hair hair-shape hair-bun" d="M37 41q-5-19 10-27 15-10 28 2 9 7 4 24l-6-13q-14 6-31 1z"/><circle class="avatar-hair hair-bun-knot" cx="78" cy="12" r="9"/>
        <path class="avatar-brow" d="M46 43q5-3 9 0m10 0q5-3 9 0"/>
        <ellipse class="avatar-eye" cx="51" cy="49" rx="2" ry="2.6"/><ellipse class="avatar-eye" cx="69" cy="49" rx="2" ry="2.6"/>
        <path class="avatar-smile" d="M53 58q7 6 14 0"/>
        <g class="avatar-goggles"><path d="M42 44h15v10H42q-4-5 0-10m21 0h15q4 5 0 10H63zM57 47h6"/></g>
        <path class="avatar-badge" d="m60 82 2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z"/>
      `;
      return avatar;
    }

    function renderCharacterAvatar(container, character, portrait = false) {
      container.replaceChildren(createHumanAvatar(character, portrait));
    }

    function updatePlayerBadge() {
      playerName.textContent = currentCharacter.name;
      renderCharacterAvatar(playerAvatar, currentCharacter, true);
      playerSpecialty.textContent = currentCharacter.specialty;
      renderCharacterAvatar(explorerAvatar, currentCharacter);
      explorerName.textContent = currentCharacter.name;
      explorerSpecialty.textContent = currentCharacter.specialty;
      worldPlayerName.textContent = currentCharacter.name;
      updateNarratorPresentation(currentCharacter.narratorVoiceGender);
      updateLabAvatarFallbacks();
      updateWorldPosition();
      updateInventory();
      update3dExplorer();
    }

    function updateInventory() {
      renderCharacterAvatar(explorerAvatar, currentCharacter);
      const unlocked = wardrobeItems.filter(item => currentCharacter.unlockedItems.includes(item.id));
      inventoryCount.textContent = `${unlocked.length} ${unlocked.length === 1 ? "item" : "items"} owned`;
      inventoryItems.replaceChildren();

      wardrobeItems.forEach(item => {
        const isUnlocked = currentCharacter.unlockedItems.includes(item.id);
        const isEquipped = item.slot === "outfit"
          ? currentCharacter.equippedOutfit === item.id
          : currentCharacter.equippedAccessory === item.id;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "inventory-item";
        button.disabled = !isUnlocked;
        button.dataset.itemId = item.id;
        button.setAttribute("aria-pressed", String(isEquipped));
        button.setAttribute("aria-label", isUnlocked
          ? `${item.name}, ${isEquipped ? "equipped" : "equip"}`
          : item.price
            ? `${item.name}, available in the character shop for ${item.price} credits`
            : `${item.name}, earned after mission ${item.rewardMission}`);
        const icon = document.createElement("span");
        icon.className = "inventory-item-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = isUnlocked ? item.emoji : "🔒";
        const label = document.createElement("span");
        label.className = "inventory-item-name";
        label.textContent = item.name;
        const status = document.createElement("small");
        status.textContent = isUnlocked
          ? isEquipped ? "Equipped" : item.slot
          : item.price ? `${item.price} credits` : `Mission ${item.rewardMission}`;
        button.append(icon, label, status);
        inventoryItems.append(button);
      });

      inventoryCopy.textContent = "Select an owned item to equip it. Complete missions to earn credits and unlock mission rewards; visit the character shop for more gear.";
      update3dExplorer();
      updateStore();
    }

    function updateStore() {
      storeBalance.textContent = String(scienceCredits);
      storeCharacterName.textContent = currentCharacter?.name || "Your explorer";
      storeCharacterCopy.textContent = currentCharacter
        ? "Your custom 3D explorer is ready for new gear."
        : continueButton.disabled
          ? "Create an explorer to personalize your shop preview."
          : "Continue your saved explorer to use earned credits here.";
      renderCharacterAvatar(storeCharacterPreview, currentCharacter || {
        skinTone: "light",
        hairStyle: "curls",
        outfitColor: "ocean",
        equippedOutfit: "mission-suit",
        equippedAccessory: ""
      }, true);
      document.querySelectorAll(".physical-product-avatar").forEach(preview => {
        renderCharacterAvatar(preview, currentCharacter || {
          skinTone: "light",
          hairStyle: "curls",
          outfitColor: "ocean",
          equippedOutfit: "mission-suit",
          equippedAccessory: ""
        }, true);
      });
      storeItems.replaceChildren();
      wardrobeItems.filter(item => item.price).forEach(item => {
        const owned = Boolean(currentCharacter?.unlockedItems.includes(item.id));
        const card = document.createElement("article");
        card.className = "store-item";
        const icon = document.createElement("span");
        icon.className = "store-item-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = item.emoji;
        const name = document.createElement("strong");
        name.textContent = item.name;
        const description = document.createElement("p");
        description.textContent = item.id === "nebula-cape"
          ? "A shimmering cape for your mission suit."
          : "A bright badge to celebrate your science missions.";
        const buyButton = document.createElement("button");
        buyButton.type = "button";
        buyButton.className = "control-button store-buy";
        buyButton.dataset.itemId = item.id;
        buyButton.disabled = !currentCharacter || owned || scienceCredits < item.price;
        buyButton.textContent = owned
          ? "Owned"
          : scienceCredits < item.price
            ? `Need ${item.price} credits`
            : `Buy · ${item.price} credits`;
        card.append(icon, name, description, buyButton);
        storeItems.append(card);
      });
    }

    function purchaseShopItem(itemId) {
      if (!currentCharacter) {
        storeStatus.textContent = "Create an explorer before buying in-game gear.";
        return;
      }
      const item = wardrobeItems.find(candidate => candidate.id === itemId && candidate.price);
      if (!item || currentCharacter.unlockedItems.includes(item.id)) return;
      if (scienceCredits < item.price) {
        storeStatus.textContent = `You need ${item.price - scienceCredits} more science credits to buy ${item.name}.`;
        return;
      }
      scienceCredits -= item.price;
      currentCharacter.unlockedItems.push(item.id);
      if (item.slot === "outfit") currentCharacter.equippedOutfit = item.id;
      else currentCharacter.equippedAccessory = item.id;
      updateInventory();
      saveGame();
      storeStatus.textContent = `${item.name} purchased and equipped.`;
      setNarration(`${item.name} purchased and equipped. Your explorer is ready for the next mission!`);
    }

    function updateNarratorPresentation(gender) {
      narratorVoiceGender = gender === "man" ? "man" : "woman";
      narratorVoiceChoice.value = narratorVoiceGender;
      narratorProfile.hairStyle = narratorVoiceGender === "man" ? "short" : "bun";
      if (currentCharacter) currentCharacter.narratorVoiceGender = narratorVoiceGender;
      renderCharacterAvatar(narratorCharacter, narratorProfile, true);
      renderCharacterAvatar(worldNarratorAvatar, narratorProfile);
      if (threeLab) update3dAppearance(threeLab.narrator, narratorProfile);
    }

    function create3dHuman(character) {
      const THREE = window.THREE;
      const group = new THREE.Group();
      const materials = {
        skin: new THREE.MeshStandardMaterial({ color: skinTones[character.skinTone] || skinTones.light, roughness: 0.72 }),
        hair: new THREE.MeshStandardMaterial({ color: "#38271f", roughness: 0.88 }),
        clothes: new THREE.MeshStandardMaterial({ color: outfitColors[character.outfitColor] || outfitColors.ocean, roughness: 0.76 }),
        pants: new THREE.MeshStandardMaterial({ color: "#34415b", roughness: 0.84 }),
        shoes: new THREE.MeshStandardMaterial({ color: "#403746", roughness: 0.8 }),
        sclera: new THREE.MeshStandardMaterial({ color: "#fffaf5", roughness: 0.42 }),
        cheeks: new THREE.MeshStandardMaterial({ color: "#e99b91", roughness: 0.76 }),
        coat: new THREE.MeshStandardMaterial({ color: "#fbfaf4", roughness: 0.74 }),
        coatDetail: new THREE.MeshStandardMaterial({ color: "#82bbae", roughness: 0.76 }),
        eyes: new THREE.MeshStandardMaterial({ color: "#332932", roughness: 0.48 }),
        glasses: new THREE.MeshStandardMaterial({ color: "#547083", metalness: 0.35, roughness: 0.32 }),
        lenses: new THREE.MeshStandardMaterial({ color: "#afe7e6", transparent: true, opacity: 0.62, roughness: 0.2 }),
        pack: new THREE.MeshStandardMaterial({ color: "#a4adbf", metalness: 0.2, roughness: 0.56 }),
        cape: new THREE.MeshStandardMaterial({ color: "#8063c9", roughness: 0.68, side: THREE.DoubleSide }),
        badge: new THREE.MeshStandardMaterial({ color: "#ffd166", metalness: 0.22, roughness: 0.42 })
      };
      const sphereGeometry = new THREE.SphereGeometry(1, 32, 24);
      const addSphere = (parent, material, x, y, z, sx, sy, sz) => {
        const mesh = new THREE.Mesh(sphereGeometry, material);
        mesh.position.set(x, y, z);
        mesh.scale.set(sx, sy, sz);
        mesh.castShadow = true;
        parent.add(mesh);
        return mesh;
      };
      const addCylinder = (parent, material, radiusTop, radiusBottom, length, x, y, z, radialSegments = 12) => {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, length, radialSegments), material);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        parent.add(mesh);
        return mesh;
      };
      const addLimb = (parent, material, start, end, radiusTop, radiusBottom) => {
        const delta = new THREE.Vector3(end[0] - start[0], end[1] - start[1], end[2] - start[2]);
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, delta.length(), 12), material);
        mesh.position.set((start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2);
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
        mesh.castShadow = true;
        parent.add(mesh);
        return mesh;
      };
      const pants = addCylinder(group, materials.pants, 0.29, 0.34, 0.39, 0, 0.54, 0, 14);
      const leftLeg = new THREE.Group();
      leftLeg.position.set(-0.15, 0.49, 0);
      group.add(leftLeg);
      addLimb(leftLeg, materials.pants, [0, 0, 0], [-0.02, -0.37, 0], 0.105, 0.13);
      addSphere(leftLeg, materials.shoes, -0.02, -0.405, 0.09, 0.16, 0.085, 0.23);
      const rightLeg = new THREE.Group();
      rightLeg.position.set(0.15, 0.49, 0);
      group.add(rightLeg);
      addLimb(rightLeg, materials.pants, [0, 0, 0], [0.02, -0.37, 0], 0.105, 0.13);
      addSphere(rightLeg, materials.shoes, 0.02, -0.405, 0.09, 0.16, 0.085, 0.23);
      addCylinder(group, materials.skin, 0.105, 0.12, 0.21, 0, 0.88, 0, 12);
      const torso = addCylinder(group, materials.clothes, 0.22, 0.31, 0.59, 0, 1.1, 0, 16);
      const leftArm = new THREE.Group();
      leftArm.position.set(-0.25, 1.31, 0);
      group.add(leftArm);
      addLimb(leftArm, materials.clothes, [0, 0, 0], [-0.13, -0.23, 0.015], 0.105, 0.09);
      addLimb(leftArm, materials.skin, [-0.13, -0.2, 0.015], [-0.16, -0.39, 0.015], 0.075, 0.065);
      addSphere(leftArm, materials.skin, -0.16, -0.405, 0.015, 0.08, 0.085, 0.08);
      const rightArm = new THREE.Group();
      rightArm.position.set(0.25, 1.31, 0);
      group.add(rightArm);
      addLimb(rightArm, materials.clothes, [0, 0, 0], [0.13, -0.23, 0.015], 0.105, 0.09);
      addLimb(rightArm, materials.skin, [0.13, -0.2, 0.015], [0.16, -0.39, 0.015], 0.075, 0.065);
      addSphere(rightArm, materials.skin, 0.16, -0.405, 0.015, 0.08, 0.085, 0.08);
      const head = new THREE.Group();
      head.position.set(0, 1.59, 0.025);
      group.add(head);
      addSphere(head, materials.skin, 0, 0, 0, 0.34, 0.4, 0.31);
      const hairCap = addSphere(head, materials.hair, 0, 0.22, -0.03, 0.36, 0.22, 0.31);
      const hairFringe = addSphere(head, materials.hair, 0, 0.09, 0.21, 0.3, 0.11, 0.15);
      hairFringe.rotation.z = character.hairStyle === "waves" ? -0.12 : 0.04;
      const hairBun = addSphere(head, materials.hair, 0.16, 0.38, -0.035, 0.13, 0.14, 0.13);
      const hairCurls = [-0.23, -0.13, 0, 0.13, 0.23].map(x =>
        addSphere(head, materials.hair, x, 0.26, 0.105, 0.11, 0.11, 0.12)
      );
      addSphere(head, materials.sclera, -0.115, 0.035, 0.292, 0.052, 0.066, 0.027);
      addSphere(head, materials.sclera, 0.115, 0.035, 0.292, 0.052, 0.066, 0.027);
      addSphere(head, materials.eyes, -0.115, 0.035, 0.322, 0.027, 0.041, 0.018);
      addSphere(head, materials.eyes, 0.115, 0.035, 0.322, 0.027, 0.041, 0.018);
      addSphere(head, materials.hair, -0.115, 0.095, 0.3, 0.065, 0.014, 0.022);
      addSphere(head, materials.hair, 0.115, 0.095, 0.3, 0.065, 0.014, 0.022);
      addSphere(head, materials.skin, 0, -0.055, 0.32, 0.043, 0.055, 0.045);
      const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.012, 6, 14, Math.PI), materials.eyes);
      mouth.position.set(0, -0.12, 0.305);
      mouth.rotation.z = Math.PI;
      head.add(mouth);
      addSphere(head, materials.skin, -0.33, -0.015, 0.035, 0.075, 0.105, 0.075);
      addSphere(head, materials.skin, 0.33, -0.015, 0.035, 0.075, 0.105, 0.075);
      addSphere(head, materials.cheeks, -0.19, -0.09, 0.258, 0.068, 0.035, 0.018);
      addSphere(head, materials.cheeks, 0.19, -0.09, 0.258, 0.068, 0.035, 0.018);

      const coatPieces = [];
      const coatFront = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.55, 0.045), materials.coat);
      coatFront.position.set(-0.095, 1.1, 0.245);
      coatFront.castShadow = true;
      group.add(coatFront);
      coatPieces.push(coatFront);
      const coatFrontRight = coatFront.clone();
      coatFrontRight.position.x = 0.095;
      group.add(coatFrontRight);
      coatPieces.push(coatFrontRight);
      const coatTail = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.17, 0.055), materials.coat);
      coatTail.position.set(0, 0.84, 0.08);
      group.add(coatTail);
      coatPieces.push(coatTail);
      const collar = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 4), materials.coatDetail);
      collar.position.set(-0.115, 1.35, 0.258);
      collar.rotation.z = -0.37;
      group.add(collar);
      const collarRight = collar.clone();
      collarRight.position.x = 0.115;
      collarRight.rotation.z = 0.37;
      group.add(collarRight);
      coatPieces.push(collar, collarRight);
      const goggles = new THREE.Group();
      const lensGeometry = new THREE.SphereGeometry(0.09, 16, 10);
      [-0.105, 0.105].forEach(x => {
        const lens = new THREE.Mesh(lensGeometry, materials.lenses);
        lens.position.set(x, 0.04, 0.32);
        lens.scale.set(1, 0.75, 0.2);
        goggles.add(lens);
        const frame = new THREE.Mesh(new THREE.TorusGeometry(0.083, 0.017, 8, 20), materials.glasses);
        frame.position.set(x, 0.04, 0.335);
        goggles.add(frame);
      });
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.022, 0.02), materials.glasses);
      bridge.position.set(0, 0.04, 0.335);
      goggles.add(bridge);
      head.add(goggles);
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.37, 0.47, 0.17), materials.pack);
      pack.position.set(0, 1.08, -0.27);
      pack.castShadow = true;
      group.add(pack);
      const cape = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.68, 0.045), materials.cape);
      cape.position.set(0, 1.02, -0.23);
      cape.castShadow = true;
      group.add(cape);
      const badge = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), materials.badge);
      badge.position.set(0, 1.15, 0.31);
      badge.castShadow = true;
      group.add(badge);

      const shadow = new THREE.Mesh(
        new THREE.CircleGeometry(0.39, 24),
        new THREE.MeshBasicMaterial({ color: "#5f536b", transparent: true, opacity: 0.16 })
      );
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = 0.015;
      group.add(shadow);
      group.scale.setScalar(1.55);
      group.userData.characterParts = {
        materials, pants, torso, head, leftArm, rightArm, leftLeg, rightLeg,
        coatPieces, goggles, pack, cape, badge, hairCap, hairFringe, hairBun, hairCurls
      };
      update3dAppearance(group, character);
      return group;
    }

    function update3dAppearance(group, character) {
      const parts = group.userData.characterParts;
      if (!parts) return;
      parts.materials.skin.color.set(skinTones[character.skinTone] || skinTones.light);
      parts.materials.clothes.color.set(outfitColors[character.outfitColor] || outfitColors.ocean);
      parts.materials.hair.color.set(character.hairColor || "#38271f");
      parts.pants.material.color.set("#34415b");
      const hairStyle = hairStyles.includes(character.hairStyle) ? character.hairStyle : "curls";
      parts.hairCap.scale.y = hairStyle === "short" ? 0.13 : 0.21;
      parts.hairFringe.scale.y = hairStyle === "short" ? 0.06 : 0.105;
      parts.hairFringe.rotation.z = hairStyle === "waves" ? -0.12 : 0.04;
      parts.hairBun.visible = hairStyle === "bun";
      parts.hairCurls.forEach(curl => { curl.visible = hairStyle === "curls"; });
      parts.coatPieces.forEach(piece => { piece.visible = character.equippedOutfit === "lab-coat"; });
      parts.goggles.visible = character.equippedAccessory === "safety-goggles";
      parts.pack.visible = character.equippedAccessory === "jetpack";
      parts.cape.visible = character.equippedOutfit === "nebula-cape";
      parts.badge.visible = character.equippedAccessory === "star-badge";
    }

    function update3dExplorer() {
      if (!threeLab || !currentCharacter) return;
      update3dAppearance(threeLab.player, currentCharacter);
    }

    function setup3dLab() {
      if (!window.THREE) {
        lab3dCanvas.classList.add("hidden");
        lab3dStatus.classList.remove("hidden");
        lab3dStatus.textContent = "3D characters need an internet connection to load the 3D engine. Please reload when online.";
        updateLabAvatarFallbacks();
        return;
      }
      const THREE = window.THREE;
      try {
        const renderer = new THREE.WebGLRenderer({ canvas: lab3dCanvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 80);
        camera.position.set(0, 3, 14);
        camera.lookAt(0, 3, 0);
        scene.add(new THREE.HemisphereLight("#ffffff", "#b8a7bd", 2.1));
        const keyLight = new THREE.DirectionalLight("#fff5e7", 2.5);
        keyLight.position.set(-4, 8, 7);
        keyLight.castShadow = true;
        scene.add(keyLight);
        const fillLight = new THREE.DirectionalLight("#c8d9ff", 0.9);
        fillLight.position.set(4, 4, 3);
        scene.add(fillLight);
        const floor = new THREE.Mesh(
          new THREE.PlaneGeometry(60, 60),
          new THREE.MeshStandardMaterial({ color: "#f1e8df", roughness: 0.94 })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.02;
        floor.position.z = -0.3;
        floor.receiveShadow = true;
        scene.add(floor);
        const narrator = create3dHuman(narratorProfile);
        scene.add(narrator);
        const player = create3dHuman({
          skinTone: "light",
          hairStyle: "curls",
          outfitColor: "ocean",
          equippedOutfit: "mission-suit",
          equippedAccessory: ""
        });
        scene.add(player);
        threeLab = {
          THREE, renderer, scene, camera, narrator, player, lastFrame: 0, movingUntil: 0,
          playerWaveUntil: 0, narratorWaveUntil: 0
        };
        worldPlayerAvatar.classList.remove("is-visible");
        worldNarratorAvatar.classList.remove("is-visible");
        resize3dLab();
        updateWorldPosition();
        if (currentCharacter) update3dExplorer();
      } catch (error) {
        threeLab = null;
        lab3dCanvas.classList.add("hidden");
        lab3dStatus.classList.remove("hidden");
        lab3dStatus.textContent = `3D characters could not start: ${error.message}`;
        updateLabAvatarFallbacks();
      }
    }

    function setup3dPreview() {
      if (!window.THREE) return;
      try {
        const THREE = window.THREE;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.setAttribute("aria-hidden", "true");
        creatorPreviewAvatar.replaceChildren(renderer.domElement);
        const scene = new THREE.Scene();
        scene.add(new THREE.HemisphereLight("#ffffff", "#b8a7bd", 2.2));
        const light = new THREE.DirectionalLight("#fff5e7", 2.7);
        light.position.set(-3, 6, 8);
        scene.add(light);
        const camera = new THREE.OrthographicCamera(-1.5, 1.5, 2.3, -2.3, 0.1, 30);
        camera.position.set(0, 1.1, 8);
        camera.lookAt(0, 1.1, 0);
        const avatar = create3dHuman({
          skinTone: "light",
          hairStyle: "curls",
          outfitColor: "ocean",
          equippedOutfit: "mission-suit",
          equippedAccessory: ""
        });
        scene.add(avatar);
        threePreview = { renderer, scene, camera, avatar, lastFrame: 0, userRotation: 0 };
        resize3dPreview();
      } catch (error) {
        creatorPreviewAvatar.textContent = `3D preview unavailable: ${error.message}`;
        creatorPreviewAvatar.setAttribute("role", "status");
      }
    }

    function resize3dPreview() {
      if (!threePreview) return;
      const bounds = creatorPreviewAvatar.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      threePreview.renderer.setSize(bounds.width, bounds.height, false);
      threePreview.renderer.render(threePreview.scene, threePreview.camera);
    }

    function render3dPreview(time) {
      if (!threePreview || characterCreator.classList.contains("hidden") || time - threePreview.lastFrame < 32) return;
      threePreview.lastFrame = time;
      threePreview.avatar.rotation.y = threePreview.userRotation + Math.sin(time * 0.0007) * 0.22;
      threePreview.avatar.position.y = Math.sin(time * 0.002) * 0.025;
      threePreview.renderer.render(threePreview.scene, threePreview.camera);
    }

    function resize3dLab() {
      if (!threeLab) return;
      const bounds = labWorld.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      threeLab.renderer.setSize(bounds.width, bounds.height, false);
      const frustumHeight = 6;
      const halfWidth = frustumHeight * bounds.width / bounds.height / 2;
      threeLab.camera.left = -halfWidth;
      threeLab.camera.right = halfWidth;
      threeLab.camera.top = frustumHeight / 2;
      threeLab.camera.bottom = -frustumHeight / 2;
      threeLab.camera.updateProjectionMatrix();
      updateWorldPosition();
    }

    function render3dLab(time) {
      if (!gameStarted || !threeLab || time - threeLab.lastFrame < 32) return;
      const { renderer, scene, camera, player, narrator } = threeLab;
      threeLab.lastFrame = time;
      const bounds = labWorld.getBoundingClientRect();
      const frustumHeight = 6;
      const frustumWidth = frustumHeight * bounds.width / Math.max(bounds.height, 1);
      player.position.set(
        ((playerPosition.x / 100) - 0.5) * frustumWidth,
        frustumHeight * ((playerPosition.y || 12) / 100),
        0.1
      );
      narrator.position.set(
        (0.78 - 0.5) * frustumWidth,
        frustumHeight * 0.12,
        0
      );
      const moving = time < threeLab.movingUntil;
      const walk = moving ? Math.sin(time * 0.018) * 0.62 : 0;
      const parts = player.userData.characterParts;
      parts.leftArm.rotation.z = walk;
      const playerWave = time < threeLab.playerWaveUntil;
      parts.rightArm.rotation.z = playerWave
        ? 1.55 + Math.sin(time * 0.025) * 0.36
        : -walk;
      parts.leftLeg.rotation.z = -walk * 0.55;
      parts.rightLeg.rotation.z = walk * 0.55;
      const playerY = frustumHeight * ((playerPosition.y || 12) / 100);
      player.position.y = playerY + (moving ? Math.abs(Math.sin(time * 0.018)) * 0.08 : Math.sin(time * 0.0022) * 0.035);
      parts.head.rotation.z = Math.sin(time * 0.0015) * 0.025;
      const narratorParts = narrator.userData.characterParts;
      const narratorWave = time < threeLab.narratorWaveUntil;
      narratorParts.leftArm.rotation.z = narratorWave
        ? 1.5 + Math.sin(time * 0.022) * 0.32
        : Math.sin(time * 0.0018) * 0.08;
      narratorParts.rightArm.rotation.z = -0.12 + Math.sin(time * 0.0018) * 0.07;
      narratorParts.head.rotation.z = Math.sin(time * 0.0016) * 0.035;
      narrator.position.y = frustumHeight * 0.12 + Math.sin(time * 0.002) * 0.04;
      renderer.render(scene, camera);
    }

    function updateWorldPosition() {
      worldPlayer.style.left = `${playerPosition.x}%`;
      worldPlayer.style.bottom = `${playerPosition.y}%`;
      worldPlayer.style.zIndex = String(100 - Math.round(playerPosition.y));
      worldNarrator.style.zIndex = "88";
      labCoordinate.textContent = `Lab position ${Math.round(playerPosition.x)}%, ${Math.round(playerPosition.y)}%`;
      updateInteractionHint();
    }

    function nearbyInteraction() {
      const targets = [
        { id: "narrator", label: "Nova", x: 78, y: 12 },
        { id: "station", label: "the molecule scanner", x: 19, y: 25 }
      ];
      return targets
        .map(target => ({
          ...target,
          distance: Math.hypot(playerPosition.x - target.x, (playerPosition.y - target.y) * 1.25)
        }))
        .filter(target => target.distance <= 22)
        .sort((a, b) => a.distance - b.distance)[0] || null;
    }

    function updateInteractionHint() {
      const nearby = nearbyInteraction();
      labInteractionHint.textContent = nearby
        ? `Press E to ${nearby.id === "narrator" ? "talk to Nova" : "scan a molecule"}.`
        : "Walk close to Nova or the scanner, then press E to interact.";
    }

    function movePlayer(direction) {
      if (!gameStarted) return;
      const step = 3.5;
      if (direction === "up") playerPosition.y = Math.min(65, playerPosition.y + step);
      if (direction === "down") playerPosition.y = Math.max(9, playerPosition.y - step);
      if (direction === "left") {
        playerPosition.x = Math.max(5, playerPosition.x - step);
        if (threeLab) threeLab.player.rotation.y = -Math.PI / 2;
      }
      if (direction === "right") {
        playerPosition.x = Math.min(95, playerPosition.x + step);
        if (threeLab) threeLab.player.rotation.y = Math.PI / 2;
      }
      if (direction === "up" && threeLab) threeLab.player.rotation.y = 0;
      if (direction === "down" && threeLab) threeLab.player.rotation.y = Math.PI;
      if (threeLab) threeLab.movingUntil = performance.now() + 180;
      updateWorldPosition();
      saveGame();
    }

    function interactWithNearby() {
      const nearby = nearbyInteraction();
      if (!nearby) {
        labInteractionHint.textContent = "Move closer to Nova or the molecule scanner to interact.";
        return;
      }
      if (nearby.id === "station") {
        if (currentCharacter.specialty === "Heat Tracker") {
          const message = `Scanner reading: ${temperature}°C, ${getState()} water. ${missionCopy.textContent}`;
          feedback.textContent = message;
          setNarration(message);
          labInteractionHint.textContent = "Temperature and state checked by the scanner.";
          return;
        }
        const goal = getScanGoal();
        const nextUnscanned = Array.from(
          { length: particles.length },
          (_, offset) => (selectedParticleIndex + 1 + offset) % particles.length
        ).find(index => !scannedParticles.has(index));
        if (goal > 0 && scannedParticles.size >= goal) {
          feedback.textContent = "Your molecule scan goal is complete. Adjust the sample and lock in this state!";
          labInteractionHint.textContent = "Scan goal complete. Lock in your sample when ready.";
          return;
        }
        highlightParticle(nextUnscanned ?? selectedParticleIndex);
        labInteractionHint.textContent = "Molecule scanned! Keep exploring or adjust the sample temperature.";
        return;
      }
      const mission = missions[missionIndex];
      const guideMessage = mission
        ? `Hi, ${currentCharacter.name}! ${mission.narration} Use the arrow keys to explore, then find the scanner to map molecules.`
        : `Wonderful work, ${currentCharacter.name}! You explored every state of matter. Your lab clothes are yours to keep.`;
      if (threeLab) threeLab.playerWaveUntil = performance.now() + 1800;
      setNarration(guideMessage);
      labInteractionHint.textContent = `Nova: “${mission ? "Let's explore the sample together!" : "You did it, scientist!"}”`;
    }

    function updateCreatorPreview() {
      creatorPreviewHint.textContent = threePreview
        ? "Preview your 3D human explorer · drag to rotate"
        : "Illustrated preview · 3D needs WebGL and an internet connection";
      creatorPreviewAvatar.setAttribute("aria-label", threePreview
        ? "3D character preview. Drag to rotate, or use the left and right arrow keys."
        : "Illustrated character preview. 3D rotation needs WebGL and an internet connection.");
      const selected = name => characterForm.querySelector(`input[name="${name}"]:checked`)?.value;
      const character = {
        skinTone: selected("skinTone"),
        hairStyle: selected("hairStyle"),
        outfitColor: selected("outfitColor"),
        equippedOutfit: "mission-suit"
      };
      if (threePreview) {
        update3dAppearance(threePreview.avatar, character);
        resize3dPreview();
      } else {
        renderCharacterAvatar(creatorPreviewAvatar, character);
      }
    }

    function showGame() {
      startMenu.classList.add("hidden");
      characterCreator.classList.add("hidden");
      miniGameScreen.classList.add("hidden");
      gameScreen.classList.remove("hidden");
      resizeCanvas();
      resize3dLab();
      labWorld.focus();
    }

    function shuffled(items) {
      const result = [...items];
      for (let index = result.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
      }
      return result;
    }

    function showMiniGame(mode) {
      activeMiniGame = mode;
      miniGameScreen.querySelector(".mini-game-panel").dataset.game = mode;
      startMenu.classList.add("hidden");
      characterCreator.classList.add("hidden");
      gameScreen.classList.add("hidden");
      miniGameScreen.classList.remove("hidden");
      if (mode === "quiz") {
        miniGameTitle.textContent = "Rapid-Fire Matter Quiz";
        quizGame.classList.remove("hidden");
        temperatureGame.classList.add("hidden");
        matchingGame.classList.add("hidden");
        startQuiz();
        quizOptions.querySelector("button")?.focus();
      } else if (mode === "temperature") {
        miniGameTitle.textContent = "Thermal Target Sprint";
        quizGame.classList.add("hidden");
        temperatureGame.classList.remove("hidden");
        matchingGame.classList.add("hidden");
        startTemperatureChallenge();
        challengeCoolButton.focus();
      } else {
        miniGameTitle.textContent = "Molecule Memory Match";
        quizGame.classList.add("hidden");
        temperatureGame.classList.add("hidden");
        matchingGame.classList.remove("hidden");
        startMoleculeMatch();
        matchingCards.querySelector("button")?.focus();
      }
    }

    function startQuiz() {
      quizRound = shuffled(quizQuestions).slice(0, miniGameRoundCount);
      quizQuestionIndex = 0;
      quizScore = 0;
      quizFinished = false;
      renderQuizQuestion();
    }

    function renderQuizQuestion() {
      quizAnswered = false;
      const currentQuestion = quizRound[quizQuestionIndex];
      quizProgress.textContent = `Question ${quizQuestionIndex + 1} of ${quizRound.length} · Score ${quizScore}`;
      quizPrompt.textContent = currentQuestion.question;
      quizFeedback.textContent = "Choose an answer.";
      quizOptions.replaceChildren();
      quizOptions.classList.remove("hidden");
      currentQuestion.answers.forEach((answer, answerIndex) => {
        const button = document.createElement("button");
        button.className = "control-button quiz-option";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", () => answerQuizQuestion(button, answerIndex));
        quizOptions.append(button);
      });
      quizNextButton.textContent = "Next question";
      quizNextButton.disabled = true;
      quizNextButton.classList.remove("hidden");
    }

    function answerQuizQuestion(selectedButton, answerIndex) {
      if (quizAnswered) return;
      quizAnswered = true;
      const currentQuestion = quizRound[quizQuestionIndex];
      const isCorrect = answerIndex === currentQuestion.correct;
      if (isCorrect) quizScore++;
      quizOptions.querySelectorAll("button").forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.correct) button.classList.add("is-correct");
      });
      if (!isCorrect) selectedButton.classList.add("is-incorrect");
      quizFeedback.textContent = isCorrect
        ? "That’s right! Great science thinking."
        : `Not quite. The correct answer is “${currentQuestion.answers[currentQuestion.correct]}.”`;
      quizProgress.textContent = `Question ${quizQuestionIndex + 1} of ${quizRound.length} · Score ${quizScore}`;
      quizNextButton.textContent = quizQuestionIndex === quizRound.length - 1 ? "See results" : "Next question";
      quizNextButton.disabled = false;
    }

    function advanceQuiz() {
      if (quizFinished) {
        startQuiz();
        quizOptions.querySelector("button")?.focus();
        return;
      }
      if (!quizAnswered) return;
      if (quizQuestionIndex === quizRound.length - 1) {
        quizFinished = true;
        quizProgress.textContent = "Quiz complete!";
        quizPrompt.textContent = `You scored ${quizScore} out of ${quizRound.length}.`;
        quizFeedback.textContent = quizScore === quizRound.length
          ? "Perfect score! You’re a matter expert."
          : "Nice work! Play again to try a different set of questions.";
        quizOptions.replaceChildren();
        quizOptions.classList.add("hidden");
        quizNextButton.textContent = "Play again";
        return;
      }
      quizQuestionIndex++;
      renderQuizQuestion();
    }

    function startTemperatureChallenge() {
      const states = ["solid", "liquid", "gas"];
      temperatureChallengeTargets = [];
      for (let round = 0; round < miniGameRoundCount; round++) {
        const availableStates = states.filter(state => state !== temperatureChallengeTargets.at(-1));
        temperatureChallengeTargets.push(availableStates[Math.floor(Math.random() * availableStates.length)]);
      }
      temperatureChallengeRound = 0;
      challengeTemperatureValue = 22;
      renderTemperatureChallenge();
    }

    function renderTemperatureChallenge() {
      const target = temperatureChallengeTargets[temperatureChallengeRound];
      checkTemperatureButton.dataset.passed = "false";
      temperatureChallengePrompt.textContent = `Heat or cool the water until it becomes ${target} water.`;
      temperatureChallengeProgress.textContent = `Round ${temperatureChallengeRound + 1} of ${temperatureChallengeTargets.length}`;
      temperatureChallengeFeedback.textContent = "Use the buttons to change the temperature, then check your answer.";
      checkTemperatureButton.textContent = "Check the state";
      checkTemperatureButton.disabled = false;
      challengeCoolButton.disabled = false;
      challengeHeatButton.disabled = false;
      updateChallengeTemperature();
    }

    function updateChallengeTemperature() {
      const state = getState(challengeTemperatureValue);
      challengeTemperature.textContent = String(challengeTemperatureValue);
      challengeState.textContent = `${state[0].toUpperCase()}${state.slice(1)} water`;
      challengeCoolButton.disabled = challengeTemperatureValue <= temperatureLimits.min;
      challengeHeatButton.disabled = challengeTemperatureValue >= temperatureLimits.max;
    }

    function checkTemperatureChallenge() {
      if (checkTemperatureButton.dataset.passed === "finished") {
        startTemperatureChallenge();
        challengeCoolButton.focus();
        return;
      }
      if (checkTemperatureButton.dataset.passed === "true") {
        if (temperatureChallengeRound === temperatureChallengeTargets.length - 1) {
          temperatureChallengeProgress.textContent = "Challenge complete!";
          temperatureChallengePrompt.textContent = "You mastered all three states of matter!";
          temperatureChallengeFeedback.textContent = "Great work! Play again to get a new sequence of targets.";
          checkTemperatureButton.dataset.passed = "finished";
          checkTemperatureButton.textContent = "Play again";
          return;
        }
        temperatureChallengeRound++;
        challengeTemperatureValue = 22;
        checkTemperatureButton.dataset.passed = "false";
        renderTemperatureChallenge();
        return;
      }

      const target = temperatureChallengeTargets[temperatureChallengeRound];
      const currentState = getState(challengeTemperatureValue);
      if (currentState !== target) {
        const hint = target === "solid"
          ? "Cool the water to 0°C or below."
          : target === "gas"
            ? "Heat the water to 100°C or above."
            : "Keep the water above 0°C and below 100°C.";
        temperatureChallengeFeedback.textContent = `Not yet—this is ${currentState} water. ${hint}`;
        return;
      }

      checkTemperatureButton.dataset.passed = "true";
      checkTemperatureButton.textContent = temperatureChallengeRound === temperatureChallengeTargets.length - 1
        ? "Finish challenge"
        : "Next target";
      temperatureChallengeFeedback.textContent = `Correct! You reached ${target} water at ${challengeTemperatureValue}°C.`;
      challengeCoolButton.disabled = true;
      challengeHeatButton.disabled = true;
    }

    function startMoleculeMatch() {
      if (mismatchTimeout !== null) {
        window.clearTimeout(mismatchTimeout);
        mismatchTimeout = null;
      }
      selectedMatchCard = null;
      pendingMismatchCards = [];
      matchedPairCount = 0;
      matchingProgress.textContent = "0 of 3 pairs matched";
      matchingFeedback.textContent = "Choose two cards to find a matching pair.";
      matchingCards.replaceChildren();

      const cards = shuffled(moleculePairs.flatMap(pair => [
        { pairId: pair.id, type: "state", text: pair.state },
        { pairId: pair.id, type: "behavior", text: pair.behavior }
      ]));
      cards.forEach((card, index) => {
        const button = document.createElement("button");
        button.className = "matching-card";
        button.type = "button";
        button.textContent = "?";
        button.dataset.pairId = card.pairId;
        button.setAttribute("aria-label", `Card ${index + 1}, hidden`);
        button.addEventListener("click", () => revealMatchCard(button, card));
        matchingCards.append(button);
      });
    }

    function revealMatchCard(button, card) {
      if (button.disabled || selectedMatchCard === button || pendingMismatchCards.length) return;

      button.classList.add("is-revealed");
      button.textContent = card.text;
      button.setAttribute("aria-label", `${card.type}: ${card.text}`);
      if (!selectedMatchCard) {
        selectedMatchCard = button;
        matchingFeedback.textContent = "Now choose its matching card.";
        return;
      }

      const firstCard = selectedMatchCard;
      if (firstCard.dataset.pairId === card.pairId) {
        firstCard.classList.add("is-matched");
        button.classList.add("is-matched");
        firstCard.disabled = true;
        button.disabled = true;
        matchedPairCount++;
        matchingProgress.textContent = `${matchedPairCount} of 3 pairs matched`;
        matchingFeedback.textContent = matchedPairCount === moleculePairs.length
          ? "All matched! You know how molecules behave in every state."
          : "That’s a match! Find another pair.";
      } else {
        pendingMismatchCards = [
          { button: firstCard },
          { button }
        ];
        matchingFeedback.textContent = "Not a pair yet. Choose another card to try again.";
        mismatchTimeout = window.setTimeout(() => {
          pendingMismatchCards.forEach(mismatchedCard => {
            mismatchedCard.button.classList.remove("is-revealed");
            mismatchedCard.button.textContent = "?";
            mismatchedCard.button.setAttribute("aria-label", "Hidden card");
          });
          pendingMismatchCards = [];
          mismatchTimeout = null;
          matchingFeedback.textContent = "Choose two cards to find a matching pair.";
        }, 900);
      }
      selectedMatchCard = null;
    }

    function returnToGameChoices() {
      const previousMiniGame = activeMiniGame;
      activeMiniGame = null;
      miniGameScreen.classList.add("hidden");
      startMenu.classList.remove("hidden");
      continueButton.disabled = !readSavedGame();
      const modeButtons = {
        quiz: quizModeButton,
        temperature: temperatureModeButton,
        matching: matchingModeButton
      };
      modeButtons[previousMiniGame]?.focus();
    }

    function beginGame(character) {
      currentCharacter = {
        ...character,
        avatar: "human",
        unlockedItems: ["mission-suit"],
        equippedOutfit: "mission-suit",
        equippedAccessory: "",
        narratorVoiceGender: character.narratorVoiceGender === "man" ? "man" : "woman"
      };
      scienceCredits = 0;
      playerPosition.x = 36;
      playerPosition.y = 13;
      missionIndex = 0;
      temperature = 22;
      scannedParticles = new Set();
      complete = false;
      gameStarted = true;
      coolButton.disabled = false;
      heatButton.disabled = false;
      restartButton.classList.add("hidden");
      updatePlayerBadge();
      updateDisplay();
      startMission();
      saveGame();
      showGame();
      if (!musicPreferenceSet) setMusicEnabled(true);
    }

    function continueGame(save) {
      currentCharacter = save.character;
      missionIndex = save.missionIndex;
      temperature = save.temperature;
      scienceCredits = save.scienceCredits;
      narratorVoiceGender = currentCharacter.narratorVoiceGender;
      playerPosition.x = save.playerPosition?.x ?? 36;
      playerPosition.y = save.playerPosition?.y ?? 13;
      scannedParticles = new Set(save.scannedParticles);
      complete = missionIndex === missions.length;
      gameStarted = true;
      coolButton.disabled = complete;
      heatButton.disabled = complete;
      updatePlayerBadge();
      updateDisplay();
      showGame();
      if (complete) showCompletion();
      else startMission(false);
      if (!musicPreferenceSet) setMusicEnabled(true);
    }

    function setMusicEnabled(enabled) {
      if (enabled) {
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (!AudioContextClass) throw new Error("Web Audio is not supported in this browser.");
          if (!audioContext) {
            audioContext = new AudioContextClass();
            melodyOscillator = audioContext.createOscillator();
            melodyGain = audioContext.createGain();
            bassOscillator = audioContext.createOscillator();
            bassGain = audioContext.createGain();
            melodyOscillator.type = "sine";
            bassOscillator.type = "sine";
            melodyGain.gain.value = 0;
            bassGain.gain.value = 0.008;
            melodyOscillator.connect(melodyGain);
            melodyGain.connect(audioContext.destination);
            bassOscillator.connect(bassGain);
            bassGain.connect(audioContext.destination);
            melodyOscillator.start();
            bassOscillator.start();
          }
          audioContext.resume().then(() => {
            if (!musicEnabled || musicTimer !== null) return;
            const notes = [392, 440, 523.25, 659.25, 587.33, 523.25, 440, 493.88];
            let noteIndex = 0;
            const playNote = () => {
              const now = audioContext.currentTime;
              melodyOscillator.frequency.setTargetAtTime(notes[noteIndex % notes.length], now, 0.12);
              melodyGain.gain.setTargetAtTime(0.018, now, 0.1);
              if (noteIndex % 4 === 0) {
                bassOscillator.frequency.setTargetAtTime([130.81, 146.83, 164.81, 146.83][Math.floor(noteIndex / 4) % 4], now, 0.2);
              }
              noteIndex++;
            };
            playNote();
            musicTimer = window.setInterval(playNote, 700);
          }).catch(() => {
            musicEnabled = false;
            musicToggle.textContent = "♫ Music unavailable";
            musicToggle.setAttribute("aria-pressed", "false");
            musicStatus.textContent = "Background music could not start. Your browser blocked audio playback.";
          });
          musicEnabled = true;
          musicToggle.textContent = "♫ Music: On";
          musicToggle.setAttribute("aria-pressed", "true");
          musicStatus.textContent = "Background music on.";
        } catch (error) {
          musicEnabled = false;
          musicToggle.textContent = "♫ Music unavailable";
          musicToggle.setAttribute("aria-pressed", "false");
          musicStatus.textContent = error.message;
        }
        return;
      }

      musicEnabled = false;
      if (musicTimer !== null) {
        window.clearInterval(musicTimer);
        musicTimer = null;
      }
      if (audioContext) audioContext.suspend();
      musicToggle.textContent = "♫ Music: Off";
      musicToggle.setAttribute("aria-pressed", "false");
      musicStatus.textContent = "Background music off.";
    }

    function getState(value = temperature) {
      if (value <= 0) return "solid";
      if (value >= 100) return "gas";
      return "liquid";
    }

    function makeParticles() {
      const total = 46;
      particles = Array.from({ length: total }, (_, index) => {
        const column = index % 9;
        const row = Math.floor(index / 9);
        return {
          x: 0.13 + (column / 8) * 0.74 + (Math.random() - 0.5) * 0.025,
          y: 0.24 + (row / 5) * 0.52 + (Math.random() - 0.5) * 0.025,
          homeX: 0.13 + (column / 8) * 0.74,
          homeY: 0.24 + (row / 5) * 0.52,
          vx: (Math.random() - 0.5) * 0.002,
          vy: (Math.random() - 0.5) * 0.002,
          phase: Math.random() * Math.PI * 2,
          radius: 3.5 + Math.random() * 1.4,
          drawX: 0,
          drawY: 0,
          pulseUntil: 0
        };
      });
    }

    function resizeCanvas() {
      const bounds = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function drawMolecules(time) {
      ctx.clearRect(0, 0, width, height);
      const state = getState();
      const palette = colors[state];
      const pad = 22;
      const left = pad;
      const right = width - pad;
      const top = 18;
      const bottom = height - 18;

      const background = ctx.createLinearGradient(0, top, 0, bottom);
      background.addColorStop(0, "rgba(255, 255, 255, 0.18)");
      background.addColorStop(1, "rgba(219, 224, 255, 0.48)");
      ctx.fillStyle = background;
      ctx.fillRect(left, top, right - left, bottom - top);

      ctx.strokeStyle = "rgba(133, 119, 178, 0.32)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(left, bottom);
      ctx.lineTo(right, bottom);
      ctx.lineTo(right, top);
      ctx.stroke();

      for (let i = 0; i < 6; i++) {
        const x = left + 18 + i * ((right - left - 36) / 5);
        ctx.fillStyle = "rgba(133, 119, 178, 0.16)";
        ctx.fillRect(x, bottom + 3, 2, 7);
      }

      const travelWidth = right - left - 22;
      const travelHeight = bottom - top - 22;
      particles.forEach((particle, index) => {
        let x;
        let y;
        if (state === "solid") {
          x = left + 11 + particle.homeX * travelWidth + Math.sin(time * 0.0024 + particle.phase) * 2.4;
          y = top + 11 + particle.homeY * travelHeight + Math.cos(time * 0.0022 + particle.phase) * 2.4;
        } else if (state === "liquid") {
          particle.vy += 0.000012;
          particle.vx += Math.sin(time * 0.0008 + particle.phase) * 0.000005;
          particle.vx *= 0.998;
          particle.vy *= 0.996;
          particle.x += particle.vx;
          particle.y += particle.vy;
          const minX = 0.06;
          const maxX = 0.94;
          const minY = 0.48 + (index % 4) * 0.015;
          const maxY = 0.91;
          if (particle.x < minX || particle.x > maxX) particle.vx *= -0.8;
          if (particle.y < minY || particle.y > maxY) particle.vy *= -0.72;
          particle.x = Math.max(minX, Math.min(maxX, particle.x));
          particle.y = Math.max(minY, Math.min(maxY, particle.y));
          x = left + 11 + particle.x * travelWidth;
          y = top + 11 + particle.y * travelHeight;
        } else {
          particle.vx += Math.sin(time * 0.001 + particle.phase) * 0.000025;
          particle.vy += Math.cos(time * 0.0012 + particle.phase) * 0.000025;
          particle.vx *= 0.999;
          particle.vy *= 0.999;
          particle.x += particle.vx * 2.3;
          particle.y += particle.vy * 2.3;
          if (particle.x < 0.055 || particle.x > 0.945) particle.vx *= -1;
          if (particle.y < 0.055 || particle.y > 0.945) particle.vy *= -1;
          particle.x = Math.max(0.055, Math.min(0.945, particle.x));
          particle.y = Math.max(0.055, Math.min(0.945, particle.y));
          x = left + 11 + particle.x * travelWidth;
          y = top + 11 + particle.y * travelHeight;
        }

        particle.drawX = x;
        particle.drawY = y;
        const pulse = Math.max(0, (particle.pulseUntil - time) / 900);
        const glowRadius = 15 + pulse * 12;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        glow.addColorStop(0, palette.glow);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        if (pulse > 0) {
          ctx.strokeStyle = palette.particle;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, particle.radius + 4 + pulse * 5, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = palette.particle;
        ctx.beginPath();
        ctx.arc(x, y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255, 255, 255, 0.62)";
        ctx.beginPath();
        ctx.arc(x - 1.2, y - 1.2, Math.max(1, particle.radius * 0.27), 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function highlightParticle(index) {
      if (particles.length === 0) return;
      selectedParticleIndex = (index + particles.length) % particles.length;
      particles[selectedParticleIndex].pulseUntil = performance.now() + 900;
      canvas.setAttribute(
        "aria-label",
        `Molecule ${selectedParticleIndex + 1} of ${particles.length} selected in the ${getState()} sample. Use W, A, S, and D to select another molecule.`
      );
      const wasScanned = scannedParticles.has(selectedParticleIndex);
      scannedParticles.add(selectedParticleIndex);
      const scanGoal = getScanGoal();
      if (scanGoal > 0) {
        const scanMessage = scannedParticles.size >= scanGoal
          ? `Molecule ${selectedParticleIndex + 1} scanned. Scan goal complete—lock in your sample!`
          : `Molecule ${selectedParticleIndex + 1} ${wasScanned ? "already scanned" : "scanned"}. ${scannedParticles.size} of ${scanGoal} unique molecules mapped.`;
        feedback.textContent = scanMessage;
        setNarration(scanMessage);
      } else {
        feedback.textContent = `Molecule ${selectedParticleIndex + 1} highlighted. Your specialty mission is to calibrate the temperature.`;
      }
      updateMissionProgress();
      saveGame();
    }

    function selectParticleAtPointer(event) {
      const bounds = canvas.getBoundingClientRect();
      const pointerX = event.clientX - bounds.left;
      const pointerY = event.clientY - bounds.top;
      let nearestIndex = -1;
      let nearestDistance = 20;

      particles.forEach((particle, index) => {
        const distance = Math.hypot(pointerX - particle.drawX, pointerY - particle.drawY);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      if (nearestIndex >= 0) highlightParticle(nearestIndex);
    }

    function animate(time) {
      drawMolecules(time);
      render3dLab(time);
      render3dPreview(time);
      requestAnimationFrame(animate);
    }

    function updateDisplay() {
      const state = getState();
      const palette = colors[state];
      temperatureOutput.textContent = temperature;
      canvas.setAttribute(
        "aria-label",
        `Animated ${state} water molecules. Use W, A, S, and D to select a molecule, then Enter or Space to highlight it.`
      );
      stateLabel.textContent = state[0].toUpperCase() + state.slice(1);
      particleCaption.textContent = palette.caption;
      statePill.style.color = palette.particle;
      statePill.style.borderColor = palette.glow.replace("0.27", "0.55");
      statePill.style.background = palette.glow.replace("0.27", "0.12");
      statePill.querySelector(".state-dot").style.background = palette.particle;
      statePill.querySelector(".state-dot").style.color = palette.particle;
      scaleMarker.style.left = `${((temperature - temperatureLimits.min) / (temperatureLimits.max - temperatureLimits.min)) * 100}%`;

      if (state === "solid") phaseNote.textContent = "At 0°C or colder, water freezes into a solid.";
      else if (state === "liquid") phaseNote.textContent = "Water is liquid between 0°C and 100°C.";
      else phaseNote.textContent = "At 100°C or hotter, water boils into a gas.";
      updateMissionProgress();
    }

    function setNarration(message) {
      narratorSubtitle.textContent = message;
      if (threeLab) threeLab.narratorWaveUntil = performance.now() + Math.min(5000, Math.max(1200, message.length * 42));
      worldNarrator.classList.remove("is-speaking");
      if (narratorAnimationTimer !== null) window.clearTimeout(narratorAnimationTimer);
      worldNarrator.classList.add("is-speaking");
      narratorAnimationTimer = window.setTimeout(() => {
        worldNarrator.classList.remove("is-speaking");
        narratorAnimationTimer = null;
      }, Math.min(5000, Math.max(1000, message.length * 45)));
      if (narratorVoiceEnabled) speakNarration(message);
    }

    function speakNarration(message) {
      const speechSynthesis = window.speechSynthesis;
      const Utterance = window.SpeechSynthesisUtterance;
      if (!speechSynthesis || !Utterance) {
        narratorVoiceStatus.textContent = "Narrator voice is unavailable in this browser. Subtitles are still available.";
        narratorVoiceToggle.disabled = true;
        narratorVoiceToggle.textContent = "🔊 Narrator voice unavailable";
        narratorVoiceToggle.setAttribute("aria-pressed", "false");
        narratorVoiceEnabled = false;
        return;
      }
      speechSynthesis.cancel();
      const utterance = new Utterance(message);
      utterance.lang = "en-US";
      utterance.rate = 0.93;
      utterance.pitch = narratorVoiceGender === "man" ? 0.82 : 1.12;
      utterance.volume = 0.85;
      const voices = speechSynthesis.getVoices();
      const englishVoices = voices.filter(voice => /^en(-|$)/i.test(voice.lang));
      const genderVoicePattern = narratorVoiceGender === "man"
        ? /\b(?:male|man)\b|daniel|david|mark|alex|fred|jorge|guy|thomas|aaron|lee|matthew|tom|oliver|george|andrew|james/i
        : /\b(?:female|woman)\b|samantha|ava|jenny|aria|sara|victoria|karen|moira|tessa|allison|zira|susan|joanna|lisa|serena|kate|emily|amy|emma/i;
      const chosenVoice = englishVoices.find(voice => genderVoicePattern.test(voice.name)) ||
        englishVoices.find(voice => /^en-us$/i.test(voice.lang)) ||
        englishVoices[0];
      if (chosenVoice) utterance.voice = chosenVoice;
      narratorVoiceStatus.textContent = chosenVoice && genderVoicePattern.test(chosenVoice.name)
        ? `Using the available ${narratorVoiceGender === "man" ? "man" : "woman"} narrator voice.`
        : `This browser has no identified ${narratorVoiceGender === "man" ? "man" : "woman"} English voice. Using its closest available voice.`;
      utterance.onerror = event => {
        narratorVoiceStatus.textContent = `Narrator voice could not play: ${event.error}. Subtitles are still available.`;
      };
      speechSynthesis.speak(utterance);
    }

    function getScanGoal() {
      if (!currentCharacter || currentCharacter.specialty === "Heat Tracker") return 0;
      const missionGoal = missions[missionIndex]?.scanGoal || 0;
      return currentCharacter.specialty === "Matter Mapper"
        ? Math.max(1, missionGoal - missionIndex)
        : missionGoal + 1;
    }

    function getCalibrationTarget(mission) {
      const temperatureRemainder = ((temperature % 5) + 5) % 5;
      let closestTarget = null;
      for (let value = temperatureLimits.min; value <= temperatureLimits.max; value++) {
        if (((value % 5) + 5) % 5 !== temperatureRemainder || getState(value) !== mission.state) continue;
        if (closestTarget === null || Math.abs(value - mission.calibratedTemperature) < Math.abs(closestTarget - mission.calibratedTemperature)) {
          closestTarget = value;
        }
      }
      return closestTarget;
    }

    function updateMissionProgress() {
      if (!currentCharacter) return;
      const mission = missions[missionIndex];
      const isComplete = complete || !mission;
      const isHeatTracker = currentCharacter.specialty === "Heat Tracker";
      const stateReached = isComplete || getState() === mission.state;
      const calibrationTarget = isHeatTracker && mission ? getCalibrationTarget(mission) : null;
      const temperatureReached = isComplete ||
        (stateReached && (!isHeatTracker || temperature === calibrationTarget));
      const scanGoal = getScanGoal();
      const scanReached = isComplete || (isHeatTracker
        ? temperatureReached && temperature === calibrationTarget
        : scannedParticles.size >= scanGoal);
      const lockReady = temperatureReached && scanReached;
      const stepsDone = Number(temperatureReached) + Number(scanReached) + Number(isComplete);

      missionTemperatureStep.querySelector(".mission-step-status").textContent = temperatureReached
        ? "Done"
        : isHeatTracker
          ? `${stateReached ? "Set" : "Reach"} ${calibrationTarget}°C`
          : `Reach ${mission.state}`;
      missionTemperatureStep.classList.toggle("is-complete", temperatureReached);
      missionScanStep.querySelector("span").textContent = isHeatTracker
        ? "Calibrate the sample"
        : `Scan unique molecules (${Math.min(scannedParticles.size, scanGoal)}/${scanGoal})`;
      missionScanStep.querySelector(".mission-step-status").textContent = scanReached
        ? "Done"
        : isHeatTracker
          ? `${temperature}°C / ${calibrationTarget}°C`
          : `${Math.min(scannedParticles.size, scanGoal)} of ${scanGoal}`;
      missionScanStep.classList.toggle("is-complete", scanReached);
      missionLockStep.querySelector(".mission-step-status").textContent = isComplete
        ? "Done"
        : lockReady ? "Ready" : "Not yet";
      missionLockStep.classList.toggle("is-complete", isComplete);
      missionProgress.setAttribute("aria-valuenow", String(stepsDone));
      missionProgress.setAttribute("aria-valuetext", `${stepsDone} of 3 mission steps complete`);
      missionProgressBar.style.width = `${(stepsDone / 3) * 100}%`;
    }

    function setTemperature(amount) {
      if (!gameStarted || complete) return;
      temperature = Math.max(temperatureLimits.min, Math.min(temperatureLimits.max, temperature + amount));
      updateDisplay();
      saveGame();
    }

    function startMission(resetScans = true) {
      const mission = missions[missionIndex];
      if (resetScans) scannedParticles = new Set();
      missionCount.textContent = `Mission ${missionIndex + 1} of ${missions.length}`;
      missionTitle.textContent = mission.title;
      if (currentCharacter.specialty === "Heat Tracker") {
        const calibrationTarget = getCalibrationTarget(mission);
        missionCopy.textContent = `${mission.copy} Heat Tracker calibration: set the sample to exactly ${calibrationTarget}°C.`;
        missionTemperatureStep.querySelector("span").textContent = `Reach the ${mission.state} state`;
        setNarration(`${mission.narration} As a Heat Tracker, calibrate the sample to exactly ${calibrationTarget}°C.`);
      } else {
        const scanGoal = getScanGoal();
        missionCopy.textContent = `${mission.copy} ${currentCharacter.specialty} objective: scan ${scanGoal} unique ${scanGoal === 1 ? "molecule" : "molecules"} by using the scanner or clicking them.`;
        missionTemperatureStep.querySelector("span").textContent = `Reach the ${mission.state} state`;
        setNarration(`${mission.narration} ${currentCharacter.specialty} objective: use the molecule scanner or click to scan ${scanGoal} unique ${scanGoal === 1 ? "molecule" : "molecules"}, then lock in the sample.`);
      }
      updateMissionProgress();
      feedback.textContent = "Ready, explorer? Hold a temperature button to power up your changes!";
      submitButton.disabled = false;
    }

    function popMissionPanel() {
      const controlPanel = submitButton.closest(".control-panel");
      if (!controlPanel) return;
      controlPanel.classList.remove("mission-pop");
      void controlPanel.offsetWidth;
      controlPanel.classList.add("mission-pop");
      controlPanel.addEventListener("animationend", event => {
        if (event.animationName === "mission-pop") controlPanel.classList.remove("mission-pop");
      }, { once: true });
    }

    function submitSample() {
      if (!gameStarted || complete) return;
      const mission = missions[missionIndex];
      const target = mission.state;
      if (getState() !== target) {
        const directions = {
          solid: "Keep cooling until the sample reaches 0°C or colder.",
          liquid: "Warm it above 0°C, but keep it below 100°C.",
          gas: "Keep heating until the sample reaches 100°C or hotter."
        };
        feedback.textContent = `Not quite—your sample is ${getState()}. ${directions[target]}`;
        setNarration(feedback.textContent);
        return;
      }
      const calibrationTarget = currentCharacter.specialty === "Heat Tracker" ? getCalibrationTarget(mission) : null;
      if (calibrationTarget !== null && temperature !== calibrationTarget) {
        feedback.textContent = `Your sample is ${target}, but the Heat Tracker calibration needs exactly ${calibrationTarget}°C.`;
        setNarration(feedback.textContent);
        return;
      }
      const scanGoal = getScanGoal();
      if (scannedParticles.size < scanGoal) {
        const remainingScans = scanGoal - scannedParticles.size;
        feedback.textContent = `Sample state confirmed. Scan ${remainingScans} more unique ${remainingScans === 1 ? "molecule" : "molecules"} to complete your specialty objective.`;
        setNarration(feedback.textContent);
        return;
      }

      popMissionPanel();
      scienceCredits += 20;
      const reward = wardrobeItems.find(item => item.rewardMission === missionIndex + 1);
      if (reward && !currentCharacter.unlockedItems.includes(reward.id)) {
        currentCharacter.unlockedItems.push(reward.id);
        if (reward.slot === "outfit") currentCharacter.equippedOutfit = reward.id;
        else currentCharacter.equippedAccessory = reward.id;
        updateInventory();
      }
      missionIndex++;
      if (missionIndex === missions.length) {
        saveGame();
        showCompletion();
        return;
      }

      startMission();
      feedback.textContent = `Mission complete! Your sample is ${target}. You earned ${reward.name} and 20 science credits.`;
      setNarration(`Mission complete! You earned ${reward.name} and 20 science credits. ${narratorSubtitle.textContent}`);
      saveGame();
    }

    function showCompletion() {
      complete = true;
      missionCount.textContent = "Mission complete!";
      missionTitle.textContent = "You did it!";
      missionCopy.textContent = "You guided water through solid, liquid, and gas. You’re a molecule master!";
      feedback.textContent = `Amazing work, molecule master! You powered water through all three states and earned ${scienceCredits} science credits.`;
      setNarration(`Mission complete, ${currentCharacter.name}! You earned every reward and ${scienceCredits} science credits while guiding water through solid, liquid, and gas.`);
      submitButton.disabled = true;
      coolButton.disabled = true;
      heatButton.disabled = true;
      restartButton.classList.remove("hidden");
      saveGame();
    }

    function bindTemperatureButton(button, amount) {
      let repeatTimer;
      const stop = () => {
        window.clearInterval(repeatTimer);
        repeatTimer = undefined;
      };
      button.addEventListener("pointerdown", event => {
        if (complete) return;
        event.preventDefault();
        button.setPointerCapture(event.pointerId);
        setTemperature(amount);
        window.clearTimeout(repeatTimer);
        repeatTimer = window.setTimeout(() => {
          repeatTimer = window.setInterval(() => setTemperature(amount), 110);
        }, 350);
      });
      button.addEventListener("pointerup", stop);
      button.addEventListener("pointercancel", stop);
      button.addEventListener("lostpointercapture", stop);
      button.addEventListener("click", event => {
        if (event.detail === 0) setTemperature(amount);
      });
    }

    bindTemperatureButton(coolButton, -5);
    bindTemperatureButton(heatButton, 5);
    canvas.addEventListener("pointerdown", selectParticleAtPointer);
    canvas.addEventListener("keydown", event => {
      const key = event.key.toLowerCase();
      if (key === "a" || key === "w") {
        event.preventDefault();
        event.stopPropagation();
        highlightParticle(selectedParticleIndex - 1);
      } else if (key === "d" || key === "s") {
        event.preventDefault();
        event.stopPropagation();
        highlightParticle(selectedParticleIndex + 1);
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        highlightParticle(selectedParticleIndex);
      }
    });
    submitButton.addEventListener("click", submitSample);
    musicToggle.addEventListener("click", () => {
      musicPreferenceSet = true;
      setMusicEnabled(!musicEnabled);
    });
    newGameButton.addEventListener("click", () => {
      startMenu.classList.add("hidden");
      characterCreator.classList.remove("hidden");
      characterForm.reset();
      updateCreatorPreview();
      characterNameInput.focus();
    });
    quizModeButton.addEventListener("click", () => showMiniGame("quiz"));
    temperatureModeButton.addEventListener("click", () => showMiniGame("temperature"));
    matchingModeButton.addEventListener("click", () => showMiniGame("matching"));
    quizNextButton.addEventListener("click", advanceQuiz);
    challengeCoolButton.addEventListener("click", () => {
      if (checkTemperatureButton.dataset.passed === "true") return;
      challengeTemperatureValue = Math.max(temperatureLimits.min, challengeTemperatureValue - 5);
      updateChallengeTemperature();
    });
    challengeHeatButton.addEventListener("click", () => {
      if (checkTemperatureButton.dataset.passed === "true") return;
      challengeTemperatureValue = Math.min(temperatureLimits.max, challengeTemperatureValue + 5);
      updateChallengeTemperature();
    });
    checkTemperatureButton.addEventListener("click", checkTemperatureChallenge);
    miniGameMenuButton.addEventListener("click", returnToGameChoices);
    continueButton.addEventListener("click", () => {
      const save = readSavedGame();
      if (save) continueGame(save);
      else {
        continueButton.disabled = true;
        startMenu.classList.remove("hidden");
      }
    });
    creatorBackButton.addEventListener("click", () => {
      characterCreator.classList.add("hidden");
      startMenu.classList.remove("hidden");
      newGameButton.focus();
    });
    mainMenuButton.addEventListener("click", () => {
      gameStarted = false;
      gameScreen.classList.add("hidden");
      startMenu.classList.remove("hidden");
      continueButton.disabled = !readSavedGame();
      newGameButton.focus();
    });
    characterNameInput.addEventListener("input", () => characterNameInput.setCustomValidity(""));
    characterForm.addEventListener("submit", event => {
      event.preventDefault();
      const name = characterNameInput.value.trim();
      characterNameInput.setCustomValidity(name ? "" : "Enter a character name to start.");
      if (!characterForm.reportValidity()) return;

      const characterData = new FormData(characterForm);
      beginGame({
        name,
        avatar: "human",
        skinTone: String(characterData.get("skinTone")),
        hairStyle: String(characterData.get("hairStyle")),
        outfitColor: String(characterData.get("outfitColor")),
        specialty: String(characterData.get("specialty"))
      });
    });
    characterForm.addEventListener("input", updateCreatorPreview);
    characterForm.addEventListener("change", updateCreatorPreview);
    creatorPreviewAvatar.addEventListener("pointerdown", event => {
      if (!threePreview) return;
      previewDrag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startRotation: threePreview.userRotation
      };
      creatorPreviewAvatar.setPointerCapture(event.pointerId);
    });
    creatorPreviewAvatar.addEventListener("pointermove", event => {
      if (!previewDrag || previewDrag.pointerId !== event.pointerId || !threePreview) return;
      threePreview.userRotation = previewDrag.startRotation + (event.clientX - previewDrag.startX) * 0.012;
      threePreview.renderer.render(threePreview.scene, threePreview.camera);
    });
    creatorPreviewAvatar.addEventListener("pointerup", event => {
      if (!previewDrag || previewDrag.pointerId !== event.pointerId) return;
      previewDrag = null;
      if (creatorPreviewAvatar.hasPointerCapture(event.pointerId)) creatorPreviewAvatar.releasePointerCapture(event.pointerId);
    });
    creatorPreviewAvatar.addEventListener("pointercancel", () => { previewDrag = null; });
    creatorPreviewAvatar.addEventListener("keydown", event => {
      if (!threePreview || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
      event.preventDefault();
      threePreview.userRotation += event.key === "ArrowLeft" ? -0.35 : 0.35;
      threePreview.renderer.render(threePreview.scene, threePreview.camera);
    });
    document.querySelectorAll(".direction-pad [data-move]").forEach(button => {
      button.addEventListener("click", () => movePlayer(button.dataset.move));
    });
    worldNarrator.addEventListener("click", interactWithNearby);
    narratorCharacter.addEventListener("click", () => {
      const guideMessage = missions[missionIndex]
        ? `Hi, ${currentCharacter?.name || "scientist"}! ${missions[missionIndex].narration}`
        : `Wonderful work, ${currentCharacter?.name || "scientist"}! You explored every state of matter.`;
      setNarration(guideMessage);
    });
    labStation.addEventListener("click", interactWithNearby);
    restartButton.addEventListener("click", () => {
      temperature = 22;
      missionIndex = 0;
      complete = false;
      scannedParticles = new Set();
      coolButton.disabled = false;
      heatButton.disabled = false;
      restartButton.classList.add("hidden");
      updateDisplay();
      startMission();
      updateInventory();
      saveGame();
    });
    inventoryItems.addEventListener("click", event => {
      const button = event.target.closest("button[data-item-id]");
      if (!button || button.disabled) return;
      const item = wardrobeItems.find(candidate => candidate.id === button.dataset.itemId);
      if (!item) return;
      if (item.slot === "outfit") currentCharacter.equippedOutfit = item.id;
      else currentCharacter.equippedAccessory = item.id;
      updateInventory();
      saveGame();
      setNarration(`${item.name} equipped! Your explorer is ready for the mission.`);
    });
    characterStoreButton.addEventListener("click", () => {
      updateStore();
      storeDialog.showModal();
    });
    storeCloseButton.addEventListener("click", () => storeDialog.close());
    storeDialog.addEventListener("click", event => {
      if (event.target === storeDialog) storeDialog.close();
    });
    storeItems.addEventListener("click", event => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest("button[data-item-id]");
      if (!button || button.disabled) return;
      purchaseShopItem(button.dataset.itemId);
    });
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      narratorVoiceToggle.disabled = true;
      narratorVoiceToggle.textContent = "🔊 Narrator voice unavailable";
      narratorVoiceStatus.textContent = "Narrator voice is unavailable in this browser. Subtitles are still available.";
    }
    narratorVoiceToggle.addEventListener("click", () => {
      narratorVoiceEnabled = !narratorVoiceEnabled;
      narratorVoiceToggle.setAttribute("aria-pressed", String(narratorVoiceEnabled));
      narratorVoiceToggle.textContent = `🔊 Narrator voice: ${narratorVoiceEnabled ? "On" : "Off"}`;
      if (narratorVoiceEnabled) speakNarration(narratorSubtitle.textContent);
      else if (window.speechSynthesis) window.speechSynthesis.cancel();
    });
    narratorVoiceChoice.addEventListener("change", () => {
      updateNarratorPresentation(narratorVoiceChoice.value);
      if (currentCharacter) saveGame();
      narratorVoiceStatus.textContent = `${narratorVoiceGender === "man" ? "Man" : "Woman"} narrator selected. Available speech depends on this browser's voices.`;
      if (narratorVoiceEnabled) speakNarration(narratorSubtitle.textContent);
    });
    shareQrButton.addEventListener("click", () => {
      const qrUrl = new URL("https://api.qrserver.com/v1/create-qr-code/");
      qrUrl.searchParams.set("size", "240x240");
      qrUrl.searchParams.set("data", window.location.href);
      qrStatus.textContent = "Creating your QR code…";
      qrImage.src = qrUrl.toString();
      qrDialog.showModal();
    });
    qrImage.addEventListener("load", () => {
      qrStatus.textContent = "Your QR code is ready to scan.";
    });
    qrImage.addEventListener("error", () => {
      qrStatus.textContent = "The QR code could not load. Check your connection and try again.";
    });
    qrCloseButton.addEventListener("click", () => qrDialog.close());
    qrDialog.addEventListener("click", event => {
      if (event.target === qrDialog) qrDialog.close();
    });
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("resize", resize3dLab);
    window.addEventListener("resize", resize3dPreview);
    window.addEventListener("keydown", event => {
      if (!gameStarted) return;
      if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
      const key = event.key.toLowerCase();
      if (key.startsWith("arrow")) {
        event.preventDefault();
        movePlayer({
          ArrowUp: "up",
          ArrowDown: "down",
          ArrowLeft: "left",
          ArrowRight: "right"
        }[event.key]);
      } else if (key === "e") {
        event.preventDefault();
        interactWithNearby();
      } else if (key === "c") {
        event.preventDefault();
        setTemperature(-5);
      } else if (key === "h") {
        event.preventDefault();
        setTemperature(5);
      } else if (
        event.key === "Enter" &&
        !(event.target instanceof Element && event.target.closest("button, canvas")) &&
        document.activeElement !== coolButton &&
        document.activeElement !== heatButton &&
        document.activeElement !== submitButton &&
        document.activeElement !== restartButton &&
        document.activeElement !== mainMenuButton &&
        document.activeElement !== musicToggle
      ) {
        submitSample();
      }
    });

    makeParticles();
    setup3dLab();
    setup3dPreview();
    updateStore();
    const savedGame = readSavedGame();
    continueButton.disabled = !savedGame;
    updateCreatorPreview();
    renderCharacterAvatar(narratorCharacter, narratorProfile, true);
    updateDisplay();
    requestAnimationFrame(animate);

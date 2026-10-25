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
    const gameScreen = document.getElementById("gameScreen");
    const playerAvatar = document.getElementById("playerAvatar");
    const playerName = document.getElementById("playerName");
    const playerSpecialty = document.getElementById("playerSpecialty");
    const startMenu = document.getElementById("startMenu");
    const newGameButton = document.getElementById("newGameButton");
    const continueButton = document.getElementById("continueButton");
    const saveNote = document.getElementById("saveNote");
    const musicToggle = document.getElementById("musicToggle");
    const musicStatus = document.getElementById("musicStatus");
    const creatorBackButton = document.getElementById("creatorBackButton");
    const mainMenuButton = document.getElementById("mainMenuButton");
    const narratorSubtitle = document.getElementById("narratorSubtitle");
    const narratorVoiceToggle = document.getElementById("narratorVoiceToggle");
    const narratorVoiceStatus = document.getElementById("narratorVoiceStatus");
    const explorerAvatar = document.getElementById("explorerAvatar");
    const explorerAccessory = document.getElementById("explorerAccessory");
    const explorerOutfit = document.getElementById("explorerOutfit");
    const explorerName = document.getElementById("explorerName");
    const explorerSpecialty = document.getElementById("explorerSpecialty");
    const inventoryCount = document.getElementById("inventoryCount");
    const inventoryCopy = document.getElementById("inventoryCopy");
    const inventoryItems = document.getElementById("inventoryItems");
    const shareQrButton = document.getElementById("shareQrButton");
    const qrDialog = document.getElementById("qrDialog");
    const qrImage = document.getElementById("qrImage");
    const qrStatus = document.getElementById("qrStatus");
    const qrCloseButton = document.getElementById("qrCloseButton");

    const missions = [
      {
        state: "solid",
        title: "Mission 1 · Freeze and inspect",
        copy: "Cool the water to 0°C or colder, then inspect the molecules locked in their solid structure.",
        narration: "First, cool the sample to 0°C or colder. Then inspect the molecules to learn how a solid holds its shape.",
        scanGoal: 1,
        calibratedTemperature: 0
      },
      {
        state: "liquid",
        title: "Mission 2 · Melt and map",
        copy: "Warm the ice above 0°C but below 100°C, then map the moving liquid molecules.",
        narration: "Now warm the ice until it melts. Map the moving molecules while the sample is liquid—above 0°C and below 100°C.",
        scanGoal: 3,
        calibratedTemperature: 50
      },
      {
        state: "gas",
        title: "Mission 3 · Evaporate and explore",
        copy: "Heat the water to 100°C or hotter, then explore the molecules spreading through the sample.",
        narration: "For the final mission, heat the water to 100°C or hotter. Explore the fast-moving gas molecules to finish your journey.",
        scanGoal: 5,
        calibratedTemperature: 100
      }
    ];
    const wardrobeItems = [
      { id: "mission-suit", name: "Mission suit", emoji: "🧥", slot: "outfit", rewardMission: 0 },
      { id: "safety-goggles", name: "Safety goggles", emoji: "🥽", slot: "accessory", rewardMission: 1 },
      { id: "lab-coat", name: "Lab coat", emoji: "🥼", slot: "outfit", rewardMission: 2 },
      { id: "jetpack", name: "Jetpack", emoji: "🚀", slot: "accessory", rewardMission: 3 }
    ];
    const colors = {
      solid: { particle: "#8278d8", glow: "rgba(130, 120, 216, 0.27)", pill: "#8278d8", caption: "Molecules vibrate in fixed positions" },
      liquid: { particle: "#36b9a9", glow: "rgba(54, 185, 169, 0.27)", pill: "#36b9a9", caption: "Molecules slide past one another" },
      gas: { particle: "#f181ad", glow: "rgba(241, 129, 173, 0.27)", pill: "#f181ad", caption: "Molecules spread out and zip around" }
    };
    const temperatureLimits = { min: -40, max: 140 };
    const saveKey = "moleculeMissionSave";
    const avatarChoices = ["🧑‍🔬", "🤖", "👽", "🐙"];
    const specialtyChoices = ["Matter Mapper", "Heat Tracker", "Mission Explorer"];
    let temperature = 22;
    let missionIndex = 0;
    let complete = false;
    let gameStarted = false;
    let currentCharacter = null;
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
          avatarChoices.includes(save.character.avatar) &&
          specialtyChoices.includes(save.character.specialty);
        const validProgress =
          Number.isInteger(save.missionIndex) &&
          save.missionIndex >= 0 &&
          save.missionIndex <= missions.length &&
          Number.isFinite(save.temperature) &&
          save.temperature >= temperatureLimits.min &&
          save.temperature <= temperatureLimits.max;
        if (!validCharacter || !validProgress) {
          saveNote.textContent = "Your saved game could not be read. Start a new game to begin again.";
          return null;
        }
        const availableItemIds = new Set(wardrobeItems.map(item => item.id));
        const earnedThroughProgress = wardrobeItems
          .filter(item => item.rewardMission === 0 || item.rewardMission <= save.missionIndex)
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
            unlockedItems,
            equippedOutfit,
            equippedAccessory
          },
          missionIndex: save.missionIndex,
          temperature: save.temperature,
          scannedParticles: validScans
        };
      } catch (error) {
        saveNote.textContent = "Saved game access failed. Check your browser storage settings.";
        return null;
      }
    }

    function saveGame() {
      if (!currentCharacter) return;
      try {
        window.localStorage.setItem(saveKey, JSON.stringify({
          character: currentCharacter,
          missionIndex,
          temperature,
          scannedParticles: [...scannedParticles]
        }));
        saveNote.textContent = "Your mission progress is saved on this device.";
        continueButton.disabled = false;
      } catch (error) {
        saveNote.textContent = "Could not save your game. Check your browser storage settings.";
        if (gameStarted) feedback.textContent = saveNote.textContent;
      }
    }

    function updatePlayerBadge() {
      playerName.textContent = currentCharacter.name;
      playerAvatar.textContent = currentCharacter.avatar;
      playerSpecialty.textContent = currentCharacter.specialty;
      explorerAvatar.textContent = currentCharacter.avatar;
      explorerName.textContent = currentCharacter.name;
      explorerSpecialty.textContent = currentCharacter.specialty;
      updateInventory();
    }

    function updateInventory() {
      const outfit = wardrobeItems.find(item => item.id === currentCharacter.equippedOutfit);
      const accessory = wardrobeItems.find(item => item.id === currentCharacter.equippedAccessory);
      explorerOutfit.textContent = outfit ? outfit.emoji : "";
      explorerOutfit.setAttribute("aria-label", outfit ? `Wearing ${outfit.name}` : "No outfit equipped");
      explorerAccessory.textContent = accessory ? accessory.emoji : "";
      explorerAccessory.setAttribute("aria-label", accessory ? `Wearing ${accessory.name}` : "No accessory equipped");
      const unlocked = wardrobeItems.filter(item => currentCharacter.unlockedItems.includes(item.id));
      inventoryCount.textContent = `${unlocked.length} ${unlocked.length === 1 ? "item" : "items"} earned`;
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
          : `Mission ${item.rewardMission}`;
        button.append(icon, label, status);
        inventoryItems.append(button);
      });

      inventoryCopy.textContent = unlocked.length === wardrobeItems.length
        ? "All mission rewards unlocked! Select an item to change what your explorer wears."
        : "Select an earned item to equip it. Complete missions to unlock more clothes and accessories.";
    }

    function showGame() {
      startMenu.classList.add("hidden");
      characterCreator.classList.add("hidden");
      gameScreen.classList.remove("hidden");
      resizeCanvas();
      canvas.focus();
    }

    function beginGame(character) {
      currentCharacter = {
        ...character,
        unlockedItems: ["mission-suit"],
        equippedOutfit: "mission-suit",
        equippedAccessory: ""
      };
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
        `Molecule ${selectedParticleIndex + 1} of ${particles.length} selected in the ${getState()} sample. Use the arrow keys to select another molecule.`
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
      requestAnimationFrame(animate);
    }

    function updateDisplay() {
      const state = getState();
      const palette = colors[state];
      temperatureOutput.textContent = temperature;
      canvas.setAttribute(
        "aria-label",
        `Animated ${state} water molecules. Use the arrow keys to select a molecule, then Enter or Space to highlight it.`
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
    }

    function setNarration(message) {
      narratorSubtitle.textContent = message;
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
        setNarration(`${mission.narration} As a Heat Tracker, calibrate the sample to exactly ${calibrationTarget}°C.`);
      } else {
        const scanGoal = getScanGoal();
        missionCopy.textContent = `${mission.copy} ${currentCharacter.specialty} objective: scan ${scanGoal} unique ${scanGoal === 1 ? "molecule" : "molecules"} by clicking them.`;
        setNarration(`${mission.narration} ${currentCharacter.specialty} objective: click and scan ${scanGoal} unique ${scanGoal === 1 ? "molecule" : "molecules"}, then lock in the sample.`);
      }
      feedback.textContent = "Tip: hold a temperature button to change it faster.";
      submitButton.disabled = false;
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
      feedback.textContent = `Mission complete! Your sample is ${target}. You earned ${reward.name}.`;
      setNarration(`Mission complete! You earned ${reward.name}. ${narratorSubtitle.textContent}`);
      saveGame();
    }

    function showCompletion() {
      complete = true;
      missionCount.textContent = "Mission complete!";
      missionTitle.textContent = "You did it!";
      missionCopy.textContent = "You guided water through solid, liquid, and gas. You’re a molecule master!";
      feedback.textContent = "Great work—now you know how temperature changes matter.";
      setNarration(`Mission complete, ${currentCharacter.name}! You earned every reward and guided water through solid, liquid, and gas.`);
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
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        highlightParticle(selectedParticleIndex - 1);
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
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
      characterNameInput.focus();
    });
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
        avatar: String(characterData.get("avatar")),
        specialty: String(characterData.get("specialty"))
      });
    });
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
    window.addEventListener("keydown", event => {
      if (!gameStarted) return;
      if (event.key === "ArrowDown" || event.key.toLowerCase() === "c") {
        event.preventDefault();
        setTemperature(-5);
      } else if (event.key === "ArrowUp" || event.key.toLowerCase() === "h") {
        event.preventDefault();
        setTemperature(5);
      } else if (
        event.key === "Enter" &&
        !(event.target instanceof Element && event.target.closest("button")) &&
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
    const savedGame = readSavedGame();
    continueButton.disabled = !savedGame;
    updateDisplay();
    requestAnimationFrame(animate);

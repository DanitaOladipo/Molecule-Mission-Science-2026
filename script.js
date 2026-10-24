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

    const missions = [
      { state: "solid", title: "Freeze the sample", copy: "Cool the water until it becomes a solid. Aim for 0°C or colder." },
      { state: "liquid", title: "Melt it back", copy: "Warm the ice until it becomes liquid water. Aim for above 0°C and below 100°C." },
      { state: "gas", title: "Send it soaring", copy: "Heat the water until it becomes a gas. Aim for 100°C or hotter." }
    ];
    const colors = {
      solid: { particle: "#8278d8", glow: "rgba(130, 120, 216, 0.27)", pill: "#8278d8", caption: "Molecules vibrate in fixed positions" },
      liquid: { particle: "#36b9a9", glow: "rgba(54, 185, 169, 0.27)", pill: "#36b9a9", caption: "Molecules slide past one another" },
      gas: { particle: "#f181ad", glow: "rgba(241, 129, 173, 0.27)", pill: "#f181ad", caption: "Molecules spread out and zip around" }
    };
    const temperatureLimits = { min: -40, max: 140 };
    let temperature = 22;
    let missionIndex = 0;
    let complete = false;
    let particles = [];
    let selectedParticleIndex = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

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
      feedback.textContent = `Molecule ${selectedParticleIndex + 1} of ${particles.length} highlighted.`;
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

    function setTemperature(amount) {
      if (complete) return;
      temperature = Math.max(temperatureLimits.min, Math.min(temperatureLimits.max, temperature + amount));
      updateDisplay();
    }

    function startMission() {
      const mission = missions[missionIndex];
      missionCount.textContent = `Mission ${missionIndex + 1} of ${missions.length}`;
      missionTitle.textContent = mission.title;
      missionCopy.textContent = mission.copy;
      feedback.textContent = "Tip: hold a temperature button to change it faster.";
      submitButton.disabled = false;
    }

    function submitSample() {
      if (complete) return;
      const target = missions[missionIndex].state;
      if (getState() !== target) {
        const directions = {
          solid: "Keep cooling until the sample reaches 0°C or colder.",
          liquid: "Warm it above 0°C, but keep it below 100°C.",
          gas: "Keep heating until the sample reaches 100°C or hotter."
        };
        feedback.textContent = `Not quite—your sample is ${getState()}. ${directions[target]}`;
        return;
      }

      missionIndex++;
      if (missionIndex === missions.length) {
        complete = true;
        missionCount.textContent = "Mission complete!";
        missionTitle.textContent = "You did it!";
        missionCopy.textContent = "You guided water through solid, liquid, and gas. You’re a molecule master!";
        feedback.textContent = "Great work—now you know how temperature changes matter.";
        submitButton.disabled = true;
        coolButton.disabled = true;
        heatButton.disabled = true;
        restartButton.classList.remove("hidden");
        return;
      }

      startMission();
      feedback.textContent = `Mission complete! Your sample is ${target}. On to the next challenge!`;
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
    restartButton.addEventListener("click", () => {
      temperature = 22;
      missionIndex = 0;
      complete = false;
      coolButton.disabled = false;
      heatButton.disabled = false;
      restartButton.classList.add("hidden");
      updateDisplay();
      startMission();
    });
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("keydown", event => {
      if (event.key === "ArrowDown" || event.key.toLowerCase() === "c") {
        event.preventDefault();
        setTemperature(-5);
      } else if (event.key === "ArrowUp" || event.key.toLowerCase() === "h") {
        event.preventDefault();
        setTemperature(5);
      } else if (
        event.key === "Enter" &&
        document.activeElement !== coolButton &&
        document.activeElement !== heatButton &&
        document.activeElement !== submitButton
      ) {
        submitSample();
      }
    });

    makeParticles();
    resizeCanvas();
    updateDisplay();
    startMission();
    requestAnimationFrame(animate);

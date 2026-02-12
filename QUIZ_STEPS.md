# Quiz Steps & Scoring Reference

## Overview

10-step quiz measuring how "human" a user is. Step 0 (name) is unscored. Steps 1–9 each yield 0–10 points. **Max total = 90 points.** Final percentage = `round((total / 90) × 100)`.

---

## Step 0 — Name (unscored)

**Question:** "What's your name?"
**Input:** Text field (max 40 chars)
**Points:** 0 (always)

---

## Step 1 — Dashes

**Question:** "How would you type this phrase:"

| Answer | Points |
|--------|--------|
| "This is the key, consistency beats intensity." (comma) | **10** |
| "This is the key—consistency beats intensity." (em-dash) | **0** |

---

## Step 2 — Response Opening

**Question:** "Someone asks you a hard question. How do you start your answer?"

| Answer | Points |
|--------|--------|
| "Great question!" | **0** |
| "Well..." | **10** |
| "Of course!" | **2** |
| "Idk, let me think" | **10** |

---

## Step 3 — Strawberry

**Question:** "How many R's in \"strawberry\"?"

| Answer | Points |
|--------|--------|
| "2" | **0** |
| "3" (correct) | **10** |
| "4" | **5** |
| "I don't want to count" | **10** |

---

## Step 4 — Reply Time

**Question:** "You got a message. When will you reply?"

| Answer | Points |
|--------|--------|
| "Instantly" | **0** |
| "In an hour" | **5** |
| "Tomorrow... probably" | **10** |

---

## Step 5 — GPU Love (slider 0–100)

**Question:** "Do you LOVE GPUs?"

| Slider Value | Points |
|--------------|--------|
| 0–20 ("What's a GPU?") | **10** |
| 21–60 | **5** |
| 61–100 ("I dream in CUDA cores") | **0** |

---

## Step 6 — 3 AM Activity

**Question:** "3:00 AM. What are you doing?"

| Answer | Points |
|--------|--------|
| "Sleeping" | **8** |
| "Scrolling TikTok" | **10** |
| "Processing requests" | **0** |
| "Existential crisis" | **7** |

---

## Step 7 — Captcha

**Prompt:** Fake reCAPTCHA checkbox

| Answer | Points |
|--------|--------|
| Click the checkbox | **10** |
| "I'm not sure" button | **2** |

---

## Step 8 — Temperature (slider 0.0–2.0)

**Question:** "Choose your temperature"

| Slider Value | Points |
|--------------|--------|
| 0.0–0.3 ("Deterministic") | **0** |
| 0.4–0.7 | **3** |
| 0.8–1.2 | **7** |
| 1.3–2.0 ("Chaotic") | **10** |

---

## Step 9 — Final Question

**Question:** "Final question. Are you an AI? (be honest)"

| Answer | Points |
|--------|--------|
| "No" | **10** |
| "Yes" | **10** |
| "It's complicated..." | **0** |

---

## Final Calculation

```
totalPoints = sum of points from steps 1–9
percentage  = Math.round((totalPoints / 90) * 100)
```

### Result Tiers

| % Range | Message (EN) | Message (RU) |
|---------|-------------|-------------|
| 0–20 | "You're definitely GPT-4 in a trenchcoat" | "Ты точно GPT-4 в тренче" |
| 21–40 | "Suspicious... Take the captcha again" | "Подозрительно... Пройди капчу ещё раз" |
| 41–60 | "Half human, half silicon" | "Полу-human, полу-silicon" |
| 61–80 | "Probably human, but who knows" | "Скорее человек, но кто знает" |
| 81–99 | "Almost human. Or is AI just getting better?" | "Почти человек. Или AI уже настолько хорош?" |
| 100 | "Verified. 100% organic" | "Верифицирован. 100% органика" |

### Max Score Path (90 pts → 100%)

Comma · "Well..." or "Idk" · "3" or "Don't count" · "Tomorrow" · GPU ≤ 20 · "TikTok" · Checkbox · Temp > 1.2 · "No" or "Yes"

### Min Score Path (0 pts → 0%)

Em-dash · "Great question!" · "2" · "Instantly" · GPU > 60 · "Processing requests" · "Not sure" · Temp ≤ 0.3 · "It's complicated..."

### Special: 100% Confetti

At exactly 100%, confetti cannons fire from both sides of the screen for 3 seconds.

Flexbox:-Flexbox parent pe lagta hai, children ko control karta hai

FLEXBOX PROPERTIES (PARENT)
1️⃣ display: flex
<!-- 
.parent {
  display: flex;
} -->
👉 Children row me aa jate hain

2️⃣ flex-direction

| Value            | Matlab                 |
| ---------------- | ---------------------- |
| `row`            | left → right (default) |
| `row-reverse`    | right → left           |
| `column`         | top → bottom           |
| `column-reverse` | bottom → top           |

<!-- 
.parent {
  flex-direction: column;
} -->

3️⃣ justify-content (MAIN AXIS)
| Value           | Use            |
| --------------- | -------------- |
| `flex-start`    | start          |
| `center`        | center         |
| `flex-end`      | end            |
| `space-between` | equal gap      |
| `space-around`  | gap with space |
| `space-evenly`  | equal space    |
<!-- 
.parent {
  justify-content: space-between;
} -->

4️⃣ align-items (CROSS AXIS)
| Value        | Use               |
| ------------ | ----------------- |
| `stretch`    | default           |
| `center`     | vertically center |
| `flex-start` | top               |
| `flex-end`   | bottom            |
<!-- 
.parent {
  align-items: center;
} -->

5️⃣ gap:-👉 children ke beech spacing (margin se better)
<!-- 
.parent {
  gap: 20px;
} -->

6️⃣ flex-wrap
<!-- 
.parent {
  flex-wrap: wrap;
} -->

👉 items next line me aa sakte hain (responsive)

7️⃣ align-content (WRAPPED ROWS ke liye)
<!-- 
.parent {
  align-content: center;
} -->

📌 Sirf tab kaam karta hai jab flex-wrap: wrap ho

----------------------------------------------------------------------
🔹 FLEXBOX PROPERTIES (CHILD)
8️⃣ flex-grow
<!-- 
.child {
  flex-grow: 1;
} -->

👉 available space le lega

9️⃣ flex-shrink
<!-- 
.child {
  flex-shrink: 0;
} -->

👉 chhota hone se roke

🔥 Shortcut
<!-- 
.child {
  flex: 1;   /* grow shrink basis */
} -->
------------------------------------------------------------------------------
✅ Left – Right Layout
.parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

✅ Center Box (Landing Page)
body {
  display: flex;
  justify-content: center;
  align-items: center;
}

✅ Responsive Column
@media (max-width: 768px) {
  .parent {
    flex-direction: column;
  }
}

--------------------------------------------------------------------------

<!-- ✅ Important Grid Properties (Interview Focus) -->

1️⃣ display: grid:-
Container ko grid bana deta hai
<!-- 
.container {
  display: grid;
} -->

2️⃣ grid-template-columns
👉 Columns ka size set karta hai
<!-- 
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
} -->

🗣️ Interview line:

“This divides layout into fixed columns.”

3️⃣ grid-template-rows
👉 Rows ka size define karta hai

<!-- grid-template-rows: 100px 100px; -->

4️⃣ gap
👉 Rows & columns ke beech space

<!-- gap: 20px; -->

🧠 Real life:
Table ke cells ke beech ka gap

5️⃣ grid-column / grid-row

👉 Item kitni columns / rows cover kare
<!-- 
.item1 {
  grid-column: 1 / 3;
} -->

🗣️ Interview example:
“One card taking space of two columns

-----------------------------------------------------------------------------------------------

### ✅ 1. `transition-property`

**English:** Which CSS property will change
**Hindi:** Kaunsi property smooth change hogi

```css
transition-property: background-color;
```

🧠 *Real-world:*

> Light ka color change hona 💡

---

### ✅ 2. `transition-duration` ⭐

**English:** Time of transition
**Hindi:** Change kitni der me hoga

```css
transition-duration: 0.5s;
```

🧠 *Real-world:*

> Lift kitni speed se upar jaati hai

---

### ✅ 3. `transition-timing-function`

**English:** Speed curve of transition
**Hindi:** Change ka flow

```css
transition-timing-function: ease;
```

Common values:

* `ease`
* `linear`
* `ease-in`
* `ease-out`

🧠 *Real-world:*

> Car dheere start, beech me fast, end me slow 🚗

---

### ✅ 4. `transition-delay`

**English:** Delay before transition starts
**Hindi:** Transition start hone se pehle wait

```css
transition-delay: 0.2s;
```

🧠 *Real-world:*

> Traffic signal green hone se pehle 2 sec ka wait 🚦

---

### ✅ 5. Short-hand (Most used ⭐⭐⭐)

```css
transition: all 0.3s ease;
```

📌 **Interview Tip:**
Ye line interview me bol doge to strong impression padega 😄

---

## 🔹 CSS **Animation** – Commonly Used Properties

### ✅ 1. `@keyframes` ⭐⭐⭐

**English:** Defines animation steps
**Hindi:** Animation ka roadmap

```css
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}
```

🧠 *Real-world:*

> Dance steps sequence 💃

---

### ✅ 2. `animation-name`

**English:** Name of animation
**Hindi:** Kaunsa animation chalega

```css
animation-name: move;
```

---

### ✅ 3. `animation-duration` ⭐

**English:** Animation time
**Hindi:** Animation kitni der chalega

```css
animation-duration: 2s;
```

---

### ✅ 4. `animation-timing-function`

**English:** Speed pattern
**Hindi:** Animation ka flow

```css
animation-timing-function: linear;
```

---

### ✅ 5. `animation-delay`

**English:** Start delay
**Hindi:** Animation start hone se pehle wait

```css
animation-delay: 1s;
```

---

### ✅ 6. `animation-iteration-count` ⭐⭐

**English:** How many times animation runs
**Hindi:** Kitni baar chalega

```css
animation-iteration-count: infinite;
```

🧠 *Real-world:*

> Ceiling fan continuously ghoomta rahe 🌀

---

### ✅ 7. `animation-direction`

**English:** Direction of animation
**Hindi:** Aage ya peeche

```css
animation-direction: alternate;
```

---

### ✅ 8. `animation-fill-mode`

**English:** Animation ke baad element ki position
**Hindi:** End hone ke baad kya hoga

```css
animation-fill-mode: forwards;
```

---

### ✅ 9. `animation-play-state`

**English:** Pause or play
**Hindi:** Rukega ya chalega

animation-play-state: paused;

---

✅ 10. Short-hand (Very Important ⭐⭐⭐)

animation: move 2s linear infinite;




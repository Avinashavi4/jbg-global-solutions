# JBG Global Solutions - CSS Animations & Effects Reference

## Complete Animation Library

### 1. Float Animation
```css
@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
}
```
**Usage**: Floating icons, decorative elements
**Duration**: 4s-6s
**Applied to**: About section icons, process step indicators

### 2. Glow Animation
```css
@keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 168, 232, 0.3); }
    50% { box-shadow: 0 0 40px rgba(0, 168, 232, 0.6); }
}
```
**Usage**: Icon and card glow effects
**Duration**: 2s-3s
**Applied to**: Service icons, stat cards

### 3. Shimmer Animation
```css
@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}
```
**Usage**: Shine effect on hover, text highlights
**Duration**: 3s
**Applied to**: Buttons, icon overlays

### 4. Slide In Up
```css
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(60px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```
**Usage**: Content entering from bottom
**Duration**: 0.8s
**Applied to**: Section headings, form groups, cards

### 5. Slide In Down
```css
@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-60px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```
**Usage**: Elements entering from top
**Duration**: 0.8s
**Applied to**: Navbar transitions

### 6. Slide In Left
```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-60px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```
**Usage**: Content from left side
**Duration**: 0.8s
**Applied to**: Text content in about/portfolio

### 7. Slide In Right
```css
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(60px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```
**Usage**: Images and right-side content
**Duration**: 0.8s
**Applied to**: Hero carousel images, about images

### 8. Pulse Animation
```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}
```
**Usage**: Subtle pulsing effects
**Duration**: 1s-2s
**Applied to**: Step number indicators, stat cards

### 9. Count Up Animation
```css
@keyframes countUp {
    from { 
        opacity: 0;
        counter-increment: count 0;
    }
    to {
        opacity: 1;
        counter-increment: count var(--num);
    }
}
```
**Usage**: Number counter effects
**Duration**: 1.5s
**Applied to**: Statistics numbers

### 10. Bounce In
```css
@keyframes bounceIn {
    0% { 
        opacity: 0;
        transform: scale(0.8) translateY(30px);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
```
**Usage**: Bouncy entrance animations
**Duration**: 0.6s
**Applied to**: Interactive elements, buttons

### 11. Fade In Up
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```
**Usage**: Subtle fade entrance
**Duration**: 0.8s
**Applied to**: Portfolio items, cards

### 12. Rotate In
```css
@keyframes rotateIn {
    from {
        opacity: 0;
        transform: rotate(-10deg) scale(0.9);
    }
    to {
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
}
```
**Usage**: Rotate entrance animations
**Duration**: 0.8s
**Applied to**: Image reveals, icon animations

### 13. Zoom In
```css
@keyframes zoomIn {
    from { 
        transform: scale(1.15) rotate(-2deg); 
        opacity: 0; 
    }
    to { 
        transform: scale(1) rotate(0); 
        opacity: 1; 
    }
}
```
**Usage**: Zoom entrance with slight rotation
**Duration**: 1.2s
**Applied to**: Hero carousel images

---

## Animation Delay Classes

### Staggered Animation Timing
```css
.fade-in-delay-1 { animation-delay: 0.1s; }
.fade-in-delay-2 { animation-delay: 0.2s; }
.fade-in-delay-3 { animation-delay: 0.3s; }
.fade-in-delay-4 { animation-delay: 0.4s; }
.fade-in-delay-5 { animation-delay: 0.5s; }
.fade-in-delay-6 { animation-delay: 0.6s; }
```

**Usage**: Create cascading effect on multiple elements
**Common Pattern**: Grid items, list items, card collections

---

## Easing Functions Used

### Primary Easing
```css
cubic-bezier(0.175, 0.885, 0.32, 1.275)
```
**Effect**: Smooth, bouncy spring-like easing
**Used for**: Most hover effects, primary animations

### Standard Easing
```css
ease-out
```
**Effect**: Smooth deceleration
**Used for**: Entrance animations, slide effects

### Smooth Easing
```css
ease-in-out
```
**Effect**: Smooth acceleration and deceleration
**Used for**: Loop animations, pulses

---

## Transform Effects

### 3D Perspective
```css
transform: perspective(1000px) rotateX(8deg) rotateY(-8deg) scale(1.02);
```
**Effect**: 3D card tilt
**Applied to**: Service cards, portfolio items

### Scale Transforms
```css
transform: scale(1.05);  /* 5% larger */
transform: scale(1.2);   /* 20% larger */
transform: scale(0.95);  /* 5% smaller */
```
**Usage**: Zoom effects, magnification on hover

### Rotation Transforms
```css
transform: rotate(5deg);   /* 5 degree rotation */
transform: rotateZ(10deg); /* Z-axis rotation */
transform: rotateX(8deg);  /* X-axis 3D rotation */
transform: rotateY(-8deg); /* Y-axis 3D rotation */
```
**Usage**: Tilt effects, icon rotations

### Translate Transforms
```css
transform: translateY(-20px);   /* Move up 20px */
transform: translateY(30px);    /* Move down 30px */
transform: translateX(8px);     /* Move right 8px */
transform: translate(-100%, 0); /* Move left 100% width */
```
**Usage**: Slide effects, entrance animations

---

## Gradient Effects

### Linear Gradient
```css
background: linear-gradient(135deg, #00a8e8 0%, #00d4ff 100%);
```
**Effect**: Smooth color transition
**Used for**: Button backgrounds, icons, borders

### Radial Gradient
```css
background: radial-gradient(circle, rgba(0, 168, 232, 0.1) 0%, transparent 70%);
```
**Effect**: Circular glow effect
**Used for**: Decorative background circles

### Gradient Text
```css
background: var(--gradient-cyan);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```
**Effect**: Colored text with gradient
**Used for**: Headings, titles

---

## Glassmorphism Effects

### Backdrop Filter
```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.85);
border: 1px solid rgba(0, 168, 232, 0.1);
```
**Effect**: Frosted glass appearance
**Used for**: Cards, form inputs, overlays

---

## Box Shadow Techniques

### Glow Effect
```css
box-shadow: 0 0 20px rgba(0, 168, 232, 0.3);
```

### Multi-Layer Shadow
```css
box-shadow: 
    0 5px 30px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
```

### Hover Enhancement
```css
box-shadow: 0 40px 100px rgba(0, 168, 232, 0.2);
```

---

## Pseudo-Element Animations

### Underline Animation
```css
element::after {
    content: '';
    width: 0;
    height: 3px;
    background: var(--gradient-cyan);
    transition: width 0.4s ease;
}

element:hover::after {
    width: 100%;
}
```
**Effect**: Sliding underline on hover
**Used for**: Nav links, text links

### Gradient Slide
```css
element::before {
    content: '';
    position: absolute;
    left: -100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
}

element:hover::before {
    left: 100%;
}
```
**Effect**: Shine/shimmer effect
**Used for**: Buttons on hover

### Border Pulse
```css
element::after {
    content: '';
    position: absolute;
    inset: -5px;
    border: 2px solid rgba(0, 168, 232, 0.2);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}
```
**Effect**: Pulsing border ring
**Used for**: Step numbers, icons

---

## Recommended Animation Usage

### Page Load
- `slideInUp` for headings
- Staggered `fade-in-delay-*` for cards
- `bounceIn` for interactive elements

### Hover States
- `scale()` and `translateY()` for lift effect
- Gradient background sliding with `::before`
- Color transitions on text elements

### Scroll Animations
- `slideInUp` on scroll into view
- `fadeInUp` for subtle entrances
- Staggered delays for grid items

### Interactive Elements
- `scale()` for zoom feedback
- `rotateZ()` for rotation feedback
- `translateY()` for lift feedback
- Shadow enhancement on hover

---

## Performance Tips

1. **Use Transform & Opacity**: These are GPU-accelerated
   ```css
   /* ✅ Good - GPU accelerated */
   transform: translateY(-20px);
   opacity: 0.5;
   
   /* ❌ Bad - Causes repaints */
   top: -20px;
   margin-top: -20px;
   ```

2. **Minimize Repaints**: Avoid animating box-shadow, colors when possible
   ```css
   /* Instead of animating box-shadow, use: */
   background: var(--gradient-cyan);
   transform: scale(1.05);
   ```

3. **Use will-change Sparingly**:
   ```css
   .element {
       will-change: transform;
   }
   ```

4. **Stagger Animations**: Prevents jank from too many simultaneous animations
   ```css
   .item:nth-child(1) { animation-delay: 0.1s; }
   .item:nth-child(2) { animation-delay: 0.2s; }
   ```

---

## Browser Support

- **Chrome/Edge**: Full support for all effects
- **Firefox**: Full support including scrollbar styling
- **Safari**: Requires -webkit- prefixes (already included)
- **Mobile**: All effects work on touch devices

---

## Animation Maintenance

### To Add New Animations:
1. Define `@keyframes` in animations section
2. Add to relevant CSS class or element
3. Update easing and duration as needed
4. Test across browsers
5. Document in this file

### Common Issues & Solutions:

**Animation Stuttering**
```css
/* Add to animated element */
backface-visibility: hidden;
perspective: 1000px;
```

**Animation Jank**
```css
/* Ensure only transform & opacity animate */
animation-property: transform, opacity;
/* or use explicit */
will-change: transform;
```

**Mobile Performance**
```css
/* Reduce animation complexity on mobile */
@media (max-width: 768px) {
    animation-duration: 0.4s; /* Shorter */
    transform: scale(1.01);  /* Smaller scale */
}
```

---

*Last Updated: 2024*
*Version: 2.0 - Advanced UI/UX Enhancement*

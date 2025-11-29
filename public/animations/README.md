# Lottie Animations

Place your Lottie JSON animation files here.

## Scroll to Explore Animation

To use a Lottie animation for the scroll indicator:

1. Create or download a Lottie JSON file (e.g., `scroll-to-explore.json`)
2. Place it in this folder
3. Update the Hero component to use it:

```tsx
import scrollAnimation from "@/public/animations/scroll-to-explore.json";

<ScrollIndicator
  useLottie={true}
  lottieData={scrollAnimation}
  onClick={() => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  }}
/>
```

## Creating the Animation

You can create the Lottie animation using:
- [LottieFiles](https://lottiefiles.com/) - Online editor
- [After Effects](https://www.adobe.com/products/aftereffects.html) with Bodymovin plugin
- [Rive](https://rive.app/) - Alternative animation tool

### Requirements for Scroll to Explore Animation:
- Transparent background
- Simple white mouse-outline shape with rounded corners
- Small white dot that moves down, fades out, then reappears at top (loop)
- "Scroll to Explore" text below with subtle fade-in-out
- 60 fps, 1.5-2 seconds loop
- Minimal, modern style


---
title: "How to Remove Shadow from Scanned Documents on Android"
description: "Shadow ruining your document scans? Here's how to capture clean, shadow-free PDFs on your Android phone in any lighting — without any editing software."
date: "2026-04-09"
tags: ["scanvo", "pdf-scanner", "tutorial"]
author: "anuj-sharma"
---

You scan a document, look at the result, and there it is — a dark shadow stretching across half the page. Sometimes it's the shadow of your own hand. Sometimes it's the shadow of your phone. Sometimes it's just bad ceiling light. Either way, the scan looks unprofessional and the text in the shadowed area is hard to read.

Here's how to fix it. Two ways: prevent it during the scan, and remove it afterwards.

## Quick answer

**To prevent shadows:** Use side-light from a window, hold your phone at least 12 inches above the document, and avoid the camera flash. **To remove existing shadows:** Open your scan in **[Scanvo](https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo)** and apply the **Best** filter — it normalizes background lighting so the shadow disappears.

## Why phone scans get shadows

A document scan picks up shadows from three sources:

1. **The phone itself** casts a shadow on the document because you're holding the phone above the page. This is unavoidable with a single overhead light source.
2. **Uneven room lighting** — one part of the page is closer to a lamp than another, so the brightness gradient becomes a soft shadow.
3. **Folded or curled paper** creates micro-shadows along its creases.

The fix has two parts: better lighting at capture time, and software cleanup afterwards.

## Method 1: Prevent shadows during the scan

### Use diffused side lighting
The single biggest improvement you can make is to position your light source **to one side** of the document, not directly overhead. A window during the day works perfectly. A desk lamp angled from the side also works. Avoid:

- Overhead ceiling lights
- The camera flash (creates a hard hotspot)
- Direct sunlight (creates harsh edge shadows)

### Hold your phone high
The closer your phone is to the document, the bigger its shadow. Hold the phone at least 12 inches (30 cm) above the page so its shadow falls outside the capture area.

### Use a bigger surface
If you can, scan on a large white desk or a piece of white paper bigger than your document. This bounces ambient light back up onto the document and softens shadows.

### Lay the paper flat
Curled receipts and folded contracts create their own micro-shadows along the creases. Flatten the paper with something heavy on the corners (a phone, a cup) before scanning.

## Method 2: Remove shadows after the scan

If you've already scanned and the shadow is there, don't re-scan. Just clean it up in software.

### Step 1: Open the scan in Scanvo
If you didn't scan with Scanvo, you can still use it as an editor. Open Scanvo, tap **Import from Gallery**, and pick the scanned image.

### Step 2: Open the editor
Tap on the imported page to open the Edit screen.

### Step 3: Apply the Best filter
At the bottom, tap the **Filters** tab. Select **Best**.

The Best filter does something special: it estimates the local background brightness across the image and divides it out. This is called *background subtraction* in image processing terms, and it's the same technique professional document scanners use to handle uneven lighting.

The result: the shadow disappears, the background becomes uniformly white, and the text becomes crisp and dark — even in areas that were previously shadowed.

### Step 4: Adjust if needed
If the shadow is very dark, you may need to combine filters. After Best, switch to the **Adjust** tab and:

- Bump **Brightness** by +10 to +20
- Bump **Contrast** by +10
- Leave **Saturation** at 0 for documents

### Step 5: Save
Tap **Save** to commit the changes to the document. Your scan is now shadow-free.

## Pro tips for the cleanest scans

- **Use a black or dark surface as a background.** This not only helps edge detection but also reduces glare reflections that masquerade as shadows.
- **For glossy documents** (laminated cards, glossy magazine pages), tilt the document slightly so reflections fall outside the capture area, then re-flatten before tapping capture.
- **For very large pages**, scan in two halves and merge them in Scanvo's PDF tools.
- **For receipts**, the Best filter is dramatically better than the default filter — receipts have lots of background texture that confuses simpler filters.
- **For handwritten notes**, switch to the **Sharpen** filter after Best — it makes pencil and ink edges crisper.

## Frequently asked questions

**Why does the Best filter sometimes make things look weird?**
Best is optimised for documents (high-contrast text on a uniform background). If you apply it to a photograph or a colour image, it will look odd because it tries to force the background to white. For photos, use the **Auto** filter instead.

**Can I use Best on coloured documents?**
Yes. Best preserves coloured highlights and stamps while still cleaning the background. It's the safest filter for forms with stamps or signatures.

**My shadow is huge — does this actually work?**
Best handles soft shadows perfectly. Hard shadows (like the sharp edge of your phone's silhouette) are harder. If the shadow is *really* bad, your only real fix is to re-scan with better lighting.

**How fast is the Best filter?**
On a modern phone, less than a second. Older devices might take 2-3 seconds. Either way, much faster than the previous version of the filter — we recently optimised it dramatically.

**Does Scanvo work without internet?**
Yes, completely. The Best filter and every other feature run locally on your device.

## Try Scanvo free

Scanvo is free, runs offline, and the Best filter is genuinely the best document-cleaning filter we've shipped. No watermark, no ads, no signup.

[Download Scanvo on Google Play](https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo)

Read more about Scanvo on the [product page](/products/scanvo/).

---

**Related guides:**

- [How to scan a document to PDF on Android without internet](/blog/how-to-scan-document-to-pdf-android-offline/)
- [How to scan Aadhaar card front and back as one PDF](/blog/how-to-scan-aadhaar-card-front-back-as-pdf/)
- [How to extract text from any image with OCR on Android](/blog/how-to-extract-text-from-image-android-ocr/)

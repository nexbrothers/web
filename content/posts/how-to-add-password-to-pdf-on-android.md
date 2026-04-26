---
title: "How to Add a Password to a PDF on Android (Free, Offline)"
description: "Lock any PDF with a password on your Android phone — completely offline, no signup, no upload. Step-by-step guide using Scanvo's PDF protection tool."
date: "2026-03-27"
tags: ["scanvo", "pdf-tools", "privacy", "tutorial"]
author: "anuj-sharma"
---

You're about to email a contract, a bank statement, an Aadhaar copy, or anything sensitive — and you'd like to add a password so only the recipient can open it. Most online "PDF password" tools want you to upload your PDF to their server first, which defeats the entire point of password-protecting it.

Here's how to do it properly: on your phone, offline, in 30 seconds.

## Quick answer

Open **[Scanvo](https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo)**, tap **Tools → Lock PDF**, pick your PDF, type a password, confirm it, and tap **Lock**. The protected PDF can only be opened by anyone with the password — no internet required at any step.

## Why offline PDF locking matters

Online "lock PDF" services have a fundamental contradiction:

- You upload your sensitive PDF
- It sits on their server
- They process it
- They send you back a "protected" version

Your PDF was on a stranger's server during step 2 and 3. Unencrypted. **Anyone with access to that server can read it before it's locked.** Some tools claim to delete files after processing, but you have no way to verify.

A native phone app fixes this completely. The PDF never leaves your device. No third party ever sees it.

## Step-by-step guide

### Step 1: Install Scanvo
Free, offline, no signup. Get it from the Play Store.

[Download Scanvo on Google Play](https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo)

### Step 2: Open the Lock PDF tool
From the home screen, tap **Tools**. You'll see a grid of PDF utilities. Tap **Lock PDF**.

### Step 3: Pick the PDF you want to protect
Tap **Select PDF**. Your phone's file picker opens. Navigate to the PDF — Downloads, Scanvo's library, WhatsApp Documents, anywhere. Tap to select it.

### Step 4: Enter a password
Type the password you want to use. Then type it again in the confirmation field. Tips for a good PDF password:

- **Long is better than complex**: a 16-character passphrase is harder to crack than an 8-character random string
- **Don't reuse important passwords**: PDF encryption is decent but not perfect. Don't use your bank password.
- **Make it shareable**: you'll likely send the password separately to the recipient. Make it something easy to type but hard to guess.
- **Avoid personal info**: birthdays, phone numbers, names — first guesses for any attacker

A good example: `Sunset-Mountain-9472` — easy to type, hard to guess, no personal info.

### Step 5: Tap Lock
Scanvo encrypts the PDF locally using AES-256, the same encryption Adobe Acrobat uses for password-protected PDFs. This takes 1-3 seconds.

### Step 6: Save or share
Tap **Save** to keep the locked PDF in your Scanvo library, or **Share** to send it directly via email, WhatsApp, or any other app. The original (unlocked) PDF is unchanged — only a new locked copy is created.

### Step 7: Send the password separately
This is critical. **Never send a locked PDF and its password through the same channel.** If you email the PDF, send the password via WhatsApp. If you WhatsApp the PDF, share the password verbally on a call or via SMS.

Sending both through the same channel defeats the entire point of password-protecting the file.

## Pro tips for PDF security

- **Use one password per recipient**: don't reuse the same PDF password for multiple people. If one leaks, they all leak.
- **Set an expiry reminder**: agree with the recipient that they'll delete the PDF after they're done with it. PDF encryption doesn't auto-expire.
- **Combine with password-hashing**: for very sensitive documents, use a passphrase derived from a memorable phrase, not a random string. Easier to remember, equally secure.
- **Don't password-protect public documents**: if a document is meant to be shared widely, don't lock it. Locked PDFs are blocked by many email filters and downloaded less often.
- **Test before sending**: open the locked PDF in a different app to make sure the password actually works. You don't want to discover it's broken after the recipient already complained.

## What kind of encryption does Scanvo use?

Scanvo's Lock PDF uses **AES-256 encryption** with a user-supplied password. This is the same standard used by:

- Adobe Acrobat Pro
- Microsoft Office's "encrypt with password" feature
- Most enterprise document management systems
- Banking PDFs

For ordinary use, AES-256 is uncrackable without the password. Even a powerful computer would need many years to brute-force a strong passphrase.

The encryption happens **on your device**. Scanvo doesn't send the password or the PDF to any server. There's no master password, no recovery option, no backdoor. **If you forget the password, the PDF is unrecoverable.** This is the trade-off for real security.

## Frequently asked questions

**Can I unlock a PDF I already have the password for?**
Yes. Use **Tools → Unlock PDF**. Enter the password and Scanvo creates an unlocked copy.

**Can Scanvo crack a PDF if I forgot the password?**
No. Scanvo uses standard encryption that's designed to be impossible to crack. If you forgot the password and there's no backup, the PDF is permanently inaccessible. This is a feature, not a bug.

**Will the locked PDF open in Adobe Reader, Foxit, etc.?**
Yes. Scanvo uses standard PDF encryption, so the locked file opens in any PDF reader (mobile or desktop) when the password is provided.

**Can I add a password to a PDF that's already password-protected?**
First unlock it (Tools → Unlock PDF, you must know the current password), then re-lock with the new password.

**Will the locked PDF have a watermark?**
No. Scanvo never adds watermarks.

**Will Scanvo upload my PDF when locking it?**
No. Every step is offline. Your PDF and password never leave your phone.

**Can I lock multiple PDFs at once?**
Currently you lock one at a time. For batches, queue them — the process is fast (a few seconds each).

**What's the maximum password length?**
255 characters, which is the PDF spec limit. Stay well under that — long passwords are hard to type on mobile.

**Can I add different permissions** (e.g., allow viewing but disallow printing)?
Currently Scanvo's Lock PDF supports the basic "open with password" mode. More granular permissions (no print, no copy, no edit) are planned for a future update.

**Are locked PDFs accepted by official portals?**
Most government and bank portals accept locked PDFs for sensitive documents like ID cards. They'll ask you to provide the password separately when uploading.

## Try Scanvo free

Scanvo's PDF lock feature is free, runs offline, and uses real AES-256 encryption. Your sensitive documents stay on your phone — protected, not uploaded.

[Download Scanvo on Google Play](https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo)

More on the [Scanvo product page](/products/scanvo/).

---

**Related guides:**

- [How to sign a PDF on Android without uploading it anywhere](/blog/how-to-sign-pdf-on-android-without-uploading/)
- [How to compress PDF on Android without losing quality](/blog/how-to-compress-pdf-on-android-without-losing-quality/)
- [Are document scanner apps safe? An honest privacy guide](/blog/are-document-scanner-apps-safe-privacy-guide/)

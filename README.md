# 💕 Nana's Valentine Card

An interactive, romantic Valentine's Day microsite built with React, Vite, Tailwind CSS, Framer Motion, and canvas-confetti.

## ✨ Features

- **🎨 Step 1 - The Ask**: Beautiful card with the question "Will you be my valentine mi amor, Nana?"
- **🏃 Elusive No Button**: The "No" button teleports away whenever you try to click it—mathematically impossible to select!
- **🎉 Step 2 - Celebration**: Confetti animation with reveal of:
  - 💅 Nail Salon Gift Card
  - 📍 Pickup details (5:00 PM pickup, Josephine DTLA)
- **📅 Step 3 - Actions**:
  - Add to Google Calendar (Feb 14, 2026, 5:00 PM PST)
  - Reschedule with date picker + SMS notification

## 🎨 Design

- **Colors**: Cupid Pink (#FF69B4) & Marshmallow White (#F8F8FF)
- **Responsive**: 100vh viewport with max-height 450px card
- **Mobile-first**: Works beautifully on all devices
- **Smooth Animations**: Framer Motion for delightful interactions

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build

```bash
npm run build
npm run preview  # Test the production build locally
```

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **canvas-confetti** - Celebration effects
- **react-datepicker** - Date selection
- **PostCSS** - CSS processing

## 🌐 Deployment

### 1️⃣ Deploy to Vercel (Easiest)

```bash
# Push to GitHub first
git remote add origin https://github.com/YOUR_USERNAME/valentine-card.git
git push -u origin main

# Then visit vercel.com/import and select your repo
# Vercel will auto-detect Vite and deploy!
```

### 2️⃣ Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📋 Project Structure

```
valentine-card/
├── src/
│   ├── components/
│   │   ├── ValentineCard.jsx      # Main interactive component
│   │   └── ValentineCard.css      # Component styling
│   ├── App.jsx                     # App wrapper
│   ├── main.jsx                    # React DOM entry
│   └── index.css                   # Tailwind + global styles
├── dist/                           # Production build
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                     # Vercel configuration
└── DEPLOYMENT.md                   # Detailed deployment guide
```

## 🎯 How to Use

### As a User
1. Visit the deployed link
2. Read the question and click "Yes!" 💕
3. Watch the confetti celebration
4. Either add to calendar or reschedule
5. Perfect date planned! ✨

### As a Developer
- Edit `src/components/ValentineCard.jsx` to customize:
  - The question/message
  - Dates and times
  - Colors and fonts
  - Gift card details
  - Destination

## 🎨 Customization Examples

**Change the question:**
```jsx
// In ValentineCard.jsx, find:
<h1 className="text-4xl font-bold text-cupidPink">
  Will you be my valentine
</h1>
<p className="text-3xl font-bold text-cupidPink italic">
  mi amor, Nana?
</p>
// Edit the text as desired
```

**Change colors:**
```jsx
// Replace #FF69B4 with your pink, #F8F8FF with your white
// Or update tailwind.config.js colors
```

**Update the gift/destination:**
```jsx
<div className="bg-cupidPink/10 rounded-2xl p-6 space-y-3">
  <div className="text-2xl font-bold text-cupidPink">
    💅 Your Gift Here
  </div>
  <p className="text-lg font-bold text-cupidPink">
    Your Details Here
  </p>
</div>
```

## 🎮 Interactive Elements

- **Yes Button**: Triggers celebration confetti and Step 2 reveal
- **No Button**: Escapes all interaction attempts using:
  - `onMouseEnter`: Teleports on hover
  - `onPointerDown`: Teleports on click/tap
  - Random position within card bounds
- **Add to Calendar**: Opens Google Calendar event creator
- **Reschedule**: Opens date picker, triggers SMS template
- **Date Picker**: Allows selecting a new date with visual feedback

## 🔔 SMS Integration

The reschedule feature includes an SMS template. To enable actual SMS sending:

1. Sign up for [Twilio](https://www.twilio.com) or similar SMS service
2. Add credentials to `.env`:
   ```
   VITE_USER_PHONE=+1234567890
   VITE_SMS_API_KEY=your_api_key
   ```
3. Uncomment the SMS send code in `ValentineCard.jsx`
4. Deploy to Vercel with environment variables configured

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

**Confetti not showing?**
- Check browser console for errors
- Ensure canvas-confetti is installed: `npm install canvas-confetti`

**Date picker not working?**
- Verify react-datepicker CSS is imported
- Check browser console for CSS import errors

**Buttons not responsive?**
- Clear browser cache
- Check that Tailwind CSS is properly compiled
- Run `npm run build` to test production build

## 📄 License

Created with ❤️ for Nana's Valentine's Day

## 🙌 Credits

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Confetti by [canvas-confetti](https://www.kirilv.com/canvas-confetti/)

---

**Ready to deploy?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for quick setup instructions!

💕 Happy Valentine's Day! 💕

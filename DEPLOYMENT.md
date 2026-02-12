# Nana's Valentine Card - Deployment Guide

## ✨ Features Implemented

- ✅ **Step 1 - The Ask**: "Will you be my valentine mi amor, Nana?" with heart emoji placeholder
- ✅ **Elusive No Button**: Uses `onPointerDown` and `onMouseEnter` to teleport the "No" button to random positions within card bounds - mathematically impossible to click!
- ✅ **Step 2 - Yes Reveal**: 
  - 🎉 Confetti animation
  - 💅 "Nail Salon Gift Card" display
  - 📍 "Picking you up at 5:00 PM. Destination: Josephine DTLA."
- ✅ **Step 3 - Actions**:
  - 📅 **Confirm Button**: Opens Google Calendar creation link for Feb 14, 2026, 5:00 PM PST
  - 📅 **Reschedule Button**: Interactive date picker with SMS notification template
- ✅ **Design**: Cupid Pink (#FF69B4) & Marshmallow White (#F8F8FF) palette
- ✅ **Non-scrolling**: 100vh viewport with max-height 450px card

## 🚀 Quick Deployment to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Create a GitHub Repository**
   ```bash
   # Go to https://github.com/new and create a public repo named "valentine-card"
   ```

2. **Push Code to GitHub**
   ```bash
   cd /path/to/valentine-card
   git remote add origin https://github.com/YOUR_USERNAME/valentine-card.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to https://vercel.com/import
   - Select your GitHub repository
   - Click "Deploy"
   - Vercel will auto-detect it's a Vite React project and deploy!

### Option 2: Direct Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd valentine-card
   vercel
   ```

4. **Make it Public (via Web Dashboard)**
   - Go to your project on https://vercel.com/dashboard
   - Settings → General → Project was created by transfer or script → Make Public

## 📦 Build Information

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Effects**: canvas-confetti
- **Date Picker**: react-datepicker
- **Build Output**: `/dist` folder (ready for deployment)

## ✅ Testing Locally

```bash
npm run dev
# Visit http://localhost:5173
```

## 🔧 Environment Variables (Optional)

For SMS integration in production, add to `.env`:
```
VITE_USER_PHONE=+1234567890  # Phone number for SMS reschedule
VITE_SMS_API_KEY=your_api_key  # If using an SMS service like Twilio
```

## 📋 Project Structure

```
valentine-card/
├── src/
│   ├── components/
│   │   ├── ValentineCard.jsx (main component)
│   │   └── ValentineCard.css (date picker styling)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css (Tailwind directives)
├── dist/ (build output - ready to deploy)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json (zero-config deployment)
```

## 🎯 How It Works

**Step 1 - The Ask:**
- Beautiful card displays the question with an animated heart
- "Yes" button is clickable and normal
- "No" button teleports away on hover/click

**Step 2 - Celebration:**
- Confetti animation triggers
- Reveals the nail salon gift card + pickup details
- Two action buttons appear

**Step 3 - Confirm or Reschedule:**
- **Confirm**: Links to Google Calendar to create/confirm the event
- **Reschedule**: Opens a date picker, would send SMS with reschedule request

## 🎨 Customization

Edit `src/components/ValentineCard.jsx` to:
- Change the title/message
- Modify dates and times
- Update colors (search for `#FF69B4` or `#F8F8FF`)
- Add your phone number for SMS
- Change the destination location

## 📱 Mobile Responsive

The card is designed to be responsive and works well on mobile devices (100vh viewport constraint).

## 🐛 Troubleshooting

**"build failed" errors:**
- Ensure all dependencies are installed: `npm install --include=dev`
- Clear npm cache: `npm cache clean --force`

**Vercel import not working:**
- Make sure your GitHub repo is public
- Ensure the repo has a valid `package.json`
- Try pushing code again: `git push -u origin main`

**Date picker not showing:**
- Ensure `react-datepicker` CSS is imported in `ValentineCard.jsx`
- Check browser console for errors

## ✉️ SMS Integration Notes

Currently, the reschedule feature shows an alert with the message template. To implement actual SMS:

1. Sign up for a service like Twilio or AWS SNS
2. Add API credentials to environment variables
3. Uncomment the SMS send code in `ValentineCard.jsx` (lines marked with SMS)
4. Deploy to Vercel with env variables set

## 🎉 You're All Set!

The Valentine Card is ready to deploy! Follow one of the deployment options above and you'll have your live URL within minutes.

**Questions?** Check Vercel's docs or the react-datepicker/framer-motion/canvas-confetti documentation.

Good luck! 💕

#!/bin/bash

# Nana's Valentine Card - Quick Deploy Script
# This script automates GitHub repo creation and initial setup for Vercel deployment

echo "💕 Nana's Valentine Card - Quick Deploy Helper 💕"
echo ""
echo "This script will help you deploy to GitHub and Vercel."
echo ""

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI (gh) not found."
    echo "Please install from https://cli.github.com/"
    echo ""
    echo "Or manually:"
    echo "1. Go to https://github.com/new"
    echo "2. Create a public repo named 'valentine-card'"
    echo "3. Run these commands:"
    echo ""
    echo "git remote add origin https://github.com/YOUR_USERNAME/valentine-card.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    echo ""
    exit 1
fi

# Check if user is logged in to GitHub
if ! gh auth status &> /dev/null; then
    echo "🔐 Please log in to GitHub:"
    gh auth login
fi

# Create GitHub repo
echo ""
echo "📦 Creating GitHub repository..."
read -p "Repo name (default: valentine-card): " REPO_NAME
REPO_NAME=${REPO_NAME:-valentine-card}

read -p "Repo description (default: Interactive Valentine's Day microsite): " REPO_DESC
REPO_DESC=${REPO_DESC:-Interactive Valentine's Day microsite}

gh repo create "$REPO_NAME" \
    --public \
    --source=. \
    --remote=origin \
    --push \
    --description "$REPO_DESC"

if [ $? -eq 0 ]; then
    echo "✅ Repository created and code pushed to GitHub!"
    echo ""
    echo "📍 Next steps:"
    echo "1. Go to https://vercel.com/import"
    echo "2. Select your GitHub repository: $REPO_NAME"
    echo "3. Click 'Deploy'"
    echo ""
    echo "🎉 Your live URL will be displayed after deployment!"
    echo ""
    echo "Vercel will auto-detect the Vite React project and configure it."
    echo "No additional configuration needed!"
else
    echo "❌ Repository creation failed. Please try again or create manually."
    exit 1
fi

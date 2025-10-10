# Premium Portfolio Website

A modern, elegant portfolio website built with Next.js, React, and Tailwind CSS, deployed to GitHub Pages.

## ✨ Features

- 🎨 Premium modern design with animations and gradient effects
- 📱 Fully responsive design for all devices
- 🎭 Glassmorphism effects for a sophisticated look
- ✨ Smooth animations and transitions
- 🔗 Linktree-style homepage
- 📄 Professional resume/about page
- 💼 Project portfolio showcase

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.17
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Local Development

```bash
npm run dev
```

The site will be running at http://localhost:3010

### Build Project

```bash
npm run build
```

### Export Static Site

```bash
npm run export
```

## 🎨 Customization

### Update Personal Information

Edit the `src/data/data.js` file:

1. **Personal Info**: Update the `personalInfo` object
2. **Social Links**: Modify the `socialLinks` array
3. **Education**: Edit the `education` array
4. **Experience**: Update the `experience` array
5. **Skills**: Modify the `skills` object
6. **Projects**: Edit the `projects` array

### Add Images

- **Avatar**: Place at `public/images/avatar.jpg`
- **Project Screenshots**: Place in `public/images/projects/`

## 🚀 Deploy to GitHub Pages

The project is configured with GitHub Actions for automatic deployment.

### Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under Source, select "GitHub Actions"
4. The workflow will automatically deploy on push to main branch

Your site will be available at: `https://yuchen-land.github.io/personal-land/`

## 📁 Project Structure

```
personal-land/
├── public/
│   └── images/
│       ├── avatar.jpg
│       └── projects/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── portfolio/
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   └── ProjectCard.js
│   └── data/
│       └── data.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🎯 Design Features

- **Elegant Color Scheme**: Violet, purple, and rose gradients
- **Modern Typography**: Inter font family for clean readability
- **Smooth Animations**: Fade-in, blob, and gradient animations
- **Hover Effects**: Interactive elements with scale and translate transforms
- **Glassmorphism**: Backdrop blur effects for premium feel
- **Responsive Layout**: Mobile-first design approach

## 📝 License

MIT License

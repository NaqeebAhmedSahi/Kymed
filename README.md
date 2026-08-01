[![Shopco Screenshot](https://github.com/mohammadoftadeh/repo-assets/blob/main/shopco-cover.png?raw=true)](https://next-ecommerce-shopco.vercel.app/)

# Shopco

Shopco is an open-source project that converts a Figma design of an e-commerce website into a fully responsive front-end application. It utilizes **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Redux**, **Framer Motion**, and **ShadCN UI** to deliver a modern, scalable, and optimized solution based on industry standards.

## Table of Contents

- [Shopco](#shopco)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Demo](#demo)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Domain & deployment (Vercel)](#domain--deployment-vercel)
  - [Contributing](#contributing)
  - [Issues](#issues)
  - [License](#license)
  - [Contact](#contact)

## Overview

Shopco bridges the gap between design and development by converting Figma designs into production-ready code. The project follows best practices for **SEO**, **performance optimization**, and **accessibility**, making it a perfect foundation for developers looking to create scalable and maintainable e-commerce front-ends.

## Demo

Check out the live demo: [Shopco Demo](https://next-ecommerce-shopco.vercel.app/)

<!-- [![Shopco Screenshot](https://github.com/mohammadoftadeh/repo-assets/blob/main/shopco-cover.png?raw=true)](https://next-ecommerce-shopco.vercel.app/) -->

## Features

- **Next.js 14**: Server-side rendering (SSR), Static Site Generation (SSG), optimized routing, and API integrations.
- **TypeScript**: Strongly typed code for better error detection and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Redux**: State management for managing the shopping cart and other global states.
- **Framer Motion**: Smooth animations and transitions for an enhanced user experience.
- **ShadCN UI**: Beautifully styled, accessible, and customizable UI components.
- **Fully Responsive**: Mobile-first design ensuring the layout adapts across devices.
- **Performance Optimized**: Best practices followed for fast loading and interaction.
- **Accessible**: Built with accessibility standards to provide an inclusive experience.

## Technologies

- **Next.js 14** - A popular React framework with built-in SSR and optimization.
- **TypeScript** - A superset of JavaScript for strong typing and code consistency.
- **Tailwind CSS** - A utility-first CSS framework for fast, responsive design.
- **Redux** - A state management library used for the shopping cart and global app state.
- **Framer Motion** - A library for animations and interactions in React.
- **ShadCN UI** - A collection of beautiful, accessible, and customizable UI components.
- **Figma** - The design tool used as the source of the project’s layout. The [Figma file](https://www.figma.com/community/file/1273571982885059508/e-commerce-website-template-freebie) designed by [Hamza Naeem](https://www.figma.com/@hamzauix)

## Installation

To get started with Shopco locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mohammadoftadeh/next-ecommerce-shopco.git
   cd next-ecommerce-shopco
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   ```bash
   yarn dev
   ```

4. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- To explore or modify the code, navigate through the `components`, `features`, and `app` directories.
- The shopping cart logic is managed using **Redux**. You can find the store configuration and cart actions in the `src/lib/features` directory.
- **ShadCN UI** components are used across the app. They can be customized in the `src/components/ui` directory.
- You can easily modify and extend the project to suit your needs, whether for personal use or professional projects.

## Project Structure

```bash
Shopco/
│
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable components (including ShadCN UI components)
│   └── lib/
│       ├── features/      # The Redux logics for features (e.g., shopping cart)
│       ├── hooks/         # Custom React hooks
│       ├── store.ts       # Redux store
│       ├── utils.ts       # Utility functions
│   ├── styles/            # Tailwind CSS styles (global, utilities and fonts)
│   ├── types/             # TypeScript types
│
├── components.json         # ShadCN UI configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Node.js dependencies and scripts
├── postcss.config.mjs      # Post CSS configuration
└── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
```

## Domain & deployment (Vercel)

Use these steps when moving **kymed.co** to a new Vercel project (or after removing it from an old/paused project). Doing this wrong can show “deployment paused”, block domain add, or cause `ERR_TOO_MANY_REDIRECTS`.

### 1. Remove the domain from the old Vercel project

1. Open [vercel.com/dashboard](https://vercel.com/dashboard).
2. Open the **old / paused** project that still owns the domain.
3. Go to **Settings → Domains**.
4. Remove **`kymed.co`** and **`www.kymed.co`** (⋯ → **Remove**).
5. Confirm removal on both.

Until this is done, the new project cannot fully use the domain.

### 2. Add the domain on the new Vercel project

1. Open the **new / active** KyMed project.
2. Go to **Settings → Domains → Add**.
3. Add **`kymed.co`** and **`www.kymed.co`**.

### 3. Verify ownership with a TXT record (if Vercel asks)

If Vercel says the domain is linked to another account, it will ask for a TXT record:

| Field | Value |
| --- | --- |
| Type | **TXT** (not A, not CNAME) |
| Name / Host | `_vercel` |
| Value | The exact string shown in Vercel (e.g. `vc-domain-verify=...`) |

Add it in cPanel → **Zone Editor** for `kymed.co`:

1. Open cPanel: [https://mail.kymed.co:2083](https://mail.kymed.co:2083)
2. Open **Zone Editor** → select **kymed.co**
3. **Add Record** → Type **TXT**, Name `_vercel`, paste Vercel’s value → **Save**
4. Back in Vercel, click **Refresh / Verify**
5. After verification succeeds, you can delete the TXT record if you want

> Underscores are not allowed on **A** records. If you see *“An A record may not contain an underscore”*, change Type from **A** to **TXT**.

### 4. Set primary domain vs www (avoid redirect loops)

**Wrong setup (causes `ERR_TOO_MANY_REDIRECTS`):**
- `kymed.co` redirects to `www.kymed.co`
- `www.kymed.co` redirects back to `kymed.co`

**Correct setup:**

#### For `kymed.co` (primary)
1. Domains → click **`kymed.co`**
2. Select **Connect to an environment**
3. Environment: **Production**
4. **Save**

#### For `www.kymed.co`
1. Domains → click **`www.kymed.co`**
2. Select **Redirect to Another Domain**
3. Destination: **`kymed.co`**
4. Redirect: **308 Permanent Redirect**
5. **Save**

Result:
- `https://kymed.co` → serves the site  
- `https://www.kymed.co` → redirects to `https://kymed.co`

### 5. DNS tips

- Keep apex / www pointed as Vercel instructs (usually A/CNAME to Vercel).
- DNS for email/cPanel stays on Idea Servers (`mail.kymed.co`, MX, etc.).
- After domain changes, wait a few minutes and test in a private/incognito window.

### 6. cPanel access

Because the website domain is on Vercel, `https://kymed.co/cpanel/` does not open hosting cPanel by itself.

- Direct cPanel login: [https://mail.kymed.co:2083](https://mail.kymed.co:2083)
- The app also redirects `/cpanel` → that login URL (see `next.config.mjs`) once the **active** Vercel project is serving the domain.

### Quick checklist when the project changes

1. Remove domain from old Vercel project  
2. Add domain on new Vercel project  
3. Add `_vercel` **TXT** if asked, then verify  
4. `kymed.co` → Connect to Production  
5. `www.kymed.co` → Redirect to `kymed.co`  
6. Redeploy and test apex + www  

## Contributing

Contributions are welcome! If you'd like to contribute, Please follow these steps to contribute to Shopco:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Issues

Feel free to submit issues for any bugs, feature requests, or general questions related to the project. You can also reach out via [email](mailto:mr.mohammadoftadeh@gmail.com) for support.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.

## Contact

Feel free to reach out to:

- **Name**: Mohammad Oftadeh
- **Email**: [mr.mohammadoftadeh@gmail.com](mailto:mr.mohammadoftadeh@gmail.com)
- **GitHub**: [https://github.com/mohammadoftadeh](https://github.com/mohammadoftadeh)

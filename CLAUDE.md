# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CustomWig is a React-based custom wig configurator that integrates with WordPress/WooCommerce. Users step through a multi-slide wizard to customize their wig (hair type, color, length, density, lace options, measurements) and add it to their WooCommerce cart.

## Commands

- `npm start` / `npm run dev` - Start development server at localhost:3000
- `npm run build` - Build for production and copy output to `../build/`
- `npm test` - Run tests in watch mode

## Architecture

### Core Application Flow

The app uses Swiper.js as a wizard/stepper. `App.js` manages all customization state and renders slides in sequence:

1. **HairType** - Select straight/wavy/curly
2. **HairColorBase** - Choose base hair color
3. **HairColorGradient** - Optional gradient color selection
4. **HairColorHighlight** - Optional highlight color selection
5. **HairLength** - Set length in inches or cm
6. **HairDensity** - Select density percentage (100-200%)
7. **HairLace** - Choose lace type (Front Lace, Full Lace, Silk Top with sub-options)
8. **LaceTone + PUedge + BleachedKnots** - Additional customization options (combined in one slide)
9. **HeadMeasurements** - Input head dimensions
10. **AlmostDone** - Review and confirmation with cart submission

### State Management

All state lives in `App.js` and is passed down as props. Key state includes:
- `selectedColors` / `selectedNameColors` / `selectedPrice` - Hair color selections with pricing
- `length` / `isCm` - Hair length with unit toggle
- `Density` - Hair density percentage
- `hairLace` / `selectedCard` / `lastSelectedTab` / `silkTopOption` - Lace configuration
- `selectedOptions` / `selectedOptionsBK` - PU edge and bleached knots options
- `measurements` - Head measurement values

### Component Structure

Each slide component follows a consistent pattern:
- Component file: `src/component-name.js` (kebab-case or PascalCase)
- CSS file: `src/ComponentName.css` (PascalCase)
- Uses `getTranslation(key, fallback)` for all user-facing strings
- Receives state and setters as props from `App.js`

### Responsive Behavior

Some defaults differ between mobile (≤1024px) and desktop:
- `measurements` - Different default values for mobile vs desktop
- `selectedCard` - Pre-selected on mobile, null on desktop

### WordPress/WooCommerce Integration

- Fetches product data from `/wp-json/wc/v3/product-info/801`
- Cart additions via POST to `/wp-json/wc/v3/cart/add-item-with-addons`
- Product ID 801 is hardcoded as the wig product
- `CartHandler.js` validates all required fields and submits addons array to WooCommerce

### Internationalization

Uses `src/utils/translations.js` - calls `window.cwr_api.translations[key]` for WordPress-provided translations, with English fallbacks.

### Price Calculation

Pricing is calculated in `App.js` via `calculateTotalPrice()`. Addons include:
- Length increases: +50 SAR per 2" increment above 14"
- Density: +50/100/150 SAR for 150%/180%/200%
- PU Edge: +30 SAR per edge (front/back)
- Bleached Knots: +30 SAR

### Key Dependencies

- `swiper` - Slide navigation
- `@mui/material` - UI components
- `@wordpress/api-fetch` - WordPress API integration

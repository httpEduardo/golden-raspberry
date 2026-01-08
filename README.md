# Golden Raspberry Awards Dashboard

[![Angular](https://img.shields.io/badge/Angular-19.0.0-red?style=flat&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Overview

This project is a **dashboard** built with **Angular** to display and explore data related to the Golden Raspberry Awards (also known as the "Razzies"). The application provides an interactive interface for analyzing award statistics and movie data.

---

## Features

The dashboard provides the following functionalities:

- **📅 Years with Multiple Winners**: View a list of years that had multiple award winners
- **🏢 Top Studios**: Display studios with the highest number of awards
- **👥 Producer Intervals**: Show producers with the longest and shortest intervals between wins
- **🔍 Movie Search**: Search and filter movies by year
- **📊 Interactive Data Cards**: Explore award statistics through intuitive dashboard cards

---

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js** (version 16 or higher)
- **Angular CLI** (version 19 or higher)
- **npm** (comes with Node.js)
- A code editor such as **Visual Studio Code** (recommended)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/httpEduardo/golden-raspberry.git
   ```

2. **Navigate to Project Directory**
   
   Change into the project folder:
   ```bash
   cd golden-raspberry
   ```

3. **Install Dependencies**
   
   Install all required dependencies using npm:
   ```bash
   npm install
   ```

---

## Development Server

To run the application in development mode:

1. **Start the Development Server**
   
   Run the following command:
   ```bash
   ng serve
   ```
   
   Or use the npm script:
   ```bash
   npm start
   ```

2. **Access the Application**
   
   Open your browser and navigate to:
   ```
   http://localhost:4200
   ```
   
   The application will automatically reload if you change any of the source files.

3. **Explore the Features**
   
   - Access the different dashboard cards to view data about winning years, studios, producers, and movies
   - Use the search functionality to find movies by year

---

## Build

To build the project for production:

```bash
ng build
```

Or:

```bash
npm run build
```

The build artifacts will be stored in the `dist/golden-raspberry` directory. The production build is optimized with:
- AOT (Ahead-of-Time) compilation
- Minification and bundling
- Source map generation disabled
- Output hashing for cache busting

---

## Testing

This project uses Jasmine and Karma for unit testing.

### Run Unit Tests

Execute the test suite:

```bash
ng test
```

Or:

```bash
npm test
```

This will run all unit tests and display the results in your default browser.

### Run Linting

To check code quality and consistency:

```bash
ng lint
```

Or:

```bash
npm run lint
```

---

## Project Structure

The project follows Angular's modular architecture and is organized as follows:

```
golden-raspberry/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/          # Main dashboard component
│   │   │   └── movies-list/        # Movie listing and search component
│   │   ├── services/
│   │   │   └── api.service.ts      # API service (with mock data fallback)
│   │   ├── mocks/
│   │   │   └── mock-data.ts        # Mock data for offline mode
│   │   ├── app-routing.module.ts   # Application routing configuration
│   │   ├── app.module.ts           # Root module configuration
│   │   └── app.component.ts        # Root component
│   ├── assets/                     # Static assets
│   └── styles.css                  # Global styles
├── angular.json                    # Angular CLI configuration
├── package.json                    # Project dependencies
└── README.md                       # Project documentation
```

---

## Important Note

⚠️ **API Status**: The original API endpoint (`https://challenge.outsera.tech/api/movies`) is currently offline and not responding to requests. To ensure the dashboard remains functional, mock data has been implemented directly in the frontend code.

The project architecture has been designed to easily integrate with the API in the future when it becomes available again. The mock data structure follows the same format as the original API responses.

---

## Technologies Used

- **Angular 19** - Frontend framework
- **Angular Material** - UI component library
- **TypeScript** - Programming language
- **RxJS** - Reactive programming library
- **Karma & Jasmine** - Testing framework

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.


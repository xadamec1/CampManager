# Camp Manager

Camp Manager is a simple application designed to manage a summer camp. The project is divided into two parts:

1. **Parents Section:** This section is dedicated to parents, allowing them to register their child, access news from the camp, and more.
2. **Administrator Section:** Reserved for administrators to manage camps. This part is hidden from regular users and can only be accessed via the path `/admin`. Initially, access was protected with a whitelist and Discord login. Note that the whitelist has been commented out, making the admin part accessible to everyone. Ensure proper security measures are in place before deploying.

## Deployment

The project has been successfully deployed on Vercel. However, due to capacity constraints in the PostgreSQL database, the deployment has been migrated back to localhost. The deployment setup for Vercel can be found in the commented-out sections of the `.env` file.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/xadamec1/CampManager.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. ** Setup prisma database with seed: **
   ```bash
   npx prisma migrate dev
   ```
4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

5. **Open the Application in Your Browser:**
   [http://localhost:3000](http://localhost:3000)

## Contribution

The Camp Manager project is maintained by the following contributors:

- Bc. Martin Gargalovič
- Bc. Andrej Čermák
- Bc. Petr Adamec

### Sehari — Event Management

Sehari is a simple event management project with a static frontend (HTML/CSS/JS) and a Node.js/Express backend that stores events in MongoDB using Mongoose.

### Features
- **Create events**: Save event name, date, venue, guest count, and notes
- **Static pages**: Home, create event, view events, budget planner, testimonials, contact, admin, and shop
- **REST API**: Minimal Express API to create events

### Tech Stack
- **Frontend**: HTML, CSS, vanilla JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM

### Project Structure
```
sehari--event-management-main/
  index.html                 # Frontend landing page
  2-createEvent.html         # Create event form
  3-viewEvents.html          # Events listing page (static)
  4-budgetPlanner.html       # Budget planner (static)
  5-testimonials.html        # Testimonials page
  6-contactUs.html           # Contact page
  7-admin.html               # Admin page (static)
  8-eventShop.html           # Shop showcase
  invitaion.html             # Invitation page (typo likely: invitation)
  testimonal.css             # Styles (typo likely: testimonial)
  hstyles.css                # Additional styles
  hscript.js                 # Frontend JavaScript

  app.js                     # Express server with inline Mongoose model & POST /api/events
  index.js                   # Simple Express server that uses db.js
  db.js                      # MongoDB connection via MONGO_URI from .env

  models/Event.js            # Mongoose Event model (alternative to inline model)
  routes/events.js           # Events route (not fully wired in app.js)

  package.json               # Node project manifest
  Images/                    # Static assets
```

### Prerequisites
- Node.js 18+ and npm
- A MongoDB connection string

### Setup
1) Install dependencies
```bash
npm install
```

2) Configure environment variables
Create a `.env` file in the project root with your MongoDB URI:
```bash
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
```

3) Start the backend server
There are two entry points in this repository. Prefer `index.js` (uses `.env`).

- Preferred (uses MONGO_URI from `.env`):
```bash
node index.js
```

- Alternative (contains a hardcoded sample URI in the file):
```bash
node app.js
```

The server runs on `http://localhost:3000`.

4) Open the frontend
- Open `index.html` directly in your browser, or
- Use a static file server / VS Code Live Server for a better local experience.

### API
- **Create Event**
  - Method: `POST`
  - URL: `http://localhost:3000/api/events`
  - Body (JSON):
  ```json
  {
    "eventName": "Wedding",
    "eventDate": "2025-12-20",
    "eventVenue": "Hyderabad",
    "guestCount": 200,
    "eventNotes": "Outdoor ceremony"
  }
  ```
  - Success: `201 Created` with message "Event created successfully!"
  - Failure: `400 Bad Request` with error message

Notes:
- `app.js` defines the route and an inline Event model.
- `models/Event.js` and `routes/events.js` exist but are not yet wired into `app.js`. You can refactor to use them for better structure.

### Development Tips
- Ensure CORS is enabled (already configured in `app.js`).
- Keep secrets in `.env` and avoid committing real credentials.
- If MongoDB connection fails, verify `MONGO_URI` and network access to your cluster.

### Scripts
This project currently has no start script. Optionally add one:
```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```


### Acknowledgements
Images and assets in `Images/` are for demonstration purposes.


const SAVE_KEY = "Rolling_hero_Save";

const SaveManager = {
    // Save the entire state object
    saveGame(gameState) {
        try {
            const data = JSON.stringify(gameState);
            localStorage.setItem(SAVE_KEY, data);
            console.log("Game Saved Successfully");
        } catch (e) {
            console.error("Failed to save game:", e);
        }
    },

    // Load the state object
    loadGame() {
        try {
            const data = localStorage.getItem(SAVE_KEY);
            if (data) {
                console.log("Game Loaded Successfully");
                return JSON.parse(data);
            }
        } catch (e) {
            console.error("Failed to load game:", e);
        }
        return null; // Return null if no save exists
    },

    // Wipe the storage for a fresh run
    resetGame() {
        if (confirm("Are you sure? This will delete all progress, items, and stats!")) {
            localStorage.removeItem(SAVE_KEY);
            location.reload(); // Refresh the page to trigger a fresh init
        }
    }
};
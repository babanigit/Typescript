// index.ts

import connectMongoDb from "./connections/MonoDbConnection";
import app from "./app";

const port = process.env.PORT;

const startServer = async () => {
  try {
    await connectMongoDb(); // Establish the database connection

    app.listen(port, () => {
      console.log(
        `[server]: Hello, Server is running at http://localhost:${port}`
      );
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();

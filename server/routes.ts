import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Course } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all courses endpoint
  app.get("/api/courses", async (req, res) => {
    try {
      const courses: Course[] = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  // Get course by ID endpoint
  app.get("/api/courses/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const course = await storage.getCourse(id);
      
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      res.json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

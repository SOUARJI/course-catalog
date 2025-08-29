import { type User, type InsertUser, type Course, type InsertCourse } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Map<string, Course>;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    
    // Initialize with sample course data
    this.initializeSampleCourses();
  }

  private initializeSampleCourses() {
    const sampleCourses: Course[] = [
      {
        id: "1",
        title: "C++ Types and EDIReplay",
        description: "Covers Godbolt unsigned vs signed types and EDIReplay on P1P (MAIN over ALT).",
        thumbnailUrl: "/thumbnails/placeholder.jpg",
        videoUrl: "https://amadeusworkplace-my.sharepoint.com/:v:/r/personal/alexandre_marc_amadeus_com/Documents/Recordings/%5BDFA%5D%20Knowledge%20Sharing%20OR%20Technical%20forum-20240625_161005-Meeting%20Recording.mp4?csf=1&web=1&e=Krur5H&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        category: "C++ Programming",
        duration: "Unknown",
        tags: ["C++", "Godbolt", "EDIReplay", "P1P"],
        date: "2024-06-25"
      },
      {
        id: "2",
        title: "Regex, FqParm, and Optional",
        description: "Discusses ssp::regex vs std::regex, FqParm ON/MIG/OFF, and AssignIfExists in ssp::optional.hpp.",
        thumbnailUrl: "/thumbnails/placeholder.jpg",
        videoUrl: "https://amadeusworkplace-my.sharepoint.com/:v:/r/personal/davide_reale_amadeus_com/Documents/Recordings/%5BDFA%5D%20Knowledge%20Sharing%20OR%20Technical%20forum-20240702_160916-Meeting%20Recording.mp4?csf=1&web=1&e=iT9Mqg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        category: "C++ Programming",
        duration: "Unknown",
        tags: ["Regex", "FqParm", "ssp::optional", "C++"],
        date: "2024-07-02"
      },
      {
        id: "3",
        title: "FareXpert, Regex Erratum, and Tools",
        description: "Covers FareXpert testing on .NET (Linux issues), std::regex/ssp::regex erratum, cpp_tools build_repo commands, CppCheck 2.13, and parallelization with edidbg.",
        thumbnailUrl: "/thumbnails/placeholder.jpg",
        videoUrl: "https://amadeusworkplace-my.sharepoint.com/:v:/r/personal/davide_reale_amadeus_com/Documents/Recordings/%5BDFA%5D%20Knowledge%20Sharing%20OR%20Technical%20forum-20240716_160920-Meeting%20Recording.mp4?csf=1&web=1&e=hSdRe9&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyAWxAcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        category: "Development Tools",
        duration: "Unknown",
        tags: [".NET", "FareXpert", "Regex", "cpp_tools", "CppCheck", "edidbg"],
        date: "2024-07-16"
      },
      {
        id: "4",
        title: "Onboarding, Build Tools, and C++",
        description: "Introduces newcomer Romain, discusses build_repo --offline option removal, Devbox, (void) to () in C++, MLS compilation issues, EmAllocator, and IDE tools.",
        thumbnailUrl: "/thumbnails/placeholder.jpg",
        videoUrl: "https://amadeusworkplace-my.sharepoint.com/:v:/r/personal/davide_reale_amadeus_com/Documents/Recordings/%5BDFA%5D%20Knowledge%20Sharing%20OR%20Technical%20forum-20240723_161432-Meeting%20Recording.mp4?csf=1&web=1&e=VEHBbQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxAcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyAWxAcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        category: "Team Onboarding",
        duration: "Unknown",
        tags: ["Onboarding", "build_repo", "Devbox", "C++", "MLS", "EmAllocator", "IDE"],
        date: "2024-07-23"
      },
      {
        id: "5",
        title: "Cloud and C++ Advanced Topics",
        description: "Covers cloud status, C++ if with declarations, std::optional, span/lifetime, and #ifdef DEBUG techniques.",
        thumbnailUrl: "/thumbnails/placeholder.jpg",
        videoUrl: "https://amadeusworkplace-my.sharepoint.com/:v:/r/personal/davide_reale_amadeus_com/Documents/Recordings/%5BDFA%5D%20Knowledge%20Sharing%20OR%20Technical%20forum-20240730_160805-Meeting%20Recording.mp4?csf=1&web=1&e=5lFcAI&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyAWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyAWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        category: "C++ Programming",
        duration: "Unknown",
        tags: ["Cloud", "C++", "Optional", "Span", "Debugging"],
        date: "2024-07-30"
      }
    ];

    sampleCourses.forEach(course => {
      this.courses.set(course.id, course);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { ...insertCourse, id };
    this.courses.set(id, course);
    return course;
  }
}

export const storage = new MemStorage();

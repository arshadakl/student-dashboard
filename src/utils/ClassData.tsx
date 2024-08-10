import moment from "moment";

export interface ClassesData {
    id: number;
    className: string;
    staffName: string;
    staffImage: string;
    isLive: boolean;
    timeLeft: moment.Duration;
    isBooked: boolean;
    date: moment.Moment;
  }


  export const initialClassesData: ClassesData[] = [
    {
      id: 1,
      className: "UI/UX Designing",
      staffName: "Suriya R",
      staffImage: "avatar4.jpg",
      isLive: true,
      timeLeft: moment.duration(54, "minutes"),
      isBooked: true,
      date: moment(),
    },
    {
      id: 2,
      className: "Graphic Designing",
      staffName: "Priya Sweety",
      staffImage: "avatar.jpg",
      isLive: false,
      timeLeft: moment.duration(2, "hours").add(40, "minutes"),
      isBooked: true,
      date: moment().add(1, "day").set({ hour: 18, minute: 0 }),
    },
    {
      id: 3,
      className: "Basics of Frontend",
      staffName: "Courtney Henry",
      staffImage: "avatar2.jpg",
      isLive: false,
      timeLeft: moment.duration(3, "days"),
      isBooked: true,
      date: moment().add(3, "days").set({ hour: 16, minute: 0 }),
    },
    {
      id: 4,
      className: "JavaScript",
      staffName: "Michael Johnson",
      staffImage: "avatar3.jpg",
      isLive: false,
      timeLeft: moment.duration(5, "days"),
      isBooked: false,
      date: moment().add(5, "days").set({ hour: 14, minute: 0 }),
    },
    {
      id: 5,
      className: "React Fundamentals",
      staffName: "Emily Chen",
      staffImage: "avatar4.jpg",
      isLive: false,
      timeLeft: moment.duration(1, "day").add(6, "hours"),
      isBooked: true,
      date: moment().add(1, "day").add(6, "hours").set({ minute: 0 }),
    },
    {
      id: 6,
      className: "Data Visualization",
      staffName: "Alex Thompson",
      staffImage: "avatar.jpg",
      isLive: false,
      timeLeft: moment.duration(4, "days"),
      isBooked: false,
      date: moment().add(4, "days").set({ hour: 10, minute: 0 }),
    },
    {
      id: 7,
      className: "Mobile App Design",
      staffName: "Sophie Garcia",
      staffImage: "avatar4.jpg",
      isLive: true,
      timeLeft: moment.duration(28, "minutes"),
      isBooked: true,
      date: moment(),
    },
    {
      id: 8,
      className: "API Development",
      staffName: "David Lee",
      staffImage: "avatar2.jpg",
      isLive: false,
      timeLeft: moment.duration(2, "days").add(3, "hours"),
      isBooked: true,
      date: moment().add(2, "days").add(3, "hours").set({ minute: 0 }),
    },
    {
      id: 9,
      className: "Database Design",
      staffName: "Rachel Kim",
      staffImage: "avatar3.jpg",
      isLive: false,
      timeLeft: moment.duration(6, "days"),
      isBooked: false,
      date: moment().add(6, "days").set({ hour: 13, minute: 0 }),
    },
    {
      id: 10,
      className: "Web Design",
      staffName: "Mark Wilson",
      staffImage: "avatar4.jpg",
      isLive: false,
      timeLeft: moment.duration(12, "hours"),
      isBooked: true,
      date: moment().add(12, "hours").set({ minute: 0 }),
    },
    {
        id: 11,
        className: "Advanced CSS",
        staffName: "Linda Brown",
        staffImage: "avatar2.jpg",
        isLive: false,
        timeLeft: moment.duration(1, "day").add(2, "hours"),
        isBooked: false,
        date: moment().add(1, "day").add(2, "hours").set({ hour: 11, minute: 0 }),
      },
      {
        id: 12,
        className: "Introduction to React",
        staffName: "James Smith",
        staffImage: "avatar3.jpg",
        isLive: true,
        timeLeft: moment.duration(10, "minutes"),
        isBooked: true,
        date: moment(),
      },
      {
        id: 13,
        className: "Backend Development",
        staffName: "Emma Johnson",
        staffImage: "avatar.jpg",
        isLive: false,
        timeLeft: moment.duration(3, "days").add(4, "hours"),
        isBooked: true,
        date: moment().add(3, "days").add(4, "hours").set({ minute: 30 }),
      },
      {
        id: 14,
        className: "UI/UX Prototyping",
        staffName: "John Davis",
        staffImage: "avatar4.jpg",
        isLive: false,
        timeLeft: moment.duration(2, "days").add(6, "hours"),
        isBooked: false,
        date: moment().add(2, "days").add(6, "hours").set({ hour: 15, minute: 0 }),
      },
      {
        id: 15,
        className: "JavaScript Advanced",
        staffName: "Olivia Martinez",
        staffImage: "avatar3.jpg",
        isLive: true,
        timeLeft: moment.duration(5, "minutes"),
        isBooked: true,
        date: moment(),
      },
      {
        id: 16,
        className: "Full Stack Development",
        staffName: "Liam Wilson",
        staffImage: "avatar4.jpg",
        isLive: false,
        timeLeft: moment.duration(7, "days").add(3, "hours"),
        isBooked: false,
        date: moment().add(7, "days").add(3, "hours").set({ hour: 12, minute: 0 }),
      },
      {
        id: 17,
        className: "Intro to SQL",
        staffName: "Sophia Clark",
        staffImage: "avatar2.jpg",
        isLive: false,
        timeLeft: moment.duration(4, "hours"),
        isBooked: true,
        date: moment().add(4, "hours").set({ minute: 0 }),
      },
      {
        id: 18,
        className: "Data Science Basics",
        staffName: "Benjamin Lewis",
        staffImage: "avatar.jpg",
        isLive: true,
        timeLeft: moment.duration(1, "hour"),
        isBooked: false,
        date: moment(),
      },
      {
        id: 19,
        className: "Cloud Computing",
        staffName: "Mia Young",
        staffImage: "avatar3.jpg",
        isLive: false,
        timeLeft: moment.duration(5, "days"),
        isBooked: true,
        date: moment().add(5, "days").set({ hour: 9, minute: 0 }),
      },
      {
        id: 20,
        className: "Modern JavaScript",
        staffName: "Ethan Harris",
        staffImage: "avatar4.jpg",
        isLive: false,
        timeLeft: moment.duration(2, "days").add(1, "hour"),
        isBooked: false,
        date: moment().add(2, "days").add(1, "hour").set({ minute: 0 }),
      },
  ];


  export interface AssignmentsInter {
    title: string;
    deadline: string;
  }
  
  export const AssignmentsData: AssignmentsInter[] = [
    {
      title: "Logo design for an Airline",
      deadline: "20/06/2024",
    },
    {
      title: "UI/UX Design - Ecommerce Mobile app",
      deadline: "22/06/2024",
    },
    {
      title: "User Persona and User Journey",
      deadline: "24/06/2024",
    },
    {
      title: "Typefaces",
      deadline: "28/06/2024",
    },
  ];
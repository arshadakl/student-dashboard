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
      staffImage: "avatar.jpg",
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
      staffImage: "avatar.jpg",
      isLive: false,
      timeLeft: moment.duration(3, "days"),
      isBooked: true,
      date: moment().add(3, "days").set({ hour: 16, minute: 0 }),
    },
    {
      id: 4,
      className: "JavaScript",
      staffName: "Michael Johnson",
      staffImage: "avatar.jpg",
      isLive: false,
      timeLeft: moment.duration(5, "days"),
      isBooked: false,
      date: moment().add(5, "days").set({ hour: 14, minute: 0 }),
    },
    {
      id: 5,
      className: "React Fundamentals",
      staffName: "Emily Chen",
      staffImage: "avatar.jpg",
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
      staffImage: "avatar.jpg",
      isLive: true,
      timeLeft: moment.duration(28, "minutes"),
      isBooked: true,
      date: moment(),
    },
    {
      id: 8,
      className: "API Development",
      staffName: "David Lee",
      staffImage: "avatar.jpg",
      isLive: false,
      timeLeft: moment.duration(2, "days").add(3, "hours"),
      isBooked: true,
      date: moment().add(2, "days").add(3, "hours").set({ minute: 0 }),
    },
    {
      id: 9,
      className: "Database Design",
      staffName: "Rachel Kim",
      staffImage: "avatar.jpg",
      isLive: false,
      timeLeft: moment.duration(6, "days"),
      isBooked: false,
      date: moment().add(6, "days").set({ hour: 13, minute: 0 }),
    },
    {
      id: 10,
      className: "Web Design",
      staffName: "Mark Wilson",
      staffImage: "avatar.jpg",
      isLive: false,
      timeLeft: moment.duration(12, "hours"),
      isBooked: true,
      date: moment().add(12, "hours").set({ minute: 0 }),
    },
    // Additional classes...
  ];
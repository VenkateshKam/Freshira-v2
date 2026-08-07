export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarSeed: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Kulkarni",
    role: "Retail Customer, Vasai",
    rating: 5,
    text: "The produce quality is consistently fresh and the delivery is always on time. Freshira has become our default choice for weekly groceries.",
    avatarSeed: "ananya-kulkarni",
  },
  {
    id: 2,
    name: "Rajesh Mehta",
    role: "Restaurant Owner, Mumbai",
    rating: 5,
    text: "As a restaurant, we need dependable sourcing. Freshira's B2B supply has been reliable in both quality and timing.",
    avatarSeed: "rajesh-mehta",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Home Chef, Palghar",
    rating: 4,
    text: "Loved the range of organic products and spices. Packaging is neat and the produce stays fresh for days.",
    avatarSeed: "priya-nair",
  },
  {
    id: 4,
    name: "Suresh Patil",
    role: "Kirana Store Owner",
    rating: 5,
    text: "Wholesale trading with Freshira has simplified our stock planning. Good pricing and consistent supply.",
    avatarSeed: "suresh-patil",
  },
  {
    id: 5,
    name: "Meera Iyer",
    role: "Retail Customer, Thane",
    rating: 5,
    text: "Their farm-to-home concept genuinely shows in the quality of vegetables and fruits we receive every week.",
    avatarSeed: "meera-iyer",
  },
  {
    id: 6,
    name: "Vikram Shah",
    role: "Procurement Manager, Hospitality",
    rating: 4,
    text: "Professional team, transparent processes, and dependable logistics for our institutional requirements.",
    avatarSeed: "vikram-shah",
  },
];

import harvard from "@/public/Course_Completions/Harvard/Harvard_CS50x.webp";
import harvard_institute from "@/public/Course_Completions/Harvard/Harvard_Institute_Image.svg";

import aws from "@/public/Course_Completions/AWS/AWS.webp";
import aws_institute from "@/public/Course_Completions/AWS/AWS_Institute_Image.svg";

const courseCompletions = [
  {
    name: "Harvard CS50x: Introduction to Computer Science",
    description:
      "The course taught me a lot of the fundamentals of programming and low-level operations of a programming language. There was a big module on C where I learnt low-level concepts like memory management, data structures like hash tables, what actually are Arrays and Lists etc. This is important because I started programming with Python which abstracts a way all these fundamentals, but it's important to know these.",
    url_shortened: "harvard",
    date: "Nov 2022",
    link: "/courses/harvard",
    instituteImage: harvard_institute,
    imageOfCert: harvard,
  },
  {
    name: "AWS Data Science Accelerator Program",
    description: "Test, test, test, test, test, test.",
    url_shortened: "aws",
    date: "Nov 2022 - Aug 2023",
    link: "/courses/aws",
    instituteImage: aws_institute,
    imageOfCert: aws,
  },
];

export default courseCompletions;
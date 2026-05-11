import project1 from '../assets/dcss.png';
import project2 from '../assets/avss.png';
import project3 from '../assets/wess.png';

export const projects = [
  {
    id: 1,
    title: "Desmos Clone",
    description: "A simple and basic clone of Desmos, using pure Java",
    image: project1,
    tags: ["Java", "Maths", "Swing GUI"],
    links: {
      github: "https://github.com/itssiddharthXD/DesmosClone",
      demo: "https://github.com/itssiddharthXD/DesmosClone"
    }
  },
  {
    id: 2,
    title: "Audio Visualizer",
    description: "An audio visualizer completely made with Java. Play your favourite music and watch it dance to the beats. Only supports .wav files tho :(",
    image: project2,
    tags: ["Audio", "Java", ".wav", "Logic"],
    links: {
      github: "https://github.com/itssiddharthXD",
      demo: "https://github.com/itssiddharthXD"
    }
  },
  {
    id: 3,
    title: "Wave: Evolved",
    description: "My own evolved version of the first game 'Wave', which I created during lockdown by watching a Youtube tutorial. Now, after gaining more programming skills, I have created this in my own unique way.",
    image: project3,
    tags: ["Java", "Game", "Physics", "Multi-Level"],
    links: {
      github: "https://github.com/itssiddharthXD",
      demo: "https://github.com/itssiddharthXD"
    }
  }
];

import project1 from '../assets/pgss.png';
import project2 from '../assets/asvss.png';
import project3 from '../assets/wess.png';

export const projects = [
  {
    id: 1,
    title: "Planet Guardian",
    description: "A retro styled 2D space game, in which you protect a planet from asteroids",
    image: project1,
    tags: ["Java", "Logic", "Swing GUI", "Space Game", "Trigonometry"],
    links: {
      github: "https://github.com/itssiddharthXD/Planet-Guardian",
      demo: "https://github.com/itssiddharthXD/",
      href: "/assets/PlanetGuardian.rar",
      download: "PlanetGuardian.rar"
    }
  },
  {
    id: 2,
    title: "A-Star Pathfinder",
    description: "A* algorithm is a pathfinding algorithm. In a randomly generated maze, it will find the correct exit by traversing through every possible routes, which works on the heuristic data",
    image: project2,
    tags: ["Pathfinder", "Java", "Maze", "Logic", "A-Star Algorithm"],
    links: {
      github: "https://github.com/itssiddharthXD/AStarPathfinder",
      demo: "https://github.com/itssiddharthXD/AStarPathfinder",
      href: "/assets/AStarPathfinder.rar",
      download: "AStarPathfinder.rar"
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
      demo: "https://github.com/itssiddharthXD",
      href: "/assets/WaveEvolved.rar",
      download: "WaveEvolved.rar"
    }
  }
];

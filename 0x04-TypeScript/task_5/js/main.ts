// Define interfaces
interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

// Define functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCreditsSum",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCreditsSum",
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: "MajorSubject1" };
const majorSubject2: MajorCredits = { credits: 4, brand: "MajorSubject2" };

const minorSubject1: MinorCredits = { credits: 2, brand: "MinorSubject1" };
const minorSubject2: MinorCredits = { credits: 1, brand: "MinorSubject2" };

const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);

console.log("Sum of Major Credits:", resultMajor);
console.log("Sum of Minor Credits:", resultMinor);
